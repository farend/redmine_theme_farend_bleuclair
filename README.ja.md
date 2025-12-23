# Redmine用テーマ "farend bleuclair"

| :warning: | 利用しているRedmineのバージョンによってインストール方法が違います。インストール方法をご確認ください。 |
| --- | --- |

## このテーマについて

Redmine用のカスタムテーマです。

デフォルトのRedmineよりインターフェイスをモダンな見栄えにすることを意識し、青をテーマカラーに寒色系でまとめました。
また、日本語環境でも見やすくなるようにフォントサイズや行間などを変更しています。
メニューの位置や配色はデフォルトのテーマに近いので、既存のテーマに慣れ親しんだ方も違和感なくご利用になれます。

このテーマは、Redmimeのクラウドサービス [My Redmine](https://hosting.redmine.jp/) のサービス提供用に開発し、OSSとして公開したものです。

[<img src="https://www.farend.co.jp/files/myredmine-logo/hz/myredmine-logo-hz.png" width="250">](https://hosting.redmine.jp/)

## 画面サンプル

Storybook([redmine-theme/storybook](https://github.com/redmine-theme/storybook)): https://farend.github.io/redmine_theme_farend_bleuclair

- チケット一覧画面
<kbd><img src="https://github.com/farend/redmine_theme_farend_bleuclair/blob/images/issues-6.0.png" /></kbd>

## インストール方法

### 1: テーマが格納されたディレクトリを作成

[Releases](https://github.com/farend/redmine_theme_farend_bleuclair/releases) より取得してテーマディレクトリに配置してください。テーマ配置後にRedmineの再起動が必要です。

Gitコマンドが利用できる場合は、バージョンのタグを指定して直接配置できます。

```
$ git clone -b [バージョンのタグ（例: v2.0.0）] > https://github.com/farend/redmine_theme_farend_bleuclair.git themes/bleuclair
```

Gitコマンドが利用できない場合は、[Releases](https://github.com/farend/redmine_theme_farend_bleuclair/releases) よりzipファイルまたはtar.gzファイルをダウンロードし、展開して配置してください。

#### Redmine 6.0 の場合

`redmine6.0`タグから取得して `themes/bleuclair` ディレクトリに配置してください。

```bash
$ git clone -b redmine6.0 https://github.com/farend/redmine_theme_farend_bleuclair.git themes/bleuclair
```

#### Redmine 5.0, 5.1 の場合

redmine5.1タグから取得して配置してください。

> [!Note]
> Redmine 5.1 以前のテーマの配置ディレクトリはpublic/themes/bleuclairです。

```bash
$ git clone -b redmine5.1 https://github.com/farend/redmine_theme_farend_bleuclair.git public/themes/bleuclair
```

### 2: テーマの設定を変更

Redmineの管理画面で新しいテーマを利用する設定を行います。

「管理」→「設定」→「表示」画面内の項目「テーマ」で「Bleuclair」を選択、画面最下部の「保存」ボタンをクリックしてください。

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

## 著作者

[ファーエンドテクノロジー株式会社](https://www.farend.co.jp/)
