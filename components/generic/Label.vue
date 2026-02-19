<template>
  <v-text :config="textConfig" />
</template>

<script setup lang="ts">
import { computed } from "vue";

type Direction = "top" | "bottom" | "left" | "right";

const props = withDefaults(
  defineProps<{
    x: number;
    y: number;
    text: string;
    radius: number;
    direction?: Direction;
    fontSize?: number;
    color?: string;
    gap?: number;
  }>(),
  {
    direction: "top",
    fontSize: 14,
    color: "#5A4A1F",
    gap: 8,
  },
);

const textConfig = computed(() => {
  const r = props.radius;
  const g = props.gap;
  const fs = props.fontSize;
  // Approximate text width for centering (roughly 7px per char at fontSize 14)
  const approxCharWidth = props.fontSize * 0.6;
  const approxTextWidth = props.text.length * approxCharWidth;

  let x = props.x;
  let y = props.y;
  let align: "left" | "center" | "right" = "center";

  switch (props.direction) {
    case "top":
      x = props.x - approxTextWidth / 2;
      y = props.y - r - g - fs;
      break;
    case "bottom":
      x = props.x - approxTextWidth / 2;
      y = props.y + r + g;
      break;
    case "right":
      x = props.x + r + g;
      y = props.y - fs / 2;
      align = "left";
      break;
    case "left":
      x = props.x - r - g - approxTextWidth;
      y = props.y - fs / 2;
      align = "right";
      break;
  }

  return {
    x,
    y,
    text: props.text,
    fontSize: props.fontSize,
    fontStyle: "bold",
    fill: props.color,
    fontFamily: "monospace",
    align,
  };
});
</script>
