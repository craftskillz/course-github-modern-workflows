<template>
  <div class="hidden">
    <span v-click></span>
    <span v-click></span>
    <span v-click></span>
    <span v-click></span>
    <span v-click></span>
    <span v-click></span>
    <span v-click></span>
  </div>
  <v-stage :config="{ width: 900, height: 180 }">
    <v-layer>
      <v-rect
        :config="{ x: 0, y: 0, width: 900, height: 180, fill: '#F6F1DA' }"
      />

      <template>
        <BranchLine
          :fromX="90"
          :fromY="50"
          :toX="840"
          :toY="50"
          stroke="#2563EB"
          :strokeWidth="5"
        />
      </template>

      <template v-if="clicks >= 1">
        <BranchLine
          :fromX="250"
          :fromY="50"
          :toX="300"
          :toY="145"
          stroke="#DB2777"
          :strokeWidth="5"
        />
      </template>
      <template v-if="clicks >= 2">
        <BranchLine
          :fromX="300"
          :fromY="145"
          :toX="400"
          :toY="145"
          stroke="#DB2777"
          :strokeWidth="5"
        />
      </template>
      <template v-if="clicks >= 3">
        <BranchLine
          :fromX="400"
          :fromY="145"
          :toX="500"
          :toY="145"
          stroke="#DB2777"
          :strokeWidth="5"
        />
      </template>
      <template v-if="clicks >= 4">
        <BranchLine
          :fromX="500"
          :fromY="145"
          :toX="550"
          :toY="50"
          stroke="#DB2777"
          :strokeWidth="5"
        />
      </template>
    </v-layer>
    <v-layer>
      <template>
        <CommitNode
          :x="90"
          :y="50"
          text="main"
          textPosition="left"
          :radius="16"
          fill="#2563EB"
          stroke="#1E3A8A"
        />
      </template>

      <template v-if="clicks >= 1">
        <CommitNode
          :x="250"
          :y="50"
          text=""
          :radius="16"
          fill="#DB2777"
          stroke="#9A3412"
        />
        <CommitNode
          :x="300"
          :y="145"
          text=""
          :radius="16"
          fill="#DB2777"
          stroke="#831843"
        />
      </template>

      <template v-if="clicks >= 2">
        <CommitNode
          :x="400"
          :y="145"
          text=""
          :radius="16"
          fill="#DB2777"
          stroke="#831843"
        />
      </template>
      <template v-if="clicks >= 3">
        <CommitNode
          :x="500"
          :y="145"
          text="Pull Request"
          textPosition="right"
          :radius="16"
          fill="#0ab718"
          stroke="#059010"
        />
      </template>
      <template v-if="clicks >= 4">
        <CommitNode
          :x="550"
          :y="50"
          text=""
          :radius="16"
          fill="#DB2777"
          stroke="#831843"
        />
      </template>
      <template v-if="clicks >= 5">
        <Label
          :x="550"
          :y="50"
          text="Déploiement automatisé (CI/CD)"
          direction="top"
          :radius="16"
        />
      </template>
    </v-layer>
  </v-stage>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSlideContext } from "@slidev/client";

import BranchLine from "./generic/BranchLine.vue";
import CommitNode from "./generic/CommitNode.vue";
import BoxLabel from "./generic/BoxLabel.vue";

const ctx = useSlideContext();

const clicks = computed(() => {
  const c: any = (ctx as any).$clicks;
  return typeof c === "number" ? c : (c?.value ?? 0);
});

const show = (step: number) => clicks.value >= step;
</script>
