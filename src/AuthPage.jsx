import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ═══════════════════════════════════════════════════════════════════════
// AUTH PAGE — HCR SENTINEL
// Design premium noir/or · même ADN que la homepage
// ═══════════════════════════════════════════════════════════════════════

const G = '#C9A84C';
const B = '#0A0A0A';
const D = '#0f0f0f';
const E = '#1a1a1a';
const M = '#555555';
const W = '#FFFFFF';

export default function AuthPage() {
  const navigate = useNavigate();
  const [view, setView] = useState('choose');
  const [mode, setMode] = useState('login');
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ prenom: '', nom: '', etablissement: '', email: '', password: '' });
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (view === 'candidat') navigate('/dashboard-candidat');
      else if (view === 'rh') navigate('/test/rh');
      else if (view === 'patron') navigate('/test/patron');
    }, 900);
  };

  // ── CHOIX PROFIL ──────────────────────────────────────────────────
  if (view === 'choose') return (
    <Page>
      <Nav onBack={() => navigate('/')} backLabel="← Accueil" />
      <div style={s.chooseWrap}>
        <div style={s.vertDeco} />
        <span style={s.eyebrow}>— Accès plateforme</span>
        <h1 style={s.chooseH1}>VOUS ÊTES ?</h1>
        <p style={s.chooseSub}>Deux parcours distincts. Une seule exigence : l'honnêteté.</p>

        <div style={s.grid}>
          <HoverCard variant="dark" onClick={() => { setView('candidat'); setMode('login'); }}>
            <IconUser />
            <span style={{ ...s.kicker, color: G }}>COMPTE TALENT</span>
            <h2 style={s.cardH2}>CANDIDAT</h2>
            <p style={{ ...s.cardP, color: M }}>
              Passez le test Sentinel. Recevez uniquement les offres compatibles avec votre profil réel.
            </p>
            <div style={s.cardFoot}>
              <span style={{ ...s.cardDetail, color: '#2e2e2e' }}>Gratuit · Test · Matching</span>
              <span style={{ ...s.cardArrow, color: G }}>→</span>
            </div>
          </HoverCard>

          <HoverCard onClick={() => { setView('rh'); setMode('login'); }}>
            <IconBag />
            <span style={{ ...s.kicker, color: G }}>COMPTE ÉTABLISSEMENT</span>
            <h2 style={s.cardH2}>RH</h2>
            <p style={{ ...s.cardP, color: M }}>
              Évaluez la culture RH. L'algorithme filtre les profils correspondant à votre ADN.
            </p>
            <div style={s.cardFoot}>
              <span style={{ ...s.cardDetail, color: '#2e2e2e' }}>149€/mois · Diagnostic</span>
              <span style={{ ...s.cardArrow, color: G }}>→</span>
            </div>
          </HoverCard>

          <HoverCard onClick={() => { setView('patron'); setMode('login'); }}>
            <IconBuilding />
            <span style={{ ...s.kicker, color: G }}>COMPTE ÉTABLISSEMENT</span>
            <h2 style={s.cardH2}>PATRON</h2>
            <p style={{ ...s.cardP, color: M }}>
              Diagnostiquez votre Leadership. L'algorithme filtre les incompatibilités avant contact.
            </p>
            <div style={s.cardFoot}>
              <span style={{ ...s.cardDetail, color: '#2e2e2e' }}>149€/mois · Diagnostic</span>
              <span style={{ ...s.cardArrow, color: G }}>→</span>
            </div>
          </HoverCard>
        </div>

        <p style={s.rgpd}>🔒 Données chiffrées · Conforme RGPD · Jamais revendues</p>
      </div>
    </Page>
  );

  // ── FORMULAIRE ────────────────────────────────────────────────────
  const isC = view === 'candidat';
  const roleEyebrow = isC ? '— Compte Talent' : '— Compte Établissement';
  const roleTitle = view === 'patron' ? 'VOTRE\nENTREPRISE\nMÉRITE\nMIEUX.'
    : view === 'rh' ? 'VOTRE\nÉQUIPE\nMÉRITE\nMIEUX.'
      : 'VOTRE\nCARRIÈRE\nMÉRITE\nMIEUX.';

  return (
    <Page>
      <div style={s.split}>

        {/* GAUCHE */}
        <div style={s.left}>
          <button style={s.backBtn} onClick={() => setView('choose')}>← Retour</button>
          <div style={s.leftInner}>
            <span style={s.eyebrow}>{roleEyebrow}</span>
            <h2 style={s.splitH2}>
              {roleTitle}
            </h2>
            <div style={s.pts}>
              {isC ? <>
                <Pt>Test Sentinel · 180 questions</Pt>
                <Pt>Offres compatibles avec votre profil</Pt>
                <Pt>Aucun établissement à friction élevée</Pt>
                <Pt>Gratuit · Toujours</Pt>
              </> : <>
                <Pt>Diagnostic ADN de votre établissement</Pt>
                <Pt>Candidats compatibles uniquement</Pt>
                <Pt>Algorithme anti-friction intégré</Pt>
                <Pt>149€/mois · Sans engagement</Pt>
              </>}
            </div>
          </div>
          <div style={s.leftBar} />
        </div>

        {/* DROITE */}
        <div style={s.right}>
          <div style={s.toggle}>
            <TBtn active={mode === 'login'} onClick={() => setMode('login')}>Connexion</TBtn>
            <TBtn active={mode === 'register'} onClick={() => setMode('register')}>Créer un compte</TBtn>
          </div>

          <h1 style={s.formH1}>
            {mode === 'login' ? 'BON\nRETOUR.' : 'BIENVENUE\nDANS LA\nRELÈVE.'}
          </h1>

          <form onSubmit={submit} style={s.form}>
            {mode === 'register' && (
              <div style={s.row}>
                <Field label="Prénom" value={form.prenom} onChange={set('prenom')} />
                <Field label="Nom" value={form.nom} onChange={set('nom')} />
              </div>
            )}
            {mode === 'register' && !isC && (
              <Field label="Établissement" value={form.etablissement} onChange={set('etablissement')} />
            )}
            <Field label="Email" type="email" value={form.email} onChange={set('email')} required />
            <Field label="Mot de passe" type="password" value={form.password} onChange={set('password')} required />
            {mode === 'login' && (
              <button type="button" style={s.forgot}>Mot de passe oublié ?</button>
            )}
            <button type="submit" style={s.submit} disabled={loading}>
              {loading
                ? <Spinner />
                : mode === 'login' ? 'CONNEXION →' : 'CRÉER MON COMPTE →'
              }
            </button>
          </form>

          <p style={s.switchLine}>
            {mode === 'login' ? 'Pas encore de compte ? ' : 'Déjà un compte ? '}
            <button style={s.switchBtn} onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
              {mode === 'login' ? 'Créer un compte' : 'Se connecter'}
            </button>
          </p>
          <p style={s.rgpdSm}>🔒 Données chiffrées · Conforme RGPD</p>
        </div>
      </div>
    </Page>
  );
}

