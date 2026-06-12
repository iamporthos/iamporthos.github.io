/* ============================================================
   LIGHTBOX — click a gallery image to view it at full size.
   Applies to: project page galleries, Logos & Graphics, Vault.
   (Timeline thumbnails stay links to their project pages.)
   ============================================================ */
(function () {
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-label", "Image viewer — click or press Escape to close");
  lb.innerHTML = '<img alt="" />';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector("img");

  function close() {
    lb.classList.remove("open");
    lbImg.removeAttribute("src");
  }

  lb.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  document.addEventListener("click", (e) => {
    const img = e.target.closest(
      ".project-gallery img, .g-item img, .v-card .v-img img"
    );
    if (!img || !img.getAttribute("src")) return;
    lbImg.src = img.src;
    lbImg.alt = img.alt || "";
    lb.classList.add("open");
  });
})();
