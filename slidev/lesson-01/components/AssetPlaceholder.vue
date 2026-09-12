<script setup>
defineProps({
  id: { type: String, default: 'A00' },
  label: { type: String, default: '待补素材' },
  hint: { type: String, default: '在素材清单中查看要求' },
  compact: { type: Boolean, default: false },
  dark: { type: Boolean, default: false },
})
</script>

<template>
  <div class="asset-placeholder" :class="{ compact, dark }">
    <div class="asset-id">{{ id }}</div>
    <div class="asset-label">{{ label }}</div>
    <div class="asset-hint">{{ hint }}</div>
  </div>
</template>

<style scoped>
.asset-placeholder {
  width: 100%;
  height: 100%;
  min-height: 180px;
  border: 2px dashed rgba(22, 22, 22, 0.34);
  background:
    linear-gradient(135deg, rgba(255, 90, 54, 0.08), transparent 42%),
    rgba(255, 255, 255, 0.34);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 24px;
  border-radius: 10px;
}

.asset-placeholder.dark {
  border-color: rgba(255, 255, 255, 0.38);
  background: rgba(255, 255, 255, 0.06);
}

.asset-id {
  color: var(--lf-orange);
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.14em;
}

.asset-label {
  margin-top: 10px;
  font-size: 24px;
  line-height: 1.25;
  font-weight: 750;
}

.asset-hint {
  margin-top: 8px;
  max-width: 34em;
  color: var(--lf-muted);
  font-size: 15px;
  line-height: 1.45;
}

.dark .asset-hint {
  color: rgba(255, 255, 255, 0.62);
}

.compact {
  min-height: 92px;
  padding: 10px;
  border-radius: 7px;
}

.compact .asset-id {
  font-size: 11px;
}

.compact .asset-label {
  margin-top: 4px;
  font-size: 14px;
}

.compact .asset-hint {
  display: none;
}
</style>
