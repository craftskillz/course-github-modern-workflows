## git pull (le piège)


Si ma branche locale est simplement en retard par rapport au remote,
git pull fait automatiquement un fast-forward, sans aucune configuration.
Fast-forward = déplacement de pointeur, pas un merge.
✔️ Oui
✔️ Par défaut
✔️ Sans commit de merge
✔️ Sans option particulière

Commande utile pour vérifier avant de pull
git status
Your branch is behind 'origin/feature' by 2 commits.



Commande :
git pull

Équivaut à :
git fetch
git merge

Donc un merge automatique, souvent invisible (Ca c'est la bonne façon de faire les choses)

---

# C’est quoi vraiment un merge ?

<br/>

Un commit de merge est créé quand :
- deux historiques divergent
- et qu’on choisit de les **combiner**

Même **sans conflit**, un merge peut créer un commit.

👉 Les pull requests “merge commit” par défaut :
- créent des commits de merge
- même quand il n’y avait **aucun conflit à résoudre**
- Et c'est là le problème pour la lisibilité de l'historique git

---

### 🧠 Ce qui déclenche un conflit

Un conflit apparaît quand :
- deux modifications touchent la même zone de code
- et que Git ne peut pas choisir automatiquement

👉 Un conflit peut apparaître :
- lors d’un **merge**
- lors d’un **rebase**
- lors d’un **cherry-pick** 🍒

Le conflit **n’impose pas** un commit de merge.



---

### 😬 Le problème des commits de merge systématiques

Quand on merge tout sans distinction :

- l’historique devient un graphe complexe
- chaque merge ressemble à une “résolution de conflit”
- on ne distingue plus :
  - les vrais problèmes
  - des intégrations triviales

L’historique devient :
> une suite de “branches réconciliées”  
> au lieu d’une histoire du code

---

### 🔄 L’alternative : rebase + fast-forward

Avec :
- des branches courtes
- des rebases réguliers
- des merges **fast-forward only**

Résultat :
- pas de commit de merge inutile
- historique linéaire
- chaque commit porte une intention claire

---

### 🎯 Un bénéfice clé souvent ignoré

Avec un historique linéaire :

- les conflits sont visibles **là où ils ont vraiment eu lieu**
- ils sont résolus explicitement
- ils ne sont pas noyés dans des commits de merge génériques

👉 On distingue clairement :
- les commits “sains”
- des commits issus de vraies frictions d’intégration

---

### 🧠 Le vrai compromis

Deux choix :

- ❌ aller vite en mergeant tout
  - moins d’effort immédiat
  - perte de lisibilité durable

- ✅ investir un peu plus avec rebase + fast-forward
  - plus explicite
  - historique exploitable
  - meilleure compréhension collective

---

### 💡 Message clé

Le but n’est pas d’éviter les conflits.

Le but est de :
- les résoudre **au bon moment**
- les rendre **visibles**
- et garder un historique avec lequel on peut raisonner.



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
