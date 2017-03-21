// import adapter from 'feathers-knex';
// import { connector } from '../../connector';

export default {
  model: 'patientInformation',
  adapter: 'feathers_knex',
  db: 'dbHis',
  namespace: '/patientInformation',
  options: {
    name: "ZY_PATIENT_INFORMATION",
    id: "PATIENT_NO",
    paginate: {
      default: 50,
      max: 100,
    },
  },
};
