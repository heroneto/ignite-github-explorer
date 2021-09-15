const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production', //modo que será executado
  devtool: isDevelopment ? 'eval-source-map' : 'source-map', //Para f;acil entendimento do código durante um Debug no Browser
  entry: path.resolve(__dirname, 'src', 'index.jsx'), // Entrada do código
  output: { //Saída do arquivo convertido para o browser
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {//extensões dos arquivos que serão lidos
    extensions: ['.js', '.jsx']
  },
  devServer: { //para servir o HTML estático
    static: path.resolve(__dirname, 'public')
  },
  plugins: [//para não ter que add o script bundle manualmente dentro do index.html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {//Para que, durante o processo de conversão do código, ele entenda o arquivo jsx e use o plugin babel-loader
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {//Para que, durante o processo de conversão do código, ele entenda o arquivos css e use os plugins relacionados, está como scss mas pode ser para css apenas.
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}