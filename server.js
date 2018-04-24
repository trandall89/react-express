import http from 'http';
import config from'./config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path'

import express from 'express';
const server = express();

const srcPath = path.join(__dirname,"sass");
const destPath = path.join(__dirname,"public");





server.get('/', (req, res) => {
  server.use(
    sassMiddleware({
      src: __dirname + '/sass',
      dest: __dirname + '/public',
      debug: true,
    })
  );

  res.render('index', {

  });
});



server.use(express.static('public'));
server.use('/api', apiRouter);

server.set('view engine', 'ejs');


server.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});
