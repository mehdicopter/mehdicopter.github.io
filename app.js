(function () {
  const data = window.CV_DATA;
  const root = document.getElementById("app-root");
  const printRoot = document.getElementById("print-sheet");
  const htmlEl = document.documentElement;

  const params = new URLSearchParams(window.location.search);
  let state = {
    lang: params.get("lang") || localStorage.getItem("cv_lang") || "fr",
    colorMode: localStorage.getItem("cv_color_mode") || "light"
  };

  if (!["fr", "en"].includes(state.lang)) {
    state.lang = "fr";
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderLogoBadge(item, sizeMod) {
    if (!item.logo) return "";
    const sizeClass = sizeMod ? ` brand-badge--${sizeMod}` : "";
    const fitClass = item.logoFit === "cover" ? "brand-badge--cover" : "brand-badge--contain";
    const bgStyle = item.logoBg ? `style="background:${escapeHtml(item.logoBg)};"` : "";
    const altLabel = item.company || item.school || item.year || "";
    return `
      <div class="brand-badge ${fitClass}${sizeClass}" ${bgStyle}>
        <img src="${escapeHtml(item.logo)}" alt="${escapeHtml(altLabel)}" />
      </div>`;
  }

  /* ========================================================================
     WEB VIEW — FULL EXECUTIVE PORTFOLIO
     ======================================================================== */
  function renderExecutive(lang) {
    const t = data.ui[lang];
    const p = data.profile;

    const sidebarSkills = data.skills
      .map(
        (s) => `
        <div class="exec-skill-group">
          <div class="exec-skill-title">
            <span class="exec-skill-dot" style="background:${escapeHtml(s.color)};"></span>
            <span>${escapeHtml(s.category[lang])}</span>
          </div>
          <div class="exec-skill-pills">
            ${s.items.map((item) => `<span class="exec-skill-pill">${escapeHtml(item)}</span>`).join("")}
          </div>
        </div>`
      )
      .join("");

    const sidebarLangs = data.languages
      .map(
        (l) => `
        <div class="exec-lang-row">
          <span>${escapeHtml(l.name[lang])}</span>
          <span>${escapeHtml(l.level[lang])}</span>
        </div>`
      )
      .join("");

    const kpisHtml = data.metrics
      .map(
        (m) => {
          const val = typeof m.value === "object" ? m.value[lang] : m.value;
          return `
        <div class="exec-kpi" style="--kpi-color:${escapeHtml(m.color)};">
          <div class="exec-kpi__val">${escapeHtml(val)}</div>
          <div class="exec-kpi__lbl">${escapeHtml(m.label[lang])}</div>
        </div>`;
        }
      )
      .join("");

    const expHtml = data.experiences
      .map((exp) => {
        const companyTitle = exp.url
          ? `<a href="${escapeHtml(exp.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(exp.company)}<span class="ext-arrow">↗</span></a>`
          : escapeHtml(exp.company);

        const bullets = exp.bullets[lang]
          .map((b) => `<li>${escapeHtml(b)}</li>`)
          .join("");

        const tags = exp.tags
          .map((tag) => `<span class="exec-tag">${escapeHtml(tag)}</span>`)
          .join("");

        const scope = exp.scope
          ? `<p class="exec-exp__scope">${escapeHtml(exp.scope[lang])}</p>`
          : "";

        return `
        <article class="exec-exp" style="--brand-color:${escapeHtml(exp.brandColor || "#2563eb")};">
          <div class="exec-exp__head">
            ${renderLogoBadge(exp, "")}
            <div class="exec-exp__head-main">
              <div class="exec-exp__top">
                <h3 class="exec-exp__role">${escapeHtml(exp.role[lang])}</h3>
                <span class="exec-exp__period">${escapeHtml(exp.period[lang])}</span>
              </div>
              <div class="exec-exp__org">
                ${companyTitle} <span class="exec-exp__loc">· ${escapeHtml(exp.location)}</span>
              </div>
            </div>
          </div>
          ${scope}
          <ul class="exec-exp__bullets">${bullets}</ul>
          <div class="exec-tags">${tags}</div>
        </article>`;
      })
      .join("");

    const highlightsHtml = data.highlights
      .map((h) => {
        const titleNode = h.url
          ? `<a href="${escapeHtml(h.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(h.title[lang])}<span class="ext-arrow">↗</span></a>`
          : escapeHtml(h.title[lang]);
        return `
        <div class="exec-box-item">
          ${renderLogoBadge(h, "sm")}
          <div class="exec-box-item__body">
            <small>${escapeHtml(h.type[lang])} · ${escapeHtml(h.year)}</small>
            <strong>${titleNode}</strong>
            <span>${escapeHtml(h.subtitle[lang])}</span>
          </div>
        </div>`;
      })
      .join("");

    const eduHtml = data.education
      .map((e) => {
        const schoolNode = e.url
          ? `<a href="${escapeHtml(e.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(e.school)}<span class="ext-arrow">↗</span></a>`
          : escapeHtml(e.school);
        return `
        <div class="exec-box-item">
          ${renderLogoBadge(e, "sm")}
          <div class="exec-box-item__body">
            <small>${escapeHtml(e.period)} · ${escapeHtml(e.location)}</small>
            <strong>${schoolNode}</strong>
            <span>${escapeHtml(e.degree[lang])}</span>
          </div>
        </div>`;
      })
      .join("");

    return `
      <div class="exec-wrap">
        <div class="exec-grid">
          <aside class="exec-sidebar">
            <div class="exec-sidebar__banner"></div>
            <div class="exec-sidebar__body">
              <div class="exec-avatar-wrap">
                <img src="${escapeHtml(p.photo)}" alt="${escapeHtml(p.name)}" class="exec-avatar" />
              </div>
              <h1 class="exec-side-name">${escapeHtml(p.name)}</h1>
              <p class="exec-side-role">${escapeHtml(p.title[lang])}</p>

              <a href="mailto:${escapeHtml(p.email)}" class="exec-cta-btn">
                <span>✉</span>
                <span>${escapeHtml(p.email)}</span>
              </a>

              <div class="exec-social-row">
                <a href="${escapeHtml(p.links.linkedin.url)}" target="_blank" rel="noopener noreferrer" class="exec-social-pill">
                  <span>LinkedIn</span>
                  <span class="ext-arrow">↗</span>
                </a>
                <a href="${escapeHtml(p.links.github.url)}" target="_blank" rel="noopener noreferrer" class="exec-social-pill">
                  <span>GitHub</span>
                  <span class="ext-arrow">↗</span>
                </a>
              </div>

              <div class="exec-location">
                <span>📍</span>
                <span>${escapeHtml(p.location[lang])}</span>
              </div>

              <div class="exec-side-block">
                <h2 class="exec-side-heading">${escapeHtml(t.skills)}</h2>
                ${sidebarSkills}
              </div>

              <div class="exec-side-block">
                <h2 class="exec-side-heading">${escapeHtml(t.languages)}</h2>
                ${sidebarLangs}
              </div>

              <div class="exec-side-block">
                <h2 class="exec-side-heading">${escapeHtml(t.interests)}</h2>
                <div class="exec-skill-pills">
                  ${data.interests[lang].map((i) => `<span class="exec-skill-pill">${escapeHtml(i)}</span>`).join("")}
                </div>
              </div>
            </div>
          </aside>

          <div class="exec-main">
            <header class="exec-intro">
              <div class="exec-kicker">${escapeHtml(p.status[lang])}</div>
              <p class="exec-headline">“${escapeHtml(p.quote[lang])}”</p>
              <p class="exec-lead">${escapeHtml(p.summary[lang])}</p>
            </header>

            <section class="exec-kpis" aria-label="Executive highlights">
              ${kpisHtml}
            </section>

            <section>
              <h2 class="exec-sec-title">${escapeHtml(t.experience)}</h2>
              <div class="exec-exp-list">${expHtml}</div>
            </section>

            <section class="exec-bottom-grid">
              <div>
                <h2 class="exec-sec-title">${escapeHtml(t.highlights)}</h2>
                <div class="exec-box">${highlightsHtml}</div>
              </div>
              <div>
                <h2 class="exec-sec-title">${escapeHtml(t.education)}</h2>
                <div class="exec-box">${eduHtml}</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    `;
  }

  /* ========================================================================
     DEDICATED 1-PAGE A4 EXECUTIVE PDF SHEET
     ======================================================================== */
  function renderPrintSheet(lang) {
    const t = data.ui[lang];
    const p = data.profile;

    const expPdfHtml = data.experiences
      .map((exp) => {
        const bulletsSource = exp.pdfBullets ? exp.pdfBullets[lang] : exp.bullets[lang];
        const bullets = bulletsSource
          .map((b) => `<li>${escapeHtml(b)}</li>`)
          .join("");

        return `
        <div class="pdf-exp" style="--brand-color:${escapeHtml(exp.brandColor || "#2563eb")};">
          <div class="pdf-exp__head">
            ${renderLogoBadge(exp, "pdf")}
            <div class="pdf-exp__title-block">
              <div class="pdf-exp__top-line">
                <span class="pdf-exp__role">${escapeHtml(exp.role[lang])}</span>
                <span class="pdf-exp__period">${escapeHtml(exp.period[lang])}</span>
              </div>
              <div class="pdf-exp__sub-line">
                <span class="pdf-exp__company">${escapeHtml(exp.company)}</span>
                <span class="pdf-exp__loc">· ${escapeHtml(exp.location)}</span>
              </div>
            </div>
          </div>
          <ul class="pdf-exp__bullets">${bullets}</ul>
        </div>`;
      })
      .join("");

    const skillsPdfHtml = data.skills
      .map(
        (s) => `
        <div class="pdf-side-group">
          <div class="pdf-side-cat">
            <span class="pdf-dot" style="background:${escapeHtml(s.color)};"></span>
            <strong>${escapeHtml(s.category[lang])}</strong>
          </div>
          <p class="pdf-side-items">${s.items.map(escapeHtml).join(" · ")}</p>
        </div>`
      )
      .join("");

    const highlightsPdfHtml = data.highlights
      .map(
        (h) => `
        <div class="pdf-mini-item">
          <div class="pdf-mini-top">
            <strong>${escapeHtml(h.title[lang])}</strong>
          </div>
          <span>${escapeHtml(h.year)} — ${escapeHtml(h.type[lang])}</span>
        </div>`
      )
      .join("");

    const eduPdfHtml = data.education
      .map(
        (e) => `
        <div class="pdf-mini-item">
          <div class="pdf-mini-top">
            <strong>${escapeHtml(e.school)}</strong>
            <small>${escapeHtml(e.period)}</small>
          </div>
          <span>${escapeHtml(e.degree[lang])}</span>
        </div>`
      )
      .join("");

    const kpisPdfHtml = data.metrics
      .map(
        (m) => {
          const val = typeof m.value === "object" ? m.value[lang] : m.value;
          return `
        <div class="pdf-kpi" style="--kpi-color:${escapeHtml(m.color)};">
          <strong>${escapeHtml(val)}</strong>
          <span>${escapeHtml(m.label[lang])}</span>
        </div>`;
        }
      )
      .join("");

    return `
      <div class="pdf-page">
        <div class="pdf-topbar-accent"></div>

        <header class="pdf-header">
          <img src="${escapeHtml(p.photo)}" alt="${escapeHtml(p.name)}" class="pdf-avatar" />
          <div class="pdf-header__main">
            <div class="pdf-header__row">
              <div>
                <h1 class="pdf-name">${escapeHtml(p.name)}</h1>
                <p class="pdf-role">${escapeHtml(p.title[lang])}</p>
              </div>
              <div class="pdf-contacts">
                <a href="mailto:${escapeHtml(p.email)}">${escapeHtml(p.email)}</a>
                <a href="https://mahfoudi.me">mahfoudi.me</a>
                <a href="${escapeHtml(p.links.linkedin.url)}">${escapeHtml(p.links.linkedin.label)}</a>
                <a href="${escapeHtml(p.links.github.url)}">${escapeHtml(p.links.github.label)}</a>
              </div>
            </div>
            <p class="pdf-summary">${escapeHtml(p.summary[lang])}</p>
          </div>
        </header>

        <div class="pdf-kpis">
          ${kpisPdfHtml}
        </div>

        <div class="pdf-columns">
          <div class="pdf-col-main">
            <h2 class="pdf-sec-title">${escapeHtml(t.experience)}</h2>
            <div class="pdf-exp-list">
              ${expPdfHtml}
            </div>
          </div>

          <aside class="pdf-col-side">
            <div class="pdf-side-section">
              <h2 class="pdf-sec-title">${escapeHtml(t.skills)}</h2>
              ${skillsPdfHtml}
            </div>

            <div class="pdf-side-section">
              <h2 class="pdf-sec-title">${escapeHtml(t.highlights)}</h2>
              ${highlightsPdfHtml}
            </div>

            <div class="pdf-side-section">
              <h2 class="pdf-sec-title">${escapeHtml(t.education)}</h2>
              ${eduPdfHtml}
            </div>

            <div class="pdf-side-section">
              <h2 class="pdf-sec-title">${escapeHtml(t.languages)} &amp; ${escapeHtml(t.interests)}</h2>
              <p class="pdf-side-items" style="margin-bottom:4px;">
                ${data.languages.map((l) => `<strong>${escapeHtml(l.name[lang])}</strong> (${escapeHtml(l.level[lang])})`).join(" · ")}
              </p>
              <p class="pdf-side-items">
                ${data.interests[lang].map(escapeHtml).join(" · ")}
              </p>
            </div>
          </aside>
        </div>

        <footer class="pdf-footer">
          <span>${escapeHtml(p.location[lang])}</span>
          <span>${escapeHtml(t.pdfFooter)}</span>
        </footer>
      </div>
    `;
  }

  function render() {
    htmlEl.setAttribute("lang", state.lang);
    htmlEl.setAttribute("data-color-mode", state.colorMode);

    localStorage.setItem("cv_lang", state.lang);
    localStorage.setItem("cv_color_mode", state.colorMode);

    const t = data.ui[state.lang];
    document.getElementById("print-label").textContent = t.printBtn;

    const pdfLink = document.getElementById("btn-print");
    const pdfFile = state.lang === "en" ? "Mehdi_Mahfoudi_CV_EN.pdf" : "Mehdi_Mahfoudi_CV_FR.pdf";
    pdfLink.setAttribute("href", `assets/${pdfFile}`);
    pdfLink.setAttribute("download", pdfFile);

    document.querySelectorAll("[data-set-lang]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-set-lang") === state.lang);
    });

    const colorBtn = document.getElementById("btn-color-mode");
    colorBtn.textContent = state.colorMode === "dark" ? "☀" : "☾";

    root.innerHTML = renderExecutive(state.lang);
    printRoot.innerHTML = renderPrintSheet(state.lang);
  }

  document.querySelectorAll("[data-set-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.lang = btn.getAttribute("data-set-lang");
      render();
    });
  });

  document.getElementById("btn-color-mode").addEventListener("click", () => {
    state.colorMode = state.colorMode === "dark" ? "light" : "dark";
    render();
  });

  render();
})();
