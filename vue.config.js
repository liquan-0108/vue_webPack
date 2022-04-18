// 更多配置请参考 https://github.com/staven630/vue-cli4-config
const path = require("path");
const resolve = dir => path.join(__dirname, dir);
const fs = require('fs')
const postcss = require('postcss')
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i

function getLessVaribles(fileUrl, list = {}) {
  if (!fs.existsSync(fileUrl)) return {};
  let lessFile = fs.readFileSync(fileUrl, 'utf8');
  return postcss.parse(lessFile).nodes.reduce((acc, curr) => {
    acc[`${curr.name.replace(/:/, '')}`] = `${curr.params}`;
    return acc;
  }, list);
}
const modifyVars = getLessVaribles(resolve('./src/assets/less/variables.less'));

module.exports = {
    // 选项
  publicPath: IS_PROD ? "/production-sub-path/" : "/",  // 生产环境部署在子路径和开发环境部署再根路径，（根据实际填写）
  outputDir: "production-sub-path", // 打包输出到改文件，当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
  productionSourceMap: !IS_PROD, // 生产环境不需要SourceMap,可提升构建速度
  lintOnSave:false, //关闭eslint检查
  // 配置 proxy 跨域
  devServer:{
    port:8080,
    proxy: {
        '/api': {
            target: '<url>',
            ws: true,
            changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
            pathRewrite: { // 重写path，在url如何展示
              "^/api": "/"
            }
          },
    }
  },
  configureWebpack: config => {
    config.externals = {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      axios: "axios"
    };
    // 为生产环境修改配置...
    const plugins = [];
    if (IS_PROD) {
      config.optimization = {
        splitChunks:{
          automaticNameDelimiter:'~',
            cacheGroups: {
              'commons': {
                name: 'commons',
                chunks: "initial",
                minChunks: 2,
                maxInitialRequests: 5,
                minSize: 0,
                priority: 1,
                reuseExistingChunk: true,
                enforce: true
              },
              'vendors': {
                name: 'chunk-vendors', // 分包后文件名称
                test: /[\\/]node_modules[\\/]/, // 匹配规则，匹配到的文件会分到指定的包中
                chunks: 'all',  // 不管啥样的模块都匹配
                priority: 1,  // 权重值，权重高的group覆盖权重低的
                reuseExistingChunk: true, // 复用其他chunk内已拥有的模块
                enforce: true // 设置为true时忽略其他配置，一定会抽出该模块
              },
              'core-js': {
                name: 'chunk-core', // 分包后文件名称
                test: /[\\/]node_modules[\\/]_*core-js.*[\\/]/, // 匹配规则，匹配到的文件会分到指定的包中。注意npm包是_@开头的
                chunks: 'all',  // 不管啥样的模块都匹配
                priority: 2,  // 权重值，权重高的group覆盖权重低的
                reuseExistingChunk: true, // 复用其他chunk内已拥有的模块
                enforce: true // 设置为true时忽略其他配置，一定会抽出该模块
              },
              'vant': {
                name: 'chunk-vant', // 分包后文件名称
                test: /[\\/]node_modules[\\/]_*vant.*[\\/]/, // 匹配规则，匹配到的文件会分到指定的包中。注意npm包是_@开头的
                chunks: 'all',  // 不管啥样的模块都匹配
                priority: 2,  // 权重值，权重高的group覆盖权重低的
                reuseExistingChunk: true, // 复用其他chunk内已拥有的模块
                enforce: true // 设置为true时忽略其他配置，一定会抽出该模块
              },
            }
        }
      }
    }
    // 开启 gzip 压缩; 踩坑：npm安装引入的时候 一定要 --save-dev,否则会导致无法打包到指定文件
    plugins.push(
      new CompressionWebpackPlugin({
          test: productionGzipExtensions,
          filename: "[path].gz[query]",
          algorithm: "gzip",
          threshold: 10240,
          minRatio: 0.8
      })
  );
    config.plugins = [...config.plugins, ...plugins];
  },
  chainWebpack: config => {
// 添加别名
    config.resolve.alias
    .set("@", resolve("src"));
// 正式环境下，删除console和debugger
    config.optimization
      .minimize(true)
      .minimizer('terser')
      .tap(args => {
          let { terserOptions } = args[0];
          terserOptions.compress.drop_console = true;
          terserOptions.compress.drop_debugger = true;
          return args
      });
// 添加打包分析
    if (IS_PROD) {
      config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin,[{
        analyzerMode: 'static',  // 生成html形式的分析报告、生成完成后自动停止运行释放占用的端口号
        reportFilename: 'report.html', // 生成生成的html文件名
        openAnalyzer:true, // 自动打开分析报告
      }])
    }
// cdn引入静态资源
      const cdn = {
        // 访问https://unpkg.com/element-ui/lib/theme-chalk/index.css获取最新版本
        css: [],
        js: [
          "//unpkg.com/vue@2.6.10/dist/vue.min.js", // 访问https://unpkg.com/vue/dist/vue.min.js获取最新版本
          "//unpkg.com/vue-router@3.0.6/dist/vue-router.min.js",
          "//unpkg.com/vuex@3.1.1/dist/vuex.min.js",
          "//unpkg.com/axios@0.19.0/dist/axios.min.js",
        ]
      };
// html中添加cdn，别了在index.html中添加相应代码
      config.plugin("html").tap(args => {
        args[0].cdn = cdn;
        return args;
      });
  },
  css: {
    extract:IS_PROD, //  将组件中的 CSS 提取至一个独立的 CSS 文件中，与开发环境的热重载不兼容。
    //  设置为false时 会导致vant样式加载不出来
    requireModuleExtension: true,  //默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为false时将*.css文件也视作CSS Modules 模块。
    loaderOptions:{
      postcss:{
          // 这里的选项会传递给 postcss-loader
          plugins:[
            require('postcss-px-to-viewport')({viewportWidth: 375})
          ]
      },
// 为 less 提供全局样式，以及全局变量
      less:{
          // 这里的选项会传递给 less-loader
        modifyVars,
        javascriptEnabled: true,
      },
    }
  },
};
