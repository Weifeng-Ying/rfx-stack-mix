// import adapter from 'feathers-knex';
// import { connector } from '../../connector';

export default {
  model: 'hisOrder',
  adapter: 'feathers_knex',
  db: 'dbHis',
  namespace: '/hisOrder',
  options: {
    name: 'YZ_INPATIENT_ORDER',
    id: 'ORDER_NO',
    paginate: {
      default: 250,
      max: 500,
    },
  },
};
