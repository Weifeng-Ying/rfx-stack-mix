// import { observable, action, computed } from 'mobx';
import { observable, action } from 'mobx';
import { service } from '@/shared/app';
// import _ from 'lodash';

export default class FullInforStore {

  // query = {};

  @observable filter = 'all';

  @observable infor = {};

  init() {
    // run events on client side-only
    // if (global.TYPE === 'CLIENT') this.initEvents();
  }

  initEvents() {
    // service('post').on('created', action(this.onCreated));  // onCreated = (data, params) => {}
    // service('post').on('updated', action(this.onUpdated));   // onUpdated = (id, data) => {}
    // service('post').on('patched', action(this.onPatched));   // onPatched = (id, data) => {}
    // service('post').on('removed', action(this.onRemoved));   // onRemoved = (id, params) => {}
  }

  @action
  updateFullInfor(json) {
    this.infor = json;
    // this.$pagination = _.omit(json, 'data');
  }

  @action
  emptyInfor() {
    this.infor = {};
  }

  getFullInfor(patientID = 0) {
    // _.merge(this.query, query);
    return service('fullInfor')
      .get(patientID)
      .then(json => this.updateFullInfor(json));
  }

  /* EVENTS */

  // onCreated = item => this.addItem(item);

  // onUpdated = (id, data) => {};

  // onPatched = (id, data) => {};

  // onRemoved = (id, params) => {};

  /* ACTIONS */

  // @action
  // search(title = null) {
  //   this.searchValue = title || '';
  //   return this.find({
  //     query: {
  //       $skip: 0,
  //       title: {
  //         $regex: `.*${this.searchValue}.*`,
  //         $options: 'i',
  //       },
  //     },
  //   });
  // }

  // @action
  // filterBy(filter) {
  //   this.filter = filter;
  //   let completed;
  //
  //   switch (this.filter) {
  //     case 'all': this.query.query.completed = undefined; break;
  //     case 'todo': completed = false; break;
  //     case 'done': completed = true; break;
  //     default: completed = 'all';
  //   }
  //
  //   if (filter === 'all') return this.find();
  //   return this.find({ query: { completed } });
  // }
}
