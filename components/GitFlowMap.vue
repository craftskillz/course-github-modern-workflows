<template>
  <div class="hidden">
    <span v-click></span>
    <span v-click></span>
    <span v-click></span>
    <span v-click></span>
    <span v-click></span>
    <span v-click></span>
  </div>
  <v-stage :config="{ width: 900, height: 300 }">
    <v-layer>
      <v-rect
        :config="{ x: 0, y: 0, width: 900, height: 300, fill: '#F6F1DA' }"
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
          :fromX="90"
          :fromY="160"
          :toX="840"
          :toY="160"
          stroke="#EA580C"
          :strokeWidth="5"
        />
      </template>

      <template v-if="clicks >= 2">
        <BranchLine
          :fromX="450"
          :fromY="160"
          :toX="500"
          :toY="255"
          stroke="#DB2777"
          :strokeWidth="5"
        />
        <BranchLine
          :fromX="500"
          :fromY="255"
          :toX="600"
          :toY="255"
          stroke="#DB2777"
          :strokeWidth="5"
        />
        <BranchLine
          :fromX="600"
          :fromY="255"
          :toX="650"
          :toY="160"
          stroke="#DB2777"
          :strokeWidth="5"
        />
      </template>

      <template v-if="clicks >= 3">
        <BranchLine
          :fromX="650"
          :fromY="160"
          :toX="680"
          :toY="100"
          stroke="#0891B2"
          :strokeWidth="5"
        />
        <BranchLine
          :fromX="680"
          :fromY="100"
          :toX="770"
          :toY="100"
          stroke="#0891B2"
          :strokeWidth="5"
        />
        <BranchLine
          :fromX="770"
          :fromY="100"
          :toX="840"
          :toY="50"
          stroke="#0891B2"
          :strokeWidth="5"
        />
        <BranchLine
          :fromX="770"
          :fromY="100"
          :toX="840"
          :toY="160"
          stroke="#0891B2"
          :strokeWidth="5"
        />
      </template>

      <template v-if="clicks >= 4">
        <BranchLine
          :fromX="300"
          :fromY="110"
          :toX="350"
          :toY="50"
          stroke="#ea0c0c"
          :strokeWidth="5"
        />
        <BranchLine
          :fromX="200"
          :fromY="50"
          :toX="380"
          :toY="160"
          stroke="#ea0c0c"
          :strokeWidth="5"
        />
      </template>
    </v-layer>
    <v-layer>
      <template>
        <Label :x="90" :y="50" text="main" direction="left" :radius="16" />
        <CommitNode
          :x="90"
          :y="50"
          hash=""
          :radius="16"
          fill="#2563EB"
          stroke="#1E3A8A"
        />

        <CommitNode
          :x="840"
          :y="50"
          hash=""
          :radius="16"
          fill="#2563EB"
          stroke="#1E3A8A"
        />
      </template>

      <template v-if="clicks >= 1">
        <Label :x="90" :y="160" text="develop" direction="left" :radius="16" />

        <CommitNode
          :x="90"
          :y="160"
          hash=""
          :radius="16"
          fill="#EA580C"
          stroke="#9A3412"
        />
        <CommitNode
          :x="840"
          :y="160"
          hash=""
          :radius="16"
          fill="#EA580C"
          stroke="#9A3412"
        />
      </template>

      <template v-if="clicks >= 2">
        <Label
          :x="450"
          :y="160"
          text="feature-1"
          direction="bottom"
          :radius="16"
        />

        <CommitNode
          :x="450"
          :y="160"
          hash=""
          :radius="16"
          fill="#DB2777"
          stroke="#9A3412"
        />
        <CommitNode
          :x="500"
          :y="255"
          hash=""
          :radius="16"
          fill="#DB2777"
          stroke="#831843"
        />
        <CommitNode
          :x="600"
          :y="255"
          hash=""
          :radius="16"
          fill="#DB2777"
          stroke="#831843"
        />
        <!-- noeud de merge sur dev -->
        <CommitNode
          :x="650"
          :y="160"
          hash=""
          :radius="16"
          fill="#DB2777"
          stroke="#831843"
        />
      </template>

      <template v-if="clicks >= 3">
        <Label
          :x="680"
          :y="100"
          text="release-1"
          direction="top"
          :radius="16"
        />
        <CommitNode
          :x="680"
          :y="100"
          hash=""
          :radius="16"
          fill="#0891B2"
          stroke="#164E63"
        />
        <CommitNode
          :x="770"
          :y="100"
          hash=""
          :radius="16"
          fill="#0891B2"
          stroke="#164E63"
        />
      </template>
      <template v-if="clicks >= 4">
        <CommitNode
          :x="200"
          :y="50"
          hash=""
          :radius="16"
          fill="#ea0c0c"
          stroke="#9a1212"
        />
        <Label
          :x="300"
          :y="110"
          text="hotfix"
          direction="bottom"
          :radius="16"
        />

        <CommitNode
          :x="300"
          :y="110"
          hash=""
          :radius="16"
          fill="#ea0c0c"
          stroke="#9a1212"
        />
        <CommitNode
          :x="350"
          :y="50"
          hash=""
          :radius="16"
          fill="#ea0c0c"
          stroke="#9a1212"
        />
        <CommitNode
          :x="380"
          :y="160"
          hash=""
          :radius="16"
          fill="#ea0c0c"
          stroke="#9a1212"
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
