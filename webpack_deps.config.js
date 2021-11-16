var path = require("path");

module.exports = {
    mode: "none",
    entry: "./src/nav2d.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "nav2d_deps.min.js",
        library: "nav2d",
        libraryTarget: "umd",
        globalObject: `(typeof self !== 'undefined' ? self : this)`,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    devtool: "source-map",
};
