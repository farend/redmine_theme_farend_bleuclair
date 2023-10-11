import '../node_modules/@redmine-theme/storybook/public/stylesheets/jquery/jquery-ui-1.13.2.css'
import '../node_modules/@redmine-theme/storybook/public/stylesheets/application.css'
import '../node_modules/@redmine-theme/storybook/public/stylesheets/responsive.css'
// for bleuclair theme
import '../../stylesheets/application.css'
import '../../stylesheets/theme.css'
import '../../javascripts/theme.js'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['Layout', 'Pages', 'Components', '*'],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    hideNoControlsWarning: true,
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: 'white',
      },
    ],
  },
}
