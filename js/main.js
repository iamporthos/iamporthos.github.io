/* ============================================================
   MAIN — timeline rendering, weave path, scroll reveal, vault
   ============================================================ */

// ---------- image with placeholder fallback ----------
function imgWithFallback(src, alt) {
  return `
    <img src="images/${src}" alt="${alt}"
         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
    <div class="ph" style="display:none">
      <span>${src}</span>
      <small>drop this file into /images/</small>
    </div>`;
}

// ---------- render timeline ----------
const timelineEl = document.getElementById("timeline");

if (timelineEl) {
  PROJECTS.forEach((p) => {
    const entry = document.createElement("article");
    entry.className = "tl-entry";
    entry.innerHTML = `
      <div class="tl-media">
        <a href="project.html?id=${p.id}" aria-label="Open ${p.title}">
          <div class="frame">${imgWithFallback(p.images[0], p.title)}</div>
        </a>
      </div>
      <div class="tl-text">
        <div class="year">${p.year}</div>
        <div class="spec-label">${p.category}</div>
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <a class="open-link" href="project.html?id=${p.id}">Open project →</a>
      </div>`;
    timelineEl.appendChild(entry);
  });

  // ---------- scroll reveal ----------
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.18 }
  );
  document.querySelectorAll(".tl-entry").forEach((el) => observer.observe(el));

  // ---------- weaving centerline ----------
  function drawWeave() {
    const svg = document.getElementById("weave-svg");
    const path = document.getElementById("weave-path");
    if (!svg || !path || window.innerWidth <= 760) return;

    const entries = Array.from(document.querySelectorAll(".tl-entry"));
    if (!entries.length) return;

    const tlRect = timelineEl.getBoundingClientRect();
    svg.setAttribute("width", tlRect.width);
    svg.setAttribute("height", timelineEl.scrollHeight);

    const cx = tlRect.width / 2;
    let d = `M ${cx} 0`;
    let prevY = 0;

    entries.forEach((entry, i) => {
      const r = entry.getBoundingClientRect();
      const y = r.top - tlRect.top + r.height / 2;
      // weave toward the media side of each entry
      const mediaFirst = i % 2 === 0;
      const bend = mediaFirst ? cx - tlRect.width * 0.22 : cx + tlRect.width * 0.22;
      const midY = (prevY + y) / 2;
      d += ` C ${cx} ${midY}, ${bend} ${midY}, ${bend} ${y}`;
      d += ` C ${bend} ${y + (y - midY) * 0.4}, ${cx} ${y + (y - midY) * 0.6}, ${cx} ${y + (y - midY)}`;
      prevY = y + (y - midY);
    });

    path.setAttribute("d", d);

    // scroll-driven draw
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;
    path.dataset.len = len;
    updateWeaveProgress();
  }

  function updateWeaveProgress() {
    const path = document.getElementById("weave-path");
    if (!path || !path.dataset.len) return;
    const len = parseFloat(path.dataset.len);
    const rect = timelineEl.getBoundingClientRect();
    const total = rect.height - window.innerHeight * 0.5;
    const scrolled = Math.min(Math.max(-rect.top + window.innerHeight * 0.6, 0), total);
    const progress = total > 0 ? scrolled / total : 1;
    path.style.strokeDashoffset = `${len * (1 - progress)}`;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.addEventListener("load", () => {
    drawWeave();
    if (reduceMotion) {
      const path = document.getElementById("weave-path");
      if (path) path.style.strokeDashoffset = "0";
    }
  });
  window.addEventListener("resize", drawWeave);
  if (!reduceMotion) {
    window.addEventListener("scroll", updateWeaveProgress, { passive: true });
  }
}

// ---------- graphics grid ----------
const gridEl = document.getElementById("graphics-grid");
if (gridEl && typeof GRAPHICS !== "undefined") {
  GRAPHICS.forEach((g) => {
    const item = document.createElement("div");
    item.className = "g-item";
    item.innerHTML = `${imgWithFallback(g.file, g.label)}<div class="cap">${g.label}</div>`;
    gridEl.appendChild(item);
  });
}

/* ============================================================
   VAULT
   Default password: heartandhumor
   To change it: open your browser console and run
     crypto.subtle.digest("SHA-256", new TextEncoder().encode("yourNewPassword"))
       .then(b => console.log([...new Uint8Array(b)].map(x => x.toString(16).padStart(2,"0")).join("")))
   then paste the result into VAULT_HASH below.
   ============================================================ */
const VAULT_HASH =
  "642989597738a979c5982352b50bdb4a515ff8905c18b929a3ee9098f8cf6d30"; // placeholder — set during build

async function sha256(str) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return [...new Uint8Array(buf)].map((x) => x.toString(16).padStart(2, "0")).join("");
}

const vaultBtn = document.getElementById("vault-btn");
if (vaultBtn) {
  const input = document.getElementById("vault-input");
  const errEl = document.getElementById("vault-error");
  const grid = document.getElementById("vault-grid");

  async function tryUnlock() {
    const val = input.value.trim().toLowerCase();
    if (!val) return;
    const hash = await sha256(val);
    if (hash === VAULT_HASH) {
      errEl.textContent = "";
      grid.innerHTML = VAULT_PROJECTS.map(
        (v) => `
        <div class="v-card">
          <div class="v-img">${imgWithFallback(v.image, v.title)}</div>
          <h3>${v.title}</h3>
          <div class="v-year">${v.year}</div>
          <p>${v.blurb}</p>
        </div>`
      ).join("");
      grid.classList.add("open");
      document.getElementById("vault-form").style.display = "none";
      grid.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      errEl.textContent = "Not it. Try again.";
      input.value = "";
      input.focus();
    }
  }

  vaultBtn.addEventListener("click", tryUnlock);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") tryUnlock();
  });
}
