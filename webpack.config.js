var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const PORT = process.env.PORT || 5000


module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'https://stark-caverns-82377.herokuapp.com/'
        })
    }
}

module.listen(PORT, () => console.log(`Listening on 5000`))
