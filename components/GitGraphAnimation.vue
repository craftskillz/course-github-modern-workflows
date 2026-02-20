<template>
  <div class="hidden">
    <span v-click></span>
    <span v-click></span>
    <span v-click></span>
    <span v-click></span>
    <span v-click></span>
  </div>
  <v-stage :config="{ width: 900, height: 400 }">
    <v-layer>
      <!-- background -->
      <v-rect
        :config="{ x: 0, y: 0, width: 900, height: 400, fill: '#F6F1DA' }"
      />

      <BoxLabel
        v-if="clicks === 0"
        :x="100"
        :y="230"
        text="main"
        direction="top"
        :radius="45"
        boxFill="#FBE7C5"
        boxStroke="#E59E1B"
        :boxStrokeWidth="3"
        textColor="#7C4A00"
      />
      <!-- First -->
      <CommitNode :x="100" :y="230" text="7f9a3c1" :radius="45" />
      <BranchLine
        v-if="show(1)"
        direction="left"
        :fromX="145"
        :fromY="230"
        :toX="255"
        :toY="230"
      />

      <!-- Second -->
      <BoxLabel
        v-if="clicks >= 1 && clicks < 4"
        :x="300"
        :y="230"
        text="main"
        direction="top"
        :radius="45"
        boxFill="#FBE7C5"
        boxStroke="#E59E1B"
        :boxStrokeWidth="3"
        textColor="#7C4A00"
      />
      <CommitNode
        v-if="show(1)"
        :x="300"
        :y="230"
        text="9b2e6d4"
        :radius="45"
      />

      <BranchLine
        v-if="show(2)"
        direction="left"
        :fromX="335"
        :fromY="200"
        :toX="410"
        :toY="140"
      />
      <!-- Third -->
      <CommitNode
        v-if="show(2)"
        :x="450"
        :y="120"
        text="3c8f1a7"
        :radius="45"
      />

      <BoxLabel
        v-if="show(2)"
        :x="450"
        :y="120"
        text="feature-login"
        direction="top"
        :radius="45"
      />

      <BranchLine
        v-if="show(3)"
        direction="left"
        :fromX="335"
        :fromY="260"
        :toX="410"
        :toY="330"
      />
      <!-- Fourth -->
      <CommitNode
        v-if="show(3)"
        :x="450"
        :y="350"
        text="d1e4b9c"
        :radius="45"
      />
      <BoxLabel
        v-if="show(3)"
        :x="450"
        :y="350"
        text="bugfix"
        direction="right"
        :radius="45"
      />

      <BranchLine
        v-if="show(4)"
        direction="left"
        :fromX="345"
        :fromY="230"
        :toX="530"
        :toY="230"
      />

      <BoxLabel
        v-if="clicks == 4"
        :x="575"
        :y="230"
        text="main"
        direction="top"
        :radius="45"
        boxFill="#FBE7C5"
        boxStroke="#E59E1B"
        :boxStrokeWidth="3"
        textColor="#7C4A00"
      />
      <!-- Fifth -->
      <CommitNode
        v-if="show(4)"
        :x="575"
        :y="230"
        text="6a7c2f8"
        :radius="45"
      />

      <BoxLabel
        v-if="clicks == 5"
        :x="795"
        :y="230"
        text="main"
        direction="top"
        :radius="45"
        boxFill="#FBE7C5"
        boxStroke="#E59E1B"
        :boxStrokeWidth="3"
        textColor="#7C4A00"
      />
      <!-- Sixth -->
      <CommitNode
        v-if="show(5)"
        :x="795"
        :y="230"
        text="b4d9e3a"
        :radius="45"
      />

      <BranchLine
        v-if="show(5)"
        direction="left"
        :fromX="620"
        :fromY="230"
        :toX="750"
        :toY="230"
      />
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
