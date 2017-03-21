// import { hooks as auth } from 'feathers-authentication';
// import { setUUID } from '@/api/hooks/setUUID';
// import { timestamp } from '@/api/hooks/timestamp';
import hooks from 'feathers-hooks';

/**
  Hook: before
  Service: post
*/
export default {
  all: [
    // auth.verifyToken(),
  ],
  find: [],
  get: [],
  create: [
    // setUUID(),
    // timestamp("createdAt"),
    // timestamp("updatedAt"),
    hooks.disable()
  ],
  update: [hooks.disable()],
  patch: [hooks.disable()],
  remove: [hooks.disable()],
};
