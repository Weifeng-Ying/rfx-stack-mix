export default {
  model: 'user',
  adapter: 'feathers_nedb',
  db: 'nedb',
  namespace: '/user',
  options: {
    id: 'uuid',
    paginate: {
      default: 25,
      max: 50,
    },
  },
};
