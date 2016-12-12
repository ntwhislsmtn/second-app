module.exports = {
  cache: {
    cacheId: "second-app",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "second-app",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
