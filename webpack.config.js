var path = require("path");
var webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    watch: true,
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "assets/js"),
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                // exclude: /node_modules/,
                use: "ts-loader",
            },
            {
                test: /\.(css)$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                ],
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "file-loader",
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: "file-loader",
            },
        ]
    },
    externals: {
        // "react": "React",
        // "react-dom": "ReactDOM",
    },
    resolve: {
        //modules: [path.resolve(__dirname, "src"), "node_modules"],
        extensions: [".ts", ".tsx", ".js"],
    },
    devServer: {
        contentBase: path.join(__dirname, "assets"),
        watchContentBase: true,
        open: true,
    }
}
