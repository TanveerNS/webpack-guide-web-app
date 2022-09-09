const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
     filename: 'bundle.[contenthash].js',
     path: path.resolve(__dirname, './dist'),
     publicPath: ''
    //  publicPath: 'dist/'
    },
    mode:'none',
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.hbs$/,
                use:[
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack app generated title',
            // filename: 'index.html',
            template: 'src/index.hbs',
            description: 'some description about app',
            // meta:{
            //     description: 'some description about app'
            // }
        }),


        // new CleanWebpackPlugin({
        //     cleanOnceBeforeBuildPatterns: [
        //         '**/*',
        //         path.join(process.cwd(), 'build/**/*')
        //     ]
        // }),
    ]
  };