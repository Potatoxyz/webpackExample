const path = require('path');
const webpack=require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: './entry/index.js',
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'index.bundle.js',
    },
    module: {
        rules: [
            { test: /\.css$/, use: [
                {loader:'style-loader'},
                {loader:'css-loader'}
            ] },
            { test: /\.ts$/, use: 'ts-loader'},
            { test: /\.js$/,exclude: /node_modules/, use: 'babel-loader'},
            {
                test: /\.scss$/,
                use: [
                {loader:'style-loader'},
                {loader:'css-loader'},
                {loader:'sass-loader'},
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                loader: 'url-loader?limit=1000000'
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new HtmlWebpackPlugin({
            title: 'Html',
            template:'entry/index.html',
            filename: 'index.html'
        }),
        new ExtractTextPlugin("entry/css/styles.css")
    ],
    devServer: {
        contentBase: "./output",//本地服务器所加载的页面所在的目录
        inline: true,//实时刷新
    }
};