# Redmine theme "farend bleuclair"

| :warning: | The installation method differs depending on the version of Redmine you are using. Please check the "Install". |
| --- | --- |

[日本語README(Japanese README)](README.ja.md)

## Description

Custom theme for Redmine.

I created a theme using Cool Colors with an awareness of making the interface look more modern than the default Redmine.
The position and color scheme of the menu are close to the default theme, so even those who are familiar with existing themes can use it without any discomfort.

Bleuclair theme is used as standard for [RedMica - the future Redmine you can get today](https://www.farend.co.jp/products/redmica/) (RedMica is yet another distribution of Redmine)

The theme was originally developed for the cloud-based Redmine service [My Redmine](https://www.redminecloud.net/), and was later released as open source.

[<img src="https://www.farend.co.jp/files/myredmine-logo/hz/myredmine-logo-hz.png" width="250">](https://www.redminecloud.net/)

## Demo

Storybook([redmine-theme/storybook](https://github.com/redmine-theme/storybook)): https://farend.github.io/redmine_theme_farend_bleuclair

- Issue list
<kbd><img src="https://github.com/farend/redmine_theme_farend_bleuclair/blob/images/issues-6.0.png" /></kbd>

## Install

### 1: Create the directory to store the theme

Download the theme from [Releases](https://github.com/farend/redmine_theme_farend_bleuclair/releases) and place it in your Redmine theme directory. After placing the theme, you need to restart Redmine.

If you can use Git, you can clone the repository directly by specifying the version tag.

```
$ git clone -b [version tag (e.g. v1.1.0)] https://github.com/farend/redmine_theme_farend_bleuclair.git themes/bleuclair
```

If you cannot use Git, download the zip or tar.gz file from [Releases](https://github.com/farend/redmine_theme_farend_bleuclair/releases), extract it, and place it in the theme directory.

#### For Redmine 5.0, 5.1

Clone from the `redmine5.1` branch and place it in the directory.

> [!Note]
> For Redmine 5.1 and earlier, the theme directory is `public/themes/bleuclair`.

```bash
$ git clone -b redmine5.1 https://github.com/farend/redmine_theme_farend_bleuclair.git public/themes/bleuclair
```

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
