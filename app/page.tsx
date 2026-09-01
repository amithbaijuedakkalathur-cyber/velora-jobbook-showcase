'use client';

import { useEffect, useState } from 'react';

const features = [
  { id: 'jobs', index: '01', label: 'Jobs', title: 'Every job, clearly tracked', copy: 'Keep the customer, work details, status, payment, and notes together—from first call to completion.', detail: 'A focused job record replaces the scattered mix of notebooks, chat messages, and memory.', tags: ['Customer details', 'Status', 'Notes'] },
  { id: 'money', index: '02', label: 'Money', title: 'Know what came in—and what is due', copy: 'Record payments and expenses against real work, with outstanding dues kept visible.', detail: 'Simple money tracking gives small operators clarity without turning the app into accounting software.', tags: ['Payments', 'Expenses', 'Dues'] },
  { id: 'customers', index: '03', label: 'Customers', title: 'A useful memory for every customer', copy: 'See past work and important details without searching through old conversations.', detail: 'Customer history becomes practical context for repeat visits and better follow-through.', tags: ['History', 'Contact', 'Context'] },
  { id: 'offline', index: '04', label: 'Offline', title: 'Built for work that happens anywhere', copy: 'Core workflows are designed to stay useful when connectivity is unreliable or unavailable.', detail: 'Offline-first is a product constraint, not a marketing badge: the everyday workflow starts on the device.', tags: ['On-device', 'Reliable', 'Fast'] },
];

const workflow = [
  { n: '01', title: 'Add the customer', copy: 'Capture only the details needed to start.' },
  { n: '02', title: 'Create the job', copy: 'Describe the work, set its status, and add notes.' },
  { n: '03', title: 'Record the money', copy: 'Log payments, expenses, and any amount still due.' },
  { n: '04', title: 'Close with context', copy: 'Keep the completed job available for the next visit.' },
];

