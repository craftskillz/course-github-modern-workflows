---
layout: image-right
image: https://cover.sli.dev
---

# Douleurs fréquentes
Vous en connaissez certaines ?

- “Les merges sont compliqués et conflictuels” → intégration non maîtrisée mais  <u>**subie**</u>

- “Historique illisible” → diagnostic et review <u>**difficiles**</u>

- “Branches longues” → <u>**conflits**</u> + divergence + intégration tardive et douloureuse

- “Pas de tags” → difficile de savoir ce qui est en prod / de revenir en arrière

- “Livraison instable” → pas de garde-fous + pas de <u>**cadence**</u>

---

# Proposition d'engagement pour la semaine prochaine

## Interdiction des branches longues partagées.

- Chaque developpeur travaille sur sa branche de courte durée de vie (1-3 jours)

- Entre 1 et 3 jours elle doit etre mergée sur DEV

- Si dès le départ un ticket semble trop gros pour tenir dans ce délai :
  - créer des sous-tâches **séquentielles** de 1 à 3 jours dans Linear
  - créez une branche en **fonction de la sous tâche** qui respecte le contrat 1-3 J

- **Cible** : Arriver à découper son développement en lots de petites tailles déployables indépendamment et en continu (**Approche Accelerate** (Nicole Forsgren & Jez Humble))

- Exemple : <u>MLAPSE-820</u> Génération automatique de réponses contractuelles via RAG
  - `mlapse-824/ia-create-milvus-collection` + `mlapse-825/app-add-generate-answer-endpoint` + `mlapse-826/app-generate-answer-worker` + `mlapse-827/ia-connect-rag-pipeline`

---


# Proposition d'engagement pour la semaine 2

## Identifier les changements à tester

- <u class="px-2 rounded text-red-600 bg-yellow-200">**Décrire**</u> dans la PR <u class="px-2 rounded text-red-600 bg-yellow-200">**ce qui doit être testé**</u> suite à j'ajout/modification du code contenu dans cette PR (potentiellement dans une seule PR si sous-tâches) <u class="px-2 rounded text-red-600 bg-yellow-200">**pour être serein que ca ne cassera pas en prod !**</u> 


- Ca peut être "RIEN", si c'est un refacto par exemple déjà couvert par des tests, mais il faut <u>s'assurer qu'on l'a vérifié soit même</u> en local dans ce cas (via tests ou manuellement)

    - Si on ne sais pas le lancer en local continuer d'utiliser démo2 pour cela (moins souhaitable, de préférence demander comment le tester en local, par exemple avec les mock-ai si machine faible)

- Essayer d’automatiser les scénarios décrits :
  - tests unitaires
  - tests d’intégration IA
  - tests E2E fullstack  
  *(best effort – on sait que l’automatisation des tests est un chantier en cours)*

---


# Proposition d'engagement pour la semaine 3

## Automatiser les vérifications
- CI avec tests en place sur les PR
- Une PR avec une CI rouge **ne doit pas être mergée** (Arbitrer dans certains <u>cas très spécifiques</u>)

## Merger, une responsabilité collective
- Un développeur peut merger sa PR sur DEV si
  - au moins une review est approuvée
  - la CI est verte

## Les tags comme référence de versions
- Lorsqu’un état de DEV est jugé déployable
  - créer un tag Git dans chaque projet avec le même numéro (Manuellement ou automatiquement)
  - `v0.x.y` ou `dev-YYYY-MM-DD`
