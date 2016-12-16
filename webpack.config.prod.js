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
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
        new HtmlWebpackPlugin({
            template: __dirname + '/client/index.html',
            filename: __dirname + '/public/index.html'
        })
    ],

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
