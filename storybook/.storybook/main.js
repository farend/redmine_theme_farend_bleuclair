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
    if (process.env.GH_PAGES) {
      config.module.rules.push({
        test: /.html$/,
        loader: 'string-replace-loader',
        options: {
          multiple: [
            { search: '"\/attachments\/', replace: `"/${process.env.REPOSITORY_NAME}/attachments/`, flags: 'g' },
            { search: '"\/javascripts\/', replace: `"/${process.env.REPOSITORY_NAME}/javascripts/`, flags: 'g' },
            { search: '"\/images\/', replace: `"/${process.env.REPOSITORY_NAME}/images/`, flags: 'g' },
          ]
        },
      });
    }
    return config
  },
}
