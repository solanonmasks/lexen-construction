# Lexen Construction website

The website for Lexen Construction, a family-owned renovation company in
Vancouver and the Lower Mainland. It was built from a design handoff using
[Astro](https://astro.build), which turns the files in `src/` into plain HTML
pages.

## Pages

| Address     | File                      |
| ----------- | ------------------------- |
| `/`         | `src/pages/index.astro`   |
| `/about`    | `src/pages/about.astro`   |
| `/projects` | `src/pages/projects.astro`|
| `/contact`  | `src/pages/contact.astro` |

## Where things live

- `src/layouts/Base.astro`: the parts every page shares (fonts, header, menu, footer).
- `src/styles/global.css`: colours, fonts and shared styles. The colours are at the top.
- `src/data/`: the text lists (projects, team, values, phone and email). Edit these to change copy.
- `public/lexen/`: the logo and photos.

## Run it on your computer

You need [Node.js](https://nodejs.org) (version 20 or newer) installed.

```bash
npm install      # first time only: downloads Astro
npm run dev      # starts the site at http://localhost:4321
```

Edit a file, save it, and the browser updates on its own. Press `Ctrl + C` to stop.

Other commands:

```bash
npm run build    # builds the finished site into the dist/ folder
npm run preview  # shows that built site locally
```

## Put it online with Vercel

1. Push this repository to GitHub.
2. Sign in at [vercel.com](https://vercel.com), click **Add New → Project**, and pick the repository.
3. Vercel detects Astro on its own. Leave the settings as they are and click **Deploy**.

After that, every push to the `main` branch updates the live site.

## Confirm before launch

- [ ] Get the project gallery photos (11 of the 13 projects have no photo yet).
      Then turn the Projects page into a photo grid where each project opens its own gallery.
      See the note in `src/data/projects.js`.
- [ ] Connect the contact form to email. It currently only shows the thank-you
      message and sends nothing. See the TODO in `src/pages/contact.astro`.
- [ ] Check the footer year. It says © 2026; their current site says © 2022.