const screens = [
  { id: 'launch', eyebrow: 'Brand', title: 'Launch experience', src: '/screens/launch.jpg' },
  { id: 'dashboard', eyebrow: 'Home', title: 'Business overview', src: '/screens/dashboard.jpg' },
  { id: 'jobs', eyebrow: 'Jobs', title: 'Work in one place', src: '/screens/jobs.jpg' },
  { id: 'money', eyebrow: 'Money', title: 'Income and expenses', src: '/screens/money.jpg' },
  { id: 'people', eyebrow: 'People', title: 'Business contacts', src: '/screens/people.jpg' },
  { id: 'business', eyebrow: 'More', title: 'Business tools', src: '/screens/business.jpg' },
];

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [modal, setModal] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveStep((step) => (step + 1) % workflow.length), 3200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setModal(null);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  const selectedScreen = screens.find((screen) => screen.id === modal);

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Velora JobBook home"><span className="brand-mark">V</span><span>VELORA <b>JOBBOOK</b></span></a>
        <div className="nav-links"><a href="#product">Product</a><a href="#workflow">Workflow</a><a href="#build">The build</a></div>
        <a className="nav-cta" href="#demo">Explore demo <span>↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="kicker"><span /> Offline-first business companion</div>
          <h1>Run the work.<br /><em>Remember everything.</em></h1>
          <p className="hero-lede">Velora JobBook brings jobs, customers, payments, expenses, and dues into one calm workspace for technicians and small contractors.</p>
          <div className="hero-actions"><a className="button primary" href="#demo">See how it works <span>↓</span></a><a className="button ghost" href="#story">Why I built it</a></div>
          <div className="hero-proof"><div><span>01</span><p>Designed around real field-work routines</p></div><div><span>02</span><p>Core experience works without the internet</p></div></div>
        </div>

        <div className="hero-visual" aria-label="Screenshot of the Velora JobBook app">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <button className="phone real-phone" onClick={() => setModal('jobs')} aria-label="Open real JobBook screenshot"><img src="/screens/jobs.jpg" alt="Velora JobBook jobs screen" /></button>
          <div className="float-card float-one"><span>✓</span><p><small>WORKING ANDROID APP</small><b>Real product interface</b></p></div>
          <div className="float-card float-two"><span>↯</span><p><small>OFFLINE-FIRST</small><b>Built for field work</b></p></div>
        </div>
      </section>

      <section className="problem-band" id="story"><div className="shell problem-grid"><div><div className="section-label">THE PROBLEM</div><h2>Small businesses run on skill.<br />Their systems run on <span>memory.</span></h2></div><div className="problem-copy"><p>Customer details in contacts. Job notes in WhatsApp. Payments in a notebook. Dues remembered until they are not.</p><p>JobBook turns that fragmented routine into one clear, practical flow—without making the user learn a complex business system.</p></div></div></section>

      <section className="section shell" id="product">
        <div className="section-head"><div><div className="section-label">ONE WORKSPACE</div><h2>Less admin.<br /><span>More control.</span></h2></div><p>Choose a capability to explore how JobBook makes everyday operations simpler.</p></div>
        <div className="feature-tabs" role="tablist" aria-label="JobBook capabilities">{features.map((feature, index) => <button key={feature.id} role="tab" aria-selected={activeFeature === index} onClick={() => setActiveFeature(index)} className={activeFeature === index ? 'active' : ''}><span>{feature.index}</span>{feature.label}</button>)}</div>
        <div className="feature-panel" role="tabpanel"><div className="feature-text"><div className="feature-number">{features[activeFeature].index}</div><h3>{features[activeFeature].title}</h3><p>{features[activeFeature].copy}</p><div className="tag-row">{features[activeFeature].tags.map((tag) => <span key={tag}>{tag}</span>)}</div><small>{features[activeFeature].detail}</small></div><div className={`feature-art feature-${features[activeFeature].id}`}><div className="art-window"><div className="art-top"><span /><span /><span /></div><div className="art-content"><div className="art-heading" /><div className="art-card accent"><i /><div><b /><span /></div><em /></div><div className="art-card"><i /><div><b /><span /></div><em /></div><div className="art-card"><i /><div><b /><span /></div><em /></div></div></div></div></div>
      </section>

      <section className="workflow-section" id="workflow"><div className="shell"><div className="section-head light"><div><div className="section-label">A SIMPLE FLOW</div><h2>From first call<br />to <span>job complete.</span></h2></div><p>Four connected moments. Tap a step, or watch the workflow move.</p></div><div className="workflow-grid"><div className="workflow-list">{workflow.map((step, index) => <button key={step.n} onClick={() => setActiveStep(index)} className={activeStep === index ? 'active' : ''}><span>{step.n}</span><div><b>{step.title}</b><p>{step.copy}</p></div><i>→</i></button>)}</div><div className="workflow-stage"><div className="stage-status"><span>LIVE WORKFLOW</span><b>{workflow[activeStep].n} / 04</b></div><div className="stage-icon">{['+', 'J', '₹', '✓'][activeStep]}</div><small>STEP {workflow[activeStep].n}</small><h3>{workflow[activeStep].title}</h3><p>{workflow[activeStep].copy}</p><div className="stage-progress"><i style={{ width: `${(activeStep + 1) * 25}%` }} /></div></div></div></div></section>

      <section className="section shell" id="demo"><div className="section-head demo-head"><div><div className="section-label">REAL PRODUCT SCREENS</div><h2>Made to feel<br /><span>immediately familiar.</span></h2></div><p>Tap any screen for a closer look at the working Android application.</p></div><div className="screen-grid">{screens.map((screen, index) => <button className="screen-card" key={screen.id} onClick={() => setModal(screen.id)}><span className="screen-index">0{index + 1} · {screen.eyebrow}</span><div className="screen-preview real-screen"><img src={screen.src} alt={`${screen.title} screen in Velora JobBook`} /></div><div className="screen-caption"><span>{screen.title}</span><b>↗</b></div></button>)}</div></section>

      <section className="build-section" id="build"><div className="shell build-grid"><div><div className="section-label">BUILT WITH AI, DIRECTED BY A HUMAN</div><h2>An idea shaped into<br />a working product.</h2><p className="build-lede">AI accelerated the path from ambiguous problem to prototype and implementation. Product judgment, workflow decisions, and the standard for the experience stayed human-led.</p></div><div className="tool-list"><div><span>01</span><h3>ChatGPT</h3><p>Product thinking, workflow critique, and clearer communication.</p></div><div><span>02</span><h3>Claude</h3><p>Exploration, implementation support, and alternative approaches.</p></div><div><span>03</span><h3>Codex</h3><p>Hands-on building, debugging, testing, and this web showcase.</p></div></div></div></section>

      <section className="founder shell"><div className="founder-mark">A</div><div><div className="section-label">FOUNDER &amp; PRODUCT BUILDER</div><h2>Built by Amith.</h2><p>I noticed an everyday problem, defined the product, and used AI-assisted development to make the idea tangible. JobBook is the kind of work that makes me feel alive: turning unclear, human problems into useful products.</p></div><a className="button primary" href="#top">Back to top <span>↑</span></a></section>
      <footer className="shell"><div className="brand"><span className="brand-mark">V</span><span>VELORA <b>JOBBOOK</b></span></div><p>Offline-first business clarity.</p><small>Independent product showcase · No commercial source code exposed</small></footer>

      {modal && selectedScreen && <div className="modal-backdrop" role="presentation" onMouseDown={() => setModal(null)}><div className="modal" role="dialog" aria-modal="true" aria-label="Product screenshot" onMouseDown={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setModal(null)} aria-label="Close preview">×</button><div className="modal-preview"><div className="modal-phone real-modal-phone"><img src={selectedScreen.src} alt={`${selectedScreen.title} screen in Velora JobBook`} /></div><div className="modal-copy"><div className="section-label">WORKING APP SCREEN</div><h3>{selectedScreen.title}</h3><p>This is a real screenshot from the current JobBook Android application. It is presented here without exposing the product&apos;s commercial source code.</p><button onClick={() => setModal(null)}>Continue exploring</button></div></div></div></div>}
    </main>
  );
}
