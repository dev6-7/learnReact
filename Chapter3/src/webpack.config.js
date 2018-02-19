const path = require('path')
/*const webpack = require('webpack');*/
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProd = false

module.exports = {
    entry: {
        app: ['babel-polyfill', './components/main.js']
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: `[name].js`,
    },

    // devtool: 'source-map',

    plugins: [
        // Вынос CSS/LESS в отдельный файл
        new ExtractTextPlugin(`[name].css`),

        /*isProd && new webpack.optimize.AggressiveMergingPlugin(),
        isProd && new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(isProd ? 'production' : 'development')
            },
            PRODUCTION: isProd,
            DEVELOPMENT: !isProd
        })*/
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        [ 'es2015', { 'modules': false } ],
                        'stage-0', 'react'
                    ]
                }
            },
            {
                test: /\.css$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'autoprefixer-loader']
                })
            },
            {
                test: /\.less$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'autoprefixer-loader', 'less-loader?noIeCompat']
                })
            },
        ]
    },
}
