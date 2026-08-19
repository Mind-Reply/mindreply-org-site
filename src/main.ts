import './styles.css';

const auditUrl = '/audit';

const leakEvents = [
  ['Visitor asked about pricing', '12s ago', 'question'],
  ['Visitor needs service-area confirmation', '38s ago', 'question'],
  ['Visitor wants appointment availability', '1m ago', 'question'],
  ['Visitor left before form submission', '2m ago', 'alert'],
  ['Quote request captured', '3m ago', 'captured'],
];

const packages = [
  { number: '01', name: 'QuoteCapture', audience: 'For home services', copy: 'Captures job requests, service areas, urgency, and the cleanest next handoff.' },
  { number: '02', name: 'Patient Intake', audience: 'For clinics & aesthetics', copy: 'Captures appointment intent and reception questions with safe, structured handoff.' },
  { number: '03', name: 'Proposal Rescue', audience: 'For agencies & consultants', copy: 'Captures buyer questions, objections, and discovery-call intent before proposals stall.' },
];

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) throw new Error('App root not found');

app.innerHTML = `
  <main class="site-shell">
    <header class="topbar">
      <a class="brand" href="#top" aria-label="MindReply home">
        <span class="brand-mark" aria-hidden="true">M</span>
        <span><strong>MindReply</strong><small>Revenue operators</small></span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#leak">The leak</a>
        <a href="#match">Operator match</a>
        <a href="#operators">Operators</a>
        <a href="#sprint">Setup sprint</a>
        <a href="#status">Status</a>
      </nav>
      <a class="button compact" href="${auditUrl}">Request Leak Audit</a>
    </header>

    <section id="top" class="hero reveal">
      <div class="hero-copy">
        <span class="eyebrow">Website Leak Audit + WebChat Operator Setup</span>
        <h1>Your website is leaking customers while <em>nobody answers.</em></h1>
        <p>MindReply installs Website Chat Operators that capture, qualify, and route warm visitors before attention disappears.</p>
        <div class="cta-row">
          <a class="button" href="${auditUrl}">Request Leak Audit <span>→</span></a>
          <a class="button secondary" href="#operators">See operator packages</a>
        </div>
        <p class="microcopy">Built for service businesses, clinics, and agencies that need a clearer visitor handoff.</p>
      </div>
      <aside class="monitor" aria-label="MindReply Leak Monitor">
        <div class="monitor-head"><span>Leak Monitor</span><i></i></div>
        <div class="monitor-events">
          ${leakEvents.map(([label, time, tone]) => `<div class="monitor-event ${tone}"><span class="event-icon">${tone === 'captured' ? '✓' : tone === 'alert' ? '!' : '◌'}</span><span class="event-label">${label}</span>${tone === 'captured' ? '<b>Captured</b>' : ''}<time>${time}</time></div>`).join('')}
        </div>
        <div class="operator-chip"><span class="brand-mark mini">M</span><div><strong>MindReply Operator</strong><small>Replies instantly</small></div></div>
      </aside>
    </section>

    <section id="leak" class="section leak-section reveal">
      <div class="section-heading"><span class="eyebrow">The Revenue Leak</span><h2>Where websites lose customers.</h2></div>
      <div class="leak-grid">
        ${[
          ['01', 'No Answer', 'Visitors have buying questions, but the website only gives a form, phone number, or generic copy.'],
          ['02', 'Slow Response', 'A visitor signals intent, but the business responds after interest has cooled.'],
          ['03', 'Weak Qualification', 'The business receives vague messages instead of useful service, location, urgency, and contact details.'],
          ['04', 'Broken Handoff', 'The conversation never becomes a quote request, appointment request, or booked next step.'],
        ].map(([id, title, copy]) => `<article class="leak-card"><span>${id}</span><h3>${title}</h3><p>${copy}</p></article>`).join('')}
      </div>
    </section>

    <section id="operators" class="section reveal">
      <div class="section-heading centered"><span class="eyebrow">Operator Packages</span><h2>Three operators. One clear handoff.</h2></div>
      <div class="package-grid">
        ${packages.map((item) => `<article class="package-card"><span class="package-number">${item.number}</span><h3>${item.name}</h3><strong>${item.audience}</strong><p>${item.copy}</p><a href="${auditUrl}">Explore ${item.name} <span>→</span></a></article>`).join('')}
      </div>
    </section>

    <section id="match" class="match-section reveal">
      <div class="match-intro">
        <span class="eyebrow">Interactive Operator Match</span>
        <h2>Choose the leak. See the first handoff to fix.</h2>
        <p>Answer two operational questions to surface the right MindReply operator and a focused audit brief. This quick match runs in your browser and does not collect or store your responses.</p>
      </div>
      <div class="match-console" aria-live="polite">
        <div class="match-step">
          <span>01</span>
          <div><strong>Your business model</strong><p>Where do visitor questions usually turn into revenue?</p></div>
          <div class="match-options" data-group="business">
            <button type="button" data-value="home">Home services</button>
            <button type="button" data-value="clinic">Clinic or aesthetics</button>
            <button type="button" data-value="agency">Agency or consulting</button>
          </div>
        </div>
        <div class="match-step">
          <span>02</span>
          <div><strong>The biggest drop-off</strong><p>Which visitor moment currently costs you the most?</p></div>
          <div class="match-options" data-group="leak">
            <button type="button" data-value="question">Questions go unanswered</button>
            <button type="button" data-value="slow">Follow-up arrives too late</button>
            <button type="button" data-value="handoff">Interest never becomes a next step</button>
          </div>
        </div>
        <div id="matchResult" class="match-result" aria-live="polite">
          <span class="match-status">Awaiting two selections</span>
          <div><p class="eyebrow">Your operator path</p><h3>Start with the visitor moment that is leaking.</h3><p>Choose your business model and leak point to generate a focused starting brief.</p></div>
          <a id="matchAuditLink" class="button secondary" href="${auditUrl}">Open the audit <span>→</span></a>
        </div>
      </div>
    </section>

    <section id="sprint" class="sprint reveal">
      <div><span class="eyebrow">The Setup Sprint</span><h2>Find the leak. Map the response. Launch the operator.</h2><p>A focused implementation that moves from visitor questions to qualified next actions without a drawn-out project.</p></div>
      <ol>
        <li><b>01</b><span>Audit</span></li><li><b>02</b><span>Map</span></li><li><b>03</b><span>Build</span></li><li><b>04</b><span>Launch</span></li><li><b>05</b><span>Improve</span></li>
      </ol>
      <a class="button" href="${auditUrl}">Start with the audit <span>→</span></a>
    </section>

    <section id="status" class="status reveal">
      <div><span class="eyebrow">Operator Status</span><h2>Ready when visitor intent arrives.</h2></div>
      <div class="status-list">
        ${packages.map((item) => `<div><i></i><span>${item.name}</span><small>Operational</small></div>`).join('')}
      </div>
    </section>

    <section class="final-cta reveal">
      <span class="eyebrow">Stop losing warm visitors</span><h2>Find your highest-value leak first.</h2><p>Request a MindReply Website Leak Audit and we will map the next best handoff.</p><a class="button" href="${auditUrl}">Request Leak Audit <span>→</span></a>
    </section>

    <footer><a class="brand" href="#top"><span class="brand-mark" aria-hidden="true">M</span><span><strong>MindReply</strong><small>Revenue operators</small></span></a><p>© 2026 MindReply · WebChat operators for websites that should not lose warm visitors.</p></footer>
  </main>
  <button id="chatTrigger" class="chat-trigger" aria-expanded="false"><span>◌</span> Ask MindReply Operator</button>
  <section id="chatPanel" class="chat-panel" aria-label="MindReply Operator" hidden>
    <div class="chat-head"><div><strong>MindReply Operator</strong><small>Guided next steps</small></div><button id="chatClose" aria-label="Close operator chat">×</button></div>
    <div id="chatMessages" class="chat-messages"><p class="assistant">Tell me your business type or where visitors stop converting. I will point you to the right next step.</p></div>
    <form id="chatForm"><input id="chatInput" placeholder="Ask about leads, operators, or the audit…" /><button aria-label="Send message">→</button></form>
  </section>
`;

