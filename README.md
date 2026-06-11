# Porthos — Portfolio

A narrative scroll portfolio: a decade of design work (2015–2026), told in order,
from first painting to load-tested furniture. Pure HTML/CSS/JS — no build step,
no dependencies, free hosting on GitHub Pages.

## Get it live (one-time setup, ~5 minutes)

1. Go to github.com → **New repository**
2. Name it **`iamporthos.github.io`** (exactly that — it makes your URL clean).
   Set it to Public. Create.
3. Click **uploading an existing file** (or Add file → Upload files) and drag in
   everything from this folder: `index.html`, `project.html`, the `css/`, `js/`,
   and `images/` folders. Commit.
4. Go to **Settings → Pages**. Under "Build and deployment," Source should be
   **Deploy from a branch**, Branch: **main**, folder: **/ (root)**. Save.
5. Wait a minute or two. Your site is live at **https://iamporthos.github.io**

(If you'd rather use a different repo name, that works too — the site just lives
at `https://iamporthos.github.io/repo-name/` instead.)

## Adding your images

Drop image files into the `images/` folder (you can drag-and-drop directly on
github.com). The exact filenames you need are listed in `images/README.md`.
Until a file exists, the site shows a labeled placeholder — nothing looks broken.

## Editing content

All text lives in **`js/projects.js`** — titles, years, summaries, case study
copy, spec tables, and the vault blurbs. Edit that one file to change anything.
You never need to touch the HTML or CSS to update content.

To reorder the timeline, reorder the entries in the `PROJECTS` array.
To add a project, copy an existing entry and change its fields.

## The Vault

- **Default password: `heartandhumor`** (case-insensitive)
- To change it: open any browser console (F12) and run

  ```js
  crypto.subtle.digest("SHA-256", new TextEncoder().encode("yournewpassword"))
    .then(b => console.log([...new Uint8Array(b)].map(x => x.toString(16).padStart(2,"0")).join("")))
  ```

  then paste the printed hash into `VAULT_HASH` near the bottom of `js/main.js`.
  Use a lowercase password (input is lowercased before checking).

- **Honest limitation:** GitHub Pages is a static host, so this lock is
  client-side. It stops casual visitors, but the vault content in
  `js/projects.js` is technically readable by anyone who inspects the source.
  Treat it as a velvet rope, not a safe — don't put anything truly confidential
  in it.

## Contact links

Update your real email in `index.html` (search for `hello@example.com` — it
appears twice, in the href and the link text).

## Customizing the look

Colors, fonts, and spacing live at the top of `css/style.css` in the `:root`
block. The palette is the forest green / cream / gold system:
`#1B3A2A` · `#E8DFB8` · `#C9A84C`.
