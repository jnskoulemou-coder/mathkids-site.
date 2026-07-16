# Réussite Plus

Site multi-fonction, 100% gratuit : exercices pour tous les niveaux (primaire,
collège, lycée), boutique d'ebooks, et ressources de révision BAC pour les
francophones du monde entier (avec correction automatique de sujets par IA).

Déployé sur [mathkids-site.vercel.app](https://mathkids-site.vercel.app).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript + Tailwind CSS 4
- [Anthropic API](https://platform.claude.com) (Claude Opus 4.8) pour le
  chatbot et la résolution de sujets

## Démarrage

```bash
npm install
cp .env.local.example .env.local   # puis renseigner ANTHROPIC_API_KEY
npm run dev
```

Le site tourne sur [http://localhost:3000](http://localhost:3000).

## Variables d'environnement

Voir `.env.local.example` :

| Variable | Rôle |
|---|---|
| `ANTHROPIC_API_KEY` | Clé API Claude (chatbot + résolution de sujets par IA) |

Sans cette clé, le chatbot et l'outil de résolution affichent une erreur de
configuration claire plutôt qu'un plantage silencieux.

## Structure

```
src/
  app/
    page.tsx                Accueil — sélecteur de niveau
    exercices/
      page.tsx               Sélecteur de niveau (Primaire/Collège/Lycée)
      [niveau]/               Sélecteur de matière pour un niveau
        [matiere]/             Quiz interactif (maths primaire) ou outil IA
    ebooks/                  Boutique d'ebooks (téléchargement gratuit)
    bac/                     Répertoire de sources BAC + résolution IA
      resoudre/               Upload photo/PDF → correction détaillée
    api/
      chat/                   Chatbot du site
      resoudre/               Appel Claude (vision + PDF) pour corriger un sujet
  components/                 MathGame, BacSearch, ResoudreForm, ChatWidget
  lib/                         products.ts, bacResources.ts, levels.ts, anthropic.ts
content/                      Sources des ebooks (Markdown → PDF)
public/ebooks/                 PDF de la boutique
marketing/                    Kit réseaux sociaux, script d'automatisation Facebook
```

## Niveaux et matières

- **Primaire (CP à CM2)** : quiz interactif "Méthode de calcul" (adapté par
  niveau), + Français et Éveil & Sciences via l'outil IA.
- **Collège (6e à 3e) et Lycée (2nde à Terminale)** : Méthode de calcul,
  Maths, Physique-Chimie, SVT, Français, Histoire-Géo, et Philosophie
  (lycée) — toutes via l'outil de correction IA (upload photo/PDF).

## Contenu

- Les 3 ebooks (`power-of-positivity.pdf`, `50-astuces-calcul.pdf`,
  `20-jeux-maths.pdf`) sont rédigés et générés dans `public/ebooks/`. Sources
  Markdown dans `content/` (pipeline : pandoc → HTML stylé → PDF via Chrome
  headless).
- La section BAC (`src/lib/bacResources.ts`) couvre 9 pays avec des liens
  vers des sources externes vérifiées ; l'étendre à d'autres pays/années est
  un travail continu.

## Déploiement

Sur Vercel, connecté au dépôt GitHub — chaque push sur `main` redéploie
automatiquement. Variable d'environnement `ANTHROPIC_API_KEY` à configurer
dans Vercel → Settings → Environment Variables.
