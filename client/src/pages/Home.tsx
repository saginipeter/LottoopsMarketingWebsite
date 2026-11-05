import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChevronRight,
  ClipboardCheck,
  Menu,
  MonitorSmartphone,
  PackageCheck,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Ticket,
  X,
  Zap,
} from "lucide-react";

type TourKey = "receive" | "sell" | "display" | "close";

const workflows: Record<TourKey, { label: string; title: string; copy: string; metric: string; icon: typeof ScanLine }> = {
  receive: {
    label: "01 / Receive",
    title: "Bring each delivery into view.",
    copy: "Scan incoming packs, record shipment details, and keep receipt evidence connected to the inventory it belongs to.",
    metric: "Shipment intake",
    icon: PackageCheck,
  },
  sell: {
    label: "02 / Sell",
    title: "Keep the counter moving.",
    copy: "Give staff a focused ticket-selling workflow with barcode checks and live ticket-position awareness.",
    metric: "Ticket-aware POS",
    icon: ScanLine,
  },
  display: {
    label: "03 / Display",
    title: "Put the game lineup on screen.",
    copy: "Manage customer-facing displays alongside active stock, with current and next ticket positions kept in view.",
    metric: "Live display board",
    icon: MonitorSmartphone,
  },
  close: {
    label: "04 / Reconcile",
    title: "Finish the shift with a clear record.",
    copy: "Guide opening and closing audits, capture cash reconciliation, and prepare shift paperwork for management.",
    metric: "Shift accountability",
    icon: ClipboardCheck,
  },
};

const navLinks = [
  ["Platform", "#platform"],
  ["Displays", "#displays"],
  ["How it works", "#workflow"],
  ["For your team", "#teams"],
];

const steps = [
  { number: "01", title: "Receive", copy: "Scan shipment packs into the right inventory workflow.", icon: PackageCheck },
  { number: "02", title: "Prepare", copy: "Review active and back stock before it reaches the counter.", icon: Ticket },
  { number: "03", title: "Sell", copy: "Validate ticket position as staff serve the next customer.", icon: ScanLine },
  { number: "04", title: "Reconcile", copy: "Complete shift audits and leave a management-ready record.", icon: ClipboardCheck },
];

function Logo() {
  return (
    <a href="#top" className="brand" aria-label="LottoOps home">
      <img className="brand-logo" src="/manus-storage/lottoops-logo-transparent_b588af09.png" alt="LottoOps" />
    </a>
  );
}

