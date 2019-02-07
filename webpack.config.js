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
                exclude: /node_modules/,
                use: "ts-loader",
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
