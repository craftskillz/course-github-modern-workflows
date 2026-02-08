<template>
  <v-group :config="{ x, y }">
    <v-circle :config="circleConfig" />
    <v-text :config="textTop" />
    <v-text :config="textBottom" />
  </v-group>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  x: number;
  y: number;
  radius: number;
  hash: string;
}>();

const circleConfig = {
  x: 0,
  y: 0,
  radius: props.radius,
  fill: "#F6F1DA",
  stroke: "#5A4A1F",
  strokeWidth: 3,
};

const textTop = computed(() => ({
  text: props.hash,
  x: -props.radius,
  y: -10,
  width: 90,
  align: "center",
  fontSize: 16,
  fontStyle: "bold",
  fill: "#5A4A1F",
  fontFamily: "monospace",
}));
</script>
