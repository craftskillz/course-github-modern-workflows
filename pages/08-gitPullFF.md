# Git Pull — Mode Fast-Forward (FF)

<GitPullFastForward />

````md magic-move {lines: false}

```bash
# Avant
main local  : A → B
main remote : A → B → C → D
```

```bash
# Après git pull (FF)
main local  : A → B → C → D  ✅ Pas de merge commit
```

```bash
```

````

<div class="mt-2 pb-4 ">

<div v-if="$clicks < 1"
     class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-w-[868px] box-border p-[16px] h-full">
<h3 class="font-extrabold mb-2 text-amber-500">Etat Avant</h3>    
    <div class="leading-[1.6]">
    Ta branche local n'a pas divergée, elle est juste en retard par rapport au remote
    </div>
</div>

<div  v-if="$clicks === 1"
     class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-w-[868px] box-border p-[16px] h-full">
<h3 class="font-extrabold mb-2 text-amber-500">Etat Après</h3>    
    <div class="leading-[1.6]">
    Git "avance le pointeur", rien d'autre
    </div>

</div>

<div  v-if="$clicks === 2"
     class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-w-[868px] box-border p-[16px] h-full">
<h3 class="font-extrabold mb-2 text-amber-500">Cas de gestion de conflit</h3>    
    <div class="leading-[1.6]">
    Ta branche local a divergée, elle contient un commit qui n'est pas sur le remote.<br/>
    Dans ce cas il faut gérer ce conflit et donc choisir soit :
    <ul>
    <li> Le mode Merge</li>
    <li> Le mode Rebase</li>
    </ul>
    </div>

</div>

</div>

