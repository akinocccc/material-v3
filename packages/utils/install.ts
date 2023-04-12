import type { AppContext } from "vue";
import type { App, Plugin } from "@vue/runtime-core";
import material from "./material";

export type SFCWithInstall<T> = T & Plugin;

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null;
};

export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E
) => {
  (main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp;
    }
  }
  return main as SFCWithInstall<T> & E;
};

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    material(app);
    components.forEach((c) => app.use(c));
  };

  return {
    install,
    version: "__VERSION__",
  };
};
