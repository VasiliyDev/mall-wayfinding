<template>
  <div class="demo">
    <!-- Control panel -->
    <div class="panel">
      <div class="panel__head">
        <h1 class="panel__title">{{ $t('app_title') }}</h1>
        <div class="panel__lang">
          <button
            v-for="l in locales"
            :key="l.code"
            class="panel__lang-btn"
            :class="{ 'is-active': locale === l.code }"
            type="button"
            @click="setLocale(l.code)"
          >
            {{ l.label }}
          </button>
        </div>
      </div>

      <p class="panel__subtitle">{{ $t('app_subtitle') }}</p>

      <div class="panel__controls">
        <label class="field">
          <span class="field__label">{{ $t('from_floor') }}</span>
          <select v-model="from" class="field__select">
            <option v-for="f in fromFloors" :key="f" :value="f">
              {{ f }} — {{ $t('level') }}
            </option>
          </select>
        </label>

        <label class="field">
          <span class="field__label">{{ $t('to_floor') }}</span>
          <select v-model="to" class="field__select">
            <option v-for="f in toFloors" :key="f" :value="f">
              {{ f }} — {{ $t('parking') }}
            </option>
          </select>
        </label>

        <label class="field">
          <span class="field__label">{{ $t('place') }}</span>
          <select v-model="place" class="field__select" :disabled="loading">
            <option v-for="p in places" :key="p" :value="p">{{ p }}</option>
          </select>
        </label>

        <label class="field">
          <span class="field__label">{{ $t('mode') }}</span>
          <select v-model="mode" class="field__select">
            <option value="desktop">{{ $t('mode_desktop') }}</option>
            <option value="mobile">{{ $t('mode_mobile') }}</option>
          </select>
        </label>
      </div>

      <p class="panel__hint">
        {{ $t('route_hint', { from, to, place }) }}
      </p>
    </div>

    <!-- 3D scene -->
    <div class="stage" :class="{ 'stage--mobile': isMobile }">
      <div v-if="loading" class="stage__status">{{ $t('loading') }}</div>
      <PathScene
        v-else-if="place"
        :key="sceneKey"
        :floor-from="from"
        :floor-to="to"
        :place="place"
        :is-mobile="isMobile"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PathScene from '@/components/PathScene.vue';
import { useAppStore, type LocaleCode } from '@/stores/app';

type PlaceObject = { name?: string; type?: string };

export default defineComponent({
  name: 'ViewDemo',
  components: { PathScene },
  data() {
    return {
      // Upper levels double as the "starting point" (where the kiosk / lift is).
      fromFloors: ['L4', 'L5'] as const,
      // Parking levels hold the named spots.
      toFloors: ['B3', 'B4'] as const,
      locales: [
        { code: 'en' as LocaleCode, label: 'EN' },
        { code: 'zh' as LocaleCode, label: '中文' },
      ],
      from: 'L4',
      to: 'B4',
      place: '' as string,
      places: [] as string[],
      mode: 'desktop' as 'desktop' | 'mobile',
      loading: true,
    };
  },
  computed: {
    isMobile(): boolean {
      return this.mode === 'mobile';
    },
    locale(): string {
      return this.$i18n.locale;
    },
    sceneKey(): string {
      return `${this.from}-${this.to}-${this.place}-${this.mode}`;
    },
  },
  watch: {
    to: {
      immediate: true,
      handler(floor: string) {
        this.loadPlaces(floor);
      },
    },
  },
  mounted() {
    this.setLocale(useAppStore().language);
  },
  methods: {
    async loadPlaces(floor: string) {
      this.loading = true;
      try {
        const mod = await import(`@/data/floors/${floor}`);
        const objects: PlaceObject[] = mod.default?.objects ?? [];
        this.places = objects
          .filter((o) => o.name && (o.type === 'normal' || o.type === 'mini'))
          .map((o) => o.name as string);
        // Keep the current spot if it still exists, else pick the first one.
        if (!this.places.includes(this.place)) {
          this.place = this.places[0] ?? '';
        }
      } catch (e) {
        console.error(`Failed to load floor '${floor}'`, e);
        this.places = [];
        this.place = '';
      } finally {
        this.loading = false;
      }
    },
    setLocale(code: LocaleCode) {
      this.$i18n.locale = code;
      useAppStore().setLang(code);
    },
  },
});
</script>

<style scoped lang="scss">
$accent: #133569;

.demo {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.stage {
  position: absolute;
  inset: 0;

  &__status {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #555;
  }

  // Constrain the "mobile" mode to a phone-sized frame so the difference is
  // obvious in the showcase.
  &--mobile :deep(#scene-container) {
    width: 393px;
    max-width: 100%;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08);
  }
}

.panel {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 20;
  width: 320px;
  max-width: calc(100vw - 40px);
  padding: 20px;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(6px);
  border-radius: 14px;
  box-shadow: 0 4px 24px rgba(0, 29, 66, 0.16);

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  &__title {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: $accent;
  }

  &__lang {
    display: flex;
    gap: 4px;
  }

  &__lang-btn {
    padding: 4px 8px;
    border: 1px solid #d0d7e2;
    border-radius: 8px;
    background: #fff;
    font-size: 12px;
    font-weight: 600;
    color: #556;
    cursor: pointer;

    &.is-active {
      background: $accent;
      border-color: $accent;
      color: #fff;
    }
  }

  &__subtitle {
    margin: 8px 0 16px;
    font-size: 13px;
    line-height: 1.5;
    color: #556;
  }

  &__controls {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  &__hint {
    margin: 14px 0 0;
    font-size: 12px;
    line-height: 1.5;
    color: #78829a;
  }
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;

  &__label {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #8a93a6;
  }

  &__select {
    padding: 8px 10px;
    border: 1px solid #d0d7e2;
    border-radius: 8px;
    background: #fff;
    font-size: 14px;
    font-weight: 500;
    color: #223;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  }
}
</style>
