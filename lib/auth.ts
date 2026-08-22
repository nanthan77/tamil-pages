import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { findUserByEmail, findUserById, saveUser } from "./store";
import type { SessionUser, User } from "./types";

function getSessionSecret() {
  const secret = process.env.TAMILPAGES_SESSION_SECRET || process.env.TAMPAGES_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("TAMILPAGES_SESSION_SECRET must be set to a strong value before using legacy session routes.");
  }
  return secret;
}

function hashPassword(password: string, salt: string) {
  return scryptSync(password, salt, 32).toString("hex");
}

export function createUser(input: {
  name: string;
  email: string;
  phone: string;
  password: string;
}): User {
  const salt = randomBytes(16).toString("hex");
  const user: User = {
    id: `usr-${randomBytes(8).toString("hex")}`,
    name: input.name.trim(),
    email: input.email.trim().toLowerCase(),
    phone: input.phone.trim(),
    passwordHash: hashPassword(input.password, salt),
    passwordSalt: salt,
    createdAt: new Date().toISOString(),
  };
  saveUser(user);
  return user;
}

export function verifyPassword(user: User, password: string) {
  const hash = hashPassword(password, user.passwordSalt);
  const a = Buffer.from(hash, "hex");
  const b = Buffer.from(user.passwordHash, "hex");
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

function sign(payload: object) {
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = createHmac("sha256", getSessionSecret()).update(body).digest("base64url");
  return `${body}.${sig}`;
}

function unsign(token: string): { uid: string; exp: number } | null {
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  const expect = createHmac("sha256", getSessionSecret()).update(body).digest("base64url");
  const a = Buffer.from(sig);
  const b = Buffer.from(expect);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  try {
    const data = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
    if (!data.uid || !data.exp || data.exp < Date.now()) return null;
    return data;
  } catch {
    return null;
  }
}

export async function setSession(userId: string) {
  const token = sign({ uid: userId, exp: Date.now() + 1000 * 60 * 60 * 24 * 30 });
  const jar = await cookies();
  jar.set("tp_session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function clearSession() {
  const jar = await cookies();
  jar.delete("tp_session");
}

export async function getSessionUser(): Promise<SessionUser | null> {
  try {
    const jar = await cookies();
    const token = jar.get("tp_session")?.value;
    if (!token) return null;
    const data = unsign(token);
    if (!data) return null;
    const user = findUserById(data.uid);
    if (!user) return null;
    return { id: user.id, name: user.name, email: user.email, phone: user.phone };
  } catch {
    return null;
  }
}

export function authenticate(email: string, password: string) {
  const user = findUserByEmail(email);
  if (!user || !verifyPassword(user, password)) return null;
  return user;
}
