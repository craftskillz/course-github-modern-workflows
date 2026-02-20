<template>
  <v-stage :config="{ width: 900, height: 170 }">
    <v-layer>
      <v-rect
        :config="{ x: 0, y: 0, width: 900, height: 170, fill: '#F6F1DA' }"
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

        <BranchLine
          :fromX="250"
          :fromY="90"
          :toX="280"
          :toY="145"
          stroke="#DB2777"
          :strokeWidth="5"
        />

        <BranchLine
          :fromX="280"
          :fromY="145"
          :toX="380"
          :toY="145"
          stroke="#DB2777"
          :strokeWidth="5"
        />
        <BranchLine
          :fromX="380"
          :fromY="145"
          :toX="410"
          :toY="90"
          stroke="#DB2777"
          :strokeWidth="5"
        />
        <BranchLine
          :fromX="250"
          :fromY="90"
          :toX="280"
          :toY="40"
          stroke="#0ab718"
          :strokeWidth="5"
        />
        <BranchLine
          :fromX="280"
          :fromY="40"
          :toX="330"
          :toY="40"
          stroke="#0ab718"
          :strokeWidth="5"
        />
        <BranchLine
          :fromX="330"
          :fromY="40"
          :toX="360"
          :toY="90"
          stroke="#0ab718"
          :strokeWidth="5"
        />
        <BranchLine
          :fromX="360"
          :fromY="90"
          :toX="390"
          :toY="50"
          stroke="#ef8616"
          :strokeWidth="5"
        />
        <BranchLine
          :fromX="390"
          :fromY="50"
          :toX="480"
          :toY="50"
          stroke="#ef8616"
          :strokeWidth="5"
        />
        <BranchLine
          :fromX="480"
          :fromY="50"
          :toX="520"
          :toY="90"
          stroke="#ef8616"
          :strokeWidth="5"
        />
        <BranchLine
          :fromX="410"
          :fromY="90"
          :toX="440"
          :toY="120"
          stroke="#DB2777"
          :strokeWidth="5"
        />
        <BranchLine
          :fromX="440"
          :fromY="120"
          :toX="470"
          :toY="120"
          stroke="#DB2777"
          :strokeWidth="5"
        />
        <BranchLine
          :fromX="470"
          :fromY="120"
          :toX="490"
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
        <CommitNode
          :x="410"
          :y="90"
          text=""
          :radius="10"
          fill="#DB2777"
          stroke="#831843"
        />

        <CommitNode
          :x="280"
          :y="40"
          text="mlapse-410 (Tia)"
          textPosition="top"
          :radius="10"
          fill="#0ab718"
          stroke="#059010"
        />
        <CommitNode
          :x="330"
          :y="40"
          text=""
          :radius="10"
          fill="#0ab718"
          stroke="#059010"
        />
        <CommitNode
          :x="360"
          :y="90"
          text=""
          :radius="10"
          fill="#0ab718"
          stroke="#059010"
        />
        <CommitNode
          :x="390"
          :y="50"
          :radius="10"
          fill="#ef8616"
          stroke="#a85b09"
        />
        <CommitNode
          :x="450"
          :y="50"
          text=""
          :radius="10"
          fill="#ef8616"
          stroke="#a85b09"
        />
        <CommitNode
          :x="480"
          :y="50"
          text="mlapse-393 (Khalil)"
          textPosition="top"
          :radius="10"
          fill="#ef8616"
          stroke="#a85b09"
        />
        <CommitNode
          :x="520"
          :y="90"
          text=""
          :radius="10"
          fill="#ef8616"
          stroke="#a85b09"
        />
        <CommitNode
          :x="440"
          :y="120"
          text=""
          :radius="10"
          fill="#DB2777"
          stroke="#831843"
        />
        <Label
          :x="500"
          :y="110"
          text="mlapse-392 (Visal)"
          direction="bottom"
          color="#831843"
          :radius="16"
        />
        <CommitNode
          :x="470"
          :y="120"
          text=""
          :radius="10"
          fill="#DB2777"
          stroke="#831843"
        />
        <CommitNode
          :x="490"
          :y="90"
          text=""
          :radius="10"
          fill="#DB2777"
          stroke="#831843"
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
