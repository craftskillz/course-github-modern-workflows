# Lisser l’historique Git

## Rebase + Fast-Forward Merge

---

## Les 3 types d’historique Git

Dans la vraie vie, on rencontre :

1. merge partout
2. rebase + merge commit
3. rebase + fast-forward

Un seul est vraiment lisible.

---

## 1️⃣ Merge partout (à éviter)

Caractéristiques :

- commits de merge fréquents
- graphe complexe
- information faible

Lecture difficile.
Audit pénible.
Rollback stressant.

---

## 2️⃣ Rebase + merge commit

Caractéristiques :

- commits de feature propres
- MAIS commit de merge final

C’est mieux.
Mais on peut faire encore plus simple.

---

## 3️⃣ Rebase + Fast-Forward (modèle cible)

Caractéristiques :

- aucun commit de merge
- historique linéaire
- chaque commit raconte une intention

Objectif :
un historique qui se lit comme un journal.

---

## Qu’est-ce qu’un Fast-Forward ?

Un fast-forward signifie :

- Git n’a rien à fusionner
- il avance juste le pointeur de branche

Aucun commit n’est créé.

---

## Visualisation mentale

Avant :

    A --- B --- C   (main)
              \
               D --- E   (feature)

Après fast-forward :

    A --- B --- C --- D --- E   (main)

La branche avance.
Rien de plus.

---

## La commande clé

Pour imposer ce comportement :

    git merge --ff-only feature/login

Si Git ne peut pas fast-forward :
il refuse.

Et c’est volontaire.

---

## Pourquoi Git peut refuser

Git refuse si :

- main a avancé
- la branche n’est pas à jour
- il y a divergence

Ce refus est un garde-fou,
pas un problème.

---

## La bonne séquence complète

Sur la branche feature :

    git fetch origin
    git rebase origin/main

Puis :

    git push --force-with-lease

---

## Intégration finale

Sur main :

    git checkout main
    git merge --ff-only feature/login

Résultat :

- historique linéaire
- aucun commit parasite

---

## Pourquoi on impose ce modèle

Bénéfices :

- historique lisible
- rollback simple
- audit clair
- moins de conflits tardifs
- compatible CI/CD et GitOps

---

## Règle d’équipe associée

- rebase obligatoire avant merge
- fast-forward only
- main toujours propre
- branches courtes

---

## Message clé

Ce n’est pas plus compliqué.
C’est juste plus explicite.

Git refuse parfois,
pour t’éviter des erreurs plus tard.

---

## Transition

Maintenant que l’historique est propre,
il faut savoir **comment livrer**.

Prochaine étape :
les tags Git.
