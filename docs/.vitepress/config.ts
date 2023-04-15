import {
  componentPreview,
  containerPreview,
} from "@vitepress-demo-preview/plugin";

const { argv } = process;
const env = argv[argv.length - 1];

module.exports = {
  title: "Material Vue3",
  description: "Make it interesting",
  lang: "en-US",
  cleanUrls: "without-subfolders",
  base: env === "dev" ? "/" : "/material-vue3",
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Material-Vue3",
    repo: "akinocccc/material-vue3",
    // repoLabel: "测试",
    docsDir: "./",
    docsBranch: "master",
    editLink: {
      pattern: "https://github.com/akinocccc/material-vue3/docs/:path",
      text: "Edit this page on GitHub",
    },
    lastUpdated: "Update Date",
    nav: nav(),
    sidebar: {
      "/guide/": sidebarGuide(),
      "/examples/": sidebarComponent(),
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/akinocccc/material-vue3",
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022 Akino Chen",
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
};

function nav() {
  return [
    {
      text: "Guide",
      link: "/guide/introduction",
      activeMatch: "/guide/",
    },
    {
      text: "Components",
      link: "/examples/data/avatar",
      activeMatch: "/examples/",
    },
  ];
}

function sidebarGuide() {
  return [
    {
      text: "Guide",
      items: [
        {
          text: "What is xxx UI?",
          link: "/guide/introduction",
        },
      ],
    },
  ];
}

function sidebarComponent() {
  return [
    {
      text: "Data Display",
      items: [{ text: "Avatar", link: "/examples/data/avatar" }],
    },
  ];
}
