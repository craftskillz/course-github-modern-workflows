<template>
  <span class="ta" :style="wrapperStyle" aria-hidden="true">
    <template v-if="direction === 'right'">
      <span class="ta-line" :style="lineStyle"></span>
      <span class="ta-head ta-head-right" :style="headStyle"></span>
    </template>
    <template v-else>
      <span class="ta-head ta-head-left" :style="headStyle"></span>
      <span class="ta-line" :style="lineStyle"></span>
    </template>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    direction?: "left" | "right";
    width?: string;
    height?: string;
    color?: string;
    thickness?: number;
    align?:
      | "baseline"
      | "middle"
      | "text-bottom"
      | "text-top"
      | "sub"
      | "super";
    y?: string;
  }>(),
  {
    direction: "right",
    width: "5em",
    height: "1em",
    color: "currentColor",
    thickness: 2,
    align: "middle",
    y: "0em",
  },
);

const headHalf = computed(() => `calc(${props.height} * 0.42)`);
const headWidth = computed(() => `calc(${props.height} * 0.55)`);

const wrapperStyle = computed(
  () =>
    ({
      width: props.width,
      height: props.height,
      color: props.color,
      verticalAlign: props.align,
      transform: props.y !== "0em" ? `translateY(${props.y})` : undefined,
      // CSS variables for head sizing
      "--head-half": headHalf.value,
      "--head-width": headWidth.value,
    }) as Record<string, string>,
);

const lineStyle = computed(() => ({
  borderTop: `${props.thickness}px solid currentColor`,
}));
</script>

<style scoped>
.ta {
  display: inline-flex;
  align-items: center;
  gap: 0;
  line-height: 1;
}

.ta-line {
  flex: 1 1 auto;
  height: 0;
  margin-right: -1px; /* colle la tête */
  margin-left: -1px;
}

.ta-head {
  width: 0;
  height: 0;
  border-top: var(--head-half) solid transparent;
  border-bottom: var(--head-half) solid transparent;
}

.ta-head-right {
  border-left: var(--head-width) solid currentColor;
}

.ta-head-left {
  border-right: var(--head-width) solid currentColor;
}
</style>
