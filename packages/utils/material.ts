import { proxyRefs } from "@vue/runtime-core";
import type { App } from "@vue/runtime-core";
// import "@material/base/index.scss";
import useTheme from "@material/hooks/useTheme";

const { enabled, metaColors, theme } = useTheme();

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
      get: () => enabled.value,
      set(newValue: boolean) {
        enabled.value = newValue;
      },
    },
    metaColors: {
      get: () => metaColors.value,
      set(newValue: boolean) {
        metaColors.value = newValue;
      },
    },
    theme: {
      get: () => theme.value,
      set(newTheme: string) {
        theme.value = newTheme;
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
