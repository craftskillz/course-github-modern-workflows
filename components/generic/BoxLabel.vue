<template>
  <v-line :config="lineConfig" />
  <v-group :config="groupConfig">
    <v-rect :config="rectConfig" />
    <v-text :config="textConfig" />
  </v-group>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Direction = "top" | "bottom" | "left" | "right";

const props = withDefaults(
  defineProps<{
    x: number;
    y: number;
    text: string;
    direction?: Direction;
    radius: number;

    width?: number;
    height?: number;

    boxFill?: string;
    boxStroke?: string;
    boxStrokeWidth?: number;
    textColor?: string;
  }>(),
  {
    direction: "top",
    width: 150,
    height: 40,

    boxFill: "#E7E7E7",
    boxStroke: "#B7B7B7",
    boxStrokeWidth: 2,
    textColor: "#585858",
  },
);

// No stage.
// Keep it simple + symmetric.
const link = computed(() => Math.round(props.radius * 0.3)); // small link length
const pad = computed(() => 8); // tiny air gap (set to 0 if you want touching)

const groupConfig = computed(() => {
  const w = props.width;
  const h = props.height;
  const r = props.radius;
  const L = link.value;
  const P = pad.value;

  switch (props.direction) {
    case "top":
      // box above commit
      return { x: props.x - w / 2, y: props.y - r - P - L - h };

    case "bottom":
      return { x: props.x - w / 2, y: props.y + r + P + L };

    case "right":
      return { x: props.x + r + P + L, y: props.y - h / 2 };

    case "left":
      return { x: props.x - (r + P + L + w), y: props.y - h / 2 };
  }
});

const lineConfig = computed(() => {
  const w = props.width;
  const h = props.height;
  const r = props.radius;

  const bx = groupConfig.value.x;
  const by = groupConfig.value.y;

  const boxCenterX = bx + w / 2;
  const boxCenterY = by + h / 2;

  const boxTop = { x: boxCenterX, y: by };
  const boxBottom = { x: boxCenterX, y: by + h };
  const boxLeft = { x: bx, y: boxCenterY };
  const boxRight = { x: bx + w, y: boxCenterY };

  const base = {
    stroke: props.boxStroke,
    strokeWidth: props.boxStrokeWidth,
    lineCap: "round" as const,
  };

  switch (props.direction) {
    case "top": {
      const start = { x: props.x, y: props.y - r };
      const end = boxBottom;
      return { ...base, points: [start.x, start.y, end.x, end.y] };
    }
    case "bottom": {
      const start = { x: props.x, y: props.y + r };
      const end = boxTop;
      return { ...base, points: [start.x, start.y, end.x, end.y] };
    }
    case "right": {
      const start = { x: props.x + r, y: props.y };
      const end = boxLeft;
      return { ...base, points: [start.x, start.y, end.x, end.y] };
    }
    case "left": {
      const start = { x: props.x - r, y: props.y };
      const end = boxRight;
      return { ...base, points: [start.x, start.y, end.x, end.y] };
    }
  }
});

const rectConfig = computed(() => ({
  width: props.width,
  height: props.height,
  cornerRadius: 6,
  fill: props.boxFill,
  stroke: props.boxStroke,
  strokeWidth: props.boxStrokeWidth,
}));

const textConfig = computed(() => ({
  text: props.text,
  width: props.width,
  align: "center",
  y: 10,
  fontSize: 16,
  fontStyle: "bold",
  fill: props.textColor,
}));
</script>
