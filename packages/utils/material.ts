import { proxyRefs } from "@vue/runtime-core";
import type { App } from "@vue/runtime-core";
import "@base/index.scss";
import MdTheme from "@/core/MdTheme";
console.log(MdTheme.data);
const init = () => {
  const material = proxyRefs({
    ripple: true,
    theming: {},
    locale: {
      startYear: 1900,
      endYear: 2099,
      dateFormat: "yyyy-MM-dd",
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      shorterDays: ["S", "M", "T", "W", "T", "F", "S"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      shorterMonths: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "Ju",
        "Ju",
        "A",
        "Se",
        "O",
        "N",
        "D",
      ],
      firstDayOfAWeek: 0,
      cancel: "Cancel",
      confirm: "Ok",
    },
    router: {
      linkActiveClass: "router-link-active",
    },
  });

  Object.defineProperties(material.theming, {
    enabled: {
      get: () => MdTheme.data.enabled,
      set(enabled: any) {
        MdTheme.data.enabled = enabled;
      },
    },
    metaColors: {
      get: () => MdTheme.data.metaColors,
      set(metaColors: any) {
        MdTheme.data.metaColors = metaColors;
      },
    },
    theme: {
      get: () => MdTheme.data.theme,
      set(theme: any) {
        MdTheme.data.theme = theme;
      },
    },
  });

  return material;
};

export default (app: App) => {
  if (!app.config.globalProperties.material) {
    app.config.globalProperties.material = init();
  }
};
