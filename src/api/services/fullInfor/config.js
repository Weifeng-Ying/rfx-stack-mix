// import adapter from 'feathers-knex';
// import { connector } from '../../connector';

export default {
  model: 'fullInfor',
  adapter: 'awesomeDbAdapter',
  db: 'dbHis',
  namespace: '/fullInfor',
  options: {
    // name: "YZ_INPATIENT_ORDER",
    // id: "ORDER_NO",
    // paginate: {
    //   default: 25,
    //   max: 50,
    // },
  },
};
