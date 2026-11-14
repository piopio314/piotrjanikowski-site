(function () {
  "use strict";

  // English lives in the HTML. Spanish and Polish are here.
  var dict = {
    es: {
      "role": "Desarrollador de software independiente",
      "intro.1": "Construyo y gestiono productos de software de principio a fin: agentes de IA, automatización de datos y herramientas de trading. Tres de ellos están en funcionamiento y se usan hoy.",
      "intro.2": "Trabajo con empresas por contrato y me asocio con fundadores en nuevos productos.",
      "avail": "Disponible para nuevos proyectos · España, CET",
      "avail.cta": "Contactar",
      "h.products": "Productos",
      "case": "Caso de estudio",
      "c.problem": "Problema",
      "c.built": "Desarrollo",
      "c.result": "Resultado",
      "c.stack": "Tecnología",
      "cellify.line": "Agente de IA para Microsoft Excel. Software por suscripción con usuarios de pago.",
      "cellify.problem": "Mucha gente sabe qué resultado quiere en Excel, pero no los pasos para llegar a él.",
      "cellify.built": "El producto completo: complemento de Excel, backend en la nube, un agente con 55 herramientas y controles de seguridad, deshacer con un clic, un banco de pruebas con su propio simulador de Excel, inicio de sesión con Microsoft, pagos con Stripe y 8 idiomas de interfaz.",
      "cellify.result": "En funcionamiento con planes de pago desde noviembre de 2026. Publicación en Microsoft AppSource en curso.",
      "abr.line": "Análisis de fútbol que se publica solo: web, X y un vídeo diario en YouTube.",
      "abr.problem": "Los pronósticos de fútbol en internet rara vez se pueden verificar. Se editan y las derrotas desaparecen.",
      "abr.built": "Un pipeline de datos que se ejecuta cada hora en 18 ligas, un modelo estadístico con backtest de 14 temporadas y publicación automática de la web, los posts en X y un vídeo diario generado por código.",
      "abr.result": "Cada pronóstico lleva fecha y hora antes del partido y se liquida en público. Ningún paso manual entre los datos nuevos y el vídeo publicado.",
      "abr.note": "+18 · Análisis, no consejos de apuestas · jugarbien.es",
      "sp.line": "Planificador de riesgo y tamaño de posición para MetaTrader 5, a la venta en MQL5 Market.",
      "sp.problem": "Los traders manuales calculan el tamaño de la posición con calculadoras, y un lote mal calculado puede borrar una semana de trabajo.",
      "sp.built": "Un planificador en el gráfico que muestra el riesgo en dinero y el lote exacto antes de enviar la orden, con cierres parciales, break-even con costes, trailing stop y gestor de operaciones. Un solo código para MT5 y MT4, más de 400 comprobaciones automáticas por versión.",
      "sp.result": "Publicado en MQL5 Market en octubre de 2026, con la ficha en 11 idiomas.",
      "h.services": "Qué construyo",
      "s.1t": "Agentes y asistentes de IA",
      "s.1b": "Dentro de tu producto, con controles de seguridad y calidad medida.",
      "s.2t": "Complementos de Excel y Office",
      "s.2b": "Automatización en las herramientas que tu equipo ya usa.",
      "s.3t": "Pipelines de datos y automatización",
      "s.3b": "Recogida programada, informes y herramientas internas.",
      "s.4t": "Vídeo y contenido automatizados",
      "s.4b": "Vídeo generado a partir de datos, locución y publicación.",
      "s.5t": "Herramientas para MetaTrader",
      "s.5b": "Paneles, indicadores y utilidades en MQL5 y MQL4.",
      "s.6t": "MVP",
      "s.6b": "De la idea al lanzamiento, con cuentas de usuario y pagos.",
      "h.work": "Cómo colaborar",
      "w.1t": "Contrato",
      "w.1b": "En remoto, dentro de tu equipo o en una parte concreta del producto.",
      "w.2t": "Proyecto cerrado",
      "w.2b": "Resultado, precio y plazo acordados.",
      "w.3t": "Socio de producto",
      "w.3b": "Tú aportas el mercado, yo construyo y gestiono el producto.",
      "w.note": "Autónomo dado de alta en España, facturo en la UE y en todo el mundo. Inglés, español y polaco.",
      "h.now": "Ahora",
      "now": "Llevando Cellify a Microsoft AppSource y aceptando nuevos proyectos de clientes.",
      "h.contact": "Contacto",
      "copy": "Copiar",
      "reply": "Respondo en un día laborable.",
      "footer": "España",
      "_copied": "Copiado",
      "_select": "Seleccionado, pulsa Ctrl+C"
    },
    pl: {
      "role": "Niezależny developer",
      "intro.1": "Buduję i prowadzę produkty software'owe od początku do końca: agentów AI, automatyzację danych i narzędzia dla traderów. Trzy z nich działają i są używane już dziś.",
      "intro.2": "Pracuję z firmami na kontrakt i współtworzę nowe produkty z założycielami.",
      "avail": "Dostępny do nowych projektów · Hiszpania, CET",
      "avail.cta": "Napisz do mnie",
      "h.products": "Produkty",
      "case": "Studium przypadku",
      "c.problem": "Problem",
      "c.built": "Zbudowane",
      "c.result": "Efekt",
      "c.stack": "Technologie",
      "cellify.line": "Agent AI dla Microsoft Excel. Oprogramowanie w subskrypcji z płacącymi użytkownikami.",
      "cellify.problem": "Większość ludzi wie, jaki wynik chce mieć w Excelu, ale nie zna kroków, żeby do niego dojść.",
      "cellify.built": "Cały produkt: dodatek do Excela, backend w chmurze, agent z 55 narzędziami i zabezpieczeniami, cofanie jednym kliknięciem, zestaw testów z własnym symulatorem Excela, logowanie Microsoft, płatności Stripe i 8 języków interfejsu.",
      "cellify.result": "Działa z płatnymi planami od listopada 2026. Publikacja w Microsoft AppSource w toku.",
      "abr.line": "Analityka piłkarska, która publikuje się sama: strona, X i codzienny film na YouTube.",
      "abr.problem": "Typy piłkarskie w internecie rzadko da się zweryfikować. Są poprawiane, a przegrane znikają.",
      "abr.built": "Potok danych uruchamiany co godzinę dla 18 lig, model statystyczny z backtestem na 14 sezonach oraz automatyczna publikacja strony, postów na X i codziennego filmu generowanego kodem.",
      "abr.result": "Każdy typ ma znacznik czasu sprzed meczu i jest rozliczany publicznie. Żadnego ręcznego kroku między nowymi danymi a opublikowanym filmem.",
      "abr.note": "18+ · Analiza, nie porady bukmacherskie · jugarbien.es",
      "sp.line": "Planer ryzyka i wielkości pozycji dla MetaTradera 5, sprzedawany na MQL5 Market.",
      "sp.problem": "Traderzy liczą wielkość pozycji na kalkulatorach, a jeden źle policzony lot potrafi zniweczyć tydzień pracy.",
      "sp.built": "Planer na wykresie, który przed wysłaniem zlecenia pokazuje ryzyko w pieniądzach i dokładny lot, z częściowym zamykaniem, break-even z kosztami, trailing stopem i menedżerem transakcji. Jeden kod dla MT5 i MT4, ponad 400 automatycznych testów przy każdym wydaniu.",
      "sp.result": "Opublikowany na MQL5 Market w październiku 2026, z opisem w 11 językach.",
      "h.services": "Co buduję",
      "s.1t": "Agenci i asystenci AI",
      "s.1b": "W Twoim produkcie, z zabezpieczeniami i mierzoną jakością.",
      "s.2t": "Dodatki do Excela i Office",
      "s.2b": "Automatyzacja w narzędziach, których Twój zespół już używa.",
      "s.3t": "Potoki danych i automatyzacja",
      "s.3b": "Zaplanowane zbieranie danych, raporty i narzędzia wewnętrzne.",
      "s.4t": "Automatyczne wideo i treści",
      "s.4b": "Wideo generowane z danych, lektor i publikacja.",
      "s.5t": "Narzędzia dla MetaTradera",
      "s.5b": "Panele, wskaźniki i narzędzia w MQL5 i MQL4.",
      "s.6t": "MVP",
      "s.6b": "Od pomysłu do startu, z kontami użytkowników i płatnościami.",
      "h.work": "Współpraca",
      "w.1t": "Kontrakt",
      "w.1b": "Zdalnie, w Twoim zespole albo przy wydzielonej części produktu.",
      "w.2t": "Projekt o stałym zakresie",
      "w.2b": "Uzgodniony wynik, cena i termin.",
      "w.3t": "Partnerstwo produktowe",
      "w.3b": "Ty wnosisz rynek, ja buduję i prowadzę produkt.",
      "w.note": "Zarejestrowana działalność w Hiszpanii, faktury w UE i na cały świat. Angielski, hiszpański i polski.",
      "h.now": "Teraz",
      "now": "Wprowadzam Cellify do Microsoft AppSource i przyjmuję nowe projekty dla klientów.",
      "h.contact": "Kontakt",
      "copy": "Kopiuj",
      "reply": "Odpowiadam w ciągu jednego dnia roboczego.",
      "footer": "Hiszpania",
      "_copied": "Skopiowano",
      "_select": "Zaznaczono, naciśnij Ctrl+C"
    }
  };
  dict.en = { "_copied": "Copied", "_select": "Selected, press Ctrl+C" };

  var nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach(function (el) { dict.en[el.getAttribute("data-i18n")] = el.innerHTML; });
  var current = "en";

  function apply(lang) {
    if (!dict[lang]) lang = "en";
    current = lang;
    var d = dict[lang];
    nodes.forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      el.innerHTML = d[k] != null ? d[k] : dict.en[k];
    });
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  function initialLang() {
    var saved = null;
    try { saved = localStorage.getItem("lang"); } catch (e) {}
    if (saved && dict[saved]) return saved;
    var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return dict[nav] ? nav : "en";
  }

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { apply(b.dataset.lang); });
  });
  apply(initialLang());

  // Dot-matrix tile: a halftone portrait over a slowly moving dot field.
  // Nine real head poses (3x3: up/level/down × left/centre/right) are blended by the
  // pointer position, so the head turns toward the cursor. A click sends a ripple.
  function initDots() {
    var c = document.getElementById("dots");
    if (!c || !c.getContext) return;
    var ctx = c.getContext("2d");
    var still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    var GAP = 6, w = 0, h = 0, cols = 0, rows = 0, ox = 0, oy = 0;
    var sprite = null, poses = null, FADE = null;  // poses[r][c] = { L, A } at grid resolution
    var pointer = { x: -999, y: -999 };
    var look = { x: 0, y: 0 }, lookTarget = { x: 0, y: 0 };
    var ripples = [];
    var visible = true, raf = 0;
    // Pose switching: always show one sharp pose; on a change, dots flip from the
    // old pose to the new one in a short sweep toward the turn direction.
    var cur = { r: 1, c: 1 }, prev = { r: 1, c: 1 }, tSwitch = -1e9, RND = null;
    var DUR = 280, HYST = 0.14;

    function isDark() {
      var t = document.documentElement.getAttribute("data-theme");
      return t ? t === "dark" : darkQuery.matches;
    }

    // Resample each pose tile from the sprite to one value per dot.
    function buildPoses() {
      FADE = new Float32Array(rows);
      for (var y = 0; y < rows; y++) FADE[y] = Math.min(1, Math.max(0, (rows * 1.0 - y) / (rows * 0.14)));
      if (!sprite) { poses = null; return; }
      var TW = sprite.width / 3, TH = sprite.height / 3;
      var ph = rows * 1.14, pw = ph * TW / TH;
      var left = (cols - pw) / 2, top = -rows * 0.04;
      var off = document.createElement("canvas");
      off.width = cols; off.height = rows;
      var o = off.getContext("2d");
      poses = [];
      for (var r = 0; r < 3; r++) {
        poses.push([]);
        for (var k = 0; k < 3; k++) {
          o.clearRect(0, 0, cols, rows);
          o.drawImage(sprite, k * TW, r * TH, TW, TH, left, top, pw, ph);
          var d = o.getImageData(0, 0, cols, rows).data;
          var L = new Float32Array(cols * rows), A = new Float32Array(cols * rows);
          for (var i = 0; i < cols * rows; i++) { L[i] = d[i * 4] / 255; A[i] = d[i * 4 + 3] / 255; }
          poses[r].push({ L: L, A: A });
        }
      }
    }

    function resize() {
      var rect = c.getBoundingClientRect();
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width; h = rect.height;
      GAP = w < 480 ? 5 : 6;
      c.width = Math.round(w * dpr); c.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.floor(w / GAP); rows = Math.floor(h / GAP);
      ox = (w - cols * GAP) / 2 + GAP / 2; oy = (h - rows * GAP) / 2 + GAP / 2;
      buildPoses();
      RND = new Float32Array(cols * rows);
      for (var i = 0; i < RND.length; i++) RND[i] = Math.random();
    }

    // Map a look value (-1..1) to a pose index (0..2) with hysteresis around the borders.
    function axis(v, now) {
      var g = v + 1;
      if (now === 0) return g > 1.5 + HYST ? 2 : g > 0.5 + HYST ? 1 : 0;
      if (now === 2) return g < 0.5 - HYST ? 0 : g < 1.5 - HYST ? 1 : 2;
      return g < 0.5 - HYST ? 0 : g > 1.5 + HYST ? 2 : 1;
    }

    function draw(t) {
      var css = getComputedStyle(document.documentElement);
      var ink = css.getPropertyValue("--ink").trim() || "#1a1a1a";
      var live = css.getPropertyValue("--live").trim() || "#2f9e62";
      var dark = isDark();
      var maxR = GAP * 0.5;

      look.x += (lookTarget.x - look.x) * 0.09;
      look.y += (lookTarget.y - look.y) * 0.09;

      // choose the pose for where the pointer is; start a flip when it changes
      var nc = axis(lookTarget.x, cur.c), nr = axis(lookTarget.y, cur.r);
      if (nc !== cur.c || nr !== cur.r) {
        prev = { r: cur.r, c: cur.c }; cur = { r: nr, c: nc }; tSwitch = t;
      }
      var prog = still ? 1 : Math.min(1, Math.max(0, (t - tSwitch) / DUR));
      var dc = cur.c - prev.c, dr = cur.r - prev.r, span = (dc ? 1 : 0) + (dr ? 1 : 0) || 1;
      var NEW = poses ? poses[cur.r][cur.c] : null, OLD = poses ? poses[prev.r][prev.c] : null;

      ripples = ripples.filter(function (rp) { return t - rp.t0 < 2200; });

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = ink;
      for (var y = 0; y < rows; y++) {
        var fade = FADE ? FADE[y] : 0;
        for (var x = 0; x < cols; x++) {
          var i = y * cols + x;
          var px = ox + x * GAP, py = oy + y * GAP;

          var a = 0, L = 0, flip = 0;
          if (NEW) {
            var src = NEW;
            if (prog < 1) {
              // dots on the side the head turns toward flip first, with a little randomness
              var u = x / cols, v = y / rows;
              var sx = dc > 0 ? 1 - u : dc < 0 ? u : 0;
              var sy = dr > 0 ? 1 - v : dr < 0 ? v : 0;
              var s = ((sx + sy) / span) * 0.7 + RND[i] * 0.3;
              if (prog < s) src = OLD;
              var edge = Math.abs(prog - s);
              if (edge < 0.08) flip = 1 - edge / 0.08;
            }
            L = src.L[i];
            a = src.A[i] * fade;
          }

          var wave = 0.5 + 0.5 * Math.sin(px * 0.016 + py * 0.01 - t * 0.0005) * Math.cos(py * 0.018 - t * 0.00035);
          var dx = px - pointer.x, dy = py - pointer.y;
          var near = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / 80);

          var swell = flip * 0.35 * a, qx = px, qy = py;
          for (var k = 0; k < ripples.length; k++) {
            var rp = ripples[k], age = t - rp.t0;
            var rx = px - rp.x, ry = py - rp.y, d = Math.sqrt(rx * rx + ry * ry) || 1;
            var band = (d - age * 0.32) / 16;
            var amp = Math.exp(-age / 700) * Math.exp(-band * band);
            if (amp > 0.01) { swell += amp; qx += (rx / d) * amp * 7; qy += (ry / d) * amp * 7; }
          }

          var tone = dark ? 0.12 + 0.88 * Math.pow(L, 1.6) : Math.min(1, 0.06 + Math.pow(1 - L, 0.8));
          var rFace = 0.3 + tone * maxR * (dark ? 0.88 : 0.96) + wave * 0.18;
          var rBg = 0.35 + wave * 0.55;
          var r = rBg * (1 - a) + rFace * a + near * 0.6 + swell * 1.6;
          var alpha = (0.08 + wave * 0.16) * (1 - a) + 0.92 * a + near * 0.2 + swell * 0.5;
          if (r < 0.3) continue;
          ctx.globalAlpha = Math.min(1, alpha);
          ctx.beginPath(); ctx.arc(qx, qy, r, 0, 6.2832); ctx.fill();
        }
      }
      var pulse = still ? 1 : 0.6 + 0.4 * Math.sin(t * 0.003);
      ctx.globalAlpha = 1; ctx.fillStyle = live;
      ctx.beginPath(); ctx.arc(ox + (cols - 2) * GAP, oy + GAP, 2.6 + pulse, 0, 6.2832); ctx.fill();
      ctx.globalAlpha = 1;
    }

    function loop(t) {
      draw(t);
      if (!still && visible) raf = requestAnimationFrame(loop);
    }
    function start() { cancelAnimationFrame(raf); raf = requestAnimationFrame(loop); }

    // Gaze follows the pointer anywhere on the page, measured from the face in the tile.
    function aim(clientX, clientY) {
      var rect = c.getBoundingClientRect();
      var cx = rect.left + rect.width / 2, cy = rect.top + rect.height * 0.38;
      var nx = (clientX - cx) / Math.max(160, rect.width * 0.5);
      var ny = (clientY - cy) / Math.max(140, rect.height * 0.5);
      lookTarget.x = Math.max(-1, Math.min(1, nx));
      lookTarget.y = Math.max(-1, Math.min(1, ny));
      pointer.x = clientX - rect.left; pointer.y = clientY - rect.top;
      if (still) { look.x = lookTarget.x; look.y = lookTarget.y; draw(0); }
    }
    window.addEventListener("pointermove", function (e) { aim(e.clientX, e.clientY); }, { passive: true });
    document.documentElement.addEventListener("pointerleave", function () {
      lookTarget.x = lookTarget.y = 0; pointer.x = pointer.y = -999;
      if (still) { look.x = look.y = 0; draw(0); }
    });
    c.parentElement.addEventListener("pointerdown", function (e) {
      var rect = c.getBoundingClientRect();
      aim(e.clientX, e.clientY);
      if (still) return;
      ripples.push({ x: e.clientX - rect.left, y: e.clientY - rect.top, t0: performance.now() });
      if (ripples.length > 6) ripples.shift();
    });

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) {
        visible = es[0].isIntersecting;
        if (visible && !still) start();
      }).observe(c);
    }
    window.addEventListener("resize", function () { resize(); draw(performance.now()); });
    darkQuery.addEventListener && darkQuery.addEventListener("change", function () { draw(performance.now()); });
    resize(); draw(0);
    var img = new Image();
    img.onload = function () { sprite = img; buildPoses(); draw(0); if (!still) start(); };
    img.onerror = function () { if (!still) start(); };
    img.src = "assets/img/face-poses.png";
  }

  var btn = document.getElementById("copy-email");
  var email = document.getElementById("email");
  var state = document.getElementById("copy-state");
  function selectEmail() {
    var r = document.createRange();
    r.selectNodeContents(email);
    var s = window.getSelection();
    s.removeAllRanges();
    s.addRange(r);
    state.textContent = dict[current]._select;
  }
  initDots();

  btn.addEventListener("click", function () {
    var text = email.textContent.trim();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        state.textContent = dict[current]._copied;
        setTimeout(function () { state.textContent = ""; }, 2000);
      }, selectEmail);
    } else {
      selectEmail();
    }
  });
})();
