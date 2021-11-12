const { name } = require("./package");

module.exports = {
  lintOnSave: false,
  devServer: {
    port: 4000,
    headers: {
      "Access-Control-Allow-Origin": "*", //配置子被访问时候允许跨域
    },
  },
  configureWebpack: {
    output: {
      library: `vueApp`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
