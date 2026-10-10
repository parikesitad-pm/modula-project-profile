# MODULA Interactive Developer Profile

A lightweight static website for GitHub Pages with HTML, CSS and vanilla JavaScript; no build step or dependencies.

## Features

- Animated particles and hero terminal typing
- Project filters and accessible details dialog
- Command palette via Ctrl/Cmd + K with keyboard navigation
- Scroll reveals, progress bar, subtle magnetic link interactions
- Responsive layout and reduced-motion preference support
- Six MODULA projects with source links, plus two other builds

## Enable GitHub Pages

1. Open repository **Settings → Pages**.
2. Choose **Deploy from a branch** under Build and deployment.
3. Set branch to **main**, directory to **/docs**, click **Save**.
4. GitHub Pages will publish at https://parikesitad-pm.github.io/modula-project-profile/ after a successful deployment.

Don't assume the URL is live until the Pages deployment succeeds.

## Run locally

From the repository root:

~~~bash
python -m http.server 8080 --directory docs
~~~

Visit http://localhost:8080.

The site's README is in the repo root; editing it does not require rebuilding the website.

*crafted with <3 by parikesitad-pm — a MODULA project*
