import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChevronRight,
  ClipboardCheck,
  Menu,
  MonitorSmartphone,
  PackageCheck,
  Play,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Ticket,
  X,
  Zap,
} from "lucide-react";

type TourKey = "receive" | "sell" | "reconcile" | "display";

const workflows: Record<TourKey, { eyebrow: string; title: string; copy: string; step: string; metric: string; icon: typeof ScanLine }> = {
  receive: {
    eyebrow: "Inventory intake",
    title: "Receive packs with confidence.",
    copy: "Capture shipment details, scan packs, and keep receipt evidence attached to the work that matters.",
    step: "01 / Receive",
    metric: "Pack-level history",
    icon: PackageCheck,
  },
  sell: {
    eyebrow: "Fast POS workflow",
    title: "Every sale starts with a scan.",
    copy: "Give your team a focused selling surface with server-side ticket validation and live stock awareness.",
    step: "02 / Sell",
    metric: "Live ticket position",
    icon: ScanLine,
  },
  reconcile: {
    eyebrow: "Shift accountability",
    title: "Close every shift with clarity.",
    copy: "Guide opening and closing physical audits, expose variances early, and keep reporting ready for management.",
    step: "03 / Reconcile",
    metric: "Audit-ready records",
    icon: ClipboardCheck,
  },
  display: {
    eyebrow: "Customer-facing displays",
    title: "Make the floor easier to manage.",
    copy: "Use a dynamic TV board to present the active game lineup while your team follows the same source of truth.",
    step: "04 / Display",
    metric: "Screen-managed view",
    icon: MonitorSmartphone,
  },
};

const navLinks = [
  ["Product", "#product"],
  ["Workflow", "#workflow"],
  ["Control", "#control"],
  ["Security", "#security"],
];

