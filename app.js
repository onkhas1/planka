/* Планка: поведение всех страниц. Каждый блок включается, только если его разметка есть на странице. */
(() => {
  const B = window.PLANKA_BRANDS || [];
  const CFG = window.PLANKA_CONFIG || {};
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const phone = () => matchMedia("(max-width:900px)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const rub = new Intl.NumberFormat("ru-RU");
  const num = (v) => String(v).replace(".", ",");
  const yw = (n) => { const a = n % 10, b = n % 100; return n + (a === 1 && b !== 11 ? " год" : a >= 2 && a <= 4 && (b < 12 || b > 14) ? " года" : " лет"); };
  const safeUrl = (u) => (/^https:\/\//.test(u || "") ? u : "");
  const link = (b) => `brand.html?id=${encodeURIComponent(b.id)}`;
  const JB = B.slice(0, 6);
  const arrow = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2"/></svg>';

  /* ===== живая планка ===== */
  const stage = $("#stage");
  let layoutBar = () => {};
  if (stage && JB.length > 1) {
    // dir: 1 — чем больше, тем лучше; -1 — чем меньше, тем лучше (цена)
    const MODES = {
      years: { key: "years", dir: 1, step: 1, label: (v) => "стаж от " + v + (v % 10 === 1 && v % 100 !== 11 ? " года" : " лет") },
      rating: { key: "rating", dir: 1, step: 0.01, label: (v) => "рейтинг от " + String(+v.toFixed(2)).replace(".", ",") },
      price: { key: "price", dir: -1, step: 100, label: (v) => "цены до " + rub.format(v) + " ₽" },
    };
    let mode = "years", pos = 0, auto = null, touched = false, drag = false;
    const bar = $("#bar"), label = $("#barLabel"), count = $("#count"), range = $("#range");
    stage.insertAdjacentHTML("afterbegin", JB.map((b) => `<a class="jumper" href="${link(b)}" draggable="false"><div class="ph"><img src="${esc(b.img)}" width="480" height="600" alt="${esc(b.name)}" draggable="false"></div><b>${esc(b.name)}</b><small>${esc(b.cat)}</small></a>`).join(""));
    const J = $$(".jumper", stage);
    const scale = () => {
      const m = MODES[mode], vals = JB.map((b) => b[m.key]);
      const lo = Math.min(...vals), hi = Math.max(...vals);
      // 0 — самый слабый бренд, 1 — самый сильный
      const norm = (v) => (m.dir > 0 ? (v - lo) / (hi - lo) : (hi - v) / (hi - lo));
      // позиция 0..100 → порог, округлённый в строгую сторону
      const raw = m.dir > 0 ? lo + (hi - lo) * pos / 100 : hi - (hi - lo) * pos / 100;
      // не даём порогу уйти выше лучшего бренда: иначе на самом верху не остаётся никого
      const thr = m.dir > 0 ? Math.min(hi, Math.ceil(raw / m.step - 1e-9) * m.step) : Math.max(lo, Math.floor(raw / m.step + 1e-9) * m.step);
      return { m, norm, thr, pass: (b) => (m.dir > 0 ? b[m.key] >= thr - 1e-9 : b[m.key] <= thr + 1e-9) };
    };
    layoutBar = () => {
      const { m, norm, thr, pass } = scale();
      const W = stage.clientWidth, H = stage.clientHeight, ph = phone();
      const jw = J[0].offsetWidth, jh = J[0].offsetHeight;
      const room = ph ? W - 200 : H - jh - 36;
      let n = 0;
      J.forEach((el, i) => {
        const b = JB[i], ok = pass(b), f = 0.08 + 0.92 * norm(b[m.key]);
        if (ok) n++;
        el.classList.toggle("out", !ok);
        if (ph) { el.style.left = "0px"; el.style.top = i * 76 + 6 + "px"; el.style.transform = `translateX(${(ok ? f : 0) * room}px)`; }
        else { el.style.top = ""; el.style.left = (i * (W - jw)) / (J.length - 1) + "px"; el.style.transform = `translateY(${-(ok ? f : 0) * room}px)`; }
      });
      // планка стоит ровно на уровне порога: кто выше, тот держит
      const fb = 0.08 + 0.92 * Math.max(0, Math.min(1, norm(thr)));
      if (ph) { bar.style.bottom = ""; bar.style.left = 56 + fb * room + "px"; }
      else { bar.style.left = ""; bar.style.bottom = jh + fb * room + "px"; }
      label.textContent = m.label(thr);
      count.textContent = `Держат планку: ${n} из ${JB.length}`;
      range.value = pos; range.setAttribute("aria-valuetext", m.label(thr));
    };
    const stopAuto = () => { touched = true; if (auto) { cancelAnimationFrame(auto); auto = null; } };
    $$(".modes button").forEach((btn) => btn.addEventListener("click", () => {
      stopAuto();
      $$(".modes button").forEach((x) => x.setAttribute("aria-pressed", String(x === btn)));
      mode = btn.dataset.mode; pos = 0; layoutBar();
    }));
    range.addEventListener("input", () => { stopAuto(); pos = +range.value; layoutBar(); });
    let moved = false;
    const fromPointer = (e) => {
      const r = stage.getBoundingClientRect(), jh = J[0].offsetHeight;
      if (phone()) { const room = r.width - 200; pos = (((e.clientX - r.left - 56) / room - 0.08) / 0.92) * 100; }
      else { const room = r.height - jh - 36; pos = (((r.bottom - e.clientY - jh) / room - 0.08) / 0.92) * 100; }
      pos = Math.max(0, Math.min(100, pos)); layoutBar();
    };
    stage.addEventListener("pointerdown", (e) => { stopAuto(); drag = true; moved = false; stage.setPointerCapture(e.pointerId); fromPointer(e); e.preventDefault(); });
    stage.addEventListener("pointermove", (e) => { if (drag) { moved = true; fromPointer(e); } });
    addEventListener("pointerup", () => (drag = false));
    stage.addEventListener("dragstart", (e) => e.preventDefault());
    // перетаскивание планки не должно открывать страницу бренда
    stage.addEventListener("click", (e) => { if (moved) e.preventDefault(); }, true);
    // при первом появлении планка один раз поднимается и опускается, чтобы было видно, что её можно трогать
    new IntersectionObserver((es, io) => {
      if (!es[0].isIntersecting || reduce) return;
      io.disconnect();
      let t0 = 0;
      const tick = (t) => { if (touched) return; t0 ||= t; const p = Math.min(1, (t - t0) / 2600); pos = Math.round(Math.sin(p * Math.PI) * 80); layoutBar(); auto = p < 1 ? requestAnimationFrame(tick) : null; };
      setTimeout(() => { if (!touched) auto = requestAnimationFrame(tick); }, 500);
    }, { threshold: 0.5 }).observe(stage);
    addEventListener("load", layoutBar); layoutBar();
  }

  /* ===== шкалы «кого пускаем»: бренды-примеры точками на осях ===== */
  function drawAxes(me) {
    $$(".axis").forEach((ax) => {
      const lo = +ax.dataset.min, hi = +ax.dataset.max, thr = +ax.dataset.thr, at = (v) => ((v - lo) / (hi - lo)) * 100 + "%";
      const list = me ? [...JB.filter((b) => b !== me), me] : JB;
      ax.innerHTML = `<i class="ln"></i><i class="ok" style="left:${at(thr)}"></i>` +
        ax.dataset.ticks.split(",").map((t) => `<span class="tick" style="left:${at(+t)}">${num(t)}</span>`).join("") +
        `<i class="thr" style="left:${at(thr)}"><span>от ${num(thr)}${ax.dataset.unit ? " " + ax.dataset.unit : ""}</span></i>` +
        list.map((b) => `<i class="dot${b === me ? " me" : ""}" style="left:${at(Math.min(hi, b[ax.dataset.axis]))}" title="${esc(b.name)}"></i>`).join("");
    });
  }

  /* ===== лента «новые в каталоге» ===== */
  const strip = $("#strip");
  if (strip) {
    const t = $("#total"); if (t) t.textContent = "(" + B.length + ")";
    strip.innerHTML = B.slice(0, 10).map((b) => `<a href="${link(b)}"><div class="ph"><img src="${esc(b.img)}" width="560" height="700" alt="" loading="lazy"></div><b>${esc(b.name)}</b><small>${esc(b.cat)}, ${esc(b.city)}. Работают с ${esc(b.since)}, в каталоге с ${esc(b.joined)}</small></a>`).join("");
  }

  /* ===== каталог: поиск, категории, буквы ===== */
  const dir = $("#dir");
  if (dir) {
    const q = $("#q"), chips = $("#chips"), empty = $("#empty");
    const cats = ["Все", ...new Set(B.map((b) => b.cat))];
    let cat = new URLSearchParams(location.search).get("cat") || "Все";
    if (!cats.includes(cat)) cat = "Все";
    chips.innerHTML = cats.map((c) => `<button type="button" aria-pressed="${c === cat}" data-c="${esc(c)}">${esc(c)}<span>${c === "Все" ? B.length : B.filter((b) => b.cat === c).length}</span></button>`).join("");
    const render = () => {
      const s = q.value.trim().toLowerCase();
      const list = B.filter((b) => (cat === "Все" || b.cat === cat) && (!s || (b.name + " " + b.city + " " + b.cat).toLowerCase().includes(s)))
        .sort((a, b) => a.name.localeCompare(b.name, "ru"));
      const groups = {};
      list.forEach((b) => (groups[b.name[0].toUpperCase()] ||= []).push(b));
      dir.innerHTML = Object.entries(groups).map(([L, items]) => `<div class="grp"><span class="L disp" aria-hidden="true">${esc(L)}</span><div>${items.map((b) =>
        `<a class="row" href="${link(b)}"><span class="t"><img src="${esc(b.img)}" width="120" height="150" alt="" loading="lazy"></span><span class="n">${esc(b.name)}</span><span class="c">${esc(b.cat)}</span><span class="c">${esc(b.city)}</span><span class="y">${yw(b.years)}</span>${arrow}</a>`).join("")}</div></div>`).join("");
      empty.hidden = list.length > 0;
    };
    chips.addEventListener("click", (e) => {
      const btn = e.target.closest("button"); if (!btn) return;
      cat = btn.dataset.c; $$("button", chips).forEach((x) => x.setAttribute("aria-pressed", String(x === btn))); render();
    });
    q.addEventListener("input", render);
    render();
  }

  /* ===== страница бренда ===== */
  const bp = $("[data-brand-page]");
  if (bp) {
    const b = B.find((x) => x.id === new URLSearchParams(location.search).get("id"));
    if (!b) {
      document.title = "Бренд не найден — Планка";
      bp.innerHTML = `<div class="legal"><h1>Такого бренда нет</h1><p>Возможно, ссылка устарела или бренд ушёл из каталога.</p><div class="b-act"><a class="btn" href="catalog.html">Весь каталог</a></div></div>`;
    } else {
      document.title = `${b.name} — Планка`;
      let site = safeUrl(b.site);
      if (site) { const u = new URL(site); u.searchParams.set("utm_source", "planka"); u.searchParams.set("utm_medium", "catalog"); site = u.toString(); }
      const go = site
        ? `<a class="btn" href="${esc(site)}" target="_blank" rel="noopener">В магазин бренда ${arrow}</a>`
        : `<span class="btn" aria-disabled="true">${b.example ? "У примера нет магазина" : "Ссылка появится скоро"}</span>`;
      const inBar = JB.includes(b);
      bp.innerHTML = `
        <section class="b-cover" aria-labelledby="b-h">
          <figure class="b-photo"><img src="${esc(b.img)}" width="800" height="1000" alt=""></figure>
          <div class="b-info">
            <h1 id="b-h" class="b-name disp">${esc(b.name)}</h1>
            ${b.example ? '<span class="b-tag">Пример карточки</span>' : ""}
            <dl class="b-fields">
              <div><dt>Что делают</dt><dd>${esc(b.cat)}</dd></div>
              <div><dt>Город</dt><dd>${esc(b.city)}</dd></div>
              <div><dt>Работают</dt><dd>с ${esc(b.since)}</dd></div>
              <div><dt>Оценка покупателей</dt><dd>${num(b.rating)} из 5, ${rub.format(b.reviews)} отзывов</dd></div>
            </dl>
            <p class="b-about">${esc(b.about)}</p>
            <div class="b-act">${go}<a class="link" href="catalog.html">Весь каталог</a></div>
          </div>
        </section>
        ${inBar ? `<section class="b-why" aria-labelledby="why-h"><h2 id="why-h">Почему в каталоге</h2><div class="gauges">
          <div class="g"><h3>Стаж на рынке</h3><p>${esc(b.name)}: ${yw(b.years)}.</p><div class="axis" data-axis="years" data-min="0" data-max="10" data-ticks="0,2,5,10" data-thr="2" data-unit="лет" aria-hidden="true"></div></div>
          <div class="g"><h3>Оценка покупателей</h3><p>${num(b.rating)} по ${rub.format(b.reviews)} отзывам.</p><div class="axis" data-axis="rating" data-min="4" data-max="5" data-ticks="4,4.5,5" data-thr="4.5" aria-hidden="true"></div></div>
          <div class="g"><h3>Сама вещь</h3><p>Проверили состав, швы и посадку.</p><ul class="checks"><li>Состав</li><li>Швы</li><li>Посадка</li></ul></div>
        </div></section>` : ""}
        <section class="b-items" aria-labelledby="items-h"><h2 id="items-h">Вещи</h2>
          <div class="items">${(b.items || []).map(([n, m, p]) => `<div><span class="vh">Вещь:</span>${esc(n)}<span>${esc(m)}</span><b>${rub.format(p)}&nbsp;₽</b></div>`).join("")}</div>
          <p class="note">Цены на сайте бренда могут отличаться. Заказ, доставка и возврат идут по правилам его магазина.</p>
        </section>
        <section class="b-more" aria-labelledby="more-h"><div class="list-head" style="padding:0"><h2 id="more-h" class="vh">Ещё бренды</h2></div>
          <div class="strip" id="more" style="padding-left:0;padding-right:0"></div></section>`;
      const tick = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10.5 8.5 15 16 5"/></svg>';
      $$(".checks li", bp).forEach((li) => li.insertAdjacentHTML("afterbegin", tick));
      if (inBar) drawAxes(b);
      $("#more").innerHTML = B.filter((x) => x !== b && x.cat === b.cat).concat(B.filter((x) => x !== b && x.cat !== b.cat)).slice(0, 6)
        .map((x) => `<a href="${link(x)}"><div class="ph"><img src="${esc(x.img)}" width="560" height="700" alt="" loading="lazy"></div><b>${esc(x.name)}</b><small>${esc(x.cat)}, ${esc(x.city)}</small></a>`).join("");
    }
  }
  if (!bp) drawAxes(null);

  /* ===== вопросы: один открыт, ответ в большой панели ===== */
  const QA = $$(".qa");
  QA.forEach((qa) => $(".q", qa).addEventListener("click", () => {
    const wasOn = qa.classList.contains("on");
    QA.forEach((x) => { x.classList.remove("on"); $(".q", x).setAttribute("aria-expanded", "false"); });
    if (!(phone() && wasOn)) { qa.classList.add("on"); $(".q", qa).setAttribute("aria-expanded", "true"); }
  }));

  /* ===== название журнала: буквы поднимаются по очереди ===== */
  const mast = $(".mast");
  if (mast && !reduce) {
    mast.innerHTML = [...mast.textContent].map((c, i) => `<span class="ch" style="animation-delay:${120 + i * 70}ms">${c}</span>`).join("");
    setTimeout(() => mast.classList.add("done"), 1800);
  }

  /* ===== лёгкий параллакс фото обложки ===== */
  const PX = $$(".c-main img, .c-side img");
  if (PX.length && !reduce) {
    let pq = 0;
    const para = () => { pq = 0; const h = innerHeight; PX.forEach((img) => { const r = img.parentElement.getBoundingClientRect(); if (r.bottom < 0 || r.top > h) return; img.style.transform = `translateY(${((r.top + r.height / 2 - h / 2) / h) * -40}px) scale(1.08)`; }); };
    addEventListener("scroll", () => { if (!pq) pq = requestAnimationFrame(para); }, { passive: true }); para();
  }

  /* ===== крупные слова подгоняем под ширину строки ===== */
  function fit() {
    const mg = parseFloat(getComputedStyle(document.body).getPropertyValue("--m")) || parseFloat(getComputedStyle($(".foot") || document.body).paddingLeft) || 20;
    $$(".cta .big, .verb .w, .mast, .b-name").forEach((box) => {
      const el = box.classList.contains("w") ? box.firstElementChild : box;
      el.style.display = "inline-block";
      if (box.classList.contains("b-name")) el.style.whiteSpace = "nowrap";
      let max;
      if (box.classList.contains("mast")) max = box.parentElement.clientWidth - 2 * mg - 4;
      else if (box.classList.contains("b-name")) max = box.parentElement.clientWidth;
      else max = box.closest(".cta, .verb").clientWidth - 2 * mg - 8;
      el.style.fontSize = "100px";
      const k = max / el.getBoundingClientRect().width;
      let size = 100 * k;
      if (box.classList.contains("big") && innerWidth > 900) size *= 0.62;
      if (box.classList.contains("w")) size = Math.min(size, innerWidth * 0.17);
      if (box.classList.contains("b-name")) {
        size = Math.min(size, phone() ? 64 : 120);
        // длинное название не ужимаем в нитку, а переносим на две строки
        const floor = phone() ? 30 : 64;
        if (size < floor) { size = floor; el.style.whiteSpace = "normal"; el.style.display = "block"; }
      }
      el.style.fontSize = size + "px";
    });
  }
  addEventListener("resize", () => { layoutBar(); fit(); });
  (document.fonts ? document.fonts.load('800 100px "TikTok Sans"').then(() => document.fonts.ready) : Promise.resolve())
    .then(() => { fit(); layoutBar(); setTimeout(fit, 300); });
  fit();

  /* ===== ссылки из config.js: пока пусто — подсказка вместо мёртвой ссылки ===== */
  $$("[data-cfg]").forEach((a) => {
    const key = a.dataset.cfg;
    let v = CFG[key] || "";
    v = key === "phone" && v ? "tel:" + v.replace(/[^\d+]/g, "") : safeUrl(v);
    if (v) { a.href = v; if (v.startsWith("https://")) { a.target = "_blank"; a.rel = "noopener"; } return; }
    a.addEventListener("click", (e) => {
      e.preventDefault();
      let n = a.parentNode.querySelector(".cfg-note");
      if (!n) { n = document.createElement("p"); n.className = "cfg-note"; n.setAttribute("role", "status"); a.parentNode.appendChild(n); }
      n.textContent = a.dataset.soon || "Ссылку добавим перед запуском.";
    });
  });

  /* ===== заявка бренда ===== */
  $$("form[data-lead]").forEach((form) => {
    const status = $(".form-status", form), btn = $("button[type=submit]", form);
    const say = (t, bad) => { status.textContent = t; status.classList.toggle("bad", !!bad); };
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const fd = new FormData(form);
      const cats = fd.getAll("cats"); fd.delete("cats"); fd.set("cats", cats.join(", "));
      if (!cats.length) { say("Отметьте хотя бы одну категорию.", true); $("[name=cats]", form).focus(); return; }
      if (!CFG.leadUrl) { say("Приём заявок подключим перед запуском. Пока напишите нам в Telegram, кнопка рядом.", true); return; }
      btn.disabled = true; const label = btn.innerHTML; btn.textContent = "Отправляем…";
      try {
        const r = await fetch(CFG.leadUrl, { method: "POST", body: new URLSearchParams(fd) });
        const j = await r.json().catch(() => ({}));
        if (!r.ok || !j.ok) throw new Error(j.error || r.status);
        form.reset(); say("Заявка у нас. Напишем в течение двух рабочих дней.");
      } catch (err) {
        say("Не получилось отправить. Проверьте интернет и попробуйте ещё раз или напишите нам в Telegram.", true);
      } finally { btn.disabled = false; btn.innerHTML = label; }
    });
  });
})();
