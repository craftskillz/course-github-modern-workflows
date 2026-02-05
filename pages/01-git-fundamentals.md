## Git n’est PAS GitHub

Git :

- est un outil local
- gère des commits, branches, tags

GitHub / GitLab :

- hébergent des dépôts
- ajoutent PR, permissions, UI

Git fonctionne même sans Internet.

---

## Ce qu’est vraiment Git

Git est :

- un journal
- une suite de snapshots
- une histoire du code

Git n’est pas :

- un outil de workflow
- un outil de déploiement
- un outil de validation métier

---

## Le commit : l’unité fondamentale

Un commit :

- capture l’état complet du projet
- représente une intention
- doit être compréhensible seul

Un bon commit :

- petit
- clair
- revertable

---

## Exemple de commit sain

Commande :
git commit -m "feat(auth): add login endpoint"

On comprend :

- ce qui a changé
- pourquoi
- dans quel domaine

---

## La branche : une idée reçue

Une branche n’est PAS :

- un environnement
- une version
- une release

Une branche est :
un simple pointeur vers un commit

---

## Visualisation mentale

    A --- B --- C   (main)
              ^
           feature/login

La branche ne contient rien.
Elle pointe juste vers un commit.

---

## Le dépôt distant (origin)

origin :

- est un autre dépôt Git
- souvent hébergé sur GitHub / GitLab
- n’a rien de magique

Push / pull = synchronisation entre dépôts Git.

---

# Push & Pull

## Ce qui se passe vraiment

---

## git push

Commande :
git push origin feature/login

Signifie :

- publier mes commits
- envoyer mon travail

Ne signifie PAS :

- déployer
- tester
- valider

---

## git pull (le piège)

Commande :
git pull

Équivaut à :
git fetch
git merge

Donc un merge automatique, souvent invisible.

---

## Pourquoi git pull pose problème

- crée des commits de merge
- pollue l’historique
- cache ce qui se passe réellement

Phrase classique :
“je ne comprends pas ce commit de merge”

---

## Règle saine

Toujours savoir ce que Git va faire.

Bonne pratique :

- git fetch
- puis décider : merge OU rebase
