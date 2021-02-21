const path = require("path");
const nodeExternal = require("webpack-node-externals");
module.exports = {
  mode: "development",
  target: "node",
  entry: path.resolve(__dirname, "./server/index.js"), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
  output: {
    path: path.resolve(__dirname, "./server-build"), // 输出的路径
    filename: "server-bundle.js", // 打包后文件
  },
  externals: [nodeExternal()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
