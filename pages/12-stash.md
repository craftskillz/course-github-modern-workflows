# Git Stash
La mise de côté temporaire

#### <ul>Description du problème</ul>

Tu travailles sur une feature, tu as des modifications **non committées**,
et tu dois soudainement changer de branche

- urgence prod
- code review à faire
- bug à regarder sur une autre branche

Tu ne veux pas commiter un état incomplet.

--- 

# Git Stash (Commandes)

```bash
# Met de côté tout ce qui est modifié (suivi par Git)
git stash 
# Pareil + les fichiers non suivis (untracked)
git stash -u
# Avec un message descriptif (recommandé)
git stash -m "wip: login form validation"
```

```bash
# Réapplique le dernier stash ET le supprime de la pile
git stash pop
# Réapplique sans le supprimer (utile pour tester sur plusieurs branches)
git stash apply
```

```bash
git stash list
# stash@{0}: On mlapse-410: wip: login form validation
# stash@{1}: On mlapse-390: wip: lite llm integration

git stash pop stash@{1}    # Réapplique un stash précis
git stash drop stash@{1}   # Supprime un stash précis
git stash clear             # Vide toute la pile
```

> ⚠️ Le stash est pratique mais **il ne remplace pas un commit**.
>
> Si tu vas être absent plus d'une heure ou changer de contexte vraiment, préfère un commit `wip:` sur ta branche que tu pourras écraser ensuite
> avec un **rebase interactif**.