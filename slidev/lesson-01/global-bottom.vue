<template>
  <div v-if="$slidev.nav.currentPage > 1" class="lf-global-footer">
    <span>LeiFlow AI Course</span>
    <span>{{ String($slidev.nav.currentPage).padStart(2, '0') }}</span>
  </div>
</template>

<style scoped>
.lf-global-footer {
  position: absolute;
  z-index: 50;
  left: 64px;
  right: 64px;
  bottom: 20px;
  display: flex;
  justify-content: space-between;
  color: rgba(22, 22, 22, 0.42);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  pointer-events: none;
}

:global(.slidev-layout.dark) ~ * .lf-global-footer,
:global(.slidev-layout.section) ~ * .lf-global-footer {
  color: rgba(255, 255, 255, 0.42);
}
</style>
