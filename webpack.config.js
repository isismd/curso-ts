module.exports = {
    entry:"./src/app.ts",
    mode: "development",
    output: {
        filename:"./producao/app.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
}