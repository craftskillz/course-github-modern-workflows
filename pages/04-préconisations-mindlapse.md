---

# 🎯 Cible recommandée : GitHub Flow maîtrisé

## Stratégie de branches cible

Adpoter un **GitHub Flow simple, discipliné et automatisé**.

### Branches

- `main` → La seule source de vérité déploy<u>**able**</u> à tout instant (*ne veut pas dire déploy<u>**ée**</u>*)
- `mlapse-xxx` → Branches de features de courte durée (**une** par feature et par dev) 
<br/>portant le nom de la tâche (ou sous tâche) linear

 <span class="px-2 rounded text-red-600 bg-yellow-200">Aucune autre branche partagée longue durée.</span>

<GitHubFlowTarget />

---

# Branches Features
Cycle de vie standard

- Création depuis `main`
   ```
   git checkout main
   git pull
   git checkout -b mlapse-824/add-generate-answer-endpoint
   ```

- Travail court **(1–3 jours max)**
  - Pas de partage de la branche entre plusieurs devs
  - Discipline `--force-with-lease uniquement`

- Pull Request vers `main`
  - Merge si **CI verte**, **1 review minimum approuvée**

- Suppression immédiate de la branche après merge

- Objectif : <u>aucune branche vivante > 3 jours</u>

---

# Branches Main
Seule source de vérité
<div>

## `main`

- PR obligatoire
- Merge uniquement via PR depuis toutes les branches (`mlapse-xxx`)
- Strategie de merge recommandée <span class="px-2 rounded text-red-600 bg-yellow-200">Mode Allow squash merging uniquement dans GitHub</span>
- CI obligatoire
- Pull Local en mode `FF-only` *(<u>suggestion pratique</u>)*
- Tag obligatoire avant déploiement
- Ruleset sur le repo GitHub
  - Branch Targeting Criteria = `main`
  - ❌ Push direct interdit = `Require a pull request before merging`
  - ❌ Interdiction de la suppression main = `Restrict deletions`
  - ❌ Force Push interdit = `Block force pushes`
</div>

---

# Pull Request – Template de PR
**Savoir découper** et **raisonner en scénarios**  

```
## Contexte
- Linear : MLAPSE-XXX
- Objectif : …

## Changement
- Qu’est-ce qui change ? (liste courte, impacts)

## Ce qui doit être testé
- [ ] Scénario 1 : …
- [ ] Scénario 2 : …
- [ ] Cas limite : …
- [ ] Perf / sécu : …

## Rien à tester :
- Pourquoi : … (Ex : refacto, renommage, dejà couvert)
- Vérifié comment : … (test manuel, test unitaires, tests integration, tests E2E)
```

<Callout type="info">
- La checklist évolue au cours du temps<br/>
- Ne doit pas être du contrôle, mais une acculturation au découpage et aux tests
</Callout>

---

# 🏷 Gestion des tags
Le tag est la **référence de production**

Un tag = “cet état a été jugé déployable” (pas forcément “déployé partout”)

#### <u>La génération du tag peut être automatisée ou manuelle</u> 

- La CI génère un tag à chaque PR mergée
- Le tag est généré de manière périodique (ex. avant chaque démo de fin d'itération)
- Le tag est généré avant une **décision produit** de mettre en production et basé sur un env. de recette

#### <u>Les versions taguées doivent être compatibles entre elles</u> 

- Le workflow garantie la compatibilité ascendante de tous les tags (très complexe, feature flags, migrations)
- On consulte l'équipe et tague tous les projets ensemble avec le même numéro
- On maintien une table de compatibilité (Gestion plus complexe)

#### <u>Release notes et ChangeSets</u>
- Automatique ou manuel le tag doit contenir le <span class="px-2 rounded text-red-600 bg-yellow-200">changeSet</span> depuis le dernier tag ***(release note)***
- Préfixes ou suffixes `v-1.2.5-prod` facilitent **considérablement** la détermination des changesets
- Il permettent également de connaitre immédiatement les versions en production depuis git ***(derniers tags)***

--- 

# Formats de tags

| Format | Intérêt | Pros | Cons / Risques |
|---|---|---|---|
| `v0.x.y` (SemVer) | Exprime l'impact (major/minor/patch) | Lisible, standard, utile côté produit | Difficile à automatiser **sans discipline** (conventional commits, changelog, règles de bump) |
| `YYYY-MM-DD-HH-MM` (date) | Porte l’info temporelle | Facile à automatiser | Perte des infos d'impact |
| `release-...` | “tag déployé en production” | Automatisation des release notes et changeSets |  |

---

# Repository “Release Manifest”
Très courant

Un petit repo ou dossier `release/` qui contient un fichier par release :

`release/prod-2026-02-20.1.yml`
```yaml
frontend: web@prod-2026-02-20.1
backend: api@prod-2026-02-19.3
ia-worker: rag@prod-2026-02-20.0
infra: terraform@prod-2026-02-18.2
```

- Très lisible, auditable, versionné  
- Permet rollback coordonné  
- Discipline nécessaire (mais simple)
