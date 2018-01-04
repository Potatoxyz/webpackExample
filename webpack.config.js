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
            { test: /\.css$/, use: 'css-loader' },
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
    ]
};