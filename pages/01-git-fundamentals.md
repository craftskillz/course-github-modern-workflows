# Git n’est pas GitHub
Git fonctionne même sans Internet.

<div grid="~ cols-2 gap-4">
<div>

<span class="underline decoration-orange-500 underline-offset-2">Git :</span>

- est un outil local
- gère des commits, branches, tags
    
</div>
<div>

<span class="underline decoration-orange-500 underline-offset-2">GitHub / GitLab : </span>

- hébergent des dépôts
- ajoutent PR, permissions, UI

</div>
</div>

---
layout: center
---

# Distributed Version Control (DVCS)
Comment ca fonctionne ?


<div class="relative w-[800px] mx-auto">
  <img src="./public/images/git-push-pull.png" alt="DVCS diagram" class="w-[800px]" />

  <div
    v-click.hide
    class="absolute text-3xl font-bold bg-white/80 px-3 py-1 rounded"
    style="left: 240px; top: 75px;"
  >
    ?
  </div>

  <div
    v-after
    class="absolute text-3xl font-bold bg-white/80 px-3 py-1 rounded"
    style="left: 210px; top: 75px;"
  >
    GIT PUSH
  </div>

  <div
    v-click.hide
    class="absolute text-3xl font-bold bg-white/80 px-3 py-1 rounded"
    style="left: 220px; top: 250px;"
  >
    ?
  </div>

  <div
    v-after
    class="absolute text-3xl font-bold bg-white/80 px-3 py-1 rounded"
    style="left: 160px; top: 250px;"
  >
    GIT PULL
  </div>

</div>


---

# Ce qu’est vraiment Git

- un journal
- une suite de snapshots
- une histoire du code

<arrow x1="600" y1="100" x2="500" y2="205" color="#953" width="2" arrowSize="1" />
<div
  class="absolute text-xs font-semibold text-[#953]"
  style="left: 610px; top: 70px;"
>
  C'est également le Hash (ou Sha1) du commit, par exemple 22a81b0014852685a97e4d7f7385a7fb6d0333c3 
</div>

