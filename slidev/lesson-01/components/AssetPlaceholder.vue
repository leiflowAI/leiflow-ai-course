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
    <div class="frame-corner top-left"></div>
    <div class="frame-corner top-right"></div>
    <div class="frame-corner bottom-left"></div>
    <div class="frame-corner bottom-right"></div>
    <div class="asset-id">{{ id }} · 待补真图</div>
    <div class="asset-label">{{ label }}</div>
    <div class="asset-hint">{{ hint }}</div>
  </div>
</template>

<style scoped>
.asset-placeholder {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 180px;
  border: 1px solid rgba(22, 22, 22, 0.20);
  background:
    linear-gradient(135deg, rgba(255, 106, 50, 0.10), transparent 48%),
    rgba(255, 255, 255, 0.42);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 24px;
  overflow: hidden;
}

.asset-placeholder.dark {
  border-color: rgba(255, 255, 255, 0.20);
  background:
    linear-gradient(135deg, rgba(42, 109, 244, 0.14), transparent 52%),
    rgba(255, 255, 255, 0.055);
}

.asset-id {
  color: var(--lf-orange);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.14em;
}

.asset-label {
  margin-top: 12px;
  font-size: 25px;
  line-height: 1.20;
  font-weight: 850;
}

.asset-hint {
  margin-top: 8px;
  max-width: 36em;
  color: var(--lf-muted);
  font-size: 14px;
  line-height: 1.45;
}

.dark .asset-hint {
  color: rgba(255, 255, 255, 0.62);
}

.compact {
  min-height: 92px;
  padding: 10px;
}

.compact .asset-id {
  font-size: 11px;
}

.compact .asset-label {
  margin-top: 4px;
  font-size: 15px;
}

.compact .asset-hint {
  display: none;
}

.frame-corner {
  position: absolute;
  width: 18px;
  height: 18px;
  border-color: var(--lf-orange);
  border-style: solid;
  opacity: .88;
}

.top-left { left: 9px; top: 9px; border-width: 2px 0 0 2px; }
.top-right { right: 9px; top: 9px; border-width: 2px 2px 0 0; }
.bottom-left { left: 9px; bottom: 9px; border-width: 0 0 2px 2px; }
.bottom-right { right: 9px; bottom: 9px; border-width: 0 2px 2px 0; }
</style>
