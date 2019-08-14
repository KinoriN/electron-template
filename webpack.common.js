const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        App:'./src/App/index.js',
        App2:'./src/App2/index.js',
    },
    output: {
        filename: '[name]/index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            filename: "App/index.html",
            template: "./src/App/public/index.html",
            thunks:['App']
        }),
        new HtmlWebPackPlugin({
            filename: "App2/index.html",
            template: "./src/App2/public/index.html",
            thunks:['App2']
        }),

    ]
};