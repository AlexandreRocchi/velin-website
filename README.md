# Site de Vélin

Site vitrine et blog de **Vélin**, l'application libre et auto-hébergée pour rédiger, valider et faire
vivre la politique de sécurité des systèmes d'information (PSSI), reliée aux risques analysés dans
[Beffroi](https://alexandrerocchi.github.io/beffroi-website/). Construit avec [Astro](https://astro.build),
sur le même modèle que le site de Beffroi.

Charte : encre bordeaux `#6b1d2e`, parchemin `#f8f3e8`, sceau doré `#b8862b` ; IBM Plex Sans et
IBM Plex Serif servies localement, aucune ressource tierce. Le logo (feuillet au coin replié et sceau)
est dans `src/components/LogoMark.astro` et `public/favicon.svg`.

| Page | Fichier |
|---|---|
| Accueil (présentation du produit) | `src/pages/index.astro` |
| Fonctionnalités, référentiels, sécurité | `src/pages/fonctionnalites.astro` |
| Tarifs | `src/pages/tarifs.astro` |
| Blog (liste, articles, flux RSS) | `src/pages/blog/`, `src/pages/rss.xml.js` |
| Mentions légales | `src/pages/mentions-legales.astro` |
| Styles | `src/styles/global.css` |

Vélin est **en conception** : le site le présente comme tel (pas de téléchargement, de démo ni de
capture d'écran tant que le logiciel n'existe pas). Le statut affiché est dans `src/lib/site.ts`.

## Développer

```bash
npm install
npm run dev      # http://localhost:4321/velin-website/
npm run build    # site statique dans dist/
npm run check    # vérification des types (astro check)
```

## Écrire un article de blog

1. Copiez `src/content/blog/_modele.md` en `src/content/blog/mon-article.md` (le nom du fichier
   devient l'adresse `/blog/mon-article`).
2. Remplissez l'en-tête : `title`, `description`, `date`, `tags`.
3. Écrivez en Markdown ; les images vont dans `src/content/blog/img/`.
4. `draft: true` garde l'article visible uniquement avec `npm run dev`.

## Publication

Chaque push sur `main` déploie le site sur GitHub Pages (`.github/workflows/deploy.yml`). À activer une
fois : **Settings → Pages → Source : GitHub Actions**. Adresse :
https://alexandrerocchi.github.io/velin-website/
