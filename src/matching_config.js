// ═══════════════════════════════════════════════════════════════════════
// LA RELÈVE — TERMINOLOGIE & MATCHING CONFIG
// Ce fichier centralise :
// 1. Le renommage TOX → FRICTION (interface uniquement, code interne inchangé)
// 2. La logique de matching candidat ↔ établissement
// 3. La config Supabase
// ═══════════════════════════════════════════════════════════════════════

// ─── 1. DIMENSIONS — LABELS INTERFACE ────────────────────────────────────────
// TOX reste TOX dans le code, mais s'affiche "Friction" partout côté UI
export const DIMENSION_LABELS = {
  RES: {
    label: "Résilience",
    desc: "Tenue sous pression et endurance opérationnelle",
    icon: "💪",
    positive: true,
  },
  EMP: {
    label: "Empathie",
    desc: "Intelligence relationnelle et écoute active",
    icon: "🤝",
    positive: true,
  },
  AUT: {
    label: "Leadership",
    desc: "Capacité à trancher, diriger et fédérer",
    icon: "⚡",
    positive: true,
  },
  INT: {
    label: "Intégrité",
    desc: "Fiabilité, rigueur et respect des engagements",
    icon: "🎯",
    positive: true,
  },
  TOX: {
    // Affiché "Friction" dans l'UI — jamais "Toxique" ou "TOX"
    label: "Friction",
    desc: "Indicateur de tension relationnelle",
    icon: "⚠️",
    positive: false, // Score élevé = mauvais signe
    displayNote: "Un score élevé indique un environnement potentiellement difficile",
  },
  ADA: {
    label: "Agilité",
    desc: "Adaptabilité, vision stratégique et créativité",
    icon: "🔄",
    positive: true,
  },
};

// ─── 2. RÈGLES DE MATCHING ────────────────────────────────────────────────────
// Logique : comparer les dimensions candidat vs recruteur/établissement
// Retourne : { compatible: bool, score: number, flags: string[], warnings: string[] }

export const MATCHING_RULES = {

  // ── RÈGLES DE BLOCAGE ABSOLU (compatible = false) ──────────────────────────
  blocking: [
    {
      id: "FRICTION_HAUTE_EMPATHIE",
      label: "Environnement dur / Profil bienveillant",
      condition: (candidat, recruteur) =>
        recruteur.TOX > 60 && candidat.EMP > 70,
      message: "Profil bienveillant incompatible avec un environnement à forte friction.",
      severity: "blocking",
    },
    {
      id: "FRICTION_HAUTE_FRAGILE",
      label: "Environnement dur / Résilience faible",
      condition: (candidat, recruteur) =>
        recruteur.TOX > 70 && candidat.RES < 45,
      message: "Résilience insuffisante pour cet environnement exigeant.",
      severity: "blocking",
    },
    {
      id: "DEUX_LEADERS_DOMINANTS",
      label: "Double leadership dominant",
      condition: (candidat, recruteur) =>
        candidat.AUT > 85 && recruteur.AUT > 85,
      message: "Deux profils très directifs — risque de conflit d'autorité élevé.",
      severity: "blocking",
    },
    {
      id: "INTEGRITE_CRITIQUE",
      label: "Intégrité critique candidat",
      condition: (candidat, _recruteur) =>
        candidat.INT < 20,
      message: "Score d'intégrité en dessous du seuil minimal requis.",
      severity: "blocking",
    },
  ],

  // ── RÈGLES DE VIGILANCE (compatible = true, mais avec avertissement) ────────
  warnings: [
    {
      id: "FRICTION_MODEREE",
      label: "Environnement exigeant",
      condition: (candidat, recruteur) =>
        recruteur.TOX > 40 && recruteur.TOX <= 60,
      message: "Établissement à culture exigeante. Compatible uniquement si le candidat a une résilience forte.",
    },
    {
      id: "LEADERSHIP_DESEQUILIBRE",
      label: "Déséquilibre de leadership",
      condition: (candidat, recruteur) =>
        Math.abs(candidat.AUT - recruteur.AUT) > 40,
      message: "Écart de leadership important. Clarifier les rôles dès l'intégration.",
    },
    {
      id: "EMPATHIE_FAIBLE_RECRUTEUR",
      label: "Management peu humain",
      condition: (candidat, recruteur) =>
        recruteur.EMP < 35 && candidat.EMP > 65,
      message: "Le candidat a besoin de reconnaissance. Le style de management en place pourrait le démotiver.",
    },
  ],

  // ── RÈGLES DE BONUS (score supplémentaire si conditions remplies) ───────────
  bonuses: [
    {
      id: "ALIGNEMENT_VISION",
      label: "Vision alignée",
      condition: (candidat, recruteur) =>
        Math.abs(candidat.ADA - recruteur.ADA) < 20,
      points: 8,
      message: "Excellente cohérence stratégique.",
    },
    {
      id: "EQUIPE_COMPLEMENTAIRE",
      label: "Complémentarité empathie/leadership",
      condition: (candidat, recruteur) =>
        candidat.EMP > 70 && recruteur.AUT > 70,
      points: 5,
      message: "Bon équilibre humain/résultats.",
    },
    {
      id: "RESILIENCE_FORTE",
      label: "Résilience opérationnelle",
      condition: (candidat, _recruteur) =>
        candidat.RES > 80,
      points: 5,
      message: "Profil solide pour les environnements à forte cadence.",
    },
  ],
};

