const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const apiPaths = {
  '/api': {
    target: 'http://localhost:8000',
    pathRewrite: {
      '^/api': '/api',
    },
    changeOrigin: true,
  },
};

app
  .prepare()
  .then(() => {
    const server = express();

    if (dev) {
      server.use('/api', createProxyMiddleware(apiPaths['/api']));
    }

    server.all('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log('Error:::::', err);
  });
