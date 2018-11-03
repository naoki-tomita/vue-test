# Vueの単一コンポーネントとTSを共存させるメモ

* `xxx.d.ts` を用意して、以下のような型定義を書いておく。
  ```ts
  declare module "*.vue" {
    import Vue, { VueConstructor } from "vue";
    export default Vue;
  }
  ```
* `webpack.config.ts` で `vue-loader` を使うようにする。
* `webpack.config.ts` の `ts-loader` の設定で、オプションに `appendTsSuffixTo: [/\.vue$/]` というのを書いておく。
  * これでどうやら `.vue` ファイルをビルドするときに、 `ts-loader` にもかけてくれるっぽい。
* class構文を使うなら、 `vue-property-decorator` を使うとよい。知らんけど、無いよりあったほうがよさげ。
* styleを使うなら、少なくとも、 `vue-style-loader` と `css-loader` を `webpack.config` で呼び出すようにしておく。拡張子は `.css` じゃないけど、なんか `.css` 用に書いておいたらうごいた。わけわからん

# Vueやってみた感想

* あんまり型の恩恵が感じられないような気がしませんかね
  * Reactと比べると、型の恩恵が少ない
* 単一ファイルコンポーネントの説明が少なすぎて死ぬかと思った
  * TSと組み合わせるとさらに情報なくてめっちゃ困った
  * vue-cli で構築したら瞬殺なのかもしれないけど、負けた気がする