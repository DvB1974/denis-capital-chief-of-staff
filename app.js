const STORAGE_KEY = "denis-capital-chief-of-staff-v1";

const seedState = {
  activeView: "today",
  generatedAt: "11 juni 2026, 07:10",
  brief: {
    regime: "Liquidity watch",
    posture: "Voorzichtig constructief",
    summary:
      "De markt blijft risicobereid, maar de combinatie van hogere rentes, stablecoin-regulering en ETF-instroom vraagt om selectieve follow-up.",
    focus: ["BTC range bewaken", "Stablecoin-regels lezen", "AI/tokenization thesis aanscherpen"]
  },
  guardrails: [
    {
      id: "gr1",
      title: "Geen actie zonder invalidatie",
      detail: "Elke thesis of trade-gedachte moet vooraf benoemen wanneer ze ongeldig wordt."
    },
    {
      id: "gr2",
      title: "Scheid nieuws van positie",
      detail: "Een belangrijk artikel is pas actiegericht als marktdata of thesisbewijs het ondersteunt."
    },
    {
      id: "gr3",
      title: "Review voor vergroten",
      detail: "Exposure verhogen vraagt om een open besluit, confidence en reviewdatum."
    }
  ],
  routine: [
    { id: "m1", time: "07:15", title: "Scan briefing", detail: "Lees top 3 signalen en markeer wat actie vraagt.", done: false },
    { id: "m2", time: "07:25", title: "Check triggers", detail: "Zijn er condities geraakt die vooraf een reactie hadden?", done: false },
    { id: "m3", time: "07:35", title: "Besluit of wacht", detail: "Open acties moeten eindigen als besluit, trigger of wachten.", done: false },
    { id: "m4", time: "Vrijdag", title: "Review decisions", detail: "Sluit oude besluiten of verlaag confidence.", done: true }
  ],
  roadmap: [
    { id: "rm1", phase: "1", title: "Manual cockpit", detail: "Huidige versie: demo-data, lokale opslag en handmatige capture.", status: "done" },
    { id: "rm2", phase: "2", title: "Read-only integrations", detail: "Lees exports uit News, CryptoPulse en Trends voor automatische signalen.", status: "next" },
    { id: "rm3", phase: "3", title: "Scoring engine", detail: "Bereken urgentie uit bron, confidence, impact, leeftijd en thesis-match.", status: "planned" },
    { id: "rm4", phase: "4", title: "Automated briefing", detail: "Publiceer dagelijkse briefing als dashboard, mail of iPhone widget.", status: "planned" }
  ],
  sources: [
    {
      id: "news",
      name: "Denis Capital News",
      role: "Feitenstroom",
      url: "https://dvb1974.github.io/denis-news-reader/",
      status: "Live",
      handoff: "Artikelen worden acties, theses of besluitreviews."
    },
    {
      id: "pulse",
      name: "CryptoPulse",
      role: "Marktmonitor",
      url: "https://dvb1974.github.io/cryptopulse-dashboard/",
      status: "Live",
      handoff: "Prijs- en sentimentmoves worden triggers."
    },
    {
      id: "trends",
      name: "Trends Bubble Map",
      role: "Trendradar",
      url: "https://dvb1974.github.io/trends-bubbles/",
      status: "Live",
      handoff: "Groeiende clusters worden watchlist- en thesis-items."
    }
  ],
  signals: [
    {
      id: "s1",
      source: "Denis Capital News",
      title: "Fed-sprekers houden hogere rente langer open",
      impact: "Macro druk op long-duration assets; check of crypto-rally vooral liquiditeit of narratief is.",
      tone: "risk",
      confidence: 72
    },
    {
      id: "s2",
      source: "CryptoPulse",
      title: "BTC houdt steunzone vast terwijl ETH achterblijft",
      impact: "Relatieve sterkte blijft bij BTC; geen rotatie-thesis zonder volume-bevestiging.",
      tone: "neutral",
      confidence: 66
    },
    {
      id: "s3",
      source: "Trends Bubble Map",
      title: "Stablecoins en tokenization groeien als cluster",
      impact: "Thema kan structureler worden; maak lijst met beursgenoteerde exposure en protocollen.",
      tone: "opportunity",
      confidence: 81
    }
  ],
  actions: [
    {
      id: "a1",
      title: "Lees stablecoin-regulering update",
      owner: "Denis",
      due: "Vandaag",
      source: "News",
      impact: "Hoog",
      status: "open",
      notes: "Koppel gevolgen aan Circle, Coinbase en DeFi-liquiditeit."
    },
    {
      id: "a2",
      title: "Controleer BTC invalidatiezone",
      owner: "Denis",
      due: "Vandaag 16:00",
      source: "CryptoPulse",
      impact: "Hoog",
      status: "open",
      notes: "Geen extra exposure als prijs onder steun sluit met oplopend volume."
    },
    {
      id: "a3",
      title: "Maak watchlist tokenization",
      owner: "Denis",
      due: "Deze week",
      source: "Trends Map",
      impact: "Middel",
      status: "waiting",
      notes: "Combineer equities, infra tokens en custody-spelers."
    }
  ],
  theses: [
    {
      id: "t1",
      title: "BTC blijft de primaire liquiditeitsbarometer",
      status: "active",
      confidence: 74,
      nextCheck: "Na volgende CPI-print",
      catalyst: "ETF-instroom blijft positief terwijl BTC steun houdt.",
      invalidation: "Daily close onder steun met dalende ETF-instroom.",
      evidenceFor: "ETF-instroom blijft positief; relatieve sterkte versus ETH.",
      evidenceAgainst: "Dollarliquiditeit kan verkrappen bij hawkish Fed-retoriek."
    },
    {
      id: "t2",
      title: "Stablecoin-regulering versnelt institutionele adoptie",
      status: "active",
      confidence: 68,
      nextCheck: "Na wetsupdate VS/EU",
      catalyst: "Wetgeving beweegt van debat naar concrete implementatie.",
      invalidation: "Regels beperken yield, settlement of distributie sterker dan verwacht.",
      evidenceFor: "Trendcluster groeit; betalings- en treasury use cases worden concreter.",
      evidenceAgainst: "Compliance kan kleinere spelers uitdrukken en DeFi-rendementen verlagen."
    },
    {
      id: "t3",
      title: "AI x crypto blijft narratief, nog geen cashflow-thesis",
      status: "watch",
      confidence: 51,
      nextCheck: "Bij omzetdata of enterprise pilots",
      catalyst: "Nieuwe pilots tonen concrete vraag naar compute, identity of data provenance.",
      invalidation: "Aandacht blijft hoog maar usage, fees en klanten blijven vlak.",
      evidenceFor: "Bubble Map toont hoge aandacht.",
      evidenceAgainst: "Veel tokens missen duurzame vraag."
    }
  ],
  decisions: [
    {
      id: "d1",
      title: "Geen extra BTC toevoegen boven de range",
      date: "10 juni 2026",
      status: "review",
      confidence: 70,
      rationale: "Prijsactie is sterk, maar macro-trigger is onvoldoende bevestigd.",
      reviewDate: "14 juni 2026"
    },
    {
      id: "d2",
      title: "Tokenization thesis uitbreiden naar equity watchlist",
      date: "9 juni 2026",
      status: "open",
      confidence: 64,
      rationale: "Thema groeit over crypto heen; mogelijk betere risk-adjusted exposure via infra/fintech.",
      reviewDate: "17 juni 2026"
    }
  ],
  triggers: [
    {
      id: "g1",
      title: "BTC daily close onder steunzone",
      condition: "Onder 64k met volume boven 20-daags gemiddelde",
      response: "Risk review openen en thesis t1 confidence verlagen.",
      armed: true
    },
    {
      id: "g2",
      title: "Stablecoin bill naar stemming",
      condition: "Officiele stemming ingepland of tekst definitief",
      response: "News deep dive en action voor beursgenoteerde exposure.",
      armed: true
    },
    {
      id: "g3",
      title: "ETH/BTC breekt boven 50-daags gemiddelde",
      condition: "Twee dagsluitingen boven trendniveau",
      response: "Rotatie-thesis opnieuw beoordelen.",
      armed: false
    }
  ],
  review: [
    {
      id: "r1",
      prompt: "Welke thesis werd sterker door nieuwe data?",
      answer: "Stablecoin-regulering als adoptieversneller.",
      status: "done"
    },
    {
      id: "r2",
      prompt: "Welke open beslissing heeft een harde deadline nodig?",
      answer: "Tokenization equity watchlist.",
      status: "open"
    },
    {
      id: "r3",
      prompt: "Welke alert gaf ruis en kan lager in prioriteit?",
      answer: "AI tokens zonder cashflow-data.",
      status: "open"
    }
  ]
};