const panel = document.querySelector<HTMLElement>('#chatPanel');
const trigger = document.querySelector<HTMLButtonElement>('#chatTrigger');
const close = document.querySelector<HTMLButtonElement>('#chatClose');
const form = document.querySelector<HTMLFormElement>('#chatForm');
const input = document.querySelector<HTMLInputElement>('#chatInput');
const messages = document.querySelector<HTMLElement>('#chatMessages');

const replyFor = (question: string) => {
  const value = question.toLowerCase();
  if (value.includes('clinic') || value.includes('patient') || value.includes('medical')) return 'Patient Intake is built for appointment intent and safe reception handoff. Start with the Website Leak Audit so we can map the right flow.';
  if (value.includes('agency') || value.includes('proposal') || value.includes('consult')) return 'Proposal Rescue helps capture buyer questions and discovery-call intent before proposals stall. The audit will identify the strongest handoff point.';
  if (value.includes('home') || value.includes('service') || value.includes('plumb')) return 'QuoteCapture is designed for home-service job requests, service areas, urgency, and a clean handoff to your team. Start with the audit to map it.';
  return 'A MindReply Website Leak Audit identifies where visitors leave, what questions are unanswered, and the strongest next action to capture intent. Use the Request Leak Audit button to begin.';
};

trigger?.addEventListener('click', () => { if (panel) { panel.hidden = false; trigger.setAttribute('aria-expanded', 'true'); input?.focus(); } });
close?.addEventListener('click', () => { if (panel) { panel.hidden = true; trigger?.setAttribute('aria-expanded', 'false'); } });
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = input?.value.trim();
  if (!value || !messages || !input) return;
  messages.insertAdjacentHTML('beforeend', `<p class="visitor">${value.replace(/[<>&]/g, '')}</p>`);
  messages.insertAdjacentHTML('beforeend', `<p class="assistant">${replyFor(value)}</p>`);
  input.value = '';
  messages.scrollTop = messages.scrollHeight;
});

