# Redmine theme "farend bleuclair"

| :warning: | The installation method differs depending on the version of Redmine you are using. Please check the "Install". |
| --- | --- |

[日本語README(Japanese README)](README.ja.md)

## Description

Custom theme for Redmine.

I created a theme using Cool Colors with an awareness of making the interface look more modern than the default Redmine.
The position and color scheme of the menu are close to the default theme, so even those who are familiar with existing themes can use it without any discomfort.

Bleuclair theme is used as standard for [RedMica - the future Redmine you can get today](https://www.farend.co.jp/products/redmica/) (RedMica is yet another distribution of Redmine)

## Demo

Storybook([redmine-theme/storybook](https://github.com/redmine-theme/storybook)): https://farend.github.io/redmine_theme_farend_bleuclair

- Issue list
<kbd><img src="https://github.com/farend/redmine_theme_farend_bleuclair/blob/images/issues-4.2.png" /></kbd>

## Install

### 1: Create a directory containing themes

**In the environment where Git can be used:**

Execute the following command in the Redmine installation directory.

- For versions older than Redmine 3.4
```bash
$ git clone -b redmine3.4 https://github.com/farend/redmine_theme_farend_bleuclair.git public/themes/bleuclair
```

- For Redmine 4.0
```bash
$ git clone -b redmine4.0 https://github.com/farend/redmine_theme_farend_bleuclair.git public/themes/bleuclair
```

- For Redmine 4.1
```bash
$ git clone -b redmine4.1 https://github.com/farend/redmine_theme_farend_bleuclair.git public/themes/bleuclair
```

- For Redmine 4.2
```bash
$ git clone -b redmine4.2 https://github.com/farend/redmine_theme_farend_bleuclair.git public/themes/bleuclair
```

- For Redmine 5.0 or later
```bash
$ git clone https://github.com/farend/redmine_theme_farend_bleuclair.git public/themes/bleuclair
```

**In an environment where Git is not available:**

Check the https://github.com/farend/redmine_theme_farend_bleuclair/releases, download and unzip the zip file or tar.gz file of the version compatible with your Redmine, and place it in the public/themes directory of Redmine.

### 2: Change theme settings

Set to use the new theme on the Administration page of Redmine.

"Administration" => "Settings" => "Display tab" => Select "Bleuclair" in the item "Theme" and click the "Save" button at the bottom of the page.

## Development

```bash
$ cd redmine/public/themes/beuclair
$ npm install
$ npm run start:dev
$ # debug
$ npm run build
```

## LICENSE

GNU GPL v2  
https://github.com/farend/redmine_theme_farend_bleuclair/blob/master/LICENSE

---

Web fonts in [webfonts](src/webfonts) uses the following library:  
Font Awesome Free 5.13.0 by @fontawesome - https://fontawesome.com  
License - https://fontawesome.com/license/free (Fonts: SIL OFL 1.1 License)

The icon [search.svg](src/images/search.svg) uses svg files from the following library:  
Font Awesome Free 5.13.0 by @fontawesome - https://fontawesome.com  
License - https://fontawesome.com/license/free (Icons: CC BY 4.0 License)

## Author

[Far End Technologies Corporation](https://www.farend.co.jp/)
