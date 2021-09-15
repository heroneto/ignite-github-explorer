module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {
      runtime: 'automatic'  // Para não ter que ficar add import react em todos os arquivos que tenham algum render
    }]
  ]
}