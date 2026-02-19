<template>
  <div :class="classes">
    <div class="font-semibold mb-1">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="opacity-90">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    type?: "info" | "tip" | "warning" | "danger";
    title?: string;
  }>(),
  {
    type: "info",
    title: "",
  },
);

const classes = computed(() => {
  const base = "rounded px-4 py-3 border-l-4";
  const map = {
    info: "border-sky-400 bg-sky-50/20",
    tip: "border-emerald-400 bg-emerald-50/20",
    warning: "border-amber-400 bg-amber-50/20",
    danger: "border-rose-400 bg-rose-50/20",
  } as const;
  return `${base} ${map[props.type]}`;
});
</script>