// ── COMPOSANTS ─────────────────────────────────────────────────────────────

function Page({ children }) {
  return (
    <div style={s.root}>
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}

function Nav({ onBack, backLabel }) {
  return (
    <nav style={s.nav}>
      <div style={s.navBrand}>
        <div style={s.navLogo}>R.</div>
        <div>
          <div style={s.navName}>HCR SENTINEL</div>
          <div style={s.navSub}>RESTAURATION NOUVELLE</div>
        </div>
      </div>
      <button style={s.navLink} onClick={onBack}>{backLabel}</button>
    </nav>
  );
}

function HoverCard({ children, onClick, variant }) {
  const [hov, setHov] = useState(false);
  const base = variant === 'gold'
    ? { ...s.card, background: 'rgba(201,168,76,0.07)', borderColor: G }
    : { ...s.card };
  const hover = variant === 'gold'
    ? { background: 'rgba(201,168,76,0.16)' }
    : { borderColor: G, background: 'rgba(201,168,76,0.03)' };
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ ...base, ...(hov ? hover : {}) }}
    >
      {children}
    </button>
  );
}

function Pt({ children }) {
  return (
    <div style={s.pt}>
      <span style={s.ptDot} />
      <span style={s.ptText}>{children}</span>
    </div>
  );
}

