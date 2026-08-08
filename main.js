/* ============================================================
   NILADREE RADIANT — shared behavior
   ============================================================ */

// ---- Mobile nav toggle ----
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }
});

// ---- Tour card rendering (used on home + tours page) ----
function tagClass(category) {
  return {
    spiritual: "tag-spiritual",
    international: "tag-international",
    student: "tag-student"
  }[category] || "tag-mixed";
}

function tourCardHTML(tour) {
  return `
    <a class="card" href="tour-detail.html?tour=${tour.id}">
      <div class="ph-image ${tagClass(tour.category)}">
        <span>Photo: ${tour.name}</span>
      </div>
      <div class="card-body">
        <span class="eyebrow">${CATEGORY_LABELS[tour.category]}</span>
        <h3>${tour.name}</h3>
        <div class="card-meta">
          <span>${tour.duration}</span>
          <span>${tour.region}</span>
        </div>
        <p>${tour.teaser}</p>
        <div class="card-price">${tour.price}</div>
      </div>
    </a>
  `;
}

// Render featured tours on homepage (one per category)
function renderFeatured(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const featured = ["char-dham-yatra", "bhutan-himalayan-trail", "delhi-heritage-history"]
    .map(id => TOURS.find(t => t.id === id))
    .filter(Boolean);
  el.innerHTML = featured.map(tourCardHTML).join("");
}

// Render tabbed tour listing on tours.html
function renderTourTabs() {
  const panels = document.querySelectorAll(".tab-panel");
  panels.forEach(panel => {
    const cat = panel.dataset.category;
    const tours = TOURS.filter(t => t.category === cat);
    panel.innerHTML = `<div class="grid-3">${tours.map(tourCardHTML).join("")}</div>`;
  });

  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.querySelector(`.tab-panel[data-category="${btn.dataset.category}"]`).classList.add("active");
    });
  });
}

// ---- Tour detail page: load tour + gate logic ----
function initTourDetail() {
  const params = new URLSearchParams(window.location.search);
  const tourId = params.get("tour");
  const tour = TOURS.find(t => t.id === tourId) || TOURS[0];

  document.title = `${tour.name} — Niladree Radiant`;

  // Header
  document.getElementById("tour-eyebrow").textContent = CATEGORY_LABELS[tour.category];
  document.getElementById("tour-name").textContent = tour.name;
  document.getElementById("tour-region").textContent = tour.region;
  document.getElementById("tour-duration").textContent = tour.duration;
  document.getElementById("tour-groupsize").textContent = tour.groupSize;
  document.getElementById("tour-teaser").textContent = tour.teaser;
  document.getElementById("tour-price").textContent = tour.price;
  document.getElementById("hero-image-label").textContent = `Photo: ${tour.name}`;
  document.getElementById("hero-image").className = "ph-image " + tagClass(tour.category);

  // Itinerary (rendered but blurred until unlocked)
  const dayListEl = document.getElementById("day-list");
  dayListEl.innerHTML = tour.itinerary.map(d => `
    <div class="day">
      <div class="day-num">Day<strong>${String(d.day).padStart(2, "0")}</strong></div>
      <div>
        <h4 style="margin:0 0 4px;">${d.title}</h4>
        <p style="margin:0;">${d.text}</p>
      </div>
    </div>
  `).join("");

  document.getElementById("include-list").innerHTML = tour.includes.map(i => `<li>${i}</li>`).join("");
  document.getElementById("exclude-list").innerHTML = tour.excludes.map(i => `<li>${i}</li>`).join("");

  // Pre-fill hidden tour name field in the gate form
  document.getElementById("gate-tour-name").value = tour.name;

  // Gate form submit
  const form = document.getElementById("gate-form");
  const statusEl = document.getElementById("gate-status");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector("button[type=submit]");
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (res.ok) {
        unlockItinerary();
      } else {
        statusEl.textContent = "Something went wrong — please try again, or email info@niladreetours.com directly.";
        statusEl.className = "form-status err";
        submitBtn.disabled = false;
        submitBtn.textContent = "View Itinerary";
      }
    } catch (err) {
      statusEl.textContent = "Network error — please try again, or email info@niladreetours.com directly.";
      statusEl.className = "form-status err";
      submitBtn.disabled = false;
      submitBtn.textContent = "View Itinerary";
    }
  });
}

function unlockItinerary() {
  const overlay = document.getElementById("gate-overlay");
  const content = document.getElementById("gate-content");
  const line = document.getElementById("reveal-line");

  line.classList.add("done");
  setTimeout(() => {
    content.classList.remove("locked");
    overlay.style.display = "none";
    content.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 500);
}

// ---- Generic Formspree contact form (contact.html) ----
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const statusEl = document.getElementById("contact-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector("button[type=submit]");
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (res.ok) {
        statusEl.textContent = "Message sent — we'll get back to you shortly.";
        statusEl.className = "form-status ok";
        form.reset();
      } else {
        statusEl.textContent = "Something went wrong — please try again, or email info@niladreetours.com directly.";
        statusEl.className = "form-status err";
      }
    } catch (err) {
      statusEl.textContent = "Network error — please try again, or email info@niladreetours.com directly.";
      statusEl.className = "form-status err";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  });
}