// ─── 3. FONCTION DE CALCUL DU MATCHING ───────────────────────────────────────
/**
 * calculateMatch(candidatDimensions, recruteurDimensions)
 * @param {Object} candidat  — { RES, EMP, AUT, INT, TOX, ADA }
 * @param {Object} recruteur — { RES, EMP, AUT, INT, TOX, ADA }
 * @returns {Object} { compatible, score, flags, warnings, bonuses, label, color }
 */
export const calculateMatch = (candidat, recruteur) => {
  const flags = [];
  const warnings = [];
  const activeBonuses = [];

  // Vérifier blocages
  for (const rule of MATCHING_RULES.blocking) {
    if (rule.condition(candidat, recruteur)) {
      flags.push({ id: rule.id, label: rule.label, message: rule.message });
    }
  }

  // Si bloqué, retourner immédiatement
  if (flags.length > 0) {
    return {
      compatible: false,
      score: 0,
      flags,
      warnings: [],
      bonuses: [],
      label: "Incompatible",
      color: "text-rose-400",
      bgColor: "bg-rose-400/10",
      borderColor: "border-rose-400/30",
    };
  }

  // Vérifier avertissements
  for (const rule of MATCHING_RULES.warnings) {
    if (rule.condition(candidat, recruteur)) {
      warnings.push({ id: rule.id, label: rule.label, message: rule.message });
    }
  }

  // Score de base : similarité dimensionnelle pondérée
  // On compare chaque dimension avec un poids différent
  const weights = { RES: 0.20, EMP: 0.25, AUT: 0.20, INT: 0.20, ADA: 0.15 };
  // On ignore TOX du calcul de similarité (géré par les règles de blocage)

  let baseScore = 0;
  let totalWeight = 0;

  for (const [dim, weight] of Object.entries(weights)) {
    const diff = Math.abs(candidat[dim] - recruteur[dim]);
    // Similarité : plus la différence est faible, plus c'est bon
    // On cherche la complémentarité, pas l'identité
    // Écart idéal : 0-20 pts = excellent, 20-40 = bon, 40-60 = acceptable, >60 = risque
    const similarity = Math.max(0, 100 - diff * 1.2);
    baseScore += similarity * weight;
    totalWeight += weight;
  }

  let score = Math.round(baseScore / totalWeight);

  // Appliquer les bonus
  for (const rule of MATCHING_RULES.bonuses) {
    if (rule.condition(candidat, recruteur)) {
      score += rule.points;
      activeBonuses.push({ id: rule.id, label: rule.label, message: rule.message, points: rule.points });
    }
  }

  // Pénalité légère si avertissements
  score -= warnings.length * 3;

  // Clamp 0-100
  score = Math.max(0, Math.min(100, score));

  // Label et couleur selon score
  let label, color, bgColor, borderColor;
  if (score >= 80) {
    label = "Excellent match"; color = "text-emerald-400"; bgColor = "bg-emerald-400/10"; borderColor = "border-emerald-400/30";
  } else if (score >= 65) {
    label = "Bon match"; color = "text-[#C9A84C]"; bgColor = "bg-[#C9A84C]/10"; borderColor = "border-[#C9A84C]/30";
  } else if (score >= 50) {
    label = "Match modéré"; color = "text-amber-500"; bgColor = "bg-amber-500/10"; borderColor = "border-amber-500/30";
  } else {
    label = "Compatibilité faible"; color = "text-stone-500"; bgColor = "bg-stone-900"; borderColor = "border-stone-700";
  }

  return {
    compatible: true,
    score,
    flags: [],
    warnings,
    bonuses: activeBonuses,
    label,
    color,
    bgColor,
    borderColor,
  };
};


// ─── 4. CONFIG SUPABASE ───────────────────────────────────────────────────────
// Fichier : src/lib/supabase.js
// Créer ce fichier dans src/lib/ avec le contenu suivant :