function ProductBoard() {
  return (
    <div className="board-scene" aria-label="Illustration of a LottoOps customer display board">
      <div className="board-glow" />
      <div className="display-device">
        <div className="display-topline"><span><i /> CUSTOMER DISPLAY / SCREEN 01</span><span>CONNECTED</span></div>
        <div className="display-heading"><div><span>LOTTOOPS DISPLAY BOARD</span><strong>Find your next favorite.</strong></div><span className="display-live"><i />LIVE</span></div>
        <div className="ticket-grid" aria-hidden="true">
          <div className="ticket-art art-cyan"><small>TX · 05</small><strong>LUCKY<br />LINES</strong><span>$5</span></div>
          <div className="ticket-art art-coral"><small>TX · 12</small><strong>GOLD<br />RUSH</strong><span>$10</span></div>
          <div className="ticket-art art-violet"><small>TX · 08</small><strong>TRIPLE<br />CASH</strong><span>$2</span></div>
          <div className="ticket-art art-amber"><small>TX · 21</small><strong>BIG<br />WIN</strong><span>$20</span></div>
          <div className="ticket-art art-blue"><small>TX · 17</small><strong>LUCKY<br />7s</strong><span>$3</span></div>
          <div className="ticket-art art-teal"><small>TX · 03</small><strong>WORD<br />PLAY</strong><span>$5</span></div>
          <div className="ticket-art art-rose"><small>TX · 14</small><strong>JACKPOT<br />BONUS</strong><span>$10</span></div>
          <div className="ticket-art art-green"><small>TX · 09</small><strong>QUICK<br />CASH</strong><span>$1</span></div>
        </div>
        <div className="display-bottom"><span>GAME ARTWORK</span><span>LIVE TICKET POSITION</span><span>MANAGED IN LOTTOOPS</span></div>
      </div>
      <div className="board-float board-float-top"><span className="float-icon"><MonitorSmartphone size={16} /></span><span><small>DISPLAY STATUS</small><strong>Screen is current</strong></span><BadgeCheck size={18} /></div>
      <div className="board-float board-float-bottom"><span className="float-pulse" /><span><small>COUNTER TO CUSTOMER</small><strong>One connected view</strong></span><ArrowDownRight size={18} /></div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeWorkflow, setActiveWorkflow] = useState<TourKey>("receive");
  const [demoState, setDemoState] = useState(false);
  const active = workflows[activeWorkflow];
  const ActiveIcon = active.icon;
  const closeMenu = () => setMenuOpen(false);
  const prepareDemoRequest = (form: HTMLFormElement) => {
    const values = new FormData(form);
    const text = `LottoOps walkthrough request\n\nWork email: ${values.get("email")}\nStore or company: ${values.get("company")}\nArea to improve: ${values.get("area")}\n\nPrepared locally on the LottoOps website preview. This request has not been sent.\n`;
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "lottoops-walkthrough-request.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setDemoState(true);
  };

  return (
    <div id="top" className="site-shell">
      <header className="site-header">
        <div className="site-container nav-row">
          <Logo />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          </nav>
          <div className="nav-actions">
            <a className="text-link" href="https://lottoops.vercel.app/login">Sign in <ArrowRight size={15} /></a>
            <a className="button button-small button-primary" href="#demo">Book a walkthrough</a>
          </div>
          <button className="menu-trigger" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
            {menuOpen ? <X size={21} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a href="https://lottoops.vercel.app/login" onClick={closeMenu}>Sign in</a>
          <a className="button button-small button-primary" href="#demo" onClick={closeMenu}>Book a walkthrough</a>
        </nav>}
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-photo" aria-hidden="true" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="site-container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow eyebrow-light"><span className="status-dot" />Lottery retail operations, connected</div>
              <h1 id="hero-title">Every ticket.<br />From delivery <em>to close.</em></h1>
              <p className="hero-summary">One clear workflow for receiving lottery stock, selling tickets, managing customer displays, and reconciling every shift.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#demo">See LottoOps in action <ArrowRight size={18} /></a>
                <a className="watch-link" href="#platform"><span><ArrowDownRight size={15} /></span>Explore the platform</a>
              </div>
              <div className="hero-proof"><span><Check size={15} />Built for the retail floor</span><span><Check size={15} />Touch-friendly workflows</span><span><Check size={15} />Role-aware access</span></div>
            </div>
            <div className="hero-preview-wrap">
              <div className="preview-label"><span>THE LOTTOOPS WORKSPACE</span><span><i /> PRODUCT PREVIEW</span></div>
              <div className="hero-console">
                <div className="console-top"><span className="console-brand"><span className="console-mark">L</span> STORE OPERATIONS</span><span className="console-store">DEMO STORE <ChevronRight size={12} /></span></div>
                <div className="console-heading"><div><p>YOUR LOTTERY WORK, CONNECTED</p><strong>One shift at a time.</strong></div><span className="console-shield"><ShieldCheck size={19} /></span></div>
                <div className="console-rows">
                  <div className="console-row"><span className="console-row-icon teal-wash"><PackageCheck size={18} /></span><span><strong>Receive stock</strong><small>Shipment and pack intake</small></span><b className="row-state">READY</b><ChevronRight size={15} /></div>
                  <div className="console-row"><span className="console-row-icon coral-wash"><ScanLine size={18} /></span><span><strong>Sell tickets</strong><small>Scan and validate position</small></span><b className="row-state">POS</b><ChevronRight size={15} /></div>
                  <div className="console-row"><span className="console-row-icon amber-wash"><MonitorSmartphone size={18} /></span><span><strong>Manage displays</strong><small>Keep customer screens current</small></span><b className="row-state">LIVE</b><ChevronRight size={15} /></div>
                  <div className="console-row"><span className="console-row-icon blue-wash"><ClipboardCheck size={18} /></span><span><strong>Reconcile shift</strong><small>Audit, count, and hand over</small></span><b className="row-state">CLEAR</b><ChevronRight size={15} /></div>
                </div>
                <div className="console-foot"><span><Zap size={14} />A connected view of the work</span><span>LOTTOOPS</span></div>
              </div>
              <div className="preview-caption"><span>Illustrative interface</span><span>Purpose-built for lottery retail</span></div>
            </div>
          </div>
          <div className="hero-ribbon"><div className="site-container"><span>RECEIVE</span><i /><span>SELL</span><i /><span>DISPLAY</span><i /><span>RECONCILE</span><i /><span>REPORT</span><span className="ribbon-note">One connected operation</span></div></div>
        </section>

        <section id="platform" className="platform-section section-pad">
          <div className="site-container">
            <div className="section-intro"><div><div className="eyebrow">Beyond the display</div><h2>Make the whole lottery operation easier to see.</h2></div><div className="intro-side"><p>A customer-facing screen is one part of the day. LottoOps connects that view to the inventory, counter work, and shift records behind it.</p><a href="#workflow" className="inline-link">Follow the workflow <ArrowRight size={16} /></a></div></div>
            <div className="platform-grid">
              <article className="platform-card platform-card-dark"><div className="card-topline"><span>01</span><span>STOCK IN</span></div><div className="platform-icon"><PackageCheck size={22} /></div><h3>Receive with a record.</h3><p>Scan packs into inventory and keep shipment details and receipt photos close to the work.</p><a href="#workflow">Shipment intake <ArrowRight size={15} /></a><div className="card-watermark">01</div></article>
              <article className="platform-card"><div className="card-topline"><span>02</span><span>AT THE COUNTER</span></div><div className="platform-icon platform-icon-coral"><ScanLine size={22} /></div><h3>Sell from live stock.</h3><p>Put the scan first. Check the ticket sequence and give staff a focused sales surface.</p><a href="#workflow">Ticket sales POS <ArrowRight size={15} /></a><div className="card-watermark">02</div></article>
              <article className="platform-card"><div className="card-topline"><span>03</span><span>ON THE FLOOR</span></div><div className="platform-icon platform-icon-amber"><MonitorSmartphone size={22} /></div><h3>Manage the display.</h3><p>Show game artwork and current ticket position on customer-facing screens.</p><a href="#displays">Explore displays <ArrowRight size={15} /></a><div className="card-watermark">03</div></article>
              <article className="platform-card"><div className="card-topline"><span>04</span><span>END OF SHIFT</span></div><div className="platform-icon platform-icon-blue"><ClipboardCheck size={22} /></div><h3>Close with confidence.</h3><p>Guide physical audits and capture a clear handover record for management.</p><a href="#teams">Shift accountability <ArrowRight size={15} /></a><div className="card-watermark">04</div></article>
            </div>
          </div>
        </section>

        <section id="displays" className="display-section section-pad">
          <div className="site-container display-layout">
            <div className="display-copy">
              <div className="eyebrow eyebrow-light">A clearer customer view</div>
              <h2>Free up the counter.<br /><em>Keep the lineup visible.</em></h2>
              <p>Present game artwork on a large screen and manage the display from the same lottery operations workspace your team uses behind the counter.</p>
              <ul className="display-checks"><li><Check size={17} /><span>Game-specific artwork with display details</span></li><li><Check size={17} /><span>Current and next ticket indicators</span></li><li><Check size={17} /><span>Multiple screens, managed as a set</span></li></ul>
              <a href="#demo" className="button button-light">See the display workflow <ArrowRight size={17} /></a>
              <p className="hardware-note">TV hardware is separate from the LottoOps software.</p>
            </div>
            <ProductBoard />
          </div>
        </section>

        <section id="workflow" className="workflow-section section-pad">
          <div className="site-container">
            <div className="workflow-heading"><div><div className="eyebrow">One flow, from start to finish</div><h2>The right next step.<br />At every point in the day.</h2></div><p>Switch between the work areas to see how LottoOps connects stock movement, customer service, and shift accountability.</p></div>
            <div className="workflow-shell">
              <div className="workflow-tabs" role="tablist" aria-label="LottoOps workflows">
                {(Object.keys(workflows) as TourKey[]).map((key) => {
                  const item = workflows[key];
                  const Icon = item.icon;
                  return <button key={key} id={`workflow-${key}`} type="button" role="tab" aria-controls="workflow-panel" tabIndex={activeWorkflow === key ? 0 : -1} aria-selected={activeWorkflow === key} className={activeWorkflow === key ? "active" : ""} onClick={() => setActiveWorkflow(key)} onKeyDown={(event) => {
                    const keys = Object.keys(workflows) as TourKey[];
                    const position = keys.indexOf(key);
                    const target = event.key === "ArrowRight" ? keys[(position + 1) % keys.length] : event.key === "ArrowLeft" ? keys[(position + keys.length - 1) % keys.length] : event.key === "Home" ? keys[0] : event.key === "End" ? keys[keys.length - 1] : null;
                    if (target) { event.preventDefault(); setActiveWorkflow(target); document.getElementById(`workflow-${target}`)?.focus(); }
                  }}><span>{item.label.slice(0, 2)}</span><Icon size={17} /><b>{item.label.split("/ ")[1]}</b></button>;
                })}
              </div>
              <div className="workflow-preview" id="workflow-panel" role="tabpanel" aria-labelledby={`workflow-${activeWorkflow}`}>
                <div className="preview-copy"><p className="eyebrow eyebrow-small">{active.label}</p><h3>{active.title}</h3><p>{active.copy}</p><a href="#demo" className="inline-link">Talk through your workflow <ArrowRight size={16} /></a><div className="preview-stats"><span>WORK AREA</span><strong>{active.metric}</strong></div></div>
                <div className="workflow-ui" aria-label="Illustrative LottoOps workflow screen"><div className="ui-topbar"><span className="ui-brand"><span>L</span> LottoOps</span><span>Store operations <ChevronRight size={12} /> {active.label}</span><span className="ui-user">OP</span></div><div className="ui-app"><aside className="ui-sidebar"><span className="ui-side-active"><ActiveIcon size={16} /></span><span><PackageCheck size={15} /></span><span><ScanLine size={15} /></span><span><MonitorSmartphone size={15} /></span><span><BarChart3 size={15} /></span></aside><div className="ui-main"><div className="ui-welcome"><div><small>LOTTERY OPERATIONS</small><strong>{active.title}</strong></div><span className="ui-pill"><i />READY</span></div><div className="ui-action-card"><div className="ui-action-icon"><ActiveIcon size={21} /></div><div><small>YOUR NEXT ACTION</small><strong>{active.metric}</strong><span>{active.copy}</span></div><ArrowRight size={17} /></div><div className="ui-detail-grid"><div><small>WORKFLOW</small><b>{active.label}</b><span>Recorded in your store workspace</span></div><div><small>TEAM ACCESS</small><b>Role-aware</b><span>Each team member sees the right tools</span></div><div><small>STORE RECORD</small><b>Connected</b><span>Review activity when the shift is done</span></div></div></div></div></div>
              </div>
            </div>
            <div className="workflow-steps">{steps.map(({ number, title, copy, icon: Icon }) => <article key={number} className="step-card"><span className="step-number">{number}</span><Icon size={20} /><h3>{title}</h3><p>{copy}</p></article>)}</div>
          </div>
        </section>

        <section id="teams" className="teams-section section-pad">
          <div className="site-container teams-layout">
            <div className="teams-copy"><div className="eyebrow">A workspace for your team</div><h2>Everyone gets the view they need.</h2><p>Counter work should stay fast. Management should stay informed. LottoOps separates everyday store activity from higher-level review and control.</p><a href="#demo" className="inline-link">See the team experience <ArrowRight size={16} /></a></div>
            <div className="role-stack">
              <article className="role-card"><span className="role-icon role-staff"><ScanLine size={20} /></span><div><small>STORE FLOOR</small><h3>Employees</h3><p>Ticket sales, assigned tasks, and the shift actions they need.</p></div><span className="role-arrow"><ArrowRight size={16} /></span></article>
              <article className="role-card role-card-featured"><span className="role-icon role-manager"><ClipboardCheck size={20} /></span><div><small>STORE OVERSIGHT</small><h3>Managers</h3><p>Shift control, audit review, inventory actions, and store reports.</p></div><span className="role-arrow"><ArrowRight size={16} /></span></article>
              <article className="role-card"><span className="role-icon role-owner"><BarChart3 size={20} /></span><div><small>BUSINESS VIEW</small><h3>Owners</h3><p>Store performance, team visibility, and multi-location oversight.</p></div><span className="role-arrow"><ArrowRight size={16} /></span></article>
            </div>
          </div>
        </section>

        <section className="accountability-section">
          <div className="site-container accountability-inner"><div className="accountability-mark"><ShieldCheck size={27} /></div><div><div className="eyebrow eyebrow-light">Visibility with accountability</div><h2>Fast at the counter.<br />Clear in the back office.</h2></div><div className="accountability-points"><p><BadgeCheck size={17} />Role-aware access to store tools</p><p><BadgeCheck size={17} />Inventory and shift history in context</p><p><BadgeCheck size={17} />Reports ready for management review</p></div></div>
        </section>

        <section id="demo" className="demo-section section-pad">
          <div className="site-container demo-layout">
            <div className="demo-copy"><div className="eyebrow">Take a closer look</div><h2>See how LottoOps fits your store.</h2><p>Tell us what you want to improve. We’ll shape a walkthrough around your lottery workflow, team, and display setup.</p><div className="demo-assurance"><Sparkles size={18} /><span>A practical product walkthrough, tailored to your operation.</span></div><a className="demo-login" href="https://lottoops.vercel.app/login">Already using LottoOps? Sign in <ArrowRight size={15} /></a></div>
            <form className="demo-form" onSubmit={(event) => { event.preventDefault(); prepareDemoRequest(event.currentTarget); }}>
              <div className="form-heading"><span>LET’S TALK LOTTERY OPERATIONS</span><strong>Request a walkthrough</strong></div>
              <div className="form-field"><label htmlFor="demo-email">Work email</label><input id="demo-email" name="email" autoComplete="email" required type="email" placeholder="you@yourstore.com" /></div>
              <div className="form-field"><label htmlFor="demo-company">Store or company</label><input id="demo-company" name="company" autoComplete="organization" required type="text" placeholder="Your business name" /></div>
              <div className="form-field form-wide"><label htmlFor="demo-area">What would you like to improve?</label><select id="demo-area" name="area" required defaultValue=""><option value="" disabled>Select an area</option><option>Receiving and inventory</option><option>Ticket sales at the counter</option><option>Customer-facing displays</option><option>Shift audits and reports</option><option>Managing multiple stores</option></select></div>
              <button className="button button-primary button-full form-wide" type="submit">Prepare demo request <ArrowRight size={17} /></button>
              {demoState && <p className="form-response form-wide" role="status"><Check size={16} />Your request has been downloaded. This preview is not connected to an inbox, so no request has been sent.</p>}
              <p className="form-footnote form-wide">Preview only: prepare a downloadable request. Your details are not sent or saved by this form.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="site-container footer-top"><Logo /><div className="footer-links"><a href="#platform">Platform</a><a href="#displays">Displays</a><a href="#workflow">How it works</a><a href="#teams">For your team</a><a href="https://lottoops.vercel.app/login">Customer sign in</a></div></div><div className="site-container footer-bottom"><span>© {new Date().getFullYear()} LottoOps. Lottery retail operations.</span><span>Every ticket. Accounted for.</span></div></footer>
    </div>
  );
}
