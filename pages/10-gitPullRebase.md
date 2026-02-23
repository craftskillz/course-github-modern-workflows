# Git Pull — Mode Rebase

<GitPullRebase />

````md magic-move {lines: false}

```bash
# Avant
main local  : A → B → E  (ton commit)
main remote : A → B → C → D
```

```bash
# Après git pull --rebase
main local  : A → B → C → D → E  ✅ Historique linéaire
```
````

<div class="mt-2 pb-4 ">

<div v-if="$clicks < 1"
     class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-w-[868px] box-border p-[16px] h-full">
<h3 class="font-extrabold mb-2 text-amber-500">Etat Avant</h3>    
    <div class="leading-[1.6]">
    Tu as commité localement ET le remote a avancé
    </div>
</div>

<div  v-if="$clicks === 1"
     class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-w-[868px] box-border p-[16px] h-full">
<h3 class="font-extrabold mb-2 text-amber-500">Etat Après</h3>    
    <div class="leading-[1.6]">
    Git rejoue tes commits "au dessus" des commits du remote<br/>
    L'historique devient linéaire, il est très facile de le lire, de le comprendre, de créer des releases notes
    </div>

</div>

</div>

---

# Git Pull — Configurer le comportement par défaut

```bash
# FF seulement (échoue si divergence — te force à choisir explicitement)
git config --global pull.ff only

# Rebase automatique
git config --global pull.rebase true

# Merge (le défaut Git — déconseillé)
git config --global pull.rebase false
```

> 💡 `pull.ff only` est une bonne discipline pour les débutants :
> si ça échoue, tu es forcé de comprendre ce qui se passe plutôt
> que de créer un merge commit sans le vouloir.