function LogoMark() {
  return (
    <a href="#top" className="brand" aria-label="LottoOps home">
      <img className="brand-logo" src="/manus-storage/lottoops-logo-transparent_b588af09.png" alt="LottoOps" />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeWorkflow, setActiveWorkflow] = useState<TourKey>("receive");
  const [demoState, setDemoState] = useState<"idle" | "ready">("idle");
  const active = workflows[activeWorkflow];
  const ActiveIcon = active.icon;

  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="top" className="site-shell">
      <header className="site-header">
        <div className="site-container nav-row">
          <LogoMark />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          </nav>
          <div className="nav-actions">
            <a className="text-link" href="https://lottoops.vercel.app/login">Sign in <ArrowRight size={15} /></a>
            <a className="button button-small button-light" href="#demo">Request a demo</a>
          </div>
          <button className="menu-trigger" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation">
            {menuOpen ? <X size={21} /> : <Menu size={22} />}
            <span className="sr-only">Toggle navigation</span>
          </button>
        </div>
        {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a href="https://lottoops.vercel.app/login" onClick={closeMenu}>Sign in</a>
          <a className="button button-small" href="#demo" onClick={closeMenu}>Request a demo</a>
        </nav>}
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-photo" aria-hidden="true" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="site-container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow eyebrow-light"><span className="status-dot" />Lottery retail operations</div>
              <h1 id="hero-title">The operating system for <em>every ticket.</em></h1>
              <p className="hero-summary">LottoOps gives lottery retailers one focused place to receive stock, run fast ticket sales, keep displays current, and close every shift with certainty.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#demo">See LottoOps in action <ArrowRight size={18} /></a>
                <a className="watch-link" href="#workflow"><span><Play size={14} fill="currentColor" /></span>Explore the workflow</a>
              </div>
              <div className="trust-row">
                <span><Check size={15} />Built for the retail floor</span>
                <span><Check size={15} />Touchscreen-ready</span>
                <span><Check size={15} />Role-based control</span>
              </div>
            </div>

            <div className="hero-console reveal delay-2" aria-label="LottoOps product preview">
              <div className="console-top"><span className="console-live"><i />Store operations live</span><span>10:42 AM</span></div>
              <div className="console-title"><div><p>Today at a glance</p><strong>Everything is in motion.</strong></div><span className="console-shield"><ShieldCheck size={19} /></span></div>
              <div className="console-metrics">
                <div><span>Active displays</span><strong>24</strong><small><i className="up" /> All monitored</small></div>
                <div><span>Tickets sold</span><strong>186</strong><small><i className="up" /> Live sales data</small></div>
                <div><span>Audit status</span><strong className="green">Ready</strong><small><i className="up" /> 24 / 24 verified</small></div>
              </div>
              <div className="console-line"><div className="line-label"><span>Display floor</span><span className="green-text">Synced</span></div><div className="display-bars">{Array.from({ length: 12 }).map((_, index) => <span key={index} className={index === 7 || index === 10 ? "amber" : ""} />)}</div></div>
              <div className="console-footer"><span><Zap size={15} />Live inventory</span><span>View details <ArrowRight size={14} /></span></div>
            </div>
          </div>
          <div className="hero-ticker" aria-label="LottoOps functions"><div><span>Receive</span><i /> <span>Sell</span><i /> <span>Track</span><i /> <span>Reconcile</span><i /> <span>Report</span></div></div>
        </section>

        <section id="product" className="intro-section section-pad">
          <div className="site-container intro-layout">
            <div><div className="eyebrow">Built around the work</div><h2>One clear system for the lottery retail day.</h2></div>
            <div className="intro-side"><p>Replace fragmented records and manual checks with a connected workflow that starts at receiving and finishes with an accountable close.</p><a href="#workflow" className="inline-link">See how the workflow connects <ArrowRight size={16} /></a></div>
          </div>
          <div className="site-container capability-grid">
            <article className="capability-card"><div className="capability-icon icon-teal"><PackageCheck size={23} /></div><p className="capability-index">01</p><h3>Receive accurately</h3><p>Bring new packs into inventory with barcode-driven intake, game details, and receipt documentation.</p><a href="#workflow">Explore receiving <ChevronRight size={16} /></a></article>
            <article className="capability-card capability-card-dark"><div className="capability-icon icon-amber"><ScanLine size={23} /></div><p className="capability-index">02</p><h3>Sell with speed</h3><p>Keep counter staff focused on the next customer with a purpose-built ticket sales workspace.</p><a href="#workflow">Explore POS <ChevronRight size={16} /></a></article>
            <article className="capability-card"><div className="capability-icon icon-lilac"><MonitorSmartphone size={23} /></div><p className="capability-index">03</p><h3>See the floor</h3><p>Keep active displays visible to operators and customers with live display board management.</p><a href="#workflow">Explore displays <ChevronRight size={16} /></a></article>
            <article className="capability-card"><div className="capability-icon icon-coral"><ClipboardCheck size={23} /></div><p className="capability-index">04</p><h3>Close with proof</h3><p>Run guided physical audits and give owners the shift records they need to review performance.</p><a href="#workflow">Explore reconciliation <ChevronRight size={16} /></a></article>
          </div>
        </section>

        <section id="workflow" className="workflow-section section-pad">
          <div className="site-container">
            <div className="section-heading center-heading"><div className="eyebrow eyebrow-light">The connected workflow</div><h2>From delivery to close,<br />nothing falls through the gaps.</h2><p>Every critical touchpoint is designed to move the operation forward and make the next decision easier.</p></div>
            <div className="workflow-shell">
              <div className="workflow-tabs" role="tablist" aria-label="LottoOps workflows">
                {(Object.keys(workflows) as TourKey[]).map((key, index) => {
                  const item = workflows[key];
                  const Icon = item.icon;
                  return <button key={key} type="button" role="tab" aria-selected={activeWorkflow === key} className={activeWorkflow === key ? "active" : ""} onClick={() => setActiveWorkflow(key)}><span>0{index + 1}</span><Icon size={18} />{key === "sell" ? "Sell tickets" : key === "display" ? "Run displays" : key === "reconcile" ? "Reconcile shifts" : "Receive stock"}</button>;
                })}
              </div>
              <div className="workflow-preview" role="tabpanel">
                <div className="preview-copy"><p className="eyebrow eyebrow-small">{active.eyebrow}</p><h3>{active.title}</h3><p>{active.copy}</p><a href="#demo" className="inline-link light-link">Talk through your workflow <ArrowRight size={16} /></a><div className="preview-stats"><div><span>Workflow stage</span><strong>{active.step}</strong></div><div><span>Result</span><strong>{active.metric}</strong></div></div></div>
                <div className="product-window" aria-hidden="true"><div className="window-head"><div className="window-dots"><i /><i /><i /></div><span>LottoOps / Operations console</span><span className="window-user" /></div><div className="window-body"><aside><span className="mini-logo">L</span><i /><i /><i className="current" /><i /><i /></aside><div className="window-content"><div className="window-content-top"><div><p>Store operations</p><h4>{active.step}</h4></div><span className="window-pill">Live</span></div><div className="window-cards"><div className="window-card-primary"><ActiveIcon size={25} /><span>{active.eyebrow}</span><strong>{activeWorkflow === "sell" ? "Ready to scan" : activeWorkflow === "reconcile" ? "24 packs checked" : activeWorkflow === "display" ? "Screen 1 active" : "Shipment received"}</strong><b /></div><div className="window-card-list"><span><i />All systems current</span><span><i />Team activity logged</span><span><i />Next action ready</span></div></div><div className="window-table"><div /><div /><div /><div /><div /><div /><div /><div /></div></div></div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="control" className="control-section section-pad">
          <div className="site-container control-grid">
            <div className="control-visual"><div className="control-ring"><div className="ring-core"><BarChart3 size={35} /><span>Live<br />control</span></div><span className="orb orb-one"><Ticket size={19} />Sales</span><span className="orb orb-two"><PackageCheck size={19} />Inventory</span><span className="orb orb-three"><ClipboardCheck size={19} />Audits</span><span className="orb orb-four"><MonitorSmartphone size={19} />Displays</span></div></div>
            <div className="control-copy"><div className="eyebrow">Operational visibility</div><h2>Know the state of the store without chasing updates.</h2><p>Owners and managers get a purpose-built view of inventory, team activity, alerts, and reports—without exposing sensitive administration to every staff member.</p><ul className="check-list"><li><BadgeCheck size={19} /><span><strong>Role-aware workspaces</strong> give every team member the right level of access.</span></li><li><BadgeCheck size={19} /><span><strong>Actionable alerts</strong> surface low stock, shipment, security, and system issues in context.</span></li><li><BadgeCheck size={19} /><span><strong>Report-ready history</strong> keeps the operational record connected to every shift.</span></li></ul></div>
          </div>
        </section>

        <section id="security" className="security-section">
          <div className="site-container security-grid">
            <div><div className="eyebrow eyebrow-light">Built for accountability</div><h2>Control doesn’t have to slow down the counter.</h2></div>
            <div className="security-points"><article><ShieldCheck size={24} /><div><h3>Appropriate access</h3><p>Keep high-impact administrative actions separated from everyday retail work.</p></div></article><article><ClipboardCheck size={24} /><div><h3>Clear audit trails</h3><p>Make inventory movement, shift activity, and reconciliation easier to review.</p></div></article><article><Zap size={24} /><div><h3>Fast where it matters</h3><p>Give operators a streamlined, touch-first workflow for the retail floor.</p></div></article></div>
          </div>
        </section>

        <section id="demo" className="demo-section section-pad">
          <div className="site-container demo-card">
            <div className="demo-copy"><div className="eyebrow">Bring your operation into focus</div><h2>Ready for a better way to run lottery retail?</h2><p>Tell us how your store operates today. We’ll use that conversation to show you the LottoOps workflow that fits your team.</p><div className="demo-note"><Sparkles size={18} /><span>Personalized, operationally focused walkthroughs.</span></div></div>
            <form className="demo-form" onSubmit={(event) => { event.preventDefault(); setDemoState("ready"); }}>
              <label>Work email<input required type="email" placeholder="you@yourstore.com" /></label>
              <label>Store or company name<input required type="text" placeholder="Your business" /></label>
              <label>What would you like to improve?<select defaultValue=""><option value="" disabled>Select an area</option><option>Receiving and inventory</option><option>Ticket sales POS</option><option>Shift reconciliation</option><option>Multi-store visibility</option></select></label>
              <button className="button button-primary button-full" type="submit">Request your demo <ArrowRight size={18} /></button>
              {demoState === "ready" && <p className="form-response" role="status"><Check size={16} />Thanks—your demo request details are ready. Connect this form to your preferred inbox before publishing.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="site-container footer-top"><LogoMark /><div className="footer-links"><a href="#product">Product</a><a href="#workflow">Workflow</a><a href="#security">Security</a><a href="https://lottoops.vercel.app/login">Customer sign in</a></div></div><div className="site-container footer-bottom"><span>© {new Date().getFullYear()} LottoOps. Built for lottery retail operations.</span><span>Designed for the people who keep every ticket accountable.</span></div></footer>
    </div>
  );
}
