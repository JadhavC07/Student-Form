const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://192.168.210.235:8080",
      changeOrigin: true,
    })
  );
};
