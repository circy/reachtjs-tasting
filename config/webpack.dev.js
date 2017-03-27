const path = require('path');

module.exports = {
    entry: ["./app/main.tsx"],

    output: {
        path: path.resolve(__dirname,'..', "build"),
        filename: "bundle.js"
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    }
};