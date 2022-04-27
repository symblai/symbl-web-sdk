var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


// Version for browser that builds for a simple browser script src or import into Web SDK
module.exports = {
    target: 'web',
    entry: {
        "symbl": './build-tsc/index.js',
        "symbl.min": './build-tsc/index.js',
    },
    resolve: {
        modules: ['node_modules/@symblai/api-client/src', 'node_modules']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
     performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }],
            }
        ]
    },
    stats: {
        colors: true
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
          include: /\.min\.js$/
        })]
    }
};
