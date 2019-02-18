const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".ts"]
  },
  entry: {
    polyfills: "./deps/polyfills.ts",
    main: "./apps/main.ts"
  },
  output: {
    path: path.resolve(__dirname, "dist"), // output directory
    filename: "[name].js" // name of the generated bundle
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.ts$/,
        loader: ["awesome-typescript-loader", "angular2-template-loader"]
      },
      {
        test: /\.ts$/,
        enforce: "pre",
        loader: "tslint-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.scss$/,
        loader: ["raw-loader", "sass-loader?sourceMap"]
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          name: "vendor",
          test: "vendor"
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: "body"
    }),

    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)fesm5/,
      path.resolve(__dirname, "src"),
      {}
    ),
    new FilterWarningsPlugin({
      exclude: /System.import/
    })
  ],
  devtool: "source-map",
  devServer: {
    historyApiFallback: true
  }
};