function TBtn({ children, active, onClick }) {
  return (
    <button onClick={onClick} style={{ ...s.tBtn, ...(active ? s.tBtnOn : {}) }}>
      {children}
    </button>
  );
}

function Field({ label, type = 'text', value, onChange, required }) {
  const [foc, setFoc] = useState(false);
  return (
    <div style={s.fieldWrap}>
      <label style={s.fieldLabel}>{label}</label>
      <input
        type={type} value={value} onChange={onChange} required={required}
        onFocus={() => setFoc(true)} onBlur={() => setFoc(false)}
        style={{ ...s.input, ...(foc ? s.inputFoc : {}) }}
      />
    </div>
  );
}

function Spinner() {
  return <span style={s.spinner} />;
}

function IconUser() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" style={{ marginBottom: 16 }}>
      <circle cx="13" cy="8" r="5" stroke={G} strokeWidth="1.4" />
      <path d="M3 23c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke={G} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconBag() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" style={{ marginBottom: 16 }}>
      <rect x="2" y="9" width="22" height="14" rx="2" stroke={G} strokeWidth="1.4" />
      <path d="M9 9V7a4 4 0 018 0v2" stroke={G} strokeWidth="1.4" />
      <circle cx="13" cy="16" r="2" fill={G} />
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" style={{ marginBottom: 16 }}>
      <path d="M4 22V6C4 4.89543 4.89543 4 6 4H20C21.1046 4 22 4.89543 22 6V22M4 22H22M4 22H2" stroke={G} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 10H16M10 14H16M10 18H16" stroke={G} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// ── STYLES ──────────────────────────────────────────────────────────────────

