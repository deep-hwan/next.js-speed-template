// seo.config.js
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  additionalLinkTags: [
    {
      rel: "shortcut icon",
      href: "/favicon.ico",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
    // iOS
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/icons/vegimap-180x180.png",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "vegimap",
    },
    // iOS
    {
      name: "apple-mobile-web-app-title",
      content: "vegimap",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "default",
    },
    {
      name: "format-detection",
      content: "telephone:no",
    },
    // Android
    {
      name: "mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "theme-color",
      content: "#FFFFFF",
    },
  ],
};
