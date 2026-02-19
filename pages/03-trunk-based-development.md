# Git Workflows
Comprendre l'évolution des workflows git

<Callout type="info" title="Important">
  Le choix tel ou tel type de Workflow Git pour une équipe est très structurant.<br/>
  Choisir celui qui convient le mieux à votre équipe est primordial et dépends de ce qu'on construit et comment on le déploie.

  - Ce n'est pas le même flow pour une application mobile qui doit supporter plusieurs versions téléchargeables par les end users en même temps
  - Que pour une application en déploiement continu plusieurs fois par jour ou par semaine vers une seule version cible
</Callout>

<img src="./public/images/git-workflows.png" alt="Git Origin" class="mx-auto rounded-xl h-[150px]" />

---

# Git Flow
**"Le"** Standard très populaire des années **"2010"** plus récemment considéré **"Bad Practice"**

  <GitFlowMap />

  <div class="my-2">
  <InfoCard 
    title="Main Branch"
    body="Branche Production Ready, contenant les versions déployées successivement"
    :showAt="0" :hideAt="1" fullHeight 
    titleColor="#2563EB"
    padding="15px"
    />
    <InfoCard 
    title="Develop Branch"
    body="Work in Progress, principalement utilisé pour l'intégration"
    :showAt="1" :hideAt="2" fullHeight 
    titleColor="#EA580C"
    padding="15px"
    />
    <InfoCard 
    title="Feature Branch"
    body="Pour coder une feature en isolation, puis merger dans develop"
    :showAt="2" :hideAt="3" fullHeight 
    titleColor="#ea0c0c"
    padding="15px"
    />
    <InfoCard 
    title="Release Branch"
    body="Pour préparer des déploiements, vérifier que tout marche, avant d'envisager de déployer"
    :showAt="3" :hideAt="4" fullHeight 
    titleColor="#0891B2"
    padding="15px"
    />
    <InfoCard 
    title="Hotfix"
    body="Pour réparer en urgence un bug en production puis merger dans main et develop pour rester aligné"
    :showAt="4" :hideAt="5" fullHeight 
    titleColor="#ea0c0c"
    padding="15px"
    />
     <InfoCard 
    title="Quand est-ce que ca a du sens ?"
    body="Quand on livre plusieurs versions qui vivent en parrallèle, généralement plus la norme aujourd'hui"
    :showAt="5" :hideAt="6" fullHeight 
    titleColor="#4a4a4a"
    padding="15px"
    />
    <InfoCard 
    title='Pourquoi est-ce considéré "Bad Practice"'
    body='Ralentit le dev (Gestion branche) / Pas adapté CD / Incompatible Trunk Based / <span class="px-2 rounded text-red-600 bg-yellow-200">Illusion de sécurité</span>'
    :showAt="6" :hideAt="7" fullHeight 
    titleColor="#fd0000cc"
    padding="15px"
    />
  </div>

---

