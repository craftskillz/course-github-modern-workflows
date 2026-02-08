## git push

Commande : `git push <remote> <source>`

```bash
git push origin mlapse-630-usability-tests
```

```
mlapse-630-usability-tests ─────────▶  origin/mlapse-630-usability-tests
   (local)                                       (remote)
```

- si `origin/mlapse-630-usability-tests` n’existe pas encore
  <ul v-click.hide>
    <li>❓</li>
  </ul>
  <ul v-after>
    <li>elle est créée et le pointeur distant est plaçé sur le commit envoyé</li>
  </ul>
  
  
- si `origin/mlapse-630-usability-tests` existe
  - <span v-click.hide>❓</span><span v-after>on a 2 cas</span>
  <ul v-after>
    <li>cas 1 : la branche distante est en retard (fast-forward)</li>
    <li>cas 2 : la branche distante a divergé (push refusé) ──▶ <span class="underline decoration-orange-500 underline-offset-2">Conflit</span></li>
  </ul>


Souvent on fait "-u" pour "set upstream"
```bash
git push -u origin mlapse-630-usability-tests
```
Git Mémorise
```
feature/login  ◀──▶  origin/feature/login
```
