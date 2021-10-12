const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isBuild = argv.mode === 'production';
  const config = {
    context: path.resolve(__dirname, 'src'),
    mode: 'developer',
    entry: {
      main: './js/main.js',
    },
    output: {
      filename: 'scripts.min.js',
      path: path.resolve(__dirname, 'dist/js'),
      publicPatch: 'dist/js/',
    },
    //   resolve: {
    //     extensions: [],
    //     alias,
    //   },
    devServer: {
      port: 4200,
      hot: true,
    },
    plugins: [
      new HTMLWebpackPlugin(),
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new CssMinimizerPlugin(),
      new HtmlMinimizerPlugin(),
      new CopyPlugin({
        patterns: [
          {
            context: path.resolve(__dirname, 'dist'),
            from: '../html/**.html',
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [
            isBuild ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: './images/',
              },
            },
          ],
        },
        {
          test: /\.(ttf|woff|woff2|eot)$/,
          loader: 'file-loader',
          options: {
            outputPath: './fonts/',
          },
        },
        //   {
        //     test: /\.xml$/,
        //     use: ['xml-loader'],
        //   },
        //   {
        //     test: /\.csv$/,
        //     use: ['csv-loader'],
        //   },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
  if (isBuild) {
    config.plugins.push(
      new MiniCssExtractPlugin({ filename: 'styles.min.css' })
    );
  }
  return config;
};
