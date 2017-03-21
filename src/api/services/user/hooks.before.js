import { hooks as auth } from 'feathers-authentication';
import { hooks as local } from 'feathers-authentication-local';
import { hooks as perms } from 'feathers-permissions';
import { setUUID } from '@/api/hooks/setUUID';
import { timestamp } from '@/api/hooks/timestamp';

/**
  Hook: before
  Service: user
*/
export default {
  all: [],
  find: [
    auth.authenticate(['jwt', 'local']),
    perms.checkPermissions({ service: 'user' }),
  ],
  get: [
    auth.authenticate(['jwt', 'local']),
    perms.checkPermissions({ service: 'user' }),
  ],
  create: [
    setUUID(),
    timestamp('createdAt'),
    timestamp('updatedAt'),
    local.hashPassword(),
  ],
  update: [
    auth.authenticate(['jwt', 'local']),
    perms.checkPermissions({ service: 'user' }),
  ],
  patch: [
    auth.authenticate(['jwt', 'local']),
    perms.checkPermissions({ service: 'user' }),
  ],
  remove: [
    auth.authenticate(['jwt', 'local']),
    perms.checkPermissions({ service: 'user' }),
  ],
};
