// import { hooks as auth } from 'feathers-authentication';
// import { setUUID } from '@/api/hooks/setUUID';
// import { timestamp } from '@/api/hooks/timestamp';
// import hooks from 'feathers-hooks-common';

var getHook = (hook) => {
      console.log(hook.id);
      return Promise.resolve(hook);
    };

/**
  Hook: before
  Service: post
*/
export default {
  all: [
    // auth.verifyToken(),
  ],
  find: [
  ],
  get: [
    // getHook,
  ],
  create: [
    // setUUID(),
    // timestamp("createdAt"),
    // timestamp("updatedAt"),
  ],
  update: [],
  patch: [],
  remove: [],
};
