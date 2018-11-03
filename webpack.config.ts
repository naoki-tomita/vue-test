import { Configuration } from "webpack";
import * as path from "path";
import * as VueLoaderPlugin from "vue-loader/lib/plugin";

const config: Configuration = {
  entry: [ "./src/scripts/index.ts" ],
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
    extensions: [".ts", ".tsx", ".js", ".json", ".vue"],
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/]
        },
      },
      {
        test: /.vue$/,
        loader: "vue-loader",
      },
      {
        test: /.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ],
  },
  plugins: [ new VueLoaderPlugin() ],
};

export default config;