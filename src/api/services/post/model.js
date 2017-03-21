import NeDB from 'nedb';

const Dir = global.DIR;

export default new NeDB({
  filename: Dir.api + '/nedbData/post.db',// eslint-disable-line
  autoload: true// eslint-disable-line
});
