const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');


module.exports = merge(common, {
    mode:"development",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port:8082
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
});