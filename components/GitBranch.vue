<template>
  <div class="hidden">
    <span v-click></span>
    <span v-click></span>
    <span v-click></span>
    <span v-click></span>
    <span v-click></span>
    <span v-click></span>
  </div>
  <v-stage :config="{ width: 900, height: 250 }">
    <v-layer>
      <!-- background -->
      <v-rect
        :config="{ x: 0, y: 0, width: 900, height: 250, fill: '#F6F1DA' }"
      />
      <BranchLabel
        v-if="clicks === 0"
        :x="100"
        :y="130"
        text="main"
        direction="top"
        :radius="45"
        boxFill="#FBE7C5"
        boxStroke="#E59E1B"
        boxStrokeWidth="3"
        textColor="#7C4A00"
      />
      <CommitNode :x="100" :y="130" hash="7f9a3c1" :radius="45" />
      <BranchLabel
        v-if="clicks === 0"
        :x="100"
        :y="130"
        text="HEAD"
        direction="bottom"
        :radius="45"
        boxFill="#fbcec5"
        boxStroke="#df4e10"
        boxStrokeWidth="3"
        textColor="#7C4A00"
      />
      <BranchLine
        v-if="clicks >= 1"
        :fromX="145"
        :fromY="130"
        :toX="205"
        :toY="130"
      />
      <BranchLabel
        v-if="clicks === 1"
        :x="250"
        :y="130"
        text="main"
        direction="top"
        :radius="45"
        boxFill="#FBE7C5"
        boxStroke="#E59E1B"
        boxStrokeWidth="3"
        textColor="#7C4A00"
      />

      <CommitNode
        v-if="clicks >= 1"
        :x="250"
        :y="130"
        hash="9b2e6d4"
        :radius="45"
      />
      <BranchLabel
        v-if="clicks === 1"
        :x="250"
        :y="130"
        text="HEAD"
        direction="bottom"
        :radius="45"
        boxFill="#fbcec5"
        boxStroke="#df4e10"
        boxStrokeWidth="3"
        textColor="#7C4A00"
      />
      <BranchLine
        v-if="clicks >= 2"
        :fromX="295"
        :fromY="130"
        :toX="355"
        :toY="130"
      />
      <BranchLabel
        v-if="clicks >= 2"
        :x="400"
        :y="130"
        text="main"
        direction="top"
        :radius="45"
        boxFill="#FBE7C5"
        boxStroke="#E59E1B"
        boxStrokeWidth="3"
        textColor="#7C4A00"
      />
      <CommitNode
        v-if="clicks >= 2"
        :x="400"
        :y="130"
        hash="3c8f1a7"
        :radius="45"
      />
      <BranchLabel
        v-if="clicks >= 2 && clicks < 4"
        :x="400"
        :y="130"
        text="HEAD"
        direction="bottom"
        :radius="45"
        boxFill="#fbcec5"
        boxStroke="#df4e10"
        boxStrokeWidth="3"
        textColor="#7C4A00"
      />

      <CommitNode
        v-if="clicks >= 3"
        :x="550"
        :y="50"
        hash="d1e4b9c"
        :radius="45"
      />
      <BranchLine
        v-if="clicks >= 3"
        :fromX="440"
        :fromY="110"
        :toX="510"
        :toY="70"
      />
      <CommitNode
        v-if="clicks >= 3"
        :x="690"
        :y="50"
        hash="6a7c2f8"
        :radius="45"
      />
      <BranchLabel
        v-if="clicks == 4"
        :x="690"
        :y="50"
        text="HEAD"
        direction="bottom"
        :radius="45"
        boxFill="#fbcec5"
        boxStroke="#df4e10"
        boxStrokeWidth="3"
        textColor="#7C4A00"
      />
      <BranchLine
        v-if="clicks >= 3"
        :fromX="595"
        :fromY="50"
        :toX="645"
        :toY="50"
      />
      <BranchLabel
        v-if="clicks >= 3"
        :x="690"
        :y="50"
        text="FEATURE"
        direction="right"
        :radius="45"
        :width="100"
      />
      <BranchLabel
        v-if="clicks === 5"
        :x="250"
        :y="130"
        text="DETACHED HEAD"
        direction="bottom"
        :radius="45"
        boxFill="#fbcec5"
        boxStroke="#df4e10"
        boxStrokeWidth="3"
        textColor="#7C4A00"
      />
    </v-layer>
  </v-stage>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSlideContext } from "@slidev/client";

import BranchLine from "./BranchLine.vue";
import CommitNode from "./CommitNode.vue";
import BranchLabel from "./BranchLabel.vue";

const ctx = useSlideContext();

const clicks = computed(() => {
  const c: any = (ctx as any).$clicks;
  return typeof c === "number" ? c : (c?.value ?? 0);
});

const show = (step: number) => clicks.value >= step;
</script>
