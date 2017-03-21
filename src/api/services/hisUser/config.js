// import adapter from 'feathers-knex';
// import { connector } from '../../connector';

export default {
  model: 'hisUser',
  adapter: 'feathers_knex',
  db: 'dbHis',
  namespace: '/hisUser',
  options: {
    name: "XT_XTYHRY",
    id: "YHRYDM",
    paginate: {
      default: 25,
      max: 50,
    },
  },
};
