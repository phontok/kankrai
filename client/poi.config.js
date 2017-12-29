module.exports = (options, req) => ({
  entry: './index.js',
  port: 3001,
  devServer: {
    proxy: 'http://localhost:3000/api'
  }
});
