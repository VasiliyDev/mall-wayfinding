/* Ambient module + asset shims. Type-checking is not gated on the build
 * (ts-loader runs in transpileOnly mode), but these keep the editor and the
 * optional `npm run typecheck` honest. */

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// Three.js example/addon entrypoints that ship without bundled types here.
declare module 'three/addons/*';
declare module 'three/examples/jsm/*';

// No bundled types on this version.
declare module 'troika-three-text';

// webpack-provided asset requires (png/svg/…)
declare const require: {
  (id: string): any;
  context(
    directory: string,
    useSubdirectories?: boolean,
    regExp?: RegExp,
  ): {
    keys(): string[];
    (id: string): any;
  };
};