let state = loadState();

const app = document.querySelector("#app");
const title = document.querySelector("#view-title");
const kicker = document.querySelector("#view-kicker");
const lastSaved = document.querySelector("#last-saved");
const dialog = document.querySelector("#capture-dialog");

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...clone(seedState), ...saved } : clone(seedState);
  } catch {
    return clone(seedState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  lastSaved.textContent = `Opgeslagen ${new Date().toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" })}`;
}

function setView(view) {
  state.activeView = view;
  saveState();
  render();
}

function badge(text, tone = "") {
  return `<span class="badge ${tone}">${text}</span>`;
}

function confidence(value) {
  return `
    <div class="confidence" aria-label="Confidence ${value}%">
      <span style="width:${value}%"></span>
    </div>
  `;
}

function render() {
  const views = {
    today: ["Vandaag", "Daily operating system", renderToday],
    actions: ["Acties", "Van signaal naar opvolging", renderActions],
    theses: ["Theses", "Hypotheses met bewijsdiscipline", renderTheses],
    decisions: ["Besluiten", "Rationale en reviewmomenten", renderDecisions],
    triggers: ["Triggers", "Wachten tot de markt spreekt", renderTriggers],
    review: ["Review", "Leren, sluiten, aanscherpen", renderReview],
    roadmap: ["Roadmap", "Van prototype naar systeem", renderRoadmap]
  };
  const [viewTitle, viewKicker, renderer] = views[state.activeView] || views.today;
  title.textContent = viewTitle;
  kicker.textContent = viewKicker;
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.activeView);
  });
  app.innerHTML = renderer();
  app.focus({ preventScroll: true });
}

