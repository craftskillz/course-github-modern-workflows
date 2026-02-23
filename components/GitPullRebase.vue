<template>
  <v-stage :config="{ width: 868, height: 200 }">
    <v-layer>
      <v-rect
        :config="{ x: 0, y: 0, width: 868, height: 200, fill: '#F6F1DA' }"
      />

      <template>
        <BranchLine
          :fromX="120"
          :fromY="50"
          :toX="840"
          :toY="50"
          stroke="#2563EB"
          :strokeWidth="5"
        />
        <BranchLine
          :fromX="120"
          :fromY="170"
          :toX="840"
          :toY="170"
          stroke="#ef8616"
          :strokeWidth="5"
        />
      </template>
    </v-layer>
    <v-layer>
      <template>
        <CommitNode
          :x="120"
          :y="50"
          text="main local"
          textPosition="left"
          :radius="10"
          fill="#2563EB"
          stroke="#1E3A8A"
        />
        <CommitNode
          :x="250"
          :y="50"
          text="A"
          textPosition="top"
          :radius="10"
          fill="#2563EB"
          stroke="#1E3A8A"
        />
        <CommitNode
          :x="360"
          :y="50"
          text="B"
          textPosition="top"
          :radius="10"
          fill="#2563EB"
          stroke="#1E3A8A"
        />
        <CommitNode
          :x="120"
          :y="170"
          text="main remote"
          textPosition="left"
          :radius="10"
          fill="#ef8616"
          stroke="#a85b09"
        />
        <CommitNode
          :x="250"
          :y="170"
          text="A"
          textPosition="top"
          :radius="10"
          fill="#ef8616"
          stroke="#a85b09"
        />
        <CommitNode
          :x="360"
          :y="170"
          text="B"
          textPosition="top"
          :radius="10"
          fill="#ef8616"
          stroke="#a85b09"
        />

        <CommitNode
          :x="420"
          :y="170"
          text="C"
          textPosition="top"
          :radius="10"
          fill="#ef8616"
          stroke="#a85b09"
        />

        <CommitNode
          :x="500"
          :y="170"
          text="D"
          textPosition="top"
          :radius="10"
          fill="#ef8616"
          stroke="#a85b09"
        />
      </template>
      <template v-if="clicks >= 1">
        <CommitNode
          :x="420"
          :y="50"
          text="C"
          textPosition="top"
          :radius="10"
          fill="#2563EB"
          stroke="#1E3A8A"
        />
        <CommitNode
          :x="500"
          :y="50"
          text="D"
          textPosition="top"
          :radius="10"
          fill="#2563EB"
          stroke="#1E3A8A"
        />
        <CommitNode
          :x="600"
          :y="50"
          text="E (ton commit)"
          textPosition="top"
          :radius="10"
          fill="#2563EB"
          stroke="#1E3A8A"
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
