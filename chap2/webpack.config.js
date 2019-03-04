let path = require('path');
let webpack = require('webpack')
module.exports = {
    entry: "./src/app.jsx",

    output: {
        path: path.resolve("./static/public"),
        //filename: 'app.bundle.js'

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
    },
    optimization: {
        splitChunks: {

            cacheGroups: {
                vendors: {
                    name: 'app',
                    chunks: 'all',
                    reuseExistingChunk: true,
                    priority: 1,
                    enforce: true,
                    filename: 'app.bundle.js',
                    test: /[\\/]src[\\/]/,
                },
                secondary: {
                    name: 'vendors',
                    chunks: 'all',
                    priority: 2,
                    enforce: true,
                    filename: 'split-vendor.js',
                    test: /[\\/]node_modules[\\/]/,
                }
            }
        }
    }


}