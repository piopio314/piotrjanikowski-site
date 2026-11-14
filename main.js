(function () {
  "use strict";

  // English lives in the HTML. Spanish and Polish are here.
  var dict = {
    es: {
      "intro.title": "Diseño, construyo y gestiono productos de software.",
      "intro.sub": "Agentes de IA, plataformas de datos y herramientas de trading, desde la primera idea hasta los primeros clientes de pago. Desarrollador independiente en España, disponible para contratos y colaboraciones de producto.",
      "label.work": "Proyectos",
      "label.services": "Servicios",
      "label.contact": "Contacto",
      "f.role": "Rol",
      "f.notable": "Destacado",
      "f.stack": "Tecnología",
      "f.since": "Desde",
      "cellify.body": "Un agente de IA dentro de Microsoft Excel. El usuario describe el resultado que necesita y Cellify crea tablas, fórmulas, gráficos y tablas dinámicas paso a paso, comprueba cada cambio y lo deshace con un clic. Se vende como suscripción, con inicio de sesión de Microsoft y pagos con Stripe.",
      "cellify.role": "Fundador. Producto, arquitectura, IA y backend en la nube.",
      "cellify.notable": "55 herramientas de agente con controles de seguridad integrados, un simulador de Excel propio para pruebas y 8 idiomas de interfaz.",
      "abr.body": "Un servicio de análisis de fútbol que funciona solo. Cada hora recoge datos de 18 ligas, un modelo estadístico emite sus pronósticos antes del partido y el sistema publica la web, los posts en X y un vídeo diario en YouTube sin pasos manuales. Cada pronóstico lleva fecha y hora y se liquida en público.",
      "abr.role": "Fundador. Datos, modelado, automatización y producción de vídeo.",
      "abr.notable": "Backtest de 14 temporadas, 410 equipos analizados y producción de vídeo totalmente automatizada.",
      "abr.note": "+18 · Análisis, no consejos de apuestas · jugarbien.es",
      "sp.body": "Un planificador de riesgo y tamaño de posición para MetaTrader 5. El trader dibuja la operación en el gráfico, ve el riesgo en dinero y el lote exacto antes de enviarla, y gestiona cierres parciales, break-even y trailing stop desde un solo panel. Disponible en MQL5 Market.",
      "sp.role": "Autor. Diseño de producto, desarrollo en MQL5 y publicación.",
      "sp.notable": "Un solo código para MT5 y MT4, más de 400 comprobaciones automáticas por versión y ficha en 11 idiomas.",
      "s.1t": "Agentes y asistentes de IA",
      "s.1b": "Integrados en tu producto, con controles de seguridad y calidad medible.",
      "s.2t": "Complementos de Excel y Office",
      "s.2b": "Automatización y asistentes en las herramientas que tu equipo ya usa.",
      "s.3t": "Plataformas de datos y automatización",
      "s.3b": "Recogida de datos programada, informes y herramientas internas.",
      "s.4t": "Vídeo y contenido automatizados",
      "s.4b": "Vídeo generado por código, locución y publicación.",
      "s.5t": "Herramientas para MetaTrader",
      "s.5b": "Paneles, indicadores y utilidades en MQL5 y MQL4.",
      "s.6t": "MVP",
      "s.6b": "De la idea a un producto lanzado, con cuentas de usuario y pagos.",
      "terms": "Contrato, proyecto cerrado o colaboración de producto. Facturación desde España (UE).",
      "contact.lead": "¿Tienes un proyecto en mente? Escríbeme.",
      "contact.copy": "Copiar",
      "footer.place": "España",
      "_copied": "Copiado",
      "_select": "Seleccionado, pulsa Ctrl+C"
    },
    pl: {
      "intro.title": "Projektuję, buduję i prowadzę produkty software'owe.",
      "intro.sub": "Agenci AI, platformy danych i narzędzia dla traderów, od pierwszego pomysłu do płacących klientów. Niezależny developer z Hiszpanii, dostępny do kontraktów i partnerstw produktowych.",
      "label.work": "Projekty",
      "label.services": "Usługi",
      "label.contact": "Kontakt",
      "f.role": "Rola",
      "f.notable": "Wyróżnia",
      "f.stack": "Technologie",
      "f.since": "Od",
      "cellify.body": "Agent AI w Microsoft Excel. Użytkownik opisuje, jakiego wyniku potrzebuje, a Cellify krok po kroku buduje tabele, formuły, wykresy i tabele przestawne, sprawdza każdą zmianę i cofa ją jednym kliknięciem. Sprzedawany w subskrypcji, z logowaniem Microsoft i płatnościami Stripe.",
      "cellify.role": "Założyciel. Produkt, architektura, AI i backend w chmurze.",
      "cellify.notable": "55 narzędzi agenta z wbudowanymi zabezpieczeniami, własny symulator Excela do testów, 8 języków interfejsu.",
      "abr.body": "Serwis analityki piłkarskiej, który działa sam. Co godzinę zbiera dane z 18 lig, model statystyczny wydaje typy przed meczem, a system publikuje stronę, posty na X i codzienny film na YouTube bez ręcznej pracy. Każdy typ ma znacznik czasu i jest rozliczany publicznie.",
      "abr.role": "Założyciel. Dane, modelowanie, automatyzacja i produkcja wideo.",
      "abr.notable": "Backtest na 14 sezonach, 410 analizowanych drużyn, w pełni zautomatyzowana produkcja wideo.",
      "abr.note": "18+ · Analiza, nie porady bukmacherskie · jugarbien.es",
      "sp.body": "Planer ryzyka i wielkości pozycji dla MetaTradera 5. Trader rysuje transakcję na wykresie, widzi ryzyko w pieniądzach i dokładny lot przed wysłaniem, a potem z jednego panelu zarządza częściowym zamknięciem, break-even i trailing stopem. Dostępny na MQL5 Market.",
      "sp.role": "Autor. Projekt produktu, programowanie w MQL5, wydania.",
      "sp.notable": "Jeden kod dla MT5 i MT4, ponad 400 automatycznych testów przy każdym wydaniu, opis w 11 językach.",
      "s.1t": "Agenci i asystenci AI",
      "s.1b": "Wbudowani w Twój produkt, z zabezpieczeniami i mierzalną jakością.",
      "s.2t": "Dodatki do Excela i Office",
      "s.2b": "Automatyzacja i asystenci w narzędziach, których Twój zespół już używa.",
      "s.3t": "Platformy danych i automatyzacja",
      "s.3b": "Zaplanowane zbieranie danych, raporty i narzędzia wewnętrzne.",
      "s.4t": "Automatyczne wideo i treści",
      "s.4b": "Wideo generowane kodem, lektor i publikacja.",
      "s.5t": "Narzędzia dla MetaTradera",
      "s.5b": "Panele, wskaźniki i narzędzia w MQL5 i MQL4.",
      "s.6t": "MVP",
      "s.6b": "Od pomysłu do uruchomionego produktu z kontami użytkowników i płatnościami.",
      "terms": "Kontrakt, projekt o stałym zakresie albo partnerstwo produktowe. Faktury z Hiszpanii (UE).",
      "contact.lead": "Masz pomysł na projekt? Napisz.",
      "contact.copy": "Kopiuj",
      "footer.place": "Hiszpania",
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
  btn.addEventListener("click", function () {
    var text = email.textContent.trim();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        state.textContent = dict[current]._copied;
        setTimeout(function () { state.textContent = ""; }, 2500);
      }, selectEmail);
    } else {
      selectEmail();
    }
  });
})();
