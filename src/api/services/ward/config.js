// import adapter from 'feathers-knex';
// import { connector } from '../../connector';

export default {
  model: 'ward',
  adapter: 'feathers_knex',
  db: 'dbHis',
  namespace: '/ward',
  options: {
    name: "GY_BQDM",
    id: "BQDM",
    // paginate: {
    //   default: 25,
    //   max: 50,
    // },
  },
};
