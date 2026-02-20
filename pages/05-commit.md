# L'art du commit efficace
Un bon historique est un outil de documentation.

### Atomicité : Un commit = Une intention.

- ❌ `Correction bug mineur + refacto classe User + changement couleur bouton`
- ✅ `fix: correct user login validation`
- ✅ `refactor: simplify auth service logic`
<br/><br/>

<div grid="~ cols-2 gap-4">

<div>

### Conventional Commits

- `feat:` (nouvelle fonctionnalité)
- `fix:` (correction)
- `chore:` (maintenance, dépendances)
- `docs:` (documentation)
</div>
<div>
    <img src="./public/images/git-cz.png" alt="Git Origin" class="rounded-xl mt-9" />
</div>
</div>

<br/>
<div class="px-2 rounded text-red-600 bg-yellow-200">
Facilite l'analyse (lecture) des Pull Requests. <br/>
Aide à automatiser la génération des changeSets / Release notes via **GitHub Actions**.
 </div>
