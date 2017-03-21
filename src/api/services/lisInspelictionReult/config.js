
export default {
  model: 'lis_inspection_result',
  adapter: 'feathers_knex',
  db: 'dbLis',
  namespace: '/lis/inspectionResult',
  options: {
    name: "LIS_INSPECTION_RESULT",
    id: "INSPECTION_ID",
    paginate: {
      default: 150,
      max: 200,
    },
  },
};
