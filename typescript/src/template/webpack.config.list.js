const HtmlWebpackPlugin = require('html-webpack-plugin');
const { NoEmitOnErrorsPlugin } = require('webpack');
const path = require('path');
module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    entry: './src/main.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    optimization: {
        noEmitOnErrors: true
    },
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: './src/template/index.html'
        }),
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },

};


