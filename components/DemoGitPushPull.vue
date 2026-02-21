<template>
  <v-stage :config="{ width: 868, height: 170 }">
    <v-layer>
      <v-rect
        :config="{ x: 0, y: 0, width: 868, height: 170, fill: '#F6F1DA' }"
      />

      <template>
        <BranchLine
          :fromX="90"
          :fromY="90"
          :toX="840"
          :toY="90"
          stroke="#2563EB"
          :strokeWidth="5"
        />
      </template>
      <template v-if="clicks >= 2 && clicks < 6">
        <BranchLine
          :fromX="250"
          :fromY="90"
          :toX="280"
          :toY="40"
          stroke="#0ab718"
          :strokeWidth="5"
        />
      </template>
      <template v-if="clicks >= 3 && clicks < 6">
        <BranchLine
          :fromX="280"
          :fromY="40"
          :toX="330"
          :toY="40"
          stroke="#0ab718"
          :strokeWidth="5"
        />
      </template>
      <template v-if="clicks >= 5 && clicks < 6">
        <BranchLine
          :fromX="330"
          :fromY="40"
          :toX="360"
          :toY="90"
          stroke="#0ab718"
          :strokeWidth="5"
        />
      </template>
      <template v-if="clicks >= 7 && clicks < 9">
        <BranchLine
          :fromX="250"
          :fromY="90"
          :toX="280"
          :toY="145"
          stroke="#DB2777"
          :strokeWidth="5"
        />
      </template>
      <template v-if="clicks >= 7 && clicks < 9">
        <BranchLine
          :fromX="280"
          :fromY="145"
          :toX="380"
          :toY="145"
          stroke="#DB2777"
          :strokeWidth="5"
        />
      </template>
      <template v-if="clicks >= 9 && clicks < 11">
        <BranchLine
          :fromX="360"
          :fromY="90"
          :toX="390"
          :toY="145"
          stroke="#DB2777"
          :strokeWidth="5"
        />
        <BranchLine
          :fromX="390"
          :fromY="145"
          :toX="490"
          :toY="145"
          stroke="#DB2777"
          :strokeWidth="5"
        />
      </template>
      <template v-if="clicks >= 7 && clicks < 9">
        <BranchLine
          :fromX="280"
          :fromY="145"
          :toX="380"
          :toY="145"
          stroke="#DB2777"
          :strokeWidth="5"
        />
      </template>
      <template v-if="clicks == 10">
        <BranchLine
          :fromX="490"
          :fromY="145"
          :toX="520"
          :toY="90"
          stroke="#DB2777"
          :strokeWidth="5"
        />
      </template>
    </v-layer>
    <v-layer>
      <template>
        <CommitNode
          :x="90"
          :y="90"
          text="main"
          textPosition="left"
          :radius="10"
          fill="#2563EB"
          stroke="#1E3A8A"
        />
      </template>
      <template v-if="clicks == 0 || clicks == 1 || clicks >= 6">
        <CommitNode
          :x="250"
          :y="90"
          text="021fa5"
          textPosition="top"
          :radius="10"
          fill="#2563EB"
          stroke="#1E3A8A"
        />
      </template>
      <template v-if="clicks >= 1 && clicks < 6">
        <CommitNode
          :x="250"
          :y="90"
          text="mlapse-410 (Tia)"
          textPosition="bottom"
          :radius="10"
          fill="#0ab718"
          stroke="#059010"
        />
      </template>
      <template v-if="clicks >= 2 && clicks < 6">
        <CommitNode
          :x="280"
          :y="40"
          textPosition="top"
          :radius="10"
          fill="#0ab718"
          stroke="#059010"
        />
      </template>
      <template v-if="clicks >= 3 && clicks < 6">
        <CommitNode
          :x="330"
          :y="40"
          text=""
          :radius="10"
          fill="#0ab718"
          stroke="#059010"
        />
      </template>
      <template v-if="clicks >= 5 && clicks < 6">
        <CommitNode
          :x="360"
          :y="90"
          text=""
          :radius="10"
          fill="#0ab718"
          stroke="#059010"
        />
      </template>

      <template v-if="clicks >= 6">
        <CommitNode
          :x="360"
          :y="90"
          text="afd1c0"
          textPosition="top"
          :radius="10"
          fill="#2563EB"
          stroke="#1E3A8A"
        />
      </template>

      <template v-if="clicks >= 7 && clicks < 9">
        <CommitNode
          :x="250"
          :y="90"
          text="mlapse-390 (Visal)"
          textPosition="bottom"
          :radius="10"
          fill="#DB2777"
          stroke="#9A3412"
        />
        <CommitNode
          :x="280"
          :y="145"
          text=""
          :radius="10"
          fill="#DB2777"
          stroke="#831843"
        />
        <CommitNode
          :x="330"
          :y="145"
          text=""
          :radius="10"
          fill="#DB2777"
          stroke="#831843"
        />
        <CommitNode
          :x="380"
          :y="145"
          text=""
          :radius="10"
          fill="#DB2777"
          stroke="#831843"
        />
      </template>
      <template v-if="clicks >= 9 && clicks < 11">
        <CommitNode
          :x="360"
          :y="90"
          text="mlapse-390 (Visal)"
          textPosition="bottom"
          :radius="10"
          fill="#DB2777"
          stroke="#9A3412"
        />
        <CommitNode
          :x="390"
          :y="145"
          text=""
          :radius="10"
          fill="#DB2777"
          stroke="#831843"
        />
        <CommitNode
          :x="440"
          :y="145"
          text=""
          :radius="10"
          fill="#DB2777"
          stroke="#831843"
        />
        <CommitNode
          :x="490"
          :y="145"
          text=""
          :radius="10"
          fill="#DB2777"
          stroke="#831843"
        />
      </template>
      <template v-if="clicks == 10">
        <CommitNode
          :x="520"
          :y="90"
          text=""
          :radius="10"
          fill="#DB2777"
          stroke="#831843"
        />
      </template>
      <template v-if="clicks >= 11">
        <CommitNode
          :x="520"
          :y="90"
          text="7aa66a"
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
