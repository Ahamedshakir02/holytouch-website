# Project photos

Drop your own project photos in this folder to replace the temporary Unsplash images
used on the home page "Proof of work" section.

## How to swap a photo

1. Add an image file here. Suggested names for the 5 home cards:

   | File name | Card | Category |
   |---|---|---|
   | `aranya-villa.jpg` | Card 1 (large) | Residential |
   | `lakeside-residence.jpg` | Card 2 | Residential |
   | `meridian-offices.jpg` | Card 3 | Commercial |
   | `terra-retail.jpg` | Card 4 | Commercial |
   | `noor-interior.jpg` | Card 5 | Interior |

   - Use **landscape** photos, ~1200px wide or larger.
   - `.jpg`, `.webp`, or `.png` all work.
   - Make sure the photo matches the card's category (residential card → a home, etc.).

2. Open `src/data/projects.js` and find that card (each of the first 5 items has a
   `// home card · … · swap → '/images/projects/<name>.jpg'` comment).

3. Change its `image:` line from the Unsplash helper to your file, e.g.:

   ```js
   // before
   image: img('1523217582562-09d0def993a6'),
   // after
   image: '/images/projects/aranya-villa.jpg',
   ```

Files in `public/` are served from the site root, so `/images/projects/aranya-villa.jpg`
points to `public/images/projects/aranya-villa.jpg`. No other code changes are needed.

> The full `/projects` gallery is currently turned off (`PORTFOLIO_LIVE = false` in
> `src/pages/Projects.jsx`). When you have enough real photos, set it to `true` and add
> matching images for the rest of the projects the same way.
