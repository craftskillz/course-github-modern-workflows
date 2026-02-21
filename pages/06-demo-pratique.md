# Démo Pratique


<DemoGitPushPull />

````md magic-move {lines: false}

```bash
git clone git@github.com:ymedaghri/git-practices.git
```

```bash
cd tiaRepo
git checkout -b mlapse-410
```

```bash
echo "mlapse-410 Step 1" >> QuestionExtraction.txt
git add . && git commit -m "feat: Question Extraction Step 1" # or cz
```

```bash
echo "mlapse-410 Step 2" >> QuestionExtraction.txt
git add . && git commit -m "feat: Question Extraction Step 2" # or cz
```

```bash
git push
git branch -a
```

```bash
# This happens on the GitHub SaaS Platform
```

```bash
git checkout main
git pull
git fetch --prune
```

```bash
git checkout -b mlapse-390
echo "mlapse-390 Step 1" >> LiteLLM.txt && git add . && git commit -m "feat: Lite LLM Step 1" # or cz
echo "mlapse-390 Step 2" >> LiteLLM.txt && git add . && git commit -m "feat: Lite LLM Step 2" # or cz
echo "mlapse-390 Updating" >> QuestionExtraction.txt
git add . && git commit -m "feat: Lite LLM Step 3 Updating QuestionExtraction" # or cz
```

```bash
git checkout main
git pull
git checkout - # on se remet sur la branche feature
git rebase main
```

```bash
# En cas de conflits
git rebase --continue
git push --force-with-lease
```

```bash
```

```bash
```

````

<!--div>{{$clicks}}</div-->

<div class="mt-2 pb-4 ">

<div v-if="$clicks < 1"
     class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-w-[868px] box-border p-[16px] h-full">
<h3 class="font-extrabold mb-2 text-amber-500">Configuration GitHub (Rulesets)</h3>    
    <div class="leading-[1.6]">
    - Enforcement status Active (or else dry run that logs)<br/>
    - Branch Targeting criteria : main<br/>
    - Restrict deletions<br/>
    - Require a pull request before merging<br/>
    - Merge Method : Squash<br/>
    - Block force pushes + Automatically delete head branches 
    </div>
</div>

<div  v-if="$clicks === 1"
     class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-w-[868px] box-border p-[16px] h-full">
<h3 class="font-extrabold mb-2 text-amber-500">Création d'une branche feature</h3>    
    <div class="leading-[1.6]">
    </div>

</div>

<div  v-if="$clicks === 2"
     class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-w-[868px] box-border p-[16px] h-full">
<h3 class="font-extrabold mb-2 text-amber-500">Ajout d'un commit</h3>    
    <div class="leading-[1.6]">
    </div>

</div>

<div  v-if="$clicks === 3"
     class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-w-[868px] box-border p-[16px] h-full">
<h3 class="font-extrabold mb-2 text-amber-500">Ajout d'un commit supplémentaire</h3>    
    <div class="leading-[1.6]">
    </div>

</div>

<div  v-if="$clicks === 4"
     class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-w-[868px] box-border p-[16px] h-full">
<h3 class="font-extrabold mb-2 text-amber-500">Envoi (Push) de la feature branche sur le serveur GitHub (the Remote)</h3>
    <div class="leading-[1.6]">
    Et création de la PR associée dans GitHub
    </div>

</div>

<div  v-if="$clicks === 5"
     class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-w-[868px] box-border p-[16px] h-full">
<h3 class="font-extrabold mb-2 text-amber-500">Merge de la branche feature sur main en mode "Squash Commits"</h3>    
    <div class="leading-[1.6]">
    Les commits de la branche feature sont "squashed" en un seul commit à décrire.<br/>
    L'historique de la branche Main devient parfaitement linéaire, plus de merge commits en utilisant cette approche.
    </div>

</div>

<div  v-if="$clicks === 6"
     class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-w-[868px] box-border p-[16px] h-full">
<h3 class="font-extrabold mb-2 text-amber-500">Suppression immédiate de la branche feature mergée</h3>    
    <div class="leading-[1.6]">
    Ce comportement se configure au niveau du Repository GitHub : "Automatically delete head branches"
    </div>

</div>

<div  v-if="$clicks === 7"
     class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-w-[868px] box-border p-[16px] h-full">
<h3 class="font-extrabold mb-2 text-amber-500">Gestion des conflicts Git (Switch to Visal Repo)</h3>    
    <div class="leading-[1.6]">
    - Checkout a new feature branch<br/>
    - Create 3 commits<br/>
    - Create a PR<br/>
    - Merge it on main
    </div>

</div>

<div  v-if="$clicks === 8"
     class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-w-[868px] box-border p-[16px] h-full">
<h3 class="font-extrabold mb-2 text-amber-500">L'approche "Rebase"</h3>    
    <div class="leading-[1.6]">
    Rebase consiste à réécrire les commits de votre branche feature au dessus du dernier commit récupéré de la branche main.<br/>
    C'est comme si on "déplacait la branche" !
    </div>

</div>

<div  v-if="$clicks === 9"
     class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-w-[868px] box-border p-[16px] h-full">
<h3 class="font-extrabold mb-2 text-amber-500">Les conflits peuvent être résolus en local de préférence</h3>    
    <div class="leading-[1.6]">
    Mais on peut aussi le faire dans GitHub, ce qui peut être parfois utile.
    </div>

</div>

<div  v-if="$clicks === 10"
     class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-w-[868px] box-border p-[16px] h-full">
<h3 class="font-extrabold mb-2 text-amber-500">On peut ensuite faire une PR et la merger</h3>    
    <div class="leading-[1.6]">
    Le conflit précédemment détecté par GitHub et immédiatement levé, le merge peut avoir lieu normalement.
    </div>

</div>

<div  v-if="$clicks === 11"
     class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-w-[868px] box-border p-[16px] h-full">
<h3 class="font-extrabold mb-2 text-amber-500">Suppression de la branche, Historique Linéaire</h3>    
    <div class="leading-[1.6]">
    - L'historique se lit comme une suite de features<br/>
    - La detection de l'origine d'un bug en prod est considérablement simplifiée (git bisect)<br/>
    - Clarté des release notes<br/>
    - Réduction de la charge cognitive
    </div>

</div>

</div>

