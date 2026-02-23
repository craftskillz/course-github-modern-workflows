---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Git Modern Workflows Course
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# duration of the presentation
duration: 35min
contextMenu: false
---

# Best Practices For Smooth Deliveries

<!--Presentation slides for developers

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Press Space for next page <carbon:arrow-right />
</div>
-->

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
src: ./pages/00-constat.md
hide: false
---

---
src: ./pages/01-formation.md
hide: false
---

---
src: ./pages/02-git-fundamentals.md
hide: false
---

---
src: ./pages/03-workflows-git.md
hide: false
---

---
src: ./pages/04-préconisations-mindlapse.md
hide: false
---

---
src: ./pages/05-commit.md
hide: false
---

---
src: ./pages/06-demo-pratique.md
hide: false
---

---
src: ./pages/07-complements.md
hide: false
---

---
src: ./pages/08-gitPullFF.md
hide: false
---

---
src: ./pages/09-gitPullMerge.md
hide: false
---

---
src: ./pages/10-gitPullRebase.md
hide: false
---

---
src: ./pages/11-rebaseInteractif.md
hide: false
---

---
src: ./pages/12-stash.md
hide: false
---