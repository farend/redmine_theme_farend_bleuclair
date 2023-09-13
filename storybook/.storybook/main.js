module.exports = {
  "stories": [
    "../node_modules/@redmine-theme/storybook/src/stories/**/*.stories.mdx",
    "../node_modules/@redmine-theme/storybook/src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
  ],
  staticDirs: [
    '../node_modules/@redmine-theme/storybook/public'
  ],
  "framework": "@storybook/html",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /.css$/,
      loader: 'string-replace-loader',
      options: {
        search: '../../../stylesheets/',
        replace: '../storybook/node_modules/@redmine-theme/storybook/public/stylesheets/',
      },
    })
    return config
  },
}
