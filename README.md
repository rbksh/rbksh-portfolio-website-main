# Shesh Shiromani – Portfolio

Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Files
- `index.html` – page shell
- `style.css` – all styling (colours are the CSS variables at the top)
- `script.js` – all content (projects, papers, experience, honors, gear are plain arrays near the top, in `P` and `G`) and all the effects
- `assets/img` – your photos, `assets/pdf` – CV and papers

## Run locally
Open `index.html` directly, or serve the folder (nicer):

    python3 -m http.server 8000      # then open http://localhost:8000
    # or: npx serve

## Things to edit
- GitHub links: `P.projects` in `script.js` (5th item of each project; `null` shows "Repo link coming soon")
- Contact email: `L.em` at the top of `script.js`
- Blog posts: the `blog` page in `V` in `script.js`

## Deploy to Vercel
1. Push this folder to a GitHub repo (below).
2. vercel.com → Add New → Project → import the repo.
3. Framework Preset: **Other**, leave build command and output directory empty, then Deploy.
Or with the CLI: `npx vercel` inside this folder.

## Push to GitHub
    git init
    git add .
    git commit -m "Initial portfolio"
    git branch -M main
    git remote add origin https://github.com/rbksh/<repo-name>.git
    git push -u origin main
