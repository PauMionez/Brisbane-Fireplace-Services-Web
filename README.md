# Brisbane Fireplace Services

Marketing site for Brisbane Fireplace Services. Next.js 16 (App Router), built
as a **static export** and served by Apache/LiteSpeed on cPanel — there is no
Node.js runtime in production.

## Requirements

- **Node.js 20.9 or newer** (`node -v` to check). Next 16 will not build on older versions.
- npm 10+

## Local development

```bash
npm ci
```

```bash
npm run dev
```

Then open http://localhost:3000.

Use `npm ci` rather than `npm install` — it installs the exact versions in
`package-lock.json`, which is what the site was tested against.

## Building for production

```bash
npm run build
```

This writes a complete static site to `out/`. There is no server to run
afterwards; `out/` *is* the website.

## Deploying to cPanel

1. Run `npm run build`.
2. Upload **the contents of `out/`** into `public_html` — not the `out` folder
   itself. `public_html/index.html` should exist when you're done.
3. **Make sure `.htaccess` gets uploaded.** It sits inside `out/` and starts
   with a dot, so FTP clients and file managers hide it by default. Turn on
   "show hidden files" and confirm `public_html/.htaccess` is there.

That last step matters more than it looks. `.htaccess` carries the 301
redirects from the old WordPress URLs — without it the pages Google already
ranks will 404 and those rankings are lost. It also points Apache at the
custom 404 page.

### Before the first deploy: check the domain

`lib/site-config.ts` has a single `url` field:

```ts
url: "https://www.brisbanefireplaceservices.com.au",
```

Every canonical tag, the sitemap, robots.txt and the structured data are built
from it. If the live site ends up on a different domain — or on `http://`, or
without the `www` — change this one line and rebuild. Leaving it pointing at
the wrong host tells Google the real pages are duplicates of a site that
isn't there.

### After the first deploy

- Add the site to [Google Search Console](https://search.google.com/search-console)
  and submit `/sitemap.xml`.
- Check a couple of pages in the
  [Rich Results Test](https://search.google.com/test/rich-results) — the FAQ
  page should report FAQ markup, service and suburb pages should report
  breadcrumbs.

## How the content is organised

Most copy lives in plain data files, so adding a suburb or a question does not
mean touching a component:

| What | Where |
| --- | --- |
| Business name, phone, email, hours, domain | `lib/site-config.ts` |
| Suburbs and regions (one page each) | `lib/data/service-areas.ts` |
| Services | `lib/data/services.ts` |
| FAQ questions | `lib/data/faq.ts` |
| Testimonials | `lib/data/testimonials.ts` |
| Titles, descriptions, structured data | `lib/seo.ts` |

Adding a suburb to `lib/data/service-areas.ts` automatically creates its page,
adds it to the sitemap, and lists it on `/service-areas` — no other edits
needed.

`app/sitemap.ts` is the one exception: brand-new **top-level** routes have to
be added to the `routes` array there by hand, or Google won't be told about
them.

## Checks before pushing

```bash
npm run lint
```

```bash
npx tsc --noEmit
```
