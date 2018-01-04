const path = require('path');
const webpack=require('webpack');
module.exports = {
    entry: './entry/index.js',
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'index.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [ "html-loader" ]
            },
            { test: /\.css$/, use: [
                {loader:'style-loader'},
                {loader:'css-loader'}
            ] },
            { test: /\.ts$/, use: 'ts-loader'},
            { test: /\.js$/, use: 'babel-loader'},
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
        new webpack.HotModuleReplacementPlugin()//js数据刷新
    ],
    devServer: {
        contentBase: "./output",//本地服务器所加载的页面所在的目录
        inline: true,//实时刷新
        hot:true//js数据刷新
    }
};