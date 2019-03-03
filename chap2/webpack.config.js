let path = require('path');
module.exports = {
    entry: "./static/app.js",
    output: {
        path: path.resolve("./static/public"),
        filename: "bundle.js"
    },
    mode: 'development',
    resolve: {
        alias: {
            components: path.resolve(__dirname + "/src/app.js")
        },

    }
}