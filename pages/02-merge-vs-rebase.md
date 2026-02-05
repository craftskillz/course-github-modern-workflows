
# Merge vs Rebase

## Le cœur du sujet

---

## Le merge : ce qu’il fait

Commande :
git merge feature/login

- combine deux historiques
- crée un commit de merge
- conserve la divergence

---

## Exemple d’historique avec merge

    A --- B --- C ---- M
           \         /
            D --- E

Lisibilité :
difficile
bruitée
narration cassée

---

## Pourquoi le merge est souvent un problème

- commits “Merge branch …”
- information faible
- historique difficile à lire
- rollback moins évident

Le merge n’est pas “mal”
mais souvent mal utilisé.

---

## Le rebase : ce qu’il fait vraiment

Commande :
git rebase main

- rejoue tes commits
- sur un nouveau point de base
- sans changer le contenu fonctionnel

---

## Exemple avec rebase

Avant :
A --- B --- C
\
 D --- E

Après :
A --- B --- C --- D' --- E'

Historique linéaire.

---

## Ce que le rebase change (et ne change pas)

Change :

- les SHA des commits
- l’ordre de l’histoire

Ne change PAS :

- le code final
- le comportement fonctionnel

---

## Quand utiliser rebase

À faire :

- sur ta branche de feature
- pour te mettre à jour avant intégration

À ne pas faire :

- sur main
- sur branches partagées sans coordination

---

## Le vrai bénéfice du rebase

Un historique qui :

- se lit comme un journal
- raconte une histoire
- aide à comprendre le code

---

## Transition

Maintenant que nous comprenons :

- commits
- branches
- push / pull
- merge vs rebase

Prochaine étape :
lisser l’historique avec
Rebase + Fast-Forward Merge.
