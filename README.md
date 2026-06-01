## 🚗 EcoRide ## 

EcoRide est une plateforme web de covoiturage écoresponsable permettant aux utilisateurs de proposer et réserver des trajets tout en intégrant des critères environnementaux (véhicules électriques, optimisation des trajets).

Ce projet a été réalisé dans le cadre d’une évaluation full-stack (ECF).

## 🛠 Technologies utilisées ## 

Front-end
- React
- Tailwind CSS
- Framer Motion

Back-end
- Node.js
- Express
- JSON Web Token (JWT)

Bases de données
- Supabase (PostgreSQL)
- MongoDB (logs)

Outils
- GitHub
- NPM

## 🔐 Fonctionnalités principales ## 

- Authentification sécurisée avec JWT
- Inscription / Connexion utilisateur
- Gestion des rôles (Visiteur, Utilisateur, Admin)
- Création et réservation de trajets
- Système de crédits (20 crédits à l’inscription)
- Recherche avec filtres (écologique, prix, note)
- Dashboard administrateur (statistiques, gestion utilisateurs)
- Sécurisation des routes API

## 🧱 Architecture ## 

Le projet est structuré en deux parties :

- /FrontEnd : application React (UI, navigation, logique client)
- /BackEnd : API Express (routes, authentification, accès aux données)

Architecture MVP (Model - View - Presenter) pour séparer la logique métier de l’interface.

## 🗄️ Gestion des données ## 

PostgreSQL (Supabase) : données principales (utilisateurs, trajets, réservations, avis)
MongoDB : logs d’activité

## 🧪 Données de test ## 

Utilisation de Faker.js pour générer des données réalistes (utilisateurs, trajets) et tester l’application à plus grande échelle.

## 🚧 Difficultés rencontrées ## 

- Mise en place d’une architecture claire entre front et back
- Gestion sécurisée de l’authentification (JWT, protection des routes)
- Synchronisation entre deux bases de données (SQL / NoSQL)

Ces problématiques m’ont permis de renforcer mes compétences en API REST, sécurité et architecture full-stack.

## 🚀 Objectifs ## 

- Concevoir une application full-stack sécurisée
- Mettre en place une API REST complète
- Implémenter une gestion des rôles
- Structurer un projet maintenable et évolutif

## 📌 Prochaines étapes ## 

- Notifications en temps réel
- Système de paiement
- Application mobile
- Amélioration des performances

## 📂 Lancement du projet (local) ## 

1. Cloner le dépôt
```txt
git clone https://github.com/ThreatsHunterPro/EcoRide.git
cd ecoride
```

3. Installer les dépendances

Back
```txt
cd BackEnd
npm install
```

Front
```txt
cd ../FrontEnd
npm install
```

3. Lancer les serveurs

Back
```txt
cd ../BackEnd
npm run dev
```

Front
```txt
cd ../FrontEnd
npm run dev
```

## 🔐 Variables d’environnement ## 

Créer un fichier .env côté back :
```txt
PORT=3001
JWT_SECRET=ecoride_secret
SUPABASE_URL=ttps://swnkivzudtnpiztawxbe.supabase.co
MONGO_URI=mongodb://127.0.0.1:27017/ecoride
```
