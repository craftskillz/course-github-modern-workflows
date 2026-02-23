# Git Pull — Mode Merge (défaut si divergence)

<GitPullMerge />

````md magic-move {lines: false}

```bash
# Avant
main local  : A → B → E  (ton commit)
main remote : A → B → C → D
```

```bash
# Après git pull (merge)
main local  : A → B  →  E  → M           ❌ M = merge commit avec deux parents : E (local) et D (remote) 
                   ↖ C → D ↗
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
    Git crée un "commit de merge" dont le snapshot intègre les changements de C, D et E <br/>
    Ce commit à deux parents, l'historique devient rapidement très complexe à lire <br/>
    Après git fetch, C et D sont copiés localement et origin/main avance et pointe sur D <br/>
    Après git merge, M est créé avec deux parents, E et D et main (local) avance et pointe sur M
    </div>

</div>

</div>
