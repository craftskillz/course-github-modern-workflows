# Rebase interactif
Nettoyer son historique avant la PR 

Pendant le développement, on accumule souvent des commits de travail peu propres

```bash
feat: add login form
fix typo
wip
fix again
fix tests
```

<div grid="~ cols-2 gap-4">
<div>

Le rebase interactif permet de **réécrire l'historique de ta branche**
avant de faire ta PR : fusionner, reformuler, réordonner.

```bash
# Réécrire les 4 derniers commits
git rebase -i HEAD~4
```

</div>
<div>

Git ouvre un éditeur avec la liste des commits

```
pick a1b2c3 feat: add login form
pick d4e5f6 fix typo
pick g7h8i9 wip
pick j0k1l2 fix tests

# pick   = garder tel quel
# reword = reformuler le message
# squash = fusionner avec le précédent (garde les deux messages)
# fixup  = fusionner avec le précédent (efface ce message)
# drop   = supprimer ce commit
```

</div>
</div>

---

# Rebase interactif + Autosquash
La version intelligente

Préfixer tes commits de travail avec `fixup!` + le message exact du commit cible :

```bash
git commit -m "feat: add login form"
# ... tu travailles ...
git commit -m "fixup! feat: add login form"
git commit -m "fixup! feat: add login form"
```

Puis au moment de nettoyer :

```bash
git rebase -i --autosquash HEAD~4
```

Git **pré-remplit l'éditeur** avec les bons `fixup` déjà placés au bon endroit ✅

---

# Force & Force with lease
La bonne pratique en équipe

Lorsqu'on réécrit l'historique (donc après un rebase), `git push` simple sera **refusé**

<span class="px-2 rounded text-red-600 bg-yellow-200">Il ne faut jamais utiliser **force push** qui écrase sans vérifications la branche distante.</span>
```bash
# Toujours utiliser --force-with-lease
git push --force-with-lease
```

> `--force-with-lease` échoue si quelqu'un d'autre a poussé sur ta branche
> entre-temps → évite d'écraser son travail accidentellement

---

# Git Stash

La mise de côté temporaire

---

## Le problème

Tu travailles sur une feature, tu as des modifications **non committées**,
et tu dois soudainement changer de branche :

- urgence prod
- code review à faire
- bug à regarder sur une autre branche

Tu ne veux pas commiter un état incomplet.

---

## Stash — Les commandes de base

```bash
# Met de côté tout ce qui est modifié (suivi par Git)
git stash

# Idem + les fichiers non suivis (untracked)
git stash -u

# Avec un message descriptif (recommandé)
git stash -m "wip: login form validation"
```

---

## Stash — Reprendre son travail

```bash
# Réapplique le dernier stash ET le supprime de la pile
git stash pop

# Réapplique sans le supprimer (utile pour tester sur plusieurs branches)
git stash apply
```

---

## Stash — Gérer plusieurs stashs

Le stash est une **pile** (LIFO). Tu peux en avoir plusieurs.

```bash
git stash list
# stash@{0}: On mlapse-410: wip: login form validation
# stash@{1}: On mlapse-390: wip: lite llm integration

git stash pop stash@{1}    # Réapplique un stash précis
git stash drop stash@{1}   # Supprime un stash précis
git stash clear             # Vide toute la pile
```

---

## Stash — Bonne pratique

> ⚠️ Le stash est pratique mais **il ne remplace pas un commit**.
>
> Si tu vas être absent plus d'une heure ou changer de contexte vraiment,
> préfère un commit `wip:` sur ta branche que tu pourras écraser ensuite
> avec un **rebase interactif**.
>
> Le stash se perd plus facilement qu'un commit.