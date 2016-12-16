var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    entry: {
        index: __dirname + '/client/index.js'
    },

    output: {
        path: __dirname + '/public',
        filename: '[name].js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          template: __dirname + '/client/index.html',
        })
    ],

    devServer: {
        //inline: true,
        port: 7777,
        hot: true,
        contentBase: __dirname + '/public'
    },

    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /(node_modules|bower_components)/,
            query: {
                cacheDirectory: true,
                presets: ['es2015']
            }
        }]
    }
};
