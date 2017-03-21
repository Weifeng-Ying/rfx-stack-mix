// import hooks from 'feathers-hooks-common';

// How to add property of result using hook
const addUser = () =>
  (hook) => {
    hook.result.patientID = Number(hook.id); // eslint-disable-line
  };

// How to add property using hook
// var addPatientInfor = () => {
//   return hooks.populate('patientInformation',{service:'/patientInformation',field: 'patientID'});
// };
const addPatientInfor = () =>
  (hook, next) => {
    const patientID = hook.id;
    const item = hook.result;

    const params = {
      query:{
        $select: ['NAME as Name', 'ZYCS', 'BIRTHDAY', 'SEX', 'MARRY_STATUS', 'MZ_NAME',
          'SOCIAL_ID', 'HOME_ADDRESS', 'HOME_TEL', 'ADMISS_DATE',
          'CURR_KS', 'CURR_BED', 'DIAG_NAME', 'CURR_BQ', 'OUT_DIAG_NAME',
        ],
      },
    };

    hook.app.service('patientInformation').get(patientID, params).then((resultItem) => {
      const relatedItem = resultItem;
      if (relatedItem.SEX === 1) {
        relatedItem.SEX = '男';
      } else if (relatedItem.SEX === 2) {
        relatedItem.SEX = '女';
      }
      // console.log(relatedItem.ADMISS_DATE);
      relatedItem.ADMISS_DATE = new Date(relatedItem.ADMISS_DATE).toLocaleString();
      // console.log(relatedItem.ADMISS_DATE);
      hook.app.service('ward').get(relatedItem.CURR_BQ).then(
        (ward) => {
          relatedItem.CURR_BQ = ward.BQMC;
          item.patientInformation = relatedItem;
          next();
        },
      );
    },
    () => next());
  };

// How to add property using hook
const addOrder = () =>
  (hook, next) => {
    const patientID = hook.id;
    const item = hook.result;

    const params = {
      query:{
        DJXH: patientID,
        $select: ['ORDER_NAME', 'START_TIME', 'END_TIME', 'FREQU_CODE', 'INSTRUCTION', 'PHYSICIAN_NAME', 'ORDER_FLAG'],
      },
    };

    hook.app.service('hisOrder').find(params).then((relatedItem) => {
      item.order = relatedItem;
      next();
    },
    () => {
      next();
    });
  };

// How to add property using hook
const addInspectionResult = () =>
  (hook, next) => {
    function addItems(insp) {
      const inspection = insp;
      const params = {
        query:{
          INSPECTION_ID: inspection.INSPECTION_ID,
          $select: [
            'TEST_ITEM_ID', 'CHINESE_NAME', 'QUANTITATIVE_RESULT',
            'QUALITATIVE_RESULT', 'TEST_ITEM_REFERENCE', 'TEST_ITEM_UNIT',
          ],
        },
      };
      // console.log(params);
      const promise = hook.app.service('/lis/inspectionResult').find(params);
      return promise.then(
        (relatedItem) => {
          inspection.items = relatedItem.data;
        },
        () => {},
      );
    }

    const patientID = hook.id;
    const item = hook.result;

    const params = {
      query:{
        INPATIENT_ID: patientID,
        $select: ['TEST_ORDER_NAME', 'INSPECTION_STATE', 'INSPECTION_DATE',
          'INSPECTION_TIME'],
      },
    };

    hook.app.service('/lis/sample').find(params).then((relatedItem) => {
      item.inspections = relatedItem.data;
      Promise.all(item.inspections.map(addItems)).then(
        () => {
          next();
        },
      );
    },
    () => {
      next();
    },
  );
  };

/**
  Hook: after
  Service: post
*/
export default {
  all: [
    // hooks.remove('_id'),
  ],
  find: [

  ],
  get: [
    addUser(),
    addPatientInfor(),
    addOrder(),
    addInspectionResult(),
    // hooks.populate('patientInformation',{service:'/patientInformation',field: 'patientID'}),
  ],
  create: [],
  update: [],
  patch: [],
  remove: [],
};