function renderToday() {
  const openActions = state.actions.filter((item) => item.status === "open").length;
  const armedTriggers = state.triggers.filter((item) => item.armed).length;
  const reviewDecisions = state.decisions.filter((item) => item.status === "review").length;
  return `
    <section class="overview-grid">
      <article class="hero-panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">Briefing gegenereerd ${state.generatedAt}</p>
            <h2>${state.brief.regime}</h2>
          </div>
          ${badge(state.brief.posture, "blue")}
        </div>
        <p class="lead">${state.brief.summary}</p>
        <div class="focus-row">
          ${state.brief.focus.map((item) => `<button type="button" data-create-action="${item}">${item}</button>`).join("")}
        </div>
      </article>
      <article class="metric-card">
        <span>${openActions}</span>
        <strong>open acties</strong>
        <p>Moeten vandaag of deze week naar besluit of wachten.</p>
      </article>
      <article class="metric-card">
        <span>${armedTriggers}</span>
        <strong>gewapende triggers</strong>
        <p>Alerts met vooraf bepaalde reactie.</p>
      </article>
      <article class="metric-card">
        <span>${reviewDecisions}</span>
        <strong>besluiten in review</strong>
        <p>Voorkomt dat oude aannames stil blijven doorwerken.</p>
      </article>
    </section>

    <section class="source-rail" aria-label="Denis Capital bronnen">
      ${state.sources.map((source) => `
        <article class="source-card">
          <div>
            <div class="item-head">
              <h2>${source.name}</h2>
              ${badge(source.status, "green")}
            </div>
            <p><strong>${source.role}</strong> · ${source.handoff}</p>
          </div>
          <a class="source-link" href="${source.url}" target="_blank" rel="noopener">Open</a>
        </article>
      `).join("")}
    </section>

    <section class="guardrail-panel">
      <div>
        <p class="eyebrow">Investment guardrails</p>
        <h2>Voorkom impulsbeslissingen</h2>
        <p>De Chief of Staff ordent informatie en besluitdiscipline. Het is geen financieel advies en plaatst geen orders.</p>
      </div>
      <div class="guardrail-list">
        ${state.guardrails.map((rule) => `
          <article>
            <strong>${rule.title}</strong>
            <span>${rule.detail}</span>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="routine-panel">
      <div class="section-title">
        <h2>Morning operating checklist</h2>
        ${badge(`${state.routine.filter((item) => item.done).length}/${state.routine.length} klaar`, "blue")}
      </div>
      <div class="routine-grid">
        ${state.routine.map((item) => `
          <label class="routine-item">
            <input type="checkbox" data-toggle-routine="${item.id}" ${item.done ? "checked" : ""}>
            <span>
              <strong>${item.time} · ${item.title}</strong>
              <em>${item.detail}</em>
            </span>
          </label>
        `).join("")}
      </div>
    </section>

    <section class="split">
      <div>
        <div class="section-title">
          <h2>Signalen met impact</h2>
          <button class="text-button" type="button" data-view-jump="actions">naar acties</button>
        </div>
        <div class="list">
          ${state.signals.map(renderSignal).join("")}
        </div>
      </div>
      <div>
        <div class="section-title">
          <h2>Aandacht vandaag</h2>
          <button class="text-button" type="button" data-view-jump="triggers">triggers</button>
        </div>
        <div class="list">
          ${state.actions.slice(0, 3).map(renderAction).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderSignal(signal) {
  const tone = signal.tone === "risk" ? "red" : signal.tone === "opportunity" ? "green" : "blue";
  return `
    <article class="item">
      <div>
        <div class="item-head">
          <h3>${signal.title}</h3>
          ${badge(signal.source)}
        </div>
        <p>${signal.impact}</p>
        ${confidence(signal.confidence)}
      </div>
      ${badge(signal.tone, tone)}
    </article>
  `;
}

function renderActions() {
  return `
    <section class="board three">
      ${["open", "waiting", "done"].map((status) => `
        <div class="lane">
          <div class="lane-head">
            <h2>${statusLabel(status)}</h2>
            ${badge(state.actions.filter((item) => item.status === status).length)}
          </div>
          ${state.actions.filter((item) => item.status === status).map(renderAction).join("") || emptyState("Geen acties.")}
        </div>
      `).join("")}
    </section>
  `;
}

function renderAction(action) {
  return `
    <article class="item action-item">
      <div>
        <div class="item-head">
          <h3>${action.title}</h3>
          ${badge(action.impact, action.impact === "Hoog" ? "red" : "blue")}
        </div>
        <p>${action.notes}</p>
        <div class="meta-row">
          ${badge(action.source)}
          ${badge(action.due)}
          ${badge(action.owner)}
        </div>
      </div>
      <select data-action-status="${action.id}" aria-label="Status ${action.title}">
        ${["open", "waiting", "done"].map((status) => `<option value="${status}" ${action.status === status ? "selected" : ""}>${statusLabel(status)}</option>`).join("")}
      </select>
    </article>
  `;
}

function renderTheses() {
  return `
    <section class="grid-cards">
      ${state.theses.map((thesis) => `
        <article class="card">
          <div class="item-head">
            <h2>${thesis.title}</h2>
            ${badge(thesis.status, thesis.status === "active" ? "green" : "blue")}
          </div>
          ${confidence(thesis.confidence)}
          <dl class="evidence">
            <div><dt>Catalyst</dt><dd>${thesis.catalyst}</dd></div>
            <div><dt>Invalidatie</dt><dd>${thesis.invalidation}</dd></div>
            <div><dt>Voor</dt><dd>${thesis.evidenceFor}</dd></div>
            <div><dt>Tegen</dt><dd>${thesis.evidenceAgainst}</dd></div>
            <div><dt>Volgende check</dt><dd>${thesis.nextCheck}</dd></div>
          </dl>
          <div class="button-row">
            <button type="button" data-adjust-thesis="${thesis.id}" data-delta="5">+ confidence</button>
            <button type="button" data-adjust-thesis="${thesis.id}" data-delta="-5">- confidence</button>
          </div>
        </article>
      `).join("")}
    </section>
  `;
}

function renderDecisions() {
  return `
    <section class="list">
      ${state.decisions.map((decision) => `
        <article class="item decision-item">
          <div>
            <div class="item-head">
              <h3>${decision.title}</h3>
              ${badge(decision.status, decision.status === "review" ? "red" : "blue")}
            </div>
            <p>${decision.rationale}</p>
            <div class="meta-row">
              ${badge(decision.date)}
              ${badge(`review ${decision.reviewDate}`)}
              ${badge(`${decision.confidence}% confidence`)}
            </div>
            ${confidence(decision.confidence)}
          </div>
          <button class="ghost-button" type="button" data-close-decision="${decision.id}">Sluit review</button>
        </article>
      `).join("")}
    </section>
  `;
}

function renderTriggers() {
  return `
    <section class="list">
      ${state.triggers.map((trigger) => `
        <article class="item trigger-item">
          <div>
            <div class="item-head">
              <h3>${trigger.title}</h3>
              ${badge(trigger.armed ? "actief" : "pauze", trigger.armed ? "green" : "")}
            </div>
            <p><strong>Conditie:</strong> ${trigger.condition}</p>
            <p><strong>Reactie:</strong> ${trigger.response}</p>
          </div>
          <label class="switch">
            <input type="checkbox" data-toggle-trigger="${trigger.id}" ${trigger.armed ? "checked" : ""}>
            <span></span>
          </label>
        </article>
      `).join("")}
    </section>
  `;
}

function renderReview() {
  return `
    <section class="review-layout">
      <article class="hero-panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">Wekelijkse discipline</p>
            <h2>Review wat de Chief heeft geleerd</h2>
          </div>
          ${badge(`${state.review.filter((item) => item.status === "open").length} open`, "red")}
        </div>
        <p class="lead">De waarde zit niet in meer signalen, maar in betere herhaling: aannames sluiten, triggers aanscherpen en besluiten herzien.</p>
      </article>
      <div class="list">
        ${state.review.map((item) => `
          <article class="item">
            <div>
              <div class="item-head">
                <h3>${item.prompt}</h3>
                ${badge(item.status, item.status === "done" ? "green" : "blue")}
              </div>
              <p>${item.answer}</p>
            </div>
            <button class="ghost-button" type="button" data-toggle-review="${item.id}">${item.status === "done" ? "Heropen" : "Markeer klaar"}</button>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderRoadmap() {
  return `
    <section class="hero-panel">
      <div class="panel-head">
        <div>
          <p class="eyebrow">Integratiekaart</p>
          <h2>Maak de Chief de laag boven Denis Capital</h2>
        </div>
        ${badge("prototype klaar", "green")}
      </div>
      <p class="lead">De volgende stap is niet meer schermen, maar betrouwbare signalen uit de drie bestaande bronnen inlezen en scoren.</p>
    </section>
    <section class="roadmap">
      ${state.roadmap.map((step) => `
        <article class="roadmap-step">
          <span>${step.phase}</span>
          <div>
            <div class="item-head">
              <h3>${step.title}</h3>
              ${badge(step.status, step.status === "done" ? "green" : step.status === "next" ? "blue" : "")}
            </div>
            <p>${step.detail}</p>
          </div>
        </article>
      `).join("")}
    </section>
    <section class="card">
      <h2>Voorgesteld datamodel</h2>
      <dl class="evidence">
        <div><dt>Signal</dt><dd>source, title, timestamp, confidence, impact, linkedTrend, linkedAsset</dd></div>
        <div><dt>Action</dt><dd>title, due, sourceSignal, impact, status, owner, decisionRequired</dd></div>
        <div><dt>Thesis</dt><dd>title, catalyst, invalidation, confidence, evidenceFor, evidenceAgainst, nextCheck</dd></div>
        <div><dt>Decision</dt><dd>date, rationale, confidence, trigger, reviewDate, outcome</dd></div>
      </dl>
    </section>
  `;
}

function statusLabel(status) {
  return { open: "Open", waiting: "Wachten", done: "Klaar" }[status] || status;
}

function emptyState(text) {
  return `<div class="empty">${text}</div>`;
}

function generateBrief() {
  const open = state.actions.filter((item) => item.status === "open").length;
  const waiting = state.actions.filter((item) => item.status === "waiting").length;
  const topSignal = [...state.signals].sort((a, b) => b.confidence - a.confidence)[0];
  state.generatedAt = new Date().toLocaleString("nl-NL", { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" });
  state.brief.summary = `${topSignal.title} is het sterkste signaal. Er staan ${open} open acties en ${waiting} wacht-items; focus op beslissingen met vooraf bepaalde triggers.`;
  state.brief.regime = open > 2 ? "Execution watch" : "Signal watch";
  saveState();
  render();
}

function addCapture() {
  const titleInput = document.querySelector("#capture-title");
  const typeInput = document.querySelector("#capture-type");
  const notesInput = document.querySelector("#capture-notes");
  const capturedTitle = titleInput.value.trim();
  const notes = notesInput.value.trim() || "Handmatig toegevoegd vanuit snelle input.";
  if (!capturedTitle) return;
  const id = `${typeInput.value}-${Date.now()}`;
  if (typeInput.value === "action") {
    state.actions.unshift({ id, title: capturedTitle, owner: "Denis", due: "Nieuw", source: "Capture", impact: "Middel", status: "open", notes });
  }
  if (typeInput.value === "thesis") {
    state.theses.unshift({ id, title: capturedTitle, status: "watch", confidence: 50, nextCheck: "Nog plannen", catalyst: "Nog benoemen.", invalidation: "Nog benoemen.", evidenceFor: notes, evidenceAgainst: "Nog te onderzoeken." });
  }
  if (typeInput.value === "decision") {
    state.decisions.unshift({ id, title: capturedTitle, date: "Vandaag", status: "open", confidence: 50, rationale: notes, reviewDate: "Nog plannen" });
  }
  if (typeInput.value === "trigger") {
    state.triggers.unshift({ id, title: capturedTitle, condition: notes, response: "Maak review-item aan en herbereken briefing.", armed: true });
  }
  titleInput.value = "";
  notesInput.value = "";
  dialog.close();
  saveState();
  render();
}

app.addEventListener("change", (event) => {
  const statusId = event.target.dataset.actionStatus;
  if (statusId) {
    const action = state.actions.find((item) => item.id === statusId);
    action.status = event.target.value;
    saveState();
    render();
  }
  const triggerId = event.target.dataset.toggleTrigger;
  if (triggerId) {
    const trigger = state.triggers.find((item) => item.id === triggerId);
    trigger.armed = event.target.checked;
    saveState();
    render();
  }
  const routineId = event.target.dataset.toggleRoutine;
  if (routineId) {
    const routine = state.routine.find((item) => item.id === routineId);
    routine.done = event.target.checked;
    saveState();
    render();
  }
});

document.body.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-view]");
  if (nav) setView(nav.dataset.view);

  const viewJump = event.target.closest("[data-view-jump]");
  if (viewJump) setView(viewJump.dataset.viewJump);

  const action = event.target.closest("[data-action]");
  if (action?.dataset.action === "generate-brief") generateBrief();
  if (action?.dataset.action === "quick-capture") dialog.showModal();
  if (action?.dataset.action === "save-capture") addCapture();
  if (action?.dataset.action === "reset-demo") {
    state = clone(seedState);
    saveState();
    render();
  }

  const createAction = event.target.closest("[data-create-action]");
  if (createAction) {
    state.actions.unshift({
      id: `a-${Date.now()}`,
      title: createAction.dataset.createAction,
      owner: "Denis",
      due: "Vandaag",
      source: "Briefing",
      impact: "Middel",
      status: "open",
      notes: "Aangemaakt vanuit de dagelijkse focus."
    });
    saveState();
    setView("actions");
  }

  const thesisAdjust = event.target.closest("[data-adjust-thesis]");
  if (thesisAdjust) {
    const thesis = state.theses.find((item) => item.id === thesisAdjust.dataset.adjustThesis);
    thesis.confidence = Math.max(0, Math.min(100, thesis.confidence + Number(thesisAdjust.dataset.delta)));
    saveState();
    render();
  }

  const closeDecision = event.target.closest("[data-close-decision]");
  if (closeDecision) {
    const decision = state.decisions.find((item) => item.id === closeDecision.dataset.closeDecision);
    decision.status = "closed";
    saveState();
    render();
  }

  const reviewToggle = event.target.closest("[data-toggle-review]");
  if (reviewToggle) {
    const item = state.review.find((entry) => entry.id === reviewToggle.dataset.toggleReview);
    item.status = item.status === "done" ? "open" : "done";
    saveState();
    render();
  }
});

render();
