
# Livrer proprement avec Git

## Tags, versions et préparation CI / CD / GitOps

---

## Pourquoi parler de livraison ?

Jusqu’ici, on a vu :

- comment écrire l’historique
- comment l’intégrer proprement
- comment garder `main` lisible

Mais une question reste ouverte :

👉 **Comment dit-on “cette version est livrable” ?**

---

## Problème classique

Dans beaucoup d’équipes :

- on livre depuis une branche
- on livre “le dernier main”
- on livre “ce qu’il y a en prod”

Ces notions sont :

- floues
- mouvantes
- non auditables

---

## Branche ≠ version

Message clé :

Une branche :

- bouge
- évolue
- n’est pas figée

Une version :

- doit être **immuable**
- doit pointer vers **un commit précis**
- doit être **reproductible**

👉 Une branche ne peut pas être une version.

---

## La solution : les tags Git

Un tag Git :

- pointe vers **un commit précis**
- ne bouge jamais
- représente une **version**

Un tag dit :

> “Ce commit a une valeur métier particulière.”

---

## Exemple simple

Créer un tag :

    git tag v1.2.0

Publier le tag :

    git push origin v1.2.0

Résultat :

- le commit est figé
- la version est nommée
- la livraison devient explicite

---

## Tags vs branches

Comparaison claire :

- branche :
  - mutable
  - utilisée pour travailler
  - pas une vérité métier

- tag :
  - immuable
  - utilisé pour livrer
  - vérité métier

👉 **On travaille avec des branches**
👉 **On livre avec des tags**

---

## Convention de nommage

Exemples courants :

- v1.0.0
- v1.2.3
- v2.0.0

Souvent basé sur :

- Semantic Versioning
- ou une convention d’équipe

Peu importe la convention,
l’important est la **cohérence**.

---

## Ce que signifie “poser un tag”

Poser un tag, ce n’est PAS :

- déployer
- tester
- valider

Poser un tag, c’est dire :

> “Ce commit est prêt à être livré quelque part.”

Le reste est **automatisé**.

---

## Tags et CI

Dans un pipeline CI moderne :

- push sur `main` :
  - build
  - tests
  - vérifications

- push d’un tag :
  - build versionné
  - publication d’un artefact
  - image Docker taggée
  - release candidate

Le tag devient un **déclencheur**.

---

## Exemple de pipeline mental

Quand un tag `v1.2.0` apparaît :

- build de l’application
- image Docker `my-app:1.2.0`
- artefact immuable
- traçable
- reproductible

👉 Le code et l’artefact portent la **même version**.

---

## Séparation importante

Message clé :

Git dit :

- **quoi** livrer (le commit)

La CI dit :

- **comment** le construire

Le CD dit :

- **où** le déployer

Git ne déploie rien.
Il décrit une intention.

---

## Préparer CI / CD proprement

Avec des tags :

- pas de logique “dev / stage / prod” dans Git
- pas de branches environnement
- pas de confusion

Un même commit taggé peut être :

- déployé en staging
- puis en production
- sans changer le code

---

## Lien avec GitOps

Dans une approche GitOps :

- le code applicatif est versionné
- la config de déploiement est versionnée
- les environnements sont déclaratifs

Le tag sert de lien :

> entre le code et son déploiement

---

## Exemple mental GitOps

- repo applicatif :
  - code
  - tags `v1.2.0`

- repo GitOps :
  - référence `image: my-app:1.2.0`

Changer d’environnement =
changer une référence,
pas le code.

---

## Pourquoi les tags sont essentiels

Sans tags :

- livraisons floues
- rollbacks complexes
- audit difficile

Avec des tags :

- livraison explicite
- rollback simple
- traçabilité totale

---

## Règles d’équipe associées

- on ne livre jamais depuis une branche
- toute livraison passe par un tag
- un tag = un commit
- un commit taggé = un artefact immuable

---

## Message clé

Les branches servent à travailler.
Les tags servent à livrer.

Tout le reste est de l’automatisation.

---

## Transition

On sait maintenant :

- travailler proprement
- intégrer proprement
- livrer proprement

Il reste une question :
👉 **comment organiser le travail d’équipe autour de ça ?**

Prochaine étape :
**Trunk-Based Development**