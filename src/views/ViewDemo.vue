<template>
  <div class="demo">
    <!-- Collapsed state: floating button to reopen the panel -->
    <button
      v-if="!panelOpen"
      class="panel-fab"
      type="button"
      :aria-label="$t('options')"
      @click="panelOpen = true"
    >
      ☰
    </button>

    <!-- Control panel -->
    <div v-show="panelOpen" class="panel">
      <div class="panel__head">
        <h1 class="panel__title">{{ $t('app_title') }}</h1>
        <div class="panel__actions">
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
          <button
            class="panel__collapse"
            type="button"
            :aria-label="$t('collapse')"
            @click="panelOpen = false"
          >
            ×
          </button>
        </div>
      </div>

      <p class="panel__subtitle">{{ $t('app_subtitle') }}</p>

      <div class="panel__controls">
        <!-- Which mall -->
        <label class="field field--wide">
          <span class="field__label">{{ $t('mall') }}</span>
          <select v-model="mall" class="field__select">
            <option value="A">{{ $t('mall_a') }}</option>
            <option value="B">{{ $t('mall_b') }}</option>
          </select>
        </label>

        <!-- Mall A: single level, choose kiosk + unit -->
        <template v-if="mall === 'A'">
          <label class="field">
            <span class="field__label">{{ $t('kiosk') }}</span>
            <select v-model="kiosk" class="field__select">
              <option v-for="k in kiosks" :key="k" :value="k">
                {{ $t('kiosk') }} {{ k }}
              </option>
            </select>
          </label>
          <label class="field">
            <span class="field__label">{{ $t('unit') }}</span>
            <select v-model="place" class="field__select" :disabled="loading">
              <option v-for="p in places" :key="p" :value="p">{{ p }}</option>
            </select>
          </label>
        </template>

        <!-- Mall B: choose start level, parking level + spot -->
        <template v-else>
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
          <label class="field field--wide">
            <span class="field__label">{{ $t('place') }}</span>
            <select v-model="place" class="field__select" :disabled="loading">
              <option v-for="p in places" :key="p" :value="p">{{ p }}</option>
            </select>
          </label>
        </template>

        <!-- View mode -->
        <label class="field field--wide">
          <span class="field__label">{{ $t('mode') }}</span>
          <select v-model="mode" class="field__select">
            <option value="desktop">{{ $t('mode_desktop') }}</option>
            <option value="mobile">{{ $t('mode_mobile') }}</option>
          </select>
        </label>
      </div>

      <p class="panel__hint">{{ hint }}</p>
    </div>

    <!-- 3D scene -->
    <div class="stage" :class="{ 'stage--mobile': isMobile }">
      <div v-if="loading" class="stage__status">{{ $t('loading') }}</div>
      <PathScene
        v-else-if="place"
        :key="sceneKey"
        :floor-from="floorFrom"
        :floor-to="floorTo"
        :place="place"
        :entry-point="entryPoint"
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
      locales: [
        { code: 'en' as LocaleCode, label: 'EN' },
        { code: 'zh' as LocaleCode, label: '中文' },
      ],
      mall: 'A' as 'A' | 'B',
      // Mall A (single level, 3F): three kiosks as start points.
      kiosks: ['1', '2', '3'],
      kiosk: '1',
      // Mall B (multi-level parking).
      fromFloors: ['L4', 'L5'] as const,
      toFloors: ['B3', 'B4'] as const,
      from: 'L4',
      to: 'B4',
      // Shared destination (unit for A, spot for B).
      place: '' as string,
      places: [] as string[],
      mode: 'desktop' as 'desktop' | 'mobile',
      loading: true,
      panelOpen:
        typeof window === 'undefined' ? true : window.innerWidth > 640,
    };
  },
  computed: {
    isMobile(): boolean {
      return this.mode === 'mobile';
    },
    locale(): string {
      return this.$i18n.locale;
    },
    // Floor whose objects populate the destination selector.
    targetFloor(): string {
      return this.mall === 'A' ? '3F' : this.to;
    },
    // Empty for single-level mall A (kiosk→unit); the start level for mall B.
    floorFrom(): string {
      return this.mall === 'A' ? '' : this.from;
    },
    floorTo(): string {
      return this.targetFloor;
    },
    entryPoint(): string {
      return this.mall === 'A' ? this.kiosk : '1';
    },
    sceneKey(): string {
      return [
        this.mall,
        this.floorFrom,
        this.floorTo,
        this.place,
        this.kiosk,
        this.mode,
      ].join('-');
    },
    hint(): string {
      return this.mall === 'A'
        ? this.$t('route_hint_a', { kiosk: this.kiosk, place: this.place })
        : this.$t('route_hint_b', {
            from: this.from,
            to: this.to,
            place: this.place,
          });
    },
  },
  watch: {
    targetFloor: {
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

  @media (min-width: 768px) {
    &--mobile :deep(#scene-container) {
      width: 393px;
      max-width: 100%;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08);
    }
  }
}

.panel-fab {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 30;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 12px;
  background: $accent;
  color: #fff;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(0, 29, 66, 0.24);
}

.panel {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 20;
  width: 320px;
  max-width: calc(100vw - 32px);
  padding: 18px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(6px);
  border-radius: 14px;
  box-shadow: 0 4px 24px rgba(0, 29, 66, 0.16);

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  &__title {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: $accent;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 8px;
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

  &__collapse {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    padding: 0;
    border: 1px solid #d0d7e2;
    border-radius: 8px;
    background: #fff;
    font-size: 18px;
    line-height: 1;
    color: #556;
    cursor: pointer;
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

  &--wide {
    grid-column: 1 / -1;
  }

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
