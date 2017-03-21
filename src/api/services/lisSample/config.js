
export default {
  model: 'lisSample',
  adapter: 'feathers_knex',
  db: 'dbLis',
  namespace: '/lis/sample',
  options: {
    name: "LIS_INSPECTION_SAMPLE",
    id: "INSPECTION_ID",
    paginate: {
      default: 100,
      max: 200,
    },
  },
};