const s = {
  root: {
    minHeight: '100vh', background: B, color: W,
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  },
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 40px', height: 60,
    background: 'rgba(10,10,10,0.96)', borderBottom: `1px solid ${E}`,
    backdropFilter: 'blur(16px)',
  },
  navBrand: { display: 'flex', alignItems: 'center', gap: 12 },
  navLogo: {
    width: 34, height: 34, border: `1px solid ${G}`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: G, fontWeight: 900, fontSize: 13, letterSpacing: '0.05em',
  },
  navName: { fontSize: 11, fontWeight: 900, letterSpacing: '0.2em', color: W, textTransform: 'uppercase' },
  navSub: { fontSize: 8, fontWeight: 500, letterSpacing: '0.25em', color: M, textTransform: 'uppercase' },
  navLink: {
    background: 'none', border: 'none', color: M,
    fontSize: 10, letterSpacing: '0.12em', cursor: 'pointer',
    fontWeight: 700, textTransform: 'uppercase',
  },
  chooseWrap: {
    minHeight: '100vh',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    padding: '80px 24px 48px',
  },
  vertDeco: {
    width: 1, height: 52,
    background: `linear-gradient(to bottom, transparent, ${G})`,
    marginBottom: 26,
  },
  eyebrow: {
    display: 'block', fontSize: 10, fontWeight: 900,
    letterSpacing: '0.3em', color: G, textTransform: 'uppercase', marginBottom: 14,
  },
  chooseH1: {
    fontSize: 'clamp(52px,8vw,84px)', fontWeight: 900,
    letterSpacing: '-0.02em', color: W, textTransform: 'uppercase',
    margin: '0 0 14px', textAlign: 'center', lineHeight: 0.88,
  },
  chooseSub: {
    fontSize: 13, color: M, fontWeight: 400,
    marginBottom: 44, textAlign: 'center', letterSpacing: '0.03em',
  },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
    gap: 12, width: '100%', maxWidth: 1000, marginBottom: 28,
  },
  card: {
    background: 'transparent', border: `1px solid ${E}`,
    padding: '32px 28px', textAlign: 'left', cursor: 'pointer',
    display: 'flex', flexDirection: 'column',
    transition: 'all 0.18s ease', color: W,
  },
  kicker: {
    display: 'block', fontSize: 9, fontWeight: 900,
    letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 8,
  },
  cardH2: {
    fontSize: 26, fontWeight: 900, letterSpacing: '-0.01em',
    color: W, textTransform: 'uppercase', margin: '0 0 10px',
  },
  cardP: { fontSize: 12, lineHeight: 1.65, fontWeight: 400, marginBottom: 20, flex: 1 },
  cardFoot: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    borderTop: `1px solid ${E}`, paddingTop: 14,
  },
  cardDetail: { fontSize: 9, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' },
  cardArrow: { fontSize: 15, fontWeight: 300 },
  rgpd: { fontSize: 10, color: '#252525', letterSpacing: '0.1em', textAlign: 'center', fontWeight: 500 },

  split: { display: 'flex', minHeight: '100vh' },
  left: {
    width: '40%', background: D, borderRight: `1px solid ${E}`,
    padding: '80px 44px 44px', display: 'flex', flexDirection: 'column',
    position: 'relative', overflow: 'hidden',
  },
  backBtn: {
    background: 'none', border: 'none', color: M,
    fontSize: 10, letterSpacing: '0.12em', cursor: 'pointer',
    fontWeight: 700, textTransform: 'uppercase',
    textAlign: 'left', padding: 0, marginBottom: 48,
  },
  leftInner: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' },
  splitH2: {
    fontSize: 'clamp(30px,3.2vw,46px)', fontWeight: 900,
    letterSpacing: '-0.02em', color: W, textTransform: 'uppercase',
    margin: '14px 0 28px', lineHeight: 0.9, whiteSpace: 'pre-line',
  },
  pts: { display: 'flex', flexDirection: 'column', gap: 12 },
  pt: { display: 'flex', alignItems: 'center', gap: 10 },
  ptDot: { width: 3, height: 3, borderRadius: '50%', background: G, flexShrink: 0 },
  ptText: { fontSize: 12, color: M, fontWeight: 400, letterSpacing: '0.02em' },
  leftBar: {
    position: 'absolute', right: 0, top: '15%', bottom: '15%',
    width: 1, background: `linear-gradient(to bottom, transparent, ${G}50, transparent)`,
  },
  right: {
    flex: 1, padding: '80px 60px',
    display: 'flex', flexDirection: 'column', justifyContent: 'center',
    maxWidth: 520,
  },
  toggle: { display: 'flex', borderBottom: `1px solid ${E}`, marginBottom: 36 },
  tBtn: {
    background: 'none', border: 'none', color: M,
    fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
    padding: '0 0 12px', marginRight: 28, cursor: 'pointer',
    borderBottom: '2px solid transparent', transition: 'all 0.18s',
  },
  tBtnOn: { color: W, borderBottom: `2px solid ${G}` },
  formH1: {
    fontSize: 'clamp(30px,3.5vw,46px)', fontWeight: 900,
    letterSpacing: '-0.02em', color: W, textTransform: 'uppercase',
    margin: '0 0 36px', lineHeight: 0.9, whiteSpace: 'pre-line',
  },
  form: { display: 'flex', flexDirection: 'column', gap: 18 },
  row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 },
  fieldWrap: { display: 'flex', flexDirection: 'column', gap: 7 },
  fieldLabel: { fontSize: 9, fontWeight: 700, letterSpacing: '0.22em', color: M, textTransform: 'uppercase' },
  input: {
    background: D, border: `1px solid ${E}`,
    color: W, padding: '13px 15px', fontSize: 13, fontWeight: 400,
    outline: 'none', transition: 'border-color 0.15s', fontFamily: 'inherit',
  },
  inputFoc: { borderColor: G },
  forgot: {
    background: 'none', border: 'none', color: M,
    fontSize: 11, cursor: 'pointer', textAlign: 'left',
    padding: 0, textDecoration: 'underline', marginTop: -6,
  },
  submit: {
    background: G, color: B, border: 'none',
    padding: '15px 24px', fontSize: 10, fontWeight: 900,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    cursor: 'pointer', marginTop: 6, transition: 'opacity 0.18s',
    display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 50,
  },
  spinner: {
    width: 14, height: 14,
    border: `2px solid ${B}`, borderTopColor: 'transparent',
    borderRadius: '50%', display: 'inline-block',
  },
  switchLine: { fontSize: 12, color: M, marginTop: 20 },
  switchBtn: {
    background: 'none', border: 'none', color: G,
    fontSize: 12, cursor: 'pointer', padding: 0,
    fontWeight: 600, textDecoration: 'underline',
  },
  rgpdSm: { fontSize: 10, color: '#252525', marginTop: 20, letterSpacing: '0.08em' },
};
