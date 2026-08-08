# Niladree Radiant — Website

Static site (plain HTML/CSS/JS), ready for GitHub Pages. No build step needed.

## 1. Connect the contact forms to Formspree

Two forms currently point to a placeholder endpoint:
- `tour-detail.html` — the itinerary-unlock form
- `contact.html` — the general enquiry form

To connect them:
1. Go to https://formspree.io and sign up (free tier is fine to start).
2. Create a new form. Formspree gives you an endpoint like `https://formspree.io/f/abcd1234`.
3. In **both** files, find this line:
   ```html
   <form id="gate-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   and
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your real Formspree ID. You can use the **same** form ID for both — every submission includes a hidden `form_type` field (`"Itinerary unlock request"` vs `"General contact enquiry"`) plus, on the tour page, which tour was viewed — so you can tell them apart in your Formspree inbox. Or use two separate Formspree forms if you'd rather they land completely separately.
4. Formspree will ask you to confirm your email on the first real submission — do a test submission from the live site once it's published.

That's it — no server code needed, Formspree emails you each submission (and keeps a dashboard log too).

## 2. Replace dummy content

- **Tours**: all tour info lives in `js/tours-data.js` — names, itineraries, pricing, inclusions/exclusions. Edit that one file and every page (home, tours, tour-detail) updates automatically.
- **Photos**: every image is currently a colored placeholder block (labeled with what should go there, e.g. "Photo: Char Dham Yatra"). To swap in a real photo:
  1. Add your image files to the `assets/` folder.
  2. Replace the relevant `<div class="ph-image ...">` block with an `<img src="assets/your-photo.jpg" alt="...">` — keep the surrounding `<div class="card">` / `<figure>` wrapper so spacing stays consistent.
- **Team, about text, address, phone**: edit directly in `about.html` and `contact.html`.
- **Logo**: currently just the wordmark "Niladree Radiant" in the header (`<a class="brand">` in every page). Swap in an `<img>` there if you get a logo designed.

## 3. Publish on GitHub Pages

1. Create a new GitHub repo, push this folder's contents to it.
2. In the repo: **Settings → Pages → Source** → select the branch (usually `main`) and root folder → Save.
3. Your site goes live at `https://yourusername.github.io/reponame/`.
4. Optional: add a custom domain under the same Pages settings once you have one.

## File structure
```
index.html          Home
tours.html           Tour listing (tabs: Spiritual / International / Student)
tour-detail.html     Gated itinerary page (?tour=<id> in the URL)
gallery.html         Photo gallery
about.html           Company + team
contact.html         Contact form
css/styles.css       All styling
js/tours-data.js     Tour content — edit this to add/change tours
js/main.js           Tab logic, gate/blur logic, form submission
assets/              Put real photos here
```
