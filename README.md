# Portfolio Modèle — Atelier Git & GitHub

Ce repo contient un portfolio modèle pour l'atelier Git & GitHub. Les équipes l'utilisent comme point de départ pour créer leur propre portfolio collaboratif.

## Vue d'ensemble du Workshop
Durée : 30–40 minutes  
Objectif : Chaque équipe collabore sur un portfolio via Git/GitHub avec branches, PRs et déploiement GitHub Pages.

## Workflow des Équipes

### 1. Le Leader Clone le Modèle
```bash
git clone https://github.com/Yacine-ai-tech/model-portfolio.git
cd model-portfolio
```

### 2. Le Leader Crée le Repo GitHub de l'Équipe
- Aller sur github.com > New repository
- Nom : `portfolio-equipe-[nom]` (ex: `portfolio-equipe-alpha`)
- Public, sans README/initial commit
- Créer le repo

### 3. Le Leader Connecte et Pousse
```bash
git remote set-url origin https://github.com/[username-leader]/portfolio-equipe-[nom].git
git push -u origin main
```

### 4. Le Leader Invite les Collaborateurs
- Settings > Collaborators > Add people
- Inviter chaque membre de l'équipe

### 5. Les Membres Clonent le Repo de l'Équipe
```bash
git clone https://github.com/[username-leader]/portfolio-equipe-[nom].git
cd portfolio-equipe-[nom]
```

### 6. Chaque Membre Crée sa Branche
```bash
git checkout -b [role]  # html, css, ou javascript
```

### 7. Modifications par Rôle

#### Rôle HTML (index.html)
- Remplacer `[Votre Nom]` par le nom d'un membre
- Changer les textes dans "À propos"
- Ajouter/modifier des projets

#### Rôle CSS (styles.css)
- Changer les couleurs (variables CSS)
- Modifier les polices
- Ajuster les espacements

#### Rôle JS (script.js)
- Changer les messages console.log
- Modifier les interactions dynamiques
- Ajouter des animations simples

### 8. Commit et Push
```bash
git add .
git commit -m "Modification [rôle] - description"
git push -u origin [role]
```

### 9. Créer une Pull Request
- Sur GitHub > Pull requests > New pull request
- Comparer : `[role]` → `main`
- Titre : "Modification [rôle]"
- Créer la PR

### 10. Revue et Merge
- L'équipe review les PRs
- Corriger si nécessaire
- Merger les PRs approuvées

### 11. Déploiement
- Settings > Pages > Deploy from branch `main`
- Attendre 1–2 minutes
- Partager l'URL publique

## Structure des Fichiers
- `index.html` : Structure HTML avec navigation, sections, et placeholders
- `styles.css` : Styles CSS avec variables, responsive design, animations
- `script.js` : Interactions JavaScript pour dynamisme
- `README.md` : Ce fichier d'instructions

## Technologies Utilisées
- HTML5 sémantique
- CSS3 avec Flexbox/Grid
- JavaScript vanilla
- Font Awesome pour les icônes
- Google Fonts

## Instructions pour les Formateurs
Voir le `GUIDE_FORMATEUR.md` pour les instructions détaillées de l'atelier.

## Support
En cas de problème, consultez le guide formateur ou demandez de l'aide à votre équipe !