<template>
  <Transition name="fade">
    <div
      v-if="visible"
      class="info-card"
      :class="{ 'info-card--full-height': fullHeight }"
      :style="cardStyle"
    >
      <h3 class="info-card__title" :style="{ color: titleColor }">
        {{ title }}
      </h3>
      <div class="info-card__body" v-html="body" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSlideContext } from "@slidev/client";

const props = withDefaults(
  defineProps<{
    title: string;
    body: string;
    showAt: number;
    hideAt?: number;
    titleColor?: string;
    padding?: string;
    height?: string;
    fullHeight?: boolean;
  }>(),
  {
    hideAt: undefined,
    titleColor: "#E59E1B",
    padding: "28px 36px",
    height: undefined,
    fullHeight: false,
  },
);

const ctx = useSlideContext();
const clicks = computed(() => {
  const c: any = (ctx as any).$clicks;
  return typeof c === "number" ? c : (c?.value ?? 0);
});

const visible = computed(() => {
  const shown = clicks.value >= props.showAt;
  const hidden = props.hideAt !== undefined && clicks.value >= props.hideAt;
  return shown && !hidden;
});

const cardStyle = computed(() => ({
  padding: props.padding,
  ...(props.height ? { height: props.height } : {}),
}));
</script>

<style scoped>
.info-card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 860px;
  box-sizing: border-box;
}

.info-card--full-height {
  height: 100%;
}

.info-card__title {
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0 0 14px 0;
}

.info-card__body {
  font-size: 1.1rem;
  color: #3a3a3a;
  margin: 0;
  line-height: 1.6;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
