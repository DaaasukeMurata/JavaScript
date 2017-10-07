module.exports = {
  // build対象のディレクトリ
  context: __dirname + '/src',
  // 起点となるjsファイル。importしているファイルは自動で読み込まれる
  entry: "./entry.js",
  output: {
    path: __dirname + '/www/js',
    // 出力ファイル名
    filename: 'bundle.js'
  },
  devtool: 'source-map'
  // module: {
  //   // loaderの指定
  //   loaders: {
  //     test: /\.js$/,
  //     exclude: /node_modules/,
  //     loader: "babel-loader",
  //     query: {
  //       presets: ['es2015']
  //     }
  //   }
  // }
};
