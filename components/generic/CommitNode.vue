<template>
  <v-group :config="{ x, y }">
    <v-circle :config="circleConfig" />
    <v-text :config="textConfig" />
  </v-group>
</template>

<script setup lang="ts">
import { computed } from "vue";

type TextPosition = "center" | "top" | "bottom" | "left" | "right";

const props = withDefaults(
  defineProps<{
    x: number;
    y: number;
    radius: number;
    hash?: string;
    text?: string;
    textPosition?: TextPosition;
    fontSize?: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
  }>(),
  {
    hash: "",
    text: "",
    textPosition: "center",
    fontSize: 14,
    fill: "#F6F1DA",
    stroke: "#5A4A1F",
    strokeWidth: 3,
  },
);

const circleConfig = {
  x: 0,
  y: 0,
  radius: props.radius,
  fill: props.fill,
  stroke: props.stroke,
  strokeWidth: props.strokeWidth,
};

const label = computed(() => props.text || props.hash);

const W = 400; // largeur généreuse, pas de retour à la ligne

const textConfig = computed(() => {
  const r = props.radius;
  const fs = props.fontSize;

  const base = {
    text: label.value,
    fontSize: fs,
    fontStyle: "bold",
    fill: props.stroke,
    fontFamily: "monospace",
    width: W,
  };

  switch (props.textPosition) {
    case "top":
      return { ...base, x: -W / 2, y: -r - 8 - fs, align: "center" as const };
    case "bottom":
      return { ...base, x: -W / 2, y: r + 8, align: "center" as const };
    case "left":
      return { ...base, x: -W - r - 8, y: -fs / 2, align: "right" as const };
    case "right":
      return { ...base, x: r + 8, y: -fs / 2, align: "left" as const };
    case "center":
    default:
      return { ...base, x: -W / 2, y: -fs / 2, align: "center" as const };
  }
});
</script>
