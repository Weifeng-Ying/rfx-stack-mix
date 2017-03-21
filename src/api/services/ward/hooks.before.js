// import { hooks as auth } from 'feathers-authentication';
// import { setUUID } from '@/api/hooks/setUUID';
// import { timestamp } from '@/api/hooks/timestamp';

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
  ],
  update: [],
  patch: [],
  remove: [],
};
