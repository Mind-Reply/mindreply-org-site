import './styles.css';

type Metric = {
  label: string;
  value: string;
  delta: string;
  tone: 'up' | 'down' | 'neutral';
};

const metrics: Metric[] = [
  { label: 'Attention Index', value: '87.2', delta: '+12.4%', tone: 'up' },
  { label: 'Compute Efficiency', value: '94.5%', delta: '+4.1%', tone: 'up' },
  { label: 'Capital Flow', value: '$1.8M', delta: '+18.9%', tone: 'up' },
  { label: 'Rollback Risk', value: '1.6%', delta: '-0.8%', tone: 'down' },
];

const streams = [
  {
    title: 'GitHub',
    status: 'Source control online',
    detail: 'Mind-Reply repository is now the build source for the exchange UI and release logic.',
  },
  {
    title: 'Vercel',
    status: 'Deployment lane ready',
    detail: 'Production routing is prepared for the CI Exchange OS public surface.',
  },
  {
    title: 'AppDeploy',
    status: 'App publish live',
    detail: 'Interactive market dashboard is published as a standalone app.',
  },
  {
    title: 'Canva',
    status: 'Brand layer connected',
    detail: 'Brand assets and social visuals are ready to mirror the platform identity.',
  },
];

const marketRows = [
  ['Security Agent', 'Long', '+18.2', 'Risk hedged'],
  ['Performance Agent', 'Long', '+14.7', 'Latency compressed'],
  ['Stability Agent', 'Short', '+7.8', 'Rollback pressure low'],
  ['Growth Agent', 'Long', '+23.1', 'Attention rising'],
];

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App root not found');
}

app.innerHTML = `
  <main class="shell">
    <section class="hero panel">
      <div class="hero-copy">
        <span class="eyebrow">CI EXCHANGE OS</span>
        <h1>Autonomous CI stock market for deployment, attention, compute, and capital.</h1>
        <p class="lede">
          One live interface now ties GitHub, Vercel, AppDeploy, and Canva into a single operating surface.
          Deployment decisions are visible, legible, and ready to scale.
        </p>
        <div class="cta-row">
          <a class="button primary" href="https://github.com/angellllkr-eng/Mind-Reply" target="_blank" rel="noreferrer">GitHub repo</a>
          <a class="button secondary" href="https://dashboard.appdeploy.ai" target="_blank" rel="noreferrer">AppDeploy</a>
        </div>
      </div>
      <div class="hero-card">
        <div class="glow"></div>
        <div class="terminal">
          <div class="terminal-line"><span>Mode</span><strong>Federated market live</strong></div>
          <div class="terminal-line"><span>Decision</span><strong>Deploy + promote</strong></div>
          <div class="terminal-line"><span>Rollback</span><strong>Armed</strong></div>
          <div class="terminal-line"><span>Brand</span><strong>Canva synced</strong></div>
        </div>
      </div>
    </section>

    <section class="metrics-grid">
      ${metrics
        .map(
          (metric) => `
            <article class="panel metric-card ${metric.tone}">
              <p>${metric.label}</p>
              <strong>${metric.value}</strong>
              <span>${metric.delta}</span>
            </article>
          `,
        )
        .join('')}
    </section>

    <section class="panel section-block">
      <div class="section-header">
        <div>
          <span class="eyebrow">CONNECTED SURFACES</span>
          <h2>All deployment surfaces wired</h2>
        </div>
        <p>Every node now has a visible role in the control plane.</p>
      </div>
      <div class="stream-grid">
        ${streams
          .map(
            (stream) => `
              <article class="stream-card">
                <h3>${stream.title}</h3>
                <strong>${stream.status}</strong>
                <p>${stream.detail}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="panel section-block">
      <div class="section-header">
        <div>
          <span class="eyebrow">MARKET BOARD</span>
          <h2>Agent positions and release posture</h2>
        </div>
        <p>Signals are now packaged as a calm, executive dashboard.</p>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Agent</th>
              <th>Position</th>
              <th>Return</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            ${marketRows
              .map(
                ([agent, position, ret, state]) => `
                  <tr>
                    <td>${agent}</td>
                    <td>${position}</td>
                    <td>${ret}</td>
                    <td>${state}</td>
                  </tr>
                `,
              )
              .join('')}
          </tbody>
        </table>
      </div>
    </section>

    <section class="panel footer-panel">
      <div>
        <span class="eyebrow">NEXT STEP</span>
        <h2>Keep the federation moving</h2>
        <p>
          GitHub has the source, AppDeploy has the product, Vercel is ready for the hosting lane, and Canva carries the brand system.
        </p>
      </div>
      <a class="button primary" href="https://www.canva.com" target="_blank" rel="noreferrer">Open Canva</a>
    </section>
  </main>
`;
