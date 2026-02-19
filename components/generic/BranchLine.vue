<template>
  <!-- Arrow -->
  <v-arrow v-if="isArrow" :config="arrowConfig" />

  <!-- Simple line -->
  <v-line v-else :config="lineConfig" />
</template>

<script setup lang="ts">
import { computed } from "vue";

type Direction = "left" | "right" | "none";

const props = withDefaults(
  defineProps<{
    fromX: number;
    fromY: number;
    toX: number;
    toY: number;

    direction?: Direction;

    stroke?: string;
    strokeWidth?: number;
    pointerLength?: number;
    pointerWidth?: number;
  }>(),
  {
    direction: "none",
    stroke: "#5A4A1F",
    strokeWidth: 4,
    pointerLength: 10,
    pointerWidth: 10,
  },
);

const isArrow = computed(() => props.direction !== "none");

const basePoints = computed(() => [
  props.fromX,
  props.fromY,
  props.toX,
  props.toY,
]);

const arrowPoints = computed(() => {
  if (props.direction === "right") {
    return basePoints.value;
  }

  if (props.direction === "left") {
    return [props.toX, props.toY, props.fromX, props.fromY];
  }

  return basePoints.value;
});

const lineConfig = computed(() => ({
  points: basePoints.value,
  stroke: props.stroke,
  strokeWidth: props.strokeWidth,
  lineCap: "round",
}));

const arrowConfig = computed(() => ({
  points: arrowPoints.value,
  stroke: props.stroke,
  fill: props.stroke,
  strokeWidth: props.strokeWidth,
  lineCap: "round",
  lineJoin: "round",
  pointerLength: props.pointerLength,
  pointerWidth: props.pointerWidth,
}));
</script>
