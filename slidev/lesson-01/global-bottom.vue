<template>
  <div v-if="$slidev.nav.currentPage > 1" class="lf-global-footer">
    <span>{{ String($slidev.nav.currentPage).padStart(2, '0') }}</span>
  </div>
</template>

<style scoped>
.lf-global-footer {
  position: absolute;
  z-index: 50;
  right: 18px;
  bottom: 14px;
  color: white;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  mix-blend-mode: difference;
  pointer-events: none;
}
</style>
