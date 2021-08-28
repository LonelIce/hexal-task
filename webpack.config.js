const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[contenthash].js",
        assetModuleFilename: "[name][ext]",
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        port: 5001,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {test: /\.s[ac]ss$/i, use: ["style-loader", "css-loader", "sass-loader",],},
            {test: /\.(svg|ico|jpg|png)$/, type: 'asset/resource'},
            {
                test: /\.js$/,
                exclude: '/node_modules',
                use: {loader: "babel-loader", options: {presets: ['@babel/preset-env']}}
            },
            {test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource',},
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
                filename: "index.html",// как назовем итог компиляции
                template: path.resolve(__dirname, 'src/temp.html')// откуда берем наполненость
            }
        )
    ]

};