const matchState: { business: string; leak: string } = { business: '', leak: '' };
const matchResult = document.querySelector<HTMLElement>('#matchResult');
const matchAuditLink = document.querySelector<HTMLAnchorElement>('#matchAuditLink');
const matchProfiles: Record<string, { name: string; businessType: string; score: number; copy: string }> = {
  home: { name: 'QuoteCapture', businessType: 'Home Services', score: 78, copy: 'Capture service area, urgency, and job details before a visitor leaves for another provider.' },
  clinic: { name: 'Patient Intake', businessType: 'Clinic / Medical', score: 81, copy: 'Give appointment-minded visitors a clear, safe next step while easing reception handoff.' },
  agency: { name: 'Proposal Rescue', businessType: 'Agency / Consultant', score: 76, copy: 'Surface buyer questions and discovery-call intent before proposal momentum goes quiet.' },
};
const leakCopy: Record<string, string> = {
  question: 'Unanswered buying questions are a primary handoff risk.',
  slow: 'Response speed is the primary handoff risk.',
  handoff: 'The transition from interest to next step is the primary handoff risk.',
};

const updateMatchResult = () => {
  if (!matchResult || !matchAuditLink || !matchState.business || !matchState.leak) return;
  const profile = matchProfiles[matchState.business];
  const challenge = leakCopy[matchState.leak];
  matchResult.classList.add('ready');
  matchResult.innerHTML = `<span class="match-score"><b>${profile.score}</b><small>handoff focus</small></span><div><p class="eyebrow">Recommended operator · ${profile.name}</p><h3>${profile.name} is your clearest first move.</h3><p>${profile.copy} ${challenge}</p></div>`;
  matchAuditLink.classList.remove('secondary');
  matchAuditLink.textContent = 'Build my audit brief →';
  matchAuditLink.href = `${auditUrl}?businessType=${encodeURIComponent(profile.businessType)}&challenge=${encodeURIComponent(`${profile.name}: ${challenge}`)}`;
  matchResult.append(matchAuditLink);
};

document.querySelectorAll<HTMLButtonElement>('.match-options button').forEach((button) => {
  button.addEventListener('click', () => {
    const group = button.parentElement?.dataset.group as keyof typeof matchState | undefined;
    const value = button.dataset.value;
    if (!group || !value) return;
    matchState[group] = value;
    button.parentElement?.querySelectorAll('button').forEach((option) => option.classList.toggle('selected', option === button));
    updateMatchResult();
  });
});
