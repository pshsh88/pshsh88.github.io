var path = require('path');

module.exports = {
    mode: 'development',

    entry: './src/index.js',

    output: {
        path: __dirname + '/',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/'
    },

    module: {
        rules: [
          {
            test: /\.js$/,
            include: [
              path.resolve(__dirname, 'src')
            ],
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react', '@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-class-properties']
              },
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader','css-loader']
          }
        ]
      },
};