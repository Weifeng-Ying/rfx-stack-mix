/* awesome-db-adapter.js */

// Create an adapter based on the service interface
const awesomeDbAdapter = function (options) {

  // Model represents the connection to the datasource.
  const Model = options.model;

  // Return an object that implements the service interface.
  return {
    find(params) {
      // Do something with the Model, return a promise.
      return Promise.resolve({  });
    },
    get(id, params) {
      return Promise.resolve({  });
    },
    create(data, params) {},
    update(id, data, params) {},
    patch(id, data, params) {},
    remove(id, params) {},
    setup(app, path) {}
  }
}

module.exports = awesomeDbAdapter;
