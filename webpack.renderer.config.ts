import type { Configuration } from "webpack"

import path from "path"
import { rules } from "./webpack.rules"
import { plugins } from "./webpack.plugins"

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
})

rules.push({
  test: /\.less$/,
  use: [
    { loader: "style-loader" },
    { loader: "css-loader" },
    { loader: "less-loader" },
  ],
})

rules.push({
  test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
  type: "asset",
  parser: {
    dataUrlCondition: {
      maxSize: 20 * 1024, // 20kb
    },
  },
})

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
    alias: {
      "@": path.join(__dirname, "./src"),
    },
  },
}
