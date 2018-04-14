const path = require('path');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/app.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
    publicPath: "/build"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  }
}

// const path = require('path');
// const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const bundleExtractPlugin = new ExtractTextPlugin({
//   filename: 'build/bundle.css',
// });

// const vendorsExtractPlugin = new ExtractTextPlugin({
//   filename: 'css/vendors.css',
// });

// module.exports = (env) => {
//   return {
//     name: 'client',
//     target: 'web',
//     entry: ['./src/app.js'],
//     output: {
//       path: path.resolve(__dirname, 'build'),
//       filename: 'js/app.bundle.js',
//     },
//     module: {
//       rules: [
//         {
//           test: [/.js$|.jsx$/],
//           exclude: [/node_modules/],
//           loader: 'babel-loader',
//           options: {
//             plugins: ['transform-runtime'],
//             presets: ['es2015'],
//           },
//         },
//         {
//           test: /.scss$/,
//           exclude: [/node_modules/],
//           use: bundleExtractPlugin.extract({
//             use: ['css-loader', 'sass-loader'],
//           }),
//         },
//         {
//           test: /.css$/,
//           exclude: [/node_modules/],
//           use: vendorsExtractPlugin.extract({
//             use: ['css-loader'],
//           }),
//         },
//       ],
//     },
//     stats: {
//       colors: true,
//     },
//     devtool: 'source-map',
//     plugins: [
//       new webpack.DefinePlugin({
//         SOCKET_URL: JSON.stringify(process.env.SOCKET_URL ? process.env.SOCKET_URL : 'wss://localhost:3000'),
//       }),
//       bundleExtractPlugin,
//       vendorsExtractPlugin,
//     ],
//   };
// };

