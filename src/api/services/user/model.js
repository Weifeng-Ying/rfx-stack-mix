import NeDB from 'nedb';

const Dir = global.DIR;

export default new NeDB({
  filename: Dir.api + '/nedbData/user.db',// eslint-disable-line
  autoload: true// eslint-disable-line
});
