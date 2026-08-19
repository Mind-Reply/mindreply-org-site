import './styles.css';
import './operator-match.css';
import './growth-layer.css';
import { defaultLocale, getLocale, locales, suggestedLocale } from './locales';
import { localizedContent } from './localized-content';

const auditUrl = '/audit';
const activeLocale = getLocale(document.documentElement.dataset.locale);
const copy = activeLocale.copy;
const content = localizedContent[activeLocale.code] ?? localizedContent.en;
document.documentElement.lang = activeLocale.code;
document.documentElement.dir = activeLocale.dir;

const leakEvents = [
  ['Visitor asked about pricing', '12s ago', 'question'],
  ['Visitor needs service-area confirmation', '38s ago', 'question'],
  ['Visitor wants appointment availability', '1m ago', 'question'],
  ['Visitor left before form submission', '2m ago', 'alert'],
  ['Quote request captured', '3m ago', 'captured'],
];

const packages = [
  { number: '01', name: 'QuoteCapture', audience: content.packageAudience[0], copy: content.packageCopy[0] },
  { number: '02', name: 'Patient Intake', audience: content.packageAudience[1], copy: content.packageCopy[1] },
  { number: '03', name: 'Proposal Rescue', audience: content.packageAudience[2], copy: content.packageCopy[2] },
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
        <a href="#leak">${copy.navLeak}</a>
        <a href="#match">${copy.navMatch}</a>
        <a href="#operators">${copy.navOperators}</a>
        <a href="#sprint">${copy.navSprint}</a>
        <a href="#status">${copy.navStatus}</a>
      </nav>
      <a class="button compact" href="${auditUrl}">${copy.audit}</a>
    </header>

    <section id="top" class="hero reveal">
      <div class="hero-copy">
        <span class="eyebrow">${copy.heroEyebrow}</span>
        <h1>${copy.heroTitle}</h1>
        <p>${copy.heroDescription}</p>
        <div class="cta-row">
          <a class="button" href="${auditUrl}">${copy.audit} <span>→</span></a>
          <a class="button secondary" href="#operators">${copy.packages}</a>
        </div>
        <p class="microcopy">${content.microcopy}</p>
      </div>
      <aside class="monitor" aria-label="MindReply Leak Monitor">
        <div class="monitor-head"><span>Leak Monitor</span><i></i></div>
        <div class="monitor-events">
          ${leakEvents.map(([label, time, tone]) => `<div class="monitor-event ${tone}"><span class="event-icon">${tone === 'captured' ? '✓' : tone === 'alert' ? '!' : '◌'}</span><span class="event-label">${label}</span>${tone === 'captured' ? '<b>Captured</b>' : ''}<time>${time}</time></div>`).join('')}
        </div>
        <div class="operator-chip"><span class="brand-mark mini">M</span><div><strong>MindReply Operator</strong><small>Replies instantly</small></div></div>
      </aside>
    </section>

    <section class="handoff-visual reveal" aria-label="${copy.handoffEyebrow}">
      <div class="handoff-panel">
        <span class="eyebrow">${copy.handoffEyebrow}</span>
        <h2>${copy.handoffTitle}</h2>
        <div class="handoff-route">
          <article class="handoff-node"><b>01</b><strong>${copy.handoffVisitor}</strong></article><span class="handoff-arrow" aria-hidden="true"></span>
          <article class="handoff-node ai"><b>AI</b><strong>${copy.handoffAi}</strong></article><span class="handoff-arrow" aria-hidden="true"></span>
          <article class="handoff-node"><b>03</b><strong>${copy.handoffAction}</strong></article>
        </div>
      </div>
    </section>

    <section id="leak" class="section leak-section reveal">
      <div class="section-heading"><span class="eyebrow">${content.leakEyebrow}</span><h2>${content.leakTitle}</h2></div>
      <div class="leak-grid">
        ${content.leaks.map((item, index) => `<article class="leak-card"><span>${String(index + 1).padStart(2, '0')}</span><h3>${item.title}</h3><p>${item.copy}</p></article>`).join('')}
      </div>
    </section>

    <section id="operators" class="section reveal">
      <div class="section-heading centered"><span class="eyebrow">${content.operatorsEyebrow}</span><h2>${content.operatorsTitle}</h2></div>
      <div class="package-grid">
        ${packages.map((item) => `<article class="package-card"><span class="package-number">${item.number}</span><h3>${item.name}</h3><strong>${item.audience}</strong><p>${item.copy}</p><a href="${auditUrl}">${content.packageAction} ${item.name} <span>→</span></a></article>`).join('')}
      </div>
    </section>

    <section id="match" class="match-section reveal">
      <div class="match-intro">
        <span class="eyebrow">${copy.navMatch}</span>
        <h2>${copy.handoffTitle}</h2>
        <p>${content.matchDescription}</p>
      </div>
      <div class="match-console">
        <div class="match-progress" aria-label="${copy.navMatch}">
          <div class="match-progress-copy"><span id="matchProgressLabel">${content.progress.business}</span><strong id="matchProgressTitle">${content.progress.chooseBusiness}</strong></div>
          <div id="matchProgressBar" class="match-progress-track" role="progressbar" aria-valuemin="1" aria-valuemax="2" aria-valuenow="1" aria-valuetext="${content.progress.business}: ${content.progress.chooseBusiness}"><span></span></div>
          <ol class="match-progress-steps" aria-hidden="true"><li class="active"><b>1</b><span>${content.progress.businessLabel}</span></li><li><b>2</b><span>${content.progress.leakLabel}</span></li><li><b>✓</b><span>${content.progress.matchLabel}</span></li></ol>
          <p id="matchProgressLive" class="sr-only" aria-live="polite">${content.progress.business}: ${content.progress.chooseBusiness}.</p>
        </div>
        <div id="matchBusinessStep" class="match-step match-stage is-current">
          <span>01</span>
          <div><strong>${content.progress.chooseBusiness}</strong><p>${content.businessQuestion}</p></div>
          <div class="match-options" data-group="business">
            <button type="button" data-value="home" aria-pressed="false">${content.businessOptions[0]}</button>
            <button type="button" data-value="clinic" aria-pressed="false">${content.businessOptions[1]}</button>
            <button type="button" data-value="agency" aria-pressed="false">${content.businessOptions[2]}</button>
          </div>
        </div>
        <div id="matchLeakStep" class="match-step match-stage" hidden>
          <span>02</span>
          <div><strong>${content.progress.chooseLeak}</strong><p>${content.leakQuestion}</p></div>
          <div class="match-options" data-group="leak">
            <button type="button" data-value="question" aria-pressed="false">${content.leakOptions[0]}</button>
            <button type="button" data-value="slow" aria-pressed="false">${content.leakOptions[1]}</button>
            <button type="button" data-value="handoff" aria-pressed="false">${content.leakOptions[2]}</button>
          </div>
          <button id="matchBack" class="match-back" type="button">${content.back}</button>
        </div>
        <div id="matchResult" class="match-result" aria-live="polite" tabindex="-1" hidden></div>
      </div>
    </section>

    <section id="sprint" class="sprint reveal">
      <div><span class="eyebrow">${content.sprintEyebrow}</span><h2>${content.sprintTitle}</h2><p>${content.sprintCopy}</p></div>
      <ol>
        <li><b>01</b><span>Audit</span></li><li><b>02</b><span>Map</span></li><li><b>03</b><span>Build</span></li><li><b>04</b><span>Launch</span></li><li><b>05</b><span>Improve</span></li>
      </ol>
      <a class="button" href="${auditUrl}">${content.sprintAction} <span>→</span></a>
    </section>

    <section id="status" class="status reveal">
      <div><span class="eyebrow">${content.statusEyebrow}</span><h2>${content.statusTitle}</h2></div>
      <div class="status-list">
        ${packages.map((item) => `<div><i></i><span>${item.name}</span><small>${content.operational}</small></div>`).join('')}
      </div>
    </section>

    <section class="final-cta reveal">
      <span class="eyebrow">${content.finalEyebrow}</span><h2>${content.finalTitle}</h2><p>${content.finalCopy}</p><a class="button" href="${auditUrl}">${copy.audit} <span>→</span></a>
    </section>

    <footer><a class="brand" href="#top"><span class="brand-mark" aria-hidden="true">M</span><span><strong>MindReply</strong><small>Revenue operators</small></span></a><div class="locale-footer"><div class="locale-footer-copy"><strong>${copy.languageLabel}</strong><p>${copy.languageHelp}</p></div><div class="locale-grid" aria-label="${copy.languageLabel}">${locales.map((locale) => `<a class="locale-link" href="${locale.path}" lang="${locale.code}" aria-current="${locale.code === activeLocale.code ? 'page' : 'false'}"><span class="locale-flag" aria-hidden="true">${locale.flag}</span><span>${locale.nativeLabel}</span></a>`).join('')}</div><p id="localeHint" class="locale-hint"></p></div></footer>
  </main>
  <button id="chatTrigger" class="chat-trigger" aria-expanded="false"><span>◌</span> ${content.chatButton}</button>
  <section id="chatPanel" class="chat-panel" aria-label="MindReply Operator" hidden>
    <div class="chat-head"><div><strong>MindReply Operator</strong><small>${content.chatSubtitle}</small></div><button id="chatClose" aria-label="Close operator chat">×</button></div>
    <div id="chatMessages" class="chat-messages"><p class="assistant">${copy.chatGreeting}</p></div>
    <form id="chatForm"><input id="chatInput" placeholder="${copy.chatPlaceholder}" /><button aria-label="${content.send}">→</button></form>
  </section>
`;

const panel = document.querySelector<HTMLElement>('#chatPanel');
const trigger = document.querySelector<HTMLButtonElement>('#chatTrigger');
const close = document.querySelector<HTMLButtonElement>('#chatClose');
const form = document.querySelector<HTMLFormElement>('#chatForm');
const input = document.querySelector<HTMLInputElement>('#chatInput');
const messages = document.querySelector<HTMLElement>('#chatMessages');
const localeHint = document.querySelector<HTMLElement>('#localeHint');
const browserPreferredLocale = suggestedLocale(navigator.languages?.length ? navigator.languages : [navigator.language]);
if (localeHint && browserPreferredLocale.code !== activeLocale.code && activeLocale.code === defaultLocale.code) {
  localeHint.innerHTML = `Based on your browser: <a href="${browserPreferredLocale.path}" lang="${browserPreferredLocale.code}">${browserPreferredLocale.flag} ${browserPreferredLocale.nativeLabel}</a>`;
}

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
const businessStage = document.querySelector<HTMLElement>('#matchBusinessStep');
const leakStage = document.querySelector<HTMLElement>('#matchLeakStep');
const progressBar = document.querySelector<HTMLElement>('#matchProgressBar');
const progressLabel = document.querySelector<HTMLElement>('#matchProgressLabel');
const progressTitle = document.querySelector<HTMLElement>('#matchProgressTitle');
const progressLive = document.querySelector<HTMLElement>('#matchProgressLive');
const progressSteps = [...document.querySelectorAll<HTMLLIElement>('.match-progress-steps li')];
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

const setSelectedOption = (button: HTMLButtonElement) => {
  button.parentElement?.querySelectorAll<HTMLButtonElement>('button[data-value]').forEach((option) => {
    const selected = option === button;
    option.classList.toggle('selected', selected);
    option.setAttribute('aria-pressed', String(selected));
  });
};

const setProgress = (state: 'business' | 'leak' | 'complete') => {
  const progress = state === 'business' ? { value: 1, width: '33.333%', label: content.progress.business, title: content.progress.chooseBusiness } : state === 'leak' ? { value: 2, width: '66.667%', label: content.progress.leak, title: content.progress.chooseLeak } : { value: 2, width: '100%', label: content.progress.complete, title: content.progress.ready };
  progressBar?.style.setProperty('--match-progress', progress.width);
  progressBar?.setAttribute('aria-valuenow', String(progress.value));
  progressBar?.setAttribute('aria-valuetext', `${progress.label}: ${progress.title}`);
  if (progressLabel) progressLabel.textContent = progress.label;
  if (progressTitle) progressTitle.textContent = progress.title;
  if (progressLive) progressLive.textContent = `${progress.label}: ${progress.title}.`;
  progressSteps.forEach((step, index) => step.classList.toggle('active', index < (state === 'business' ? 1 : state === 'leak' ? 2 : 3)));
};

const moveToStage = (current: HTMLElement | null, next: HTMLElement | null) => {
  if (!current || !next) return;
  current.classList.add('is-leaving');
  window.setTimeout(() => {
    current.hidden = true;
    current.classList.remove('is-current', 'is-leaving');
    next.hidden = false;
    next.classList.add('is-current', 'is-entering');
    requestAnimationFrame(() => next.classList.remove('is-entering'));
    next.querySelector<HTMLButtonElement>('button[data-value]')?.focus();
  }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 180);
};

const updateMatchResult = () => {
  if (!matchResult || !matchState.business || !matchState.leak) return;
  const profile = matchProfiles[matchState.business];
  const challenge = leakCopy[matchState.leak];
  setProgress('complete');
  matchResult.classList.add('ready');
  matchResult.innerHTML = `<span class="match-score"><b>${profile.score}</b><small>handoff focus</small></span><div><p class="eyebrow">${content.progress.matchLabel} · ${profile.name}</p><h3>${profile.name}</h3><p>${profile.copy} ${challenge}</p></div><a class="button" href="${auditUrl}?businessType=${encodeURIComponent(profile.businessType)}&challenge=${encodeURIComponent(`${profile.name}: ${challenge}`)}">${content.auditBrief} <span>→</span></a><button id="matchRestart" class="match-back" type="button">${content.restart}</button>`;
  moveToStage(leakStage, matchResult);
  window.setTimeout(() => matchResult.focus(), window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 210);
  matchResult.querySelector<HTMLButtonElement>('#matchRestart')?.addEventListener('click', resetMatch);
};

document.querySelectorAll<HTMLButtonElement>('.match-options button').forEach((button) => {
  button.addEventListener('click', () => {
    const group = button.parentElement?.dataset.group as keyof typeof matchState | undefined;
    const value = button.dataset.value;
    if (!group || !value) return;
    matchState[group] = value;
    setSelectedOption(button);
    if (group === 'business') {
      setProgress('leak');
      moveToStage(businessStage, leakStage);
    } else {
      updateMatchResult();
    }
  });
});

const resetMatch = () => {
  matchState.business = '';
  matchState.leak = '';
  document.querySelectorAll<HTMLButtonElement>('.match-options button').forEach((button) => { button.classList.remove('selected'); button.setAttribute('aria-pressed', 'false'); });
  setProgress('business');
  if (matchResult) { matchResult.hidden = true; matchResult.classList.remove('ready', 'is-current', 'is-leaving'); }
  if (leakStage) { leakStage.hidden = true; leakStage.classList.remove('is-current', 'is-leaving'); }
  if (businessStage) { businessStage.hidden = false; businessStage.classList.add('is-current', 'is-entering'); requestAnimationFrame(() => businessStage.classList.remove('is-entering')); businessStage.querySelector<HTMLButtonElement>('button[data-value]')?.focus(); }
};

document.querySelector<HTMLButtonElement>('#matchBack')?.addEventListener('click', () => { setProgress('business'); moveToStage(leakStage, businessStage); });
