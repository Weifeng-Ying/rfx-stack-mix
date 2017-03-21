const knex = require('knex');

var dbConfigHis = {
  user          : process.env.NODE_ORACLEDB_USER || "medihis",

  // Instead of hard coding the password, consider prompting for it,
  // passing it in an environment variable via process.env, or using
  // External Authentication.
  password      : process.env.NODE_ORACLEDB_PASSWORD || "medihis",

  // For information on connection strings see:
  // https://github.com/oracle/node-oracledb/blob/master/doc/api.md#connectionstrings
  // connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "172.16.0.20/histest",
  connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "172.16.0.5/hisdb",

  // Setting externalAuth is optional.  It defaults to false.  See:
  // https://github.com/oracle/node-oracledb/blob/master/doc/api.md#extauth
  externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};

var dbConfigLis = {
  user          : "DBO",

  // Instead of hard coding the password, consider prompting for it,
  // passing it in an environment variable via process.env, or using
  // External Authentication.
  password      : "7540000E",

  // For information on connection strings see:
  // https://github.com/oracle/node-oracledb/blob/master/doc/api.md#connectionstrings
  connectString : "172.16.0.19/orcl",

  // Setting externalAuth is optional.  It defaults to false.  See:
  // https://github.com/oracle/node-oracledb/blob/master/doc/api.md#extauth
  externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};

export function connector(config) {
  var db={};

  db.dbHis = knex({
    client: 'oracledb',
    connection: {
      user          : dbConfigHis.user,
      password      : dbConfigHis.password,
      connectString : dbConfigHis.connectString,
      stmtCacheSize : 0
    }
  });


  db.dbLis = knex({
    client: 'oracledb',
    connection: {
      user          : dbConfigLis.user,
      password      : dbConfigLis.password,
      connectString : dbConfigLis.connectString,
      stmtCacheSize : 0
    }
  });

  return db;
}
