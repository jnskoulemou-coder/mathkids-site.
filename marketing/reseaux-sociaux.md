# Jonas AI / MathKids & Cie — Kit réseaux sociaux

Site multi-fonction avec 3 volets : **App Maths (enfants)**, **Boutique
Ebooks (parents)**, **BAC Afrique francophone (élèves 1ère/Terminale et
niveaux équivalents)**. Ce document est organisé en sections indépendantes
— une par usage.

---

## 1. Identité de marque

- **Facebook** : "Jonas AI"
- **Autres plateformes (Instagram, TikTok, YouTube)** : "MathKids & Cie"
- Handle suggéré : `@mathkidsetcie` (à vérifier disponibilité)
- **Site en ligne** : https://mathkids-site.vercel.app

---

## 2. Bios / descriptions par plateforme

### 2.1 Instagram (150 caractères max)
```
🧮 App de maths ludique pour enfants
📚 Ebooks pratiques pour parents
🎓 Révisions BAC Afrique francophone
👇 Tout est ici
```

### 2.2 TikTok (80 caractères max)
```
Maths pour enfants 🧮 | Ebooks parents 📚 | Révisions BAC 🎓
```

### 2.3 Facebook — description courte
```
Jonas AI : app de maths ludique pour enfants (CP-CE1), ebooks pratiques pour parents, et révisions BAC gratuites en Afrique francophone — envoie n'importe quel sujet en photo ou PDF, notre IA le corrige en détail.
```

### 2.4 Facebook — section "À propos" détaillée
```
Jonas AI est une plateforme éducative pensée pour trois publics :

🧮 Les enfants du primaire, avec une app de maths gratuite et ludique
(niveau CP et CE1, avec progression et récompenses).

📚 Les parents, avec des ebooks pratiques pour accompagner leurs enfants
au quotidien.

🎓 Les élèves de 1ère, Terminale (BAC) et niveaux équivalents en Afrique
francophone, avec un répertoire de sujets d'examens vérifiés et un outil
de correction automatique par IA pour s'entraîner sur n'importe quel
exercice.

Site : https://mathkids-site.vercel.app
```

### 2.5 YouTube — description de chaîne
```
MathKids & Cie — apprendre les maths sans stress, du CP au Baccalauréat.

Sur cette chaîne : astuces de calcul pour enfants, méthodes de révision
pour le BAC, et présentation de nos outils (app de maths, ebooks, et
correction de sujets par IA).

📱 App maths (CP-CE1) : https://mathkids-site.vercel.app/maths
📚 Ebooks pour parents : https://mathkids-site.vercel.app/ebooks
🎓 Révisions BAC Afrique : https://mathkids-site.vercel.app/bac

Nouvelles vidéos chaque semaine.
```

---

## 3. Stratégie de contenu

### 3.1 Les piliers

| Pilier | Cible | Objectif | Fréquence |
|---|---|---|---|
| **Révisions BAC** | Élèves 1ère/Terminale, tous niveaux | Pousser vers l'outil de correction IA + l'archive de sujets | **Quotidien** |
| **App enfants** | Parents d'enfants CP-CE1 | Faire connaître/essayer l'app maths | 2-3x/semaine |
| **Ebooks parents** | Parents | Vendre les ebooks indirectement | 1-2x/semaine |
| **Engagement** | Tous | Créer de l'interaction (questions, sondages) | 1x/semaine |

### 3.2 Message clé pour le pilier BAC (à répéter sous toutes les formes)
> Élève en 1ère, Terminale, ou n'importe quel niveau équivalent : envoie
> une photo ou un PDF de **n'importe quel sujet**, notre IA le corrige en
> détail, étape par étape, gratuitement.

### 3.3 Astuce de production
Filme/crée le contenu une seule fois en format vertical court (15-60s),
puis republie sur TikTok, Instagram Reels, et YouTube Shorts.

---

## 4. Calendrier de publication — Facebook (Jonas AI)

### 4.1 Vague 1 (déjà publiée/programmée via le script d'automatisation)

| # | Date | Post | Pilier |
|---|---|---|---|
| 1 | 13/07 | Lancement | Transversal |
| 2 | 15/07 | Astuce calcul ×5 | App enfants |
| 3 | 17/07 | Présentation app | App enfants |
| 4 | 20/07 | Extrait ebook | Ebooks |
| 5 | 22/07 | BAC / outil IA | BAC |
| 6 | 24/07 | Question du jour | Engagement |
| 7 | 27/07 | Témoignage parent | Ebooks |
| 8 | 29/07 | Jeu maison | App enfants |

### 4.2 Vague 2 — rythme quotidien, priorité BAC

| # | Date | Post | Pilier |
|---|---|---|---|
| 9  | 30/07 | Envoie n'importe quel sujet (1ère/Term.) | **BAC** |
| 10 | 31/07 | Astuce app enfants | App enfants |
| 11 | 01/08 | Archive de sujets par pays | **BAC** |
| 12 | 02/08 | Photo/PDF → correction rapide | **BAC** |
| 13 | 03/08 | Jeu maison #2 | App enfants |
| 14 | 04/08 | Le BAC approche, commence maintenant | **BAC** |
| 15 | 05/08 | 9 pays couverts | **BAC** |
| 16 | 06/08 | Extrait ebook positivité | Ebooks |
| 17 | 07/08 | Toutes matières, pas que les maths | **BAC** |
| 18 | 08/08 | Motivation révisions | **BAC** |
| 19 | 09/08 | Astuce app enfants #2 | App enfants |
| 20 | 10/08 | Rappel outil IA | **BAC** |
| 21 | 11/08 | Question BAC (engagement) | **BAC** |
| 22 | 12/08 | Dernier rappel : envoie ton sujet | **BAC** |

