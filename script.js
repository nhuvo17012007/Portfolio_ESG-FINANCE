(() => {
  document.getElementById("year").textContent = new Date().getFullYear();

  // ---------- Đổi giao diện sáng / tối ----------
  const root = document.documentElement;
  const themeBtn = document.getElementById("themeBtn");
  const syncIcon = () => { themeBtn.textContent = root.dataset.theme === "dark" ? "☀" : "☾"; };
  syncIcon();
  themeBtn.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("esg-theme", root.dataset.theme); } catch (e) {}
    syncIcon();
  });

  // ---------- Menu mobile ----------
  const toggle = document.querySelector(".nav__toggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // ---------- Render dự án từ data.js ----------
  const grid = document.getElementById("projectGrid");
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const projectCard = (p) => {
    const cover = p.cover ? `<img src="${esc(p.cover)}" alt="${esc(p.title)}" loading="lazy" />` : esc(p.icon || "🌿");
    const tags = (p.tags || []).map((t) => `<span>${esc(t)}</span>`).join("");
    const link = p.link ? `<a class="project__link" href="${esc(p.link)}" target="_blank" rel="noopener">Xem chi tiết →</a>` : "";
    return `
      <article class="glass project reveal">
        <div class="project__cover">${cover}</div>
        <div class="project__body">
          <span class="project__status">${esc(p.status || "Dự án")}</span>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.description)}</p>
          <div class="project__tags">${tags}</div>
          ${link}
        </div>
      </article>`;
  };

  const emptyCard = () => `
    <article class="glass project project--empty reveal">
      <div class="project__cover">🌱</div>
      <div class="project__body">
        <span class="project__status project__status--soon">Sắp cập nhật</span>
        <h3>Dự án đang được xây dựng</h3>
        <p>Mình đang chuẩn bị những dự án đầu tiên về ESG và tài chính bền vững. Hãy quay lại sớm nhé!</p>
      </div>
    </article>`;

  const list = typeof PROJECTS !== "undefined" ? PROJECTS : [];
  grid.innerHTML = list.length ? list.map(projectCard).join("") : emptyCard() + emptyCard() + emptyCard();

  // ---------- Reveal ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // ---------- Scroll spy ----------
  const anchors = [...links.querySelectorAll("a")];
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id === "hero" ? "top" : entry.target.id;
        anchors.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));
})();
