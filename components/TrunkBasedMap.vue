<template>
  <div class="hidden">
    <span v-click></span>
    <span v-click></span>
    <span v-click></span>
    <span v-click></span>
  </div>
  <v-stage :config="{ width: 900, height: 230 }">
    <v-layer>
      <v-rect
        :config="{ x: 0, y: 0, width: 900, height: 230, fill: '#F6F1DA' }"
      />

      <template>
        <BranchLine
          :fromX="90"
          :fromY="120"
          :toX="840"
          :toY="120"
          stroke="#2563EB"
          :strokeWidth="5"
        />
      </template>

      <template v-if="clicks >= 1">
        <BranchLine
          :fromX="150"
          :fromY="120"
          :toX="200"
          :toY="40"
          stroke="#DB2777"
          :strokeWidth="5"
        />

        <BranchLine
          :fromX="200"
          :fromY="40"
          :toX="550"
          :toY="40"
          stroke="#DB2777"
          :strokeWidth="5"
        />
        <BranchLine
          :fromX="250"
          :fromY="120"
          :toX="300"
          :toY="210"
          stroke="#15d02e"
          :strokeWidth="5"
        />

        <BranchLine
          :fromX="300"
          :fromY="210"
          :toX="350"
          :toY="120"
          stroke="#15d02e"
          :strokeWidth="5"
        />

        <BranchLine
          :fromX="400"
          :fromY="120"
          :toX="450"
          :toY="210"
          stroke="#ef8616"
          :strokeWidth="5"
        />

        <BranchLine
          :fromX="450"
          :fromY="210"
          :toX="500"
          :toY="120"
          stroke="#ef8616"
          :strokeWidth="5"
        />

        <BranchLine
          :fromX="550"
          :fromY="40"
          :toX="600"
          :toY="120"
          stroke="#DB2777"
          :strokeWidth="5"
        />
      </template>
    </v-layer>
    <v-layer>
      <template>
        <CommitNode
          :x="90"
          :y="120"
          text="main"
          textPosition="left"
          :radius="16"
          fill="#2563EB"
          stroke="#1E3A8A"
        />
      </template>

      <template v-if="clicks >= 1">
        <CommitNode
          :x="150"
          :y="120"
          text=""
          :radius="16"
          fill="#DB2777"
          stroke="#9A3412"
        />

        <CommitNode
          :x="200"
          :y="40"
          text=""
          :radius="16"
          fill="#DB2777"
          stroke="#9A3412"
        />

        <CommitNode
          :x="250"
          :y="120"
          text=""
          :radius="16"
          fill="#DB2777"
          stroke="#9A3412"
        />
        <CommitNode
          :x="300"
          :y="210"
          text=""
          :radius="16"
          fill="#DB2777"
          stroke="#831843"
        />

        <CommitNode
          :x="350"
          :y="120"
          text=""
          :radius="16"
          fill="#DB2777"
          stroke="#831843"
        />

        <CommitNode
          :x="400"
          :y="120"
          text=""
          :radius="16"
          fill="#DB2777"
          stroke="#9A3412"
        />
        <CommitNode
          :x="450"
          :y="210"
          text=""
          :radius="16"
          fill="#DB2777"
          stroke="#831843"
        />

        <CommitNode
          :x="500"
          :y="120"
          text=""
          :radius="16"
          fill="#DB2777"
          stroke="#831843"
        />

        <CommitNode
          :x="550"
          :y="40"
          text=""
          :radius="16"
          fill="#DB2777"
          stroke="#831843"
        />

        <CommitNode
          :x="600"
          :y="120"
          text=""
          :radius="16"
          fill="#DB2777"
          stroke="#831843"
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
