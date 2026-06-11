/* ============================================================
   PROJECT PAGE — renders one project from PROJECTS by ?id=
   ============================================================ */

function phImg(src, alt, ratioClass) {
  return `
    <div class="frame">
      <img src="images/${src}" alt="${alt}"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
      <div class="ph" style="display:none">
        <span>${src}</span>
        <small>drop this file into /images/</small>
      </div>
    </div>`;
}

const root = document.getElementById("project-root");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const idx = PROJECTS.findIndex((p) => p.id === id);

if (idx === -1) {
  root.innerHTML = `
    <a class="back-link" href="index.html#journey">← Back to the journey</a>
    <h1>Project not found</h1>
    <p class="tagline">That link doesn't match anything on the timeline. Head back and pick a stop.</p>`;
} else {
  const p = PROJECTS[idx];
  document.title = `${p.title} — Porthos`;

  const specCells = Object.entries(p.specs)
    .map(([k, v]) => `<div class="spec-cell"><div class="k">${k}</div><div class="v">${v}</div></div>`)
    .join("");

  const bodyParas = p.body.map((para) => `<p>${para}</p>`).join("");

  const gallery = p.images.map((img) => phImg(img, p.title)).join("");

  const video = p.video
    ? `<div class="frame" style="aspect-ratio:auto">
         <video controls preload="metadata" src="images/${p.video}"></video>
       </div>`
    : "";

  const prev = PROJECTS[idx - 1];
  const next = PROJECTS[idx + 1];
  const navHtml = `
    <div class="project-nav">
      <span>${prev ? `<a href="project.html?id=${prev.id}">← ${prev.title} (${prev.year})</a>` : ""}</span>
      <span>${next ? `<a href="project.html?id=${next.id}">${next.title} (${next.year}) →</a>` : ""}</span>
    </div>`;

  root.innerHTML = `
    <a class="back-link" href="index.html#journey">← Back to the journey</a>
    <div class="spec-label" style="margin-top:28px">${p.year} · ${p.category}</div>
    <h1>${p.title}</h1>
    <p class="tagline">${p.tagline}</p>

    <div class="spec-table">${specCells}</div>

    <div class="project-body">${bodyParas}</div>

    <div class="project-gallery">
      ${gallery}
      ${video}
    </div>

    ${navHtml}`;
}
