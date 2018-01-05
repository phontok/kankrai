module.exports = (options, req) => ({
  entry: './src/index.js',
  port: 3001,
  devServer: {
    proxy: {
      '/webhooks': 'http://localhost:3000',
      '/api': 'http://localhost:3000',
    },
  },
});