<!-- Tailwind / Slidev (UnoCSS) -->
<div class="mx-auto w-200 px-6 py-5">
  <!-- 5 colonnes -->
  <div class="grid grid-cols-5 gap-x-5 gap-y-2 items-start text-center">
    <!-- ====== En-têtes ====== -->
    <div class="flex justify-center">
      <span class="inline-flex rounded-xl bg-violet-600 px-6 py-3 text-white font-semibold shadow">
        Initial version
      </span>
    </div>
    <div class="flex justify-center">
      <span class="inline-flex rounded-xl bg-violet-600 px-8 py-3 text-white font-semibold shadow">
        Version 2
      </span>
    </div>
    <div class="flex justify-center">
      <span class="inline-flex rounded-xl bg-violet-600 px-8 py-3 text-white font-semibold shadow">
        Version 3
      </span>
    </div>
    <div class="flex justify-center">
      <span class="inline-flex rounded-xl bg-violet-600 px-8 py-3 text-white font-semibold shadow">
        Version 4
      </span>
    </div>
    <div class="flex justify-center">
      <span class="inline-flex rounded-xl bg-violet-600 px-8 py-3 text-white font-semibold shadow">
        Version 5
      </span>
    </div>
    <!-- ====== Rangée 2 (A) ====== -->    
    <div class="flex justify-center pt-2">
      <div class="relative h-16 w-20">
        <!-- feuille -->
        <div class="absolute inset-0 rounded-lg border-4 border-slate-800 bg-white" style="clip-path: polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%);"></div>
        <!-- coin plié -->
        <div class="absolute right-0 top-0 h-8 w-8 border-4 border-slate-800 bg-white"
             style="clip-path: polygon(0 0, 100% 0, 100% 100%);"></div>
        <div class="absolute inset-0 grid place-items-center text-4xl font-extrabold text-slate-800">A</div>
      </div>
    </div>
    <div class="flex justify-center pt-2">
      <div class="relative h-16 w-20">
        <div class="absolute inset-0 rounded-lg border-4 border-emerald-400 bg-white" style="clip-path: polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%);"></div>
        <div class="absolute right-0 top-0 h-8 w-8 border-4 border-emerald-400 bg-white"
             style="clip-path: polygon(0 0, 100% 0, 100% 100%);"></div>
        <div class="absolute inset-0 grid place-items-center text-4xl font-extrabold text-slate-800">A1</div>
      </div>
    </div>
    <div class="flex justify-center pt-2">
      <div class="relative h-16 w-20">
        <div class="absolute inset-0 rounded-lg border-4 border-fuchsia-500 bg-white" style="clip-path: polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%);"></div>
        <div class="absolute right-0 top-0 h-8 w-8 border-4 border-fuchsia-500 bg-white"
             style="clip-path: polygon(0 0, 100% 0, 100% 100%);"></div>
        <div class="absolute inset-0 grid place-items-center text-4xl font-extrabold text-slate-800">A2</div>
      </div>
    </div>
    <div class="flex justify-center pt-2">
      <div class="relative h-16 w-20">
        <div class="absolute inset-0 rounded-lg border-4 border-orange-400 bg-white" style="clip-path: polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%);"></div>
        <div class="absolute right-0 top-0 h-8 w-8 border-4 border-orange-400 bg-white"
             style="clip-path: polygon(0 0, 100% 0, 100% 100%);"></div>
        <div class="absolute inset-0 grid place-items-center text-4xl font-extrabold text-slate-800">A3</div>
      </div>
    </div>
    <div class="flex justify-center pt-2">
      <div class="relative h-16 w-20">
        <div class="absolute inset-0 rounded-lg border-4 border-sky-400 bg-white" style="clip-path: polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%);"></div>
        <div class="absolute right-0 top-0 h-8 w-8 border-4 border-sky-400 bg-white"
             style="clip-path: polygon(0 0, 100% 0, 100% 100%);"></div>
        <div class="absolute inset-0 grid place-items-center text-4xl font-extrabold text-slate-800">A4</div>
      </div>
    </div>
    <!-- ====== Rangée 2 (B) ====== -->
    <div class="flex justify-center pt-2">
      <div class="relative h-16 w-20">
        <div class="absolute inset-0 rounded-lg border-4 border-slate-800 bg-white" style="clip-path: polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%);"></div>
        <div class="absolute right-0 top-0 h-8 w-8 border-4 border-slate-800 bg-white"
             style="clip-path: polygon(0 0, 100% 0, 100% 100%);"></div>
        <div class="absolute inset-0 grid place-items-center text-4xl font-extrabold text-slate-800">B</div>
      </div>
    </div>
    <div class="flex justify-center pt-2">
      <div class="relative h-16 w-20">
        <div class="absolute inset-0 rounded-lg border-4 border-slate-800 bg-white" style="clip-path: polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%);"></div>
        <div class="absolute right-0 top-0 h-8 w-8 border-4 border-slate-800 bg-white"
             style="clip-path: polygon(0 0, 100% 0, 100% 100%);"></div>
        <div class="absolute inset-0 grid place-items-center text-4xl font-extrabold text-slate-800">B</div>
      </div>
    </div>
    <div class="flex justify-center pt-2">
      <div class="relative h-16 w-20">
        <div class="absolute inset-0 rounded-lg border-4 border-emerald-400 bg-white" style="clip-path: polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%);"></div>
        <div class="absolute right-0 top-0 h-8 w-8 border-4 border-emerald-400 bg-white"
             style="clip-path: polygon(0 0, 100% 0, 100% 100%);"></div>
        <div class="absolute inset-0 grid place-items-center text-4xl font-extrabold text-slate-800">B1</div>
      </div>
    </div>
    <div class="flex justify-center pt-2">
      <div class="relative h-16 w-20">
        <div class="absolute inset-0 rounded-lg border-4 border-fuchsia-500 bg-white" style="clip-path: polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%);"></div>
        <div class="absolute right-0 top-0 h-8 w-8 border-4 border-fuchsia-500 bg-white"
             style="clip-path: polygon(0 0, 100% 0, 100% 100%);"></div>
        <div class="absolute inset-0 grid place-items-center text-4xl font-extrabold text-slate-800">B2</div>
      </div>
    </div>
    <div class="flex justify-center pt-2">
      <div class="relative h-16 w-20">
        <div class="absolute inset-0 rounded-lg border-4 border-fuchsia-500 bg-white" style="clip-path: polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%);"></div>
        <div class="absolute right-0 top-0 h-8 w-8 border-4 border-fuchsia-500 bg-white"
             style="clip-path: polygon(0 0, 100% 0, 100% 100%);"></div>
        <div class="absolute inset-0 grid place-items-center text-4xl font-extrabold text-slate-800">B2</div>
      </div>
    </div>
    <!-- ====== Rangée 3 (C) ====== -->
    <div class="flex justify-center pt-2">
      <div class="relative h-16 w-20">
        <div class="absolute inset-0 rounded-lg border-4 border-slate-800 bg-white" style="clip-path: polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%);"></div>
        <div class="absolute right-0 top-0 h-8 w-8 border-4 border-slate-800 bg-white"
             style="clip-path: polygon(0 0, 100% 0, 100% 100%);"></div>
        <div class="absolute inset-0 grid place-items-center text-4xl font-extrabold text-slate-800">C</div>
      </div>
    </div>
    <div class="flex justify-center pt-2">
      <div class="relative h-16 w-20">
        <div class="absolute inset-0 rounded-lg border-4 border-slate-800 bg-white" style="clip-path: polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%);"></div>
        <div class="absolute right-0 top-0 h-8 w-8 border-4 border-slate-800 bg-white"
             style="clip-path: polygon(0 0, 100% 0, 100% 100%);"></div>
        <div class="absolute inset-0 grid place-items-center text-4xl font-extrabold text-slate-800">C</div>
      </div>
    </div>
    <div class="flex justify-center pt-2">
      <div class="relative h-16 w-20">
        <div class="absolute inset-0 rounded-lg border-4 border-emerald-400 bg-white" style="clip-path: polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%);"></div>
        <div class="absolute right-0 top-0 h-8 w-8 border-4 border-emerald-400 bg-white"
             style="clip-path: polygon(0 0, 100% 0, 100% 100%);"></div>
        <div class="absolute inset-0 grid place-items-center text-4xl font-extrabold text-slate-800">C1</div>
      </div>
    </div>
    <div class="flex justify-center pt-2">
      <div class="relative h-16 w-20">
        <div class="absolute inset-0 rounded-lg border-4 border-emerald-400 bg-white" style="clip-path: polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%);"></div>
        <div class="absolute right-0 top-0 h-8 w-8 border-4 border-emerald-400 bg-white"
             style="clip-path: polygon(0 0, 100% 0, 100% 100%);"></div>
        <div class="absolute inset-0 grid place-items-center text-4xl font-extrabold text-slate-800">C1</div>
      </div>
    </div>
    <div class="flex justify-center pt-2">
      <div class="relative h-16 w-20">
        <div class="absolute inset-0 rounded-lg border-4 border-emerald-400 bg-white" style="clip-path: polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%);"></div>
        <div class="absolute right-0 top-0 h-8 w-8 border-4 border-emerald-400 bg-white"
             style="clip-path: polygon(0 0, 100% 0, 100% 100%);"></div>
        <div class="absolute inset-0 grid place-items-center text-4xl font-extrabold text-slate-800">C1</div>
      </div>
    </div>
  </div>
</div>


---

# La branche

<div>

Une branche est un simple pointeur vers un commit
- Elle ne “contient” pas du code
- Elle référence un commit précis
- Quand tu commits, Git déplace le pointeur nommé "HEAD"

<img src="./public/images/branches.png" alt="DVCS diagram" class="w-[800px] py-5" />


</div>
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
