export default {
  model: 'post',
  adapter: 'feathers_nedb',
  db: 'nedb',
  namespace: '/post',
  options: {
    id: 'uuid',
    paginate: {
      default: 25,
      max: 50,
    },
  },
};