export const SUPABASE_SETUP = `
// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
`;

// ─── 5. SCHÉMA BASE DE DONNÉES SUPABASE ──────────────────────────────────────
// À exécuter dans l'éditeur SQL de Supabase (app.supabase.com → SQL Editor)

export const SUPABASE_SCHEMA = `
-- ══════════════════════════════════════════════════════
-- LA RELÈVE — Schéma base de données Supabase
-- ══════════════════════════════════════════════════════

-- 1. PROFILS UTILISATEURS
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  type text not null check (type in ('candidat', 'recruteur')),
  prenom text,
  nom text,
  email text,
  telephone text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 2. RÉSULTATS TESTS CANDIDATS
create table resultats_candidats (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade,
  role_id text not null,
  role_label text,
  global_score integer,
  verdict text,
  dim_res integer, dim_emp integer, dim_aut integer,
  dim_int integer, dim_tox integer, dim_ada integer,
  top_traits text[],
  profil text,
  created_at timestamptz default now()
);

-- 3. RÉSULTATS TESTS RECRUTEURS (ADN Entreprise)
create table resultats_recruteurs (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade,
  etablissement text,
  global_score integer,
  profil text,
  dim_res integer, dim_emp integer, dim_aut integer,
  dim_int integer, dim_tox integer, dim_ada integer,
  compatible boolean default false,
  created_at timestamptz default now()
);

-- 4. CVS (stockage fichiers via Supabase Storage)
create table cvs (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade,
  filename text not null,
  file_path text not null,   -- chemin dans Supabase Storage
  file_size integer,
  visible boolean default true,
  created_at timestamptz default now()
);

-- 5. MATCHINGS
create table matchings (
  id uuid default gen_random_uuid() primary key,
  candidat_id uuid references profiles(id),
  recruteur_id uuid references profiles(id),
  score integer,
  compatible boolean,
  flags jsonb,       -- règles de blocage déclenchées
  warnings jsonb,    -- avertissements
  bonuses jsonb,     -- bonus activés
  label text,
  statut text default 'en_attente' check (statut in ('en_attente', 'accepte', 'refuse', 'contacte')),
  created_at timestamptz default now()
);

-- 6. DEMANDES DE CONTACT
create table contacts (
  id uuid default gen_random_uuid() primary key,
  matching_id uuid references matchings(id),
  recruteur_id uuid references profiles(id),
  candidat_id uuid references profiles(id),
  message text,
  statut text default 'envoye' check (statut in ('envoye', 'lu', 'repondu')),
  created_at timestamptz default now()
);

-- ══════ SÉCURITÉ ROW LEVEL SECURITY (RLS) ══════

-- Activer RLS sur toutes les tables
alter table profiles enable row level security;
alter table resultats_candidats enable row level security;
alter table resultats_recruteurs enable row level security;
alter table cvs enable row level security;
alter table matchings enable row level security;
alter table contacts enable row level security;

-- Candidat : voit uniquement ses propres données
create policy "Candidat voit son profil" on profiles
  for select using (auth.uid() = id);

create policy "Candidat voit ses résultats" on resultats_candidats
  for all using (auth.uid() = user_id);

create policy "Candidat gère son CV" on cvs
  for all using (auth.uid() = user_id);

-- Recruteur : voit les matchings qui le concernent
create policy "Recruteur voit ses matchings" on matchings
  for select using (auth.uid() = recruteur_id);

-- Candidat : voit ses matchings
create policy "Candidat voit ses matchings" on matchings
  for select using (auth.uid() = candidat_id);
`;

// ─── 6. VARIABLES D'ENVIRONNEMENT ────────────────────────────────────────────
// Créer un fichier .env à la racine du projet :

export const ENV_SETUP = `
# .env (à la racine du projet, ne jamais commiter)
VITE_SUPABASE_URL=https://VOTRE_PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=votre_anon_key_ici
`;

// ─── 7. INSTALLATION ─────────────────────────────────────────────────────────
export const INSTALL_STEPS = `
# Étapes d'installation Supabase

1. Créer un compte sur app.supabase.com (gratuit)
2. Créer un nouveau projet (région : eu-west-1 Paris pour RGPD)
3. Récupérer URL + anon key dans Settings → API
4. Créer le fichier .env avec les variables ci-dessus
5. Installer le client :
   npm install @supabase/supabase-js
6. Créer src/lib/supabase.js avec le code ci-dessus
7. Coller le schéma SQL dans Supabase → SQL Editor → Run
8. Dans Supabase → Storage → créer un bucket "cvs" (privé)

Temps estimé : 30 minutes
`;
