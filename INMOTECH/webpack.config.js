// const path = require('path');

// module.exports = {
//     mode: 'development',
//     entry: './src/index.js', // Punto de entrada de tu aplicación
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist'), // Directorio de salida
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/i,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-react']
//                     }
//                 }
//             },
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader'] 
//             }
//         ]
//     }
// };

const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js', 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), 
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] 
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'), // Servir archivos estáticos desde la carpeta 'public'
        },
        hot: true, // Habilitar Hot Module Replacement
        port: 3000, // Puerto en el que se ejecutará el servidor
        historyApiFallback: true // Manejar rutas en aplicaciones de una sola página
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};