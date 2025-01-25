const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'x-components.umd.js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist'), // 打包后的文件目录：根目录/dist/
    library: 'xcomponents', // 导出的UMD js会在window挂rui，即可以访问window.rui
    libraryTarget: 'umd', // 导出库为UMD形式
  },
  resolve: {
    // webpack 默认只处理js、jsx等js代码
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  externals: {
    // 打包过程遇到以下依赖导入，不会打包对应库代码，而是调用window上的React和ReactDOM
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
