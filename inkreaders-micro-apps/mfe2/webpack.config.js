const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

// Determine publicPath based on environment
const isProduction = process.env.NODE_ENV === 'production';
const publicPath = isProduction ? 'https://app.inkreaders.com/mfe2/' : 'http://localhost:3002/';

module.exports = {
  mode: isProduction ? 'production' : 'development', // Set mode based on environment
  entry: './src/index.js',
  output: {
    publicPath: publicPath, // Use dynamic publicPath
    clean: true,
  },
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'mfe2',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/Header.js',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^18.2.0',
          eager: true,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.2.0',
          eager: true,
        },
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
