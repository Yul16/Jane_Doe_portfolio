# Projet React Portfolio

Ce projet est un portfolio développé avec React. Il inclut plusieurs fonctionnalités modernes et utilise diverses bibliothèques populaires pour améliorer le développement et l'expérience utilisateur.

---

## Technologies utilisées

- **React** : Framework JavaScript pour construire des interfaces utilisateur.
- **React Router DOM** : Pour gérer la navigation entre les différentes pages.
- **Bootstrap** : Framework CSS pour un design réactif et prêt à l'emploi.
- **Sass** : Préprocesseur CSS pour une gestion avancée des styles.
- **FontAwesome** : Pour les icônes vectorielles modernes.
- **Web Vitals** : Pour mesurer les performances et optimiser l'application.

---

## Structure du projet

Voici la structure des dossiers :

```
.
├── public
│   ├── img
│   │   ├── banniere.jpg
│   │   ├── contact.jpg
│   │   └── ...
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── ...
│   ├── pages
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   ├── reportWebVitals.js
│   └── ...
├── package.json
└── README.md
```

---

## Commandes nécessaires pour installer les bibliothèques

Exécutez les commandes suivantes pour installer les dépendances utilisées dans ce projet :

### Installer React (si non installé via `create-react-app`)

```bash
npx create-react-app my-portfolio
```

### Installer React Router DOM

```bash
npm install react-router-dom
```

### Installer Bootstrap

```bash
npm install bootstrap
```

Ajoutez ensuite Bootstrap dans `index.js` :

```javascript
import "bootstrap/dist/css/bootstrap.min.css";
```

### Installer Sass

```bash
npm install sass
```

### Installer FontAwesome

```bash
npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
```

### Installer Web Vitals

```bash
npm install web-vitals
```

Ajoutez Web Vitals dans `index.js` :

```javascript
import reportWebVitals from "./reportWebVitals";
reportWebVitals(console.log);
```

---

## Scripts disponibles

Dans le répertoire du projet, vous pouvez exécuter :

### `npm start`

Lance l'application en mode développement.

```bash
npm start
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le projet dans votre navigateur.

### `npm run build`

Construit le projet pour la production dans le dossier `build`.

```bash
npm run build
```

---

## Mesure des performances

Ce projet inclut `web-vitals` pour mesurer les performances du site. Les données sont loggées dans la console ou peuvent être envoyées à un point d'analyse.

---

## Licence

Ce projet est libre et ouvert sous licence MIT.
