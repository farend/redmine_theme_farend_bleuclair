# Redmine用テーマ "farend bleuclair"

| :warning: | 利用しているRedmineのバージョンによってインストール方法が違います。インストール方法をご確認ください。 |
| --- | --- |

## このテーマについて

Redmine用のカスタムテーマです。

デフォルトのRedmineよりインターフェイスをモダンな見栄えにすることを意識し、青をテーマカラーに寒色系でまとめました。  
また、日本語環境でも見やすくなるようにフォントサイズや行間などを変更しています。  
メニューの位置や配色はデフォルトのテーマに近いので、既存のテーマに慣れ親しんだ方も違和感なくご利用になれます。

## 画面サンプル

- チケット一覧画面
<kbd><img src="https://github.com/farend/redmine_theme_farend_bleuclair/blob/images/issues.png" /></kbd>
- チケット表示画面
<kbd><img src="https://github.com/farend/redmine_theme_farend_bleuclair/blob/images/issue.png" /></kbd>
- チケット表示画面の履歴
<kbd><img src="https://github.com/farend/redmine_theme_farend_bleuclair/blob/images/notes.png" /></kbd>

## インストール方法

### 1: テーマが格納されたディレクトリを作成

Redmineのインストールディレクトリで以下のコマンドを実行してください。

- Redmine3.4.nより古いバージョンの場合
```bash
$ git clone -b redmine3.4 https://github.com/farend/redmine_theme_farend_bleuclair.git public/themes/bleuclair
```

- Redmine4.0.nの場合
```bash
$ git clone -b redmine4.0 https://github.com/farend/redmine_theme_farend_bleuclair.git public/themes/bleuclair
```

- Redmine4.1.nの場合
```bash
$ git clone -b redmine4.1  https://github.com/farend/redmine_theme_farend_bleuclair.git public/themes/bleuclair
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
