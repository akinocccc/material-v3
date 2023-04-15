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
  base: env === "dev" ? "/" : "/material-v3",
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "material-v3",
    repo: "akinocccc/material-v3",
    // repoLabel: "测试",
    docsDir: "./",
    docsBranch: "master",
    editLink: {
      pattern: "https://github.com/akinocccc/material-v3/docs/:path",
      text: "Edit this page on GitHub",
    },
    lastUpdated: "Update Date",
    nav: nav(),
    sidebar: {
      "/guide/": sidebarGuide(),
      "/components/": sidebarComponent(),
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/akinocccc/material-v3",
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
      link: "/components/data/avatar",
      activeMatch: "/components/",
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
      text: "Basic",
      items: [{ text: "Layout", link: "/components/basic/layout" }],
    },
    {
      text: "Data Display",
      items: [{ text: "Avatar", link: "/components/data/avatar" }],
    },
  ];
}
