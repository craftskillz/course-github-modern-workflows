<template>
  <v-group :config="{ x, y }">
    <v-circle :config="circleConfig" />
    <v-text :config="textConfig" />
  </v-group>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    x: number;
    y: number;
    radius: number;
    hash?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
  }>(),
  {
    hash: "",
    fill: "#F6F1DA",
    stroke: "#5A4A1F",
    strokeWidth: 3,
  },
);

const circleConfig = computed(() => ({
  x: 0,
  y: 0,
  radius: props.radius,
  fill: props.fill,
  stroke: props.stroke,
  strokeWidth: props.strokeWidth,
}));

const textConfig = computed(() => ({
  text: props.hash,
  x: -props.radius,
  y: -10,
  width: props.radius * 2,
  align: "center",
  fontSize: 16,
  fontStyle: "bold",
  fill: props.stroke, // texte de la même couleur que le contour
  fontFamily: "monospace",
}));
</script>