Publication automatique via `marketing/scripts/publish-facebook.mjs` +
`posts.json` (contient les 22 posts). Programmation : Meta Business Suite →
"Create post" → flèche "Publish" → date, si publication manuelle préférée
pour un post en particulier.

---

## 5. Bibliothèque de posts

### 5.1 Pilier BAC — envoyer un sujet (répété/varié quotidiennement)

**Variante 1 — appel direct**
```
📸 Élève en 1ère, Terminale, ou niveau équivalent ?

Envoie-nous une photo ou un PDF de n'importe quel sujet — n'importe
quelle matière, n'importe quel exercice — et reçois une correction
détaillée, étape par étape, en quelques secondes. Gratuit.

Lien en bio, section BAC.
```

**Variante 2 — archive de sujets**
```
🎓 Notre répertoire de sujets BAC couvre déjà 9 pays d'Afrique
francophone (Sénégal, Côte d'Ivoire, Mali, Burkina Faso, Bénin, Togo,
Guinée, Tchad, Congo) — tous vérifiés, tous gratuits.

+ notre IA corrige n'importe quel sujet que tu lui envoies.

Lien en bio.
```

**Variante 3 — urgence/motivation**
```
⏳ Le BAC approche. Ne révise pas seul(e) dans le flou.

Envoie ton sujet (photo ou PDF), on te le corrige en détail
immédiatement — comme si tu avais un prof particulier disponible 24/7.

Lien en bio, section BAC.
```

**Variante 4 — toutes matières**
```
🧠 Maths, physique, français, histoire-géo... notre outil de correction
IA traite n'importe quelle matière, pas seulement les maths.

Une photo, un PDF, et tu as ta correction détaillée. Essaie maintenant,
lien en bio.
```

**Variante 5 — question engagement BAC**
```
👋 Question du jour pour les Terminale : c'est quoi la matière qui te
fait le plus stresser pour le BAC ?

Dis-le en commentaire — on a peut-être un sujet ou une astuce pour toi 😉
```

**Variante 6 — dernier rappel**
```
🔁 Rappel : n'importe quel sujet, n'importe quel niveau (1ère,
Terminale, équivalents) — envoie-le en photo ou PDF et reçois ta
correction en quelques secondes.

C'est gratuit. Lien en bio, section BAC.
```

### 5.2 Pilier App enfants

```
💡 Astuce de calcul : pour multiplier un nombre par 5, multiplie-le par 10
puis divise par 2 !

Exemple : 14 × 5 → 14 × 10 = 140 → 140 ÷ 2 = 70 ✅

Plus d'astuces comme ça dans notre app de maths, gratuite pour le niveau 1 !
```

```
🧮 Notre app de maths en 30 secondes :

✅ Niveau 1 (CP) gratuit : additions et soustractions de 0 à 10
✅ Niveau 2 (CE1) : jusqu'à 100 + tables de multiplication
✅ Étoiles et progression pour motiver les enfants
✅ 100% en français

Testez le niveau 1 gratuitement, lien en bio.
```

```
🎲 Jeu du jour, zéro matériel : lancez un dé deux fois et additionnez les
résultats. Le premier à 50 points a gagné !

20 jeux comme celui-ci dans notre ebook, à prix mini 😉 Lien en bio.
```

### 5.3 Pilier Ebooks / parents

```
📚 Extrait de notre ebook "50 astuces pour aider son enfant en calcul" :

"Ne dis jamais 'je suis nul en maths' devant ton enfant — il l'adopte
comme croyance."

L'attitude compte souvent plus que la méthode. Ebook complet en lien bio 👆
```

```
"Mon fils détestait les maths jusqu'à ce qu'on transforme ça en jeu
pendant les courses : compter la monnaie, comparer les prix..."

Toutes nos astuces du quotidien sont dans l'ebook "50 astuces pour aider
son enfant en calcul" 📚
```

### 5.4 Pilier Engagement

```
👋 Question du jour : à quel âge as-tu appris tes tables de
multiplication ?

Dis-nous en commentaire, et si ton enfant galère encore, on a peut-être
la solution 😉
```

---

## 6. Prochaines étapes

1. ✅ Page Facebook "Jonas" créée, connectée à Meta Business Suite
2. ✅ Automatisation Facebook opérationnelle (`marketing/scripts/`)
3. ✅ Site déployé : https://mathkids-site.vercel.app
4. ⬜ Créer Instagram, TikTok, YouTube avec le nom "MathKids & Cie" — mettre
   la vraie URL directement dans le champ "lien" du profil (bio Instagram,
   bio TikTok, section "Liens" YouTube)
5. ⬜ Mettre à jour le champ **"Site web"** de la Page Facebook (Paramètres
   → Infos sur la Page) avec https://mathkids-site.vercel.app — c'est la
   destination réelle derrière "lien en bio" utilisé dans les posts déjà
   programmés
