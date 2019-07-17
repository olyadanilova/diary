const path = require('path');

module.exports = {
    devtool: "source-map",
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: "/dist"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".less"],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devServer: {
        proxy: {
            '/api': {
                host: "localhost",
                protocol: 'http:',
                port: 3000
            }
        },
        // contentBase: path.join(__dirname, ''),
        port: 8080,
        hot: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /.tsx$/, // ts tsx
                use: 'babel-loader'
            },
            {
                test: /\.(css)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            url: false
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }]
            }
        ],

    }
};