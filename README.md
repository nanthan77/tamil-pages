# tamilpages.ca

Canada Tamil business directory — same dark navy + emerald look as [slpages.lk](https://slpages.lk/), rebuilt for the Tamil diaspora in Toronto and across Canada.

## What you get

- Search by keyword, category, and city
- 360+ starter listings (Tamil / Sri Lankan / South Indian businesses collected from public Canadian web pages)
- Free account + **post a listing immediately** (no admin wait)
- Call, WhatsApp, and Google Maps on each profile
- Scarborough, Markham, Ajax, Toronto, Montreal, Vancouver, Calgary, and more

This is an independent app. It is **not** affiliated with slpages.lk and does **not** copy their Sri Lanka vendor database.

## Run it

```bash
cd tamilpages
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

1. Browse the home page and directory
2. Create Account → Post your business (goes live right away)
3. Sign in later from Dashboard to remove a listing

## Refresh public seed listings

From the project root:

```bash
python3 scripts/crawl_canada_tamil.py
```

Then re-filter if you want a tighter Tamil-only set. Raw crawl output lands in `data/seed-businesses.json`; the app reads `tamilpages/data/seed-businesses.json`.

## Money

- **Basic listing** — free for the first year (until 16 August 2027)
- **Featured / Spotlight / ads** — paid now ($29 / $79 / from $149 per month)

See `/pricing` and `/advertise`.

## Google

Every listing, city, and city+category page has a public URL and is listed in `/sitemap.xml` and `/robots.txt`. After you deploy:

1. Add the site in [Google Search Console](https://search.google.com/search-console)
2. Submit `https://your-domain/sitemap.xml`
3. Set `NEXT_PUBLIC_SITE_URL` to your live domain

## Stack

Next.js 15 · TypeScript · Tailwind · file-based JSON store (no database required)
