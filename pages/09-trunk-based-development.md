# Trunk-Based Development
## Travailler ensemble sans branches longues

---

## Pourquoi parler d’organisation du travail ?

Jusqu’ici, on a vu :
- comment écrire un historique propre
- comment intégrer sans bruit
- comment livrer avec des tags

Mais une question reste centrale :

👉 **Comment toute une équipe travaille ensemble sans chaos ?**

---

## Le modèle historique : multi-branches

Très répandu :

- main
- develop
- feature/*
- release/*
- hotfix/*

Sur le papier : rassurant  
Dans la réalité : complexe

---

## Promesse du multi-branches

Ce que ce modèle essaie de faire :

- séparer le travail
- sécuriser la production
- organiser les livraisons
- éviter les conflits

👉 L’intention est bonne.

---

## Problèmes réels du multi-branches

Dans la pratique :

- double (ou triple) vérité
- intégration tardive
- conflits massifs
- branches longues
- stress au merge final

Souvent :
“Ça marchait sur develop, mais pas sur main.”

---

## Le vrai problème

Message clé :

Ce n’est pas le code qui pose problème.  
👉 C’est **l’intégration tardive**.

Plus on attend :
- plus les conflits grossissent
- plus le feedback arrive tard
- plus le risque augmente

---

## Le principe du Trunk-Based Development

Idée simple :

- une seule branche longue : `main`
- tout le monde intègre dessus
- très fréquemment

Le “trunk” = la vérité unique.

---

## Règles fondamentales

Trunk-Based, c’est :

- `main` toujours déployable
- branches courtes (heures ou jours)
- intégration fréquente
- pas de branches d’environnement

---

## Visualisation mentale

Multi-branches :

    feature ────────┐
                     ├─ merge tardif
    develop ────────┘
          \
           main

Trunk-Based :

    main ──●─●─●─●─●
              \
               feature (courte)

---

## Ce qui remplace develop

Question classique :
“Mais sans develop, on fait comment ?”

Réponse :

- CI rapide
- feature flags
- tags
- environnements découplés du code

---

## Feature flags

Un feature flag permet :

- merger du code non activé
- livrer sans exposer
- tester progressivement

Le code peut être sur `main`
sans être visible pour l’utilisateur.

---

## Environnements ≠ branches

Message clé important :

- un environnement n’est pas une branche
- dev / staging / prod ne sont pas du code
- ce sont des **déploiements**

👉 On ne crée pas de branches pour ça.

---

## Promotion moderne

Avec Trunk-Based :

- même commit
- même tag
- promu de dev → staging → prod

La promotion change :
- la config
- pas le code

---

## Lien avec Rebase + Fast-Forward

Trunk-Based fonctionne bien parce que :

- branches courtes
- rebase facile
- fast-forward possible
- historique linéaire

Tout ce qu’on a vu avant converge ici.

---

## Lien avec les tags

Dans Trunk-Based :

- on travaille sur main
- on taggue pour livrer
- on ne “fige” jamais une branche

Les tags deviennent centraux.

---

## Lien avec CI / CD

Pipeline typique :

- push sur main :
  - build
  - tests
  - feedback rapide

- push d’un tag :
  - build versionné
  - artefact immuable
  - prêt à être déployé

---

## Pourquoi ce modèle marche mieux

Bénéfices :

- intégration continue réelle
- conflits plus petits
- feedback rapide
- moins de stress
- livraison plus fréquente

---

## Quand Trunk-Based est difficile

Soyons honnêtes :

- grosses PR
- branches partagées longtemps
- pas de CI fiable
- peur de livrer souvent

👉 Le modèle **révèle** les problèmes.
Il ne les crée pas.

---

## Règles d’équipe typiques

- une seule branche longue : main
- branches de feature courtes
- rebase avant merge
- fast-forward only
- tags pour livrer
- feature flags si nécessaire

---

## Message clé

On ne supprime pas des branches
pour être puriste.

On les supprime
pour **intégrer plus tôt**
et **livrer plus sereinement**.

---

## Pourquoi GitHub propose le “mauvais” bouton par défaut

### (et pourquoi ce n’est pas une erreur)

---

### 🧠 Constat

Sur GitHub, lors d’une Pull Request,  
le bouton par défaut est souvent :

➡️ **“Create a merge commit”**

Ce choix surprend souvent quand on parle de :
- Trunk-Based Development
- historique linéaire
- rebase + fast-forward

---

### ❓ Est-ce un mauvais choix technique ?

Non.

Le merge commit par défaut est :
- **le plus sûr**
- **le moins destructif**
- **le plus simple à expliquer**

Il fonctionne :
- sans réécriture d’historique
- sans force push
- sans prérequis avancés Git

👉 C’est un choix **conservateur**, pas un choix “moderne”.

---

### 🎯 Le vrai objectif de GitHub

GitHub est conçu pour :
- des millions de développeurs
- des niveaux très hétérogènes
- des projets open source massifs
- des contributions ponctuelles

Dans ce contexte :
> **la sécurité prime sur la lisibilité**

---

### ⚠️ Mais ce choix a un coût

En équipe, à long terme :

- les commits de merge s’accumulent
- l’historique devient bruité
- on ne distingue plus :
  - les vraies intégrations complexes
  - des merges triviaux sans conflit

Git devient :
> un graphe à naviguer  
> plutôt qu’une histoire à lire

---

### 🔄 Ce que GitHub ne peut pas deviner

GitHub ne sait pas :
- si ton équipe pratique Trunk-Based
- si vous rebasez régulièrement
- si vous exigez un historique linéaire
- si `main` doit rester lisible à long terme

👉 **C’est une décision d’équipe, pas d’outil**

---

### ✅ Quand le bouton par défaut est acceptable

- contributeurs externes
- branches longues et partagées
- projets open source
- équipes très juniors
- faible exigence sur l’historique

Dans ces cas :
> le merge commit est un compromis raisonnable

---

### 🚀 Quand il devient un anti-pattern

- équipe stable
- branches de feature courtes
- CI fiable
- volonté de Trunk-Based
- besoin de traçabilité et d’audit

Dans ce contexte :
> le bouton par défaut devient le mauvais choix

---

### 🛠️ La responsabilité de l’équipe

Adopter un workflow moderne, c’est :

- comprendre ce que fait chaque bouton
- configurer GitHub explicitement
- désactiver ce qui nuit à l’objectif
- assumer un peu plus de discipline

👉 **GitHub propose.  
L’équipe dispose.**

---

### 💡 Message clé

GitHub optimise pour la **sécurité universelle**.

Une équipe mature optimise pour :
- la lisibilité
- la compréhension
- la livraison continue

C’est à l’équipe de faire ce choix conscient.

---

## Conclusion de la formation

Git devient :

- un journal lisible
- un outil de confiance
- un support pour CI / CD / GitOps

Pas un champ de mines.

---

## Dernier message

Ce ne sont pas des règles Git.

Ce sont des règles
pour **mieux travailler ensemble**.
