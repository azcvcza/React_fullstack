let path = require('path');
module.exports = {
    entry: "./src/app.jsx",
    output: {
        path: path.resolve("./static/public"),
        filename: "app.bundle.js"
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.jsx$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        "babel-preset-react", "babel-preset-es2015"
                    ]
                }
            },

        }]
    }

}