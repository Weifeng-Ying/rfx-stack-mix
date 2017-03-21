import compression from 'compression';
import cors from 'cors';
import feathers from 'feathers';
import configuration from 'feathers-configuration';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest';
import socketio from 'feathers-socketio';
 // import adapter from 'feathers-mongoose';
import feathers_knex from 'feathers-knex';
import feathers_nedb from 'feathers-nedb';
import awesomeDbAdapter from './middleware/awesomeDbAdapter';

import { setupServices, initServices } from '@/utils/services.autoload';
import { setupServer, startServer } from '@/utils/server.start';
import { logServerConfig } from '@/utils/logger';

import apiBeforeMiddleware from './middleware/api/before';
import apiAfterMiddleware from './middleware/api/after';

import auth from './auth';
import { connector } from './connector';
import { autoloader } from './autoloader';

setupServer({
  namespace: 'api',
  logger: logServerConfig,
});

var adapter = {};
adapter.feathers_knex = feathers_knex;
adapter.feathers_nedb = feathers_nedb;
adapter.awesomeDbAdapter = awesomeDbAdapter;

setupServices({
  dir: __dirname,
  adapter ,
  connector,
  autoloader,
});

var app=feathers()
  .configure(configuration())
  .use(compression())
  .options('*', cors())
  .configure(apiBeforeMiddleware)
  .configure(hooks())
  .configure(rest())
  .configure(socketio(io => io.set('origins', '*:*')))
  .configure(auth)
  .configure(initServices)
  .configure(apiAfterMiddleware)
  .configure(startServer);

  // console.log('start success! ');
  // app.service('patientInformation').get('1079').then(function (relatedItem) {
  //   console.dir(relatedItem);
  // });
