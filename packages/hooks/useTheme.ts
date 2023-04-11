import { computed, onMounted, ref, watch } from "vue";

let msColor: any = null;
let themeColor: any = null;
let maskIcon: any = null;

const useTheme = (mdTheme?: string) => {
  const prefix = ref("md-theme-");
  const theme = ref("default");
  const enabled = ref(true);
  const metaColors = ref(false);

  const getAncestorTheme = (theme?: string) => {
    if (theme) {
      const getParentThemeName = (parent: any): any => {
        if (parent) {
          const { mdTheme, $parent } = parent;

          if (mdTheme && mdTheme !== theme) {
            return mdTheme;
          }

          return getParentThemeName($parent);
        }

        return theme;
      };
      // return getParentThemeName(component.$parent);
    }
    return null;
  };
  const getThemeName = (themeProp?: string) => {
    const themeName = themeProp ?? theme.value;

    return prefix.value + themeName;
  };
  const setMicrosoftColors = (primaryColor: string) => {
    if (msColor) {
      msColor.setAttribute("content", primaryColor);
    }
  };
  const setThemeColors = (primaryColor: string) => {
    if (themeColor) {
      themeColor.setAttribute("content", primaryColor);
    }
  };
  const setMaskColors = (primaryColor?: string) => {
    if (maskIcon) {
      maskIcon.setAttribute("color", primaryColor);
    }
  };
  const setHtmlMetaColors = (themeName?: string) => {
    let primaryColor = "#fff";

    if (themeName) {
      const computedStyle = window.getComputedStyle(document.documentElement);

      primaryColor = computedStyle.getPropertyValue(`--${themeName}-primary`);
    }

    if (primaryColor) {
      setMicrosoftColors(primaryColor);
      setThemeColors(primaryColor);
      setMaskColors(primaryColor);
    }
  };

  const themeTarget = computed(() => document.documentElement);
  const fullThemeName = computed(() => getThemeName());
  const $mdActiveTheme = computed(() => {
    if (enabled.value && mdTheme) {
      return getThemeName(mdTheme);
    }
    return getThemeName();
  });

  watch(enabled, (newValue: boolean) => {
    if (themeTarget.value) {
      if (newValue) {
        themeTarget.value.classList.add(fullThemeName.value);
        metaColors.value && setHtmlMetaColors(fullThemeName.value);
      } else {
        themeTarget.value.classList.remove(fullThemeName.value);
        metaColors.value && setHtmlMetaColors();
      }
    }
  });
  watch(theme, (newTheme: string) => {
    newTheme = getThemeName(newTheme);

    themeTarget.value.classList.remove(getThemeName(theme.value));
    themeTarget.value.classList.add(newTheme);

    if (metaColors.value) {
      setHtmlMetaColors(newTheme);
    }
  });

  onMounted(() => {
    msColor = document.querySelector('[name="msapplication-TileColor"]');
    themeColor = document.querySelector('[name="theme-color"]');
    maskIcon = document.querySelector('[rel="mask-icon"]');

    if (enabled.value && metaColors.value) {
      window.addEventListener("load", () => {
        setHtmlMetaColors(fullThemeName.value);
      });
    }
  });

  return {
    prefix,
    theme,
    enabled,
    metaColors,
    themeTarget,
    fullThemeName,
    $mdActiveTheme,
    getAncestorTheme,
    getThemeName,
  };
};

export { useTheme as default };
