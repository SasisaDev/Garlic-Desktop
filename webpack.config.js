const path = require('path');

module.exports = {
    resolve: {
        modules: [],
        fallback: {
          "fs": false,
          "tls": false,
          "net": false,
          "path": false,
          "zlib": false,
          "http": false,
          "https": false,
          "stream": false,
          "crypto": false,
          "express": false,
          "react": path.resolve(__dirname, 'node_modules/react'),
          "react-dom": path.resolve(__dirname, 'node_modules/react-dom'),
          "electron": path.resolve(__dirname, 'node_modules/electron'),
          "electron-interactions": path.resolve(__dirname, 'node_modules/electron-interactions'),
          "three": path.resolve(__dirname, 'node_modules/three'),
          "sharp": path.resolve(__dirname, 'node_modules/sharp'),
          "bootstrap": path.resolve(__dirname, 'node_modules/bootstrap/'),
          "redux": path.resolve(__dirname, 'node_modules/redux'),
        } 
      },
    mode: 'development',
    entry: 
    {
        main: path.join(__dirname, 'src/client/main.tsx'),
        //error: path.join(__dirname, 'src/client/error.tsx')
    },
    output: {
        path: path.resolve(__dirname, 'build/client'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                //exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [      
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|jp2|webp)$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                },
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
};