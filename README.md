# MathKids & Cie

Site multi-fonction : app de maths pour enfants, boutique d'ebooks, et
ressources de révision BAC pour l'Afrique francophone (avec correction
automatique de sujets par IA).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript + Tailwind CSS 4
- [Stripe](https://stripe.com) pour les paiements
- [Anthropic API](https://platform.claude.com) (Claude Opus 4.8) pour la
  résolution de sujets

## Démarrage

```bash
npm install
cp .env.local.example .env.local   # puis renseigner les vraies clés
npm run dev
```

Le site tourne sur [http://localhost:3000](http://localhost:3000).

## Variables d'environnement

Voir `.env.local.example` :

| Variable | Rôle |
|---|---|
| `STRIPE_SECRET_KEY` | Clé secrète Stripe (paiements côté serveur) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Clé publique Stripe |
| `ANTHROPIC_API_KEY` | Clé API Claude (résolution de sujets par IA) |

Sans ces clés, les fonctionnalités correspondantes affichent une erreur de
configuration claire plutôt qu'un plantage silencieux.

## Structure

```
src/
  app/
    page.tsx              Accueil / portfolio
    maths/                 App de maths (niveau 1 gratuit, niveau 2 payant)
    ebooks/                Boutique d'ebooks (Stripe Checkout)
    bac/                   Répertoire de sources BAC + résolution IA
      resoudre/             Upload photo/PDF → correction détaillée
    api/
      checkout/             Création de session Stripe Checkout
      verifier-session/     Vérification du paiement après redirection
      resoudre/              Appel Claude (vision + PDF) pour corriger un sujet
    succes/ annule/         Pages post-paiement
  components/               MathGame, BacSearch
  lib/                       products.ts, bacResources.ts, stripe.ts, anthropic.ts
content/                    Sources des ebooks (Markdown → PDF)
public/ebooks/               PDF vendus en boutique
```

## Contenu

- Les 3 ebooks (`power-of-positivity.pdf`, `50-astuces-calcul.pdf`,
  `20-jeux-maths.pdf`) sont rédigés et générés dans `public/ebooks/`. Sources
  Markdown dans `content/` (pipeline : pandoc → HTML stylé → PDF via Chrome
  headless).
- La section BAC (`src/lib/bacResources.ts`) couvre 9 pays avec des liens
  vers des sources externes vérifiées ; l'étendre à d'autres pays/années est
  un travail continu.

## À faire par toi (nécessite tes identifiants personnels)

- Renseigner `STRIPE_SECRET_KEY` / `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` dans
  `.env.local` (compte Stripe requis)
- Renseigner `ANTHROPIC_API_KEY` dans `.env.local` (compte Anthropic requis)
- Créer un compte Vercel ou Netlify pour déployer le site en ligne

## Déploiement

Pas encore déployé. Recommandé : [Vercel](https://vercel.com) (gratuit,
adapté à Next.js) ou Netlify.
