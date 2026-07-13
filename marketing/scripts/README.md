# Publication automatique Facebook

Script qui publie/programme les 8 posts de `posts.json` sur la Page
Facebook via l'API Graph — en une seule exécution, sans repasser par
l'interface Meta Business Suite à la main.

## Avant de lancer

Il te faut deux valeurs, obtenues depuis [developers.facebook.com](https://developers.facebook.com) :

1. **`FB_PAGE_ID`** — l'identifiant numérique de la Page (visible dans
   Meta Business Suite → Paramètres → informations sur la Page, ou via
   Graph API Explorer en interrogeant `/me/accounts`).
2. **`FB_PAGE_ACCESS_TOKEN`** — un token d'accès Page avec les
   permissions `pages_manage_posts` et `pages_read_engagement`, généré
   depuis Graph API Explorer.

**Ne mets jamais ce token dans un fichier commité** — passe-le en
variable d'environnement à chaque exécution.

## Lancer le script

```bash
cd marketing/scripts
FB_PAGE_ID=123456789 FB_PAGE_ACCESS_TOKEN=xxxxx node publish-facebook.mjs
```

## Comportement

- Le premier post (`publishNow: true` dans `posts.json`) est publié
  immédiatement.
- Les 7 suivants sont programmés (`scheduled_publish_time`) aux dates
  indiquées dans `posts.json`.
- Si une date programmée tombe à moins de 10 minutes de l'heure
  d'exécution (minimum imposé par l'API Facebook), le post est publié
  immédiatement au lieu d'être programmé.

## Modifier les posts ou dates

Édite directement `posts.json` — chaque entrée a `date` (format ISO
local), `publishNow` (bool), et `message` (texte du post, `\n` pour les
retours à la ligne).

## Limites du token d'accès Page

Un token généré depuis Graph API Explorer expire généralement au bout
d'environ 1h à 2h (token court terme). Pour une utilisation répétée,
génère un **token longue durée** (60 jours) via l'échange décrit dans la
documentation Meta ("Long-Lived Access Tokens"), ou régénère un nouveau
token à chaque utilisation du script.
