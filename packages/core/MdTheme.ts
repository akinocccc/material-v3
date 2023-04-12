import {
  // computed,
  createApp,
  proxyRefs,
  // defineComponent,
  // onMounted,
  // ref,
  // watch,
} from "vue";

let msColor: Element | null = null;
let themeColor: Element | null = null;
let maskIcon: Element | null = null;

// export default createApp(
//   defineComponent({
//     setup() {
//       const prefix = ref("md-theme-");
//       const theme = ref("default");
//       const enabled = ref(true);
//       const metaColors = ref(false);

//       const getThemeName = (newTheme?: any) => {
//         const themeName = newTheme || theme.value;

//         return prefix.value + themeName;
//       };
//       const setMicrosoftColors = (primaryColor: string) => {
//         if (msColor) {
//           msColor.setAttribute("content", primaryColor);
//         }
//       };
//       const setThemeColors = (primaryColor: string) => {
//         if (themeColor) {
//           themeColor.setAttribute("content", primaryColor);
//         }
//       };
//       const setMaskColors = (primaryColor: string) => {
//         if (maskIcon) {
//           maskIcon.setAttribute("color", primaryColor);
//         }
//       };
//       const setHtmlMetaColors = (themeName?: any) => {
//         let primaryColor = "#fff";

//         if (themeName) {
//           const computedStyle = window.getComputedStyle(
//             document.documentElement
//           );

//           primaryColor = computedStyle.getPropertyValue(
//             `--${themeName}-primary`
//           );
//         }

//         if (primaryColor) {
//           setMicrosoftColors(primaryColor);
//           setThemeColors(primaryColor);
//           setMaskColors(primaryColor);
//         }
//       };

//       const themeTarget = computed(() => {
//         return document.documentElement;
//       });
//       const fullThemeName = computed(() => {
//         return getThemeName();
//       });

//       watch(enabled, (enabled: boolean) => {
//         if (themeTarget) {
//           if (enabled) {
//             themeTarget.value.classList.add(fullThemeName.value);
//             metaColors.value && setHtmlMetaColors(fullThemeName.value);
//           } else {
//             themeTarget.value.classList.remove(fullThemeName.value);
//             metaColors.value && setHtmlMetaColors();
//           }
//         }
//       });
//       watch(theme, (newTheme) => {
//         newTheme = getThemeName(newTheme);

//         themeTarget.value.classList.remove(getThemeName(theme.value));
//         themeTarget.value.classList.add(newTheme);

//         if (metaColors.value) {
//           setHtmlMetaColors(newTheme);
//         }
//       });
//       watch(metaColors, (newMetaColors) => {
//         if (newMetaColors) {
//           setHtmlMetaColors(fullThemeName.value);
//         } else {
//           setHtmlMetaColors();
//         }
//       });

//       onMounted(() => {
//         msColor = document.querySelector('[name="msapplication-TileColor"]');
//         themeColor = document.querySelector('[name="theme-color"]');
//         maskIcon = document.querySelector('[rel="mask-icon"]');

//         if (enabled.value && metaColors.value) {
//           window.addEventListener("load", () => {
//             setHtmlMetaColors(fullThemeName.value);
//           });
//         }
//       });

//       defineExpose({
//         metaColors,
//         theme,
//         enabled,
//       });
//     },
//   })
// );
type Data = {
  prefix: string;
  theme: string;
  enabled: boolean;
  metaColors: boolean;
  [key: string]: any;
};
const data = new Proxy(
  {
    prefix: "md-theme-",
    theme: "default",
    enabled: true,
    metaColors: false,
  } as Data,
  {
    get(target, prop: string) {
      return target[prop];
    },
    set(target, prop: string, value) {
      const themeTarget = getThemeTarget();
      if (prop === "enabled") {
        if (themeTarget) {
          if (target.enabled) {
            themeTarget.classList.add(getThemeName());
            target.metaColors && setHtmlMetaColors(getThemeName());
          } else {
            themeTarget.classList.remove(getThemeName());
            target.metaColors && setHtmlMetaColors();
          }
        }
      } else if (prop === "theme") {
        value = getThemeName(value);

        themeTarget.classList.remove(getThemeName(target.theme));
        themeTarget.classList.add(value);

        if (target.metaColors) {
          setHtmlMetaColors(value);
        }
      } else if (prop === "metaColors") {
        if (target.meta) {
          setHtmlMetaColors(getThemeName());
        } else {
          setHtmlMetaColors();
        }
      }
      target[prop] = value;
      return true;
    },
  }
);

const getThemeTarget = () => {
  return document.documentElement;
};

const getThemeName = (newTheme?: any) => {
  const themeName = newTheme || data.theme;

  return data.prefix + themeName;
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
const setMaskColors = (primaryColor: string) => {
  if (maskIcon) {
    maskIcon.setAttribute("color", primaryColor);
  }
};
const setHtmlMetaColors = (themeName?: any) => {
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

export default {
  data
  // mounted() {
  //   msColor = document.querySelector('[name="msapplication-TileColor"]');
  //   themeColor = document.querySelector('[name="theme-color"]');
  //   maskIcon = document.querySelector('[rel="mask-icon"]');
  //   if (this.enabled && this.metaColors) {
  //     window.addEventListener("load", () => {
  //       this.setHtmlMetaColors(this.fullThemeName);
  //     });
  //   }
  // },
};
