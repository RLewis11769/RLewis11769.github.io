const path = require('path');
const shared = require('./webpack.shared');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(shared, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contentHash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css into files
          'css-loader', // Turn css into commonjs
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|pdf|webp)$/i,
        use: [
          {
              loader: 'url-loader',
              options: {
                  limit: 10000,
                  name: '[name].[contenthash].[ext]'
              }
          },
          {
              loader:'image-webpack-loader',
              options: {
                  bypassOnDebug: true,
              }
           }
        ]
      },
      {
        test: /\.(ico)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    // Automatically creates index.html file
    new HtmlWebpackPlugin({
      template: './src/template.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    // Cleans folder before building
    new CleanWebpackPlugin(),
    // Plugin to minify css
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css'
    })
  ],
  optimization: {
    minimizer: [
      // Minify CSS files
      new CssMinimizerPlugin(),
      // Minify HTML files
      new HtmlWebpackPlugin({
        template: './src/template.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      // Minify JS files - don't typically have to, but CSS minifying overrides
      new TerserPlugin({
        parallel: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        }
      }
    }
  }
});
