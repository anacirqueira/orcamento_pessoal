const path = require('path'); // Importar o módulo 'path' para lidar com caminhos de arquivos
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development', // Modo de desenvolvimento
  entry: './src/js/index.js', // Ponto de entrada do seu JavaScript

  output: {
    // Onde o Webpack deve gerar os arquivos "bundlados"
    filename: 'bundle.js', // Nome do arquivo JavaScript gerado
    path: path.resolve(__dirname, 'dist'), // O diretório de saída ('dist' é um nome comum)
    clean: true, // Limpa o diretório de saída antes de cada build (útil)
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/index.html', to: 'index.html' }, // Copia o HTML para a raiz da pasta de saída
        { from: 'src/css', to: 'css' }, // Copia toda a pasta CSS para dentro de 'css' na pasta de saída
        // Se você tiver assets como imagens, pode adicioná-los aqui:
        // { from: 'src/assets', to: 'assets' },
      ],
    }),
  ],

  devServer: {
    // Configurações para o webpack-dev-server
    static: {
      // Onde o servidor deve procurar por arquivos estáticos para servir
      directory: path.resolve(__dirname, 'dist'), // Deve apontar para sua pasta de saída
    },
    compress: true, // Habilita a compressão gzip
    port: 8080, // Porta onde o servidor vai rodar (pode ser qualquer outra, como 9000)
    open: true, // Abre automaticamente o navegador ao iniciar o servidor
    hot: true, // Habilita o Hot Module Replacement (HMR)
  },
};