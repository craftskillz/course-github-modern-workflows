# Compléments
Git Pull

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

