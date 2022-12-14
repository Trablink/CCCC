const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/client/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
    assetModuleFilename: '[name][ext]',
    filename: 'bundle.js',
  },
  // devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    port: 8080,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
    host: 'localhost',
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Cohort Coding Crew Calculator',
      filename: 'index.html',
      template: 'src/client/template.html',
    }),
  ],
  // resolve: {
  //   fallback: {
  //     url: require.resolve('url/'),
  //     path: require.resolve('path-browserify'),
  //     util: require.resolve('util/'),
  //     stream: require.resolve('stream-browserify'),
  //     buffer: require.resolve('buffer/'),
  //   },
  // },
};
