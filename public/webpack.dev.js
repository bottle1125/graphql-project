const path = require('path');
const webpack = require('webpack');

const config = {
    entry: {
        main: `${__dirname}/main.js`
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: []
}

const hotMiddlewareScript = "webpack-hot-middleware/client?reload=true";

config.entry.main = [config.entry.main, hotMiddlewareScript];

config.plugins.unshift(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
);

module.exports = config;