# GiHub Flow
Alternative **beaucoup plus moderne** et beaucoup plus simple que Git Flow

  <GitHubFlowMap />

  <div class="my-2 h-[230px] ">
    <InfoCard 
    title="Création d'une feature Branch"
    body="On commence à coder sa feature sur la nouvelle branche feature issue de main"
    :showAt="1" :hideAt="2" fullHeight 
    titleColor="#ea0c0c"
    padding="15px"
    />
    <InfoCard
    title="Feature Branch"
    body="On ajoute des fonctionnalités sur la feature (commits)"
    :showAt="2" :hideAt="3" fullHeight 
    titleColor="#ea0c0c"
    padding="15px"
    />
    <InfoCard 
    title="Pull Request"
    body='<ul>
    <li>On crée une pull request</li>
    <li>Elle déclenche une première CI (Lancement de tests automatisés, Couverture, Analyse Sonar, Analyse Sécurité)</li>
    <li>Elle est revue (code review) puis validée (<span class="underline decoration-orange-500 underline-offset-2">Action inactive si la CI n&apos;est pas verte</span>)</li>
    </ul>'
    :showAt="3" :hideAt="4" fullHeight 
    titleColor="#0ab718"
    padding="15px"
    />
     <InfoCard 
    title="Pull Request Mergée"
    body='La pull request une fois mergée déclenche
    <ul>
    <li>Une seconde CI post merge (Lancement de tests automatisés, Couverture, Analyse Sonar, Analyse Sécurité)</li>
    <li><span class="px-2 rounded text-red-600 bg-yellow-200">Si elle casse, la priorité est de réparer MAIN</span></li>
    <li>Sinon packaging, artefacts, tag</li>
    </ul>'
    :showAt="4" :hideAt="5" fullHeight 
    titleColor="#ea0c0c"
    padding="15px"
    />
     <InfoCard 
    title='Lancement CI/CD Automatique'
    body='Le déploiement automatisé n&apos;est pas systématique dans cette approche
    <ul>
    <li>Si il est mis en place, c&apos;est généralement la pose du tag qui déclenche le job de déploiement automatisé</li>
    <li>Infra as code, Terraform, Kube, Helm, etc ...</li>
    <li>Health checks + Smoke Tests après le déploiement (également vérification manuelle)</li>
    </ul>'
    :showAt="5" :hideAt="6" fullHeight 
    titleColor="#2563EB"
    padding="15px"
    />
     <InfoCard 
    title="Quand est-ce que ca a du sens ?"
    body="<ul>
    <li>Déploiement continu</li>
    <li>Produit SAAS, APIs</li>
    <li>Equipe petite à moyenne</li>
    <li>CI/CD automatisée</li>
    </ul>"
    :showAt="6" :hideAt="7" fullHeight 
    titleColor="#4a4a4a"
    padding="15px"
    />
    <InfoCard 
    title='Inconvénients'
    body="<ul>
    <li>Ne permet pas de gérer en parrallèle différentes versions</li>
    <li>Nécessite de la discipline</li>
    <li>Compliqué lorsque <u>plusieurs équipes</u> travaillent sur la même base de code</li>
    </ul>"
    :showAt="7" :hideAt="8" fullHeight 
    titleColor="#fd0000cc"
    padding="15px"
    />
  </div>

---

# Trunk Based Development
L'approche adoptée par de plus en plus d'équipes Devops

  <TrunkBasedMap />

  <div class="my-2 h-[230px] ">
    <InfoCard 
    title="Branches de courtes durées de vie et commits directs sur main"
    body='<ul>
    <li>Des devs de différents modules (features) committent directement sur main</li>
    <li>Certaines features se font en mode branche de courte durée comme GitHubFlow</li>
    <li>Quasi pas de conflits de merge</li>
    <li>Il faut des <span class="underline decoration-orange-500 underline-offset-2">ingrédients secrets</span></li>
    </ul>'
    :showAt="1" :hideAt="2" fullHeight 
    titleColor="#ea0c0c"
    padding="15px"
    />
    <InfoCard
    title="Les ingrédients secrets"
    body='<ul>
    <li><span class="px-2 rounded text-red-600 bg-yellow-200">Feature Flags</span></li>
    <li>Chaque commit sur Main déclenche le lancement des <span class="underline decoration-orange-500 underline-offset-2">tests automatisés exhaustifs</span></li>
    <li>Maitrise des impacts (US bien découpées et refinements techniques approfondis)</li>
    </ul>'
    :showAt="2" :hideAt="3" fullHeight 
    titleColor="#ea0c0c"
    padding="15px"
    />
    <InfoCard 
    title="Quand est-ce que ca a du sens ?"
    body="<ul>
    <li>Equipes principalement constitués de <u>développeurs Séniors (Pratiques Craft, Expérience)</u></li>
    <li>Harnais de Tests Automatisés très étendus et robustes (Pratique TDD)</li>
    <li>Recherche de productivité (Métriques DORA / Accelerate)</li>
    <li>Produits SAAS mis à jour fréquemment</li>
    </ul>"
    :showAt="3" :hideAt="4" fullHeight 
    titleColor="#4a4a4a"
    padding="15px"
    />
    <InfoCard 
    title='Challenges'
    body='<ul>
    <li>Ne permet pas de gérer en parrallèle différentes versions</li>
    <li>Chaque développeur peut <span class="px-2 rounded text-red-600 bg-yellow-200">casser la production</span> à tout moment</li>
    <li>La couverture de tests doit être forte (Couverture, Mutation Testing ...)</li>
    <li>Acculturation à ce paradigme : Petits commits, feature flags, Maitrise de la CI, TDD & Pratiques</li>
    </ul>'
    :showAt="4" :hideAt="5" fullHeight 
    titleColor="#fd0000cc"
    padding="15px"
    />
  </div>
