const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const getPostCSSConfig = () => {
    return () => {
        const plugins = [
            require('postcss-inline-svg')({
                removeFill: false
            })
        ];

        plugins.push(
            require('autoprefixer')({
                browsers: ['>5%', 'last 2 versions']
            })
        );

        return plugins;
    };
};
const cssLoaders = [
    'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]',
    {
        loader: 'postcss-loader',
        options: {
            plugins: getPostCSSConfig()
        }
    }
];
const BASE64_LIMIT = 10000;
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
            }, {
                test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[hash:6].[ext]',
                        limit: BASE64_LIMIT
                    } 
                }
            }, {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: cssLoaders
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css", {
            disabled: true
        }),
    ]
}

const hotMiddlewareScript = "webpack-hot-middleware/client?reload=true";

config.entry.main = [config.entry.main, hotMiddlewareScript];

config.plugins.unshift(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
);

module.exports = config;
