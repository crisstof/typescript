const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//configuration pour webpack on va renvoyer un objet
module.exports = {
    resolve: {
        extensions: ['.ts', '.js']
    },
    entry: './src/main.ts', //on démarre de quel fichier
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    optimization: {
        emitOnErrors: true,
        //noEmitOnErrors: true, deprected

    },
    watch: true,  //pour regarder ce qu'il se passe
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',//va chercher index
            inject: 'body', //et l'indexé dans le body
            template: 'src/template/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',

            },
        ],
    },

    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, 'public'),
    //     },
    //     compress: true,
    //     port: 9000,
    // },
};
