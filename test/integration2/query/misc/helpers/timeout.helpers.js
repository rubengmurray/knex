const { getPostgresSleepCommand } = require('./postgres.helpers');
const { MySQLSleepCommand } = require('./mysql.helpers');
const { DRIVER_NAMES: drivers } = require('../../../../util/constants');

const setupSleepTestQueries = (knex, time) => {
  const postgresSleepCommand = getPostgresSleepCommand(knex, time);
  const mysqlSleepCommand = MySQLSleepCommand(knex, time);

  return {
    [drivers.PostgreSQL]: function () {
      return postgresSleepCommand;
    },
    [drivers.CockroachDB]: function () {
      return postgresSleepCommand;
    },
    [drivers.PgNative]: function () {
      return postgresSleepCommand;
    },
    [drivers.MySQL]: function () {
      return mysqlSleepCommand;
    },
    [drivers.MySQL2]: function () {
      return mysqlSleepCommand;
    },
    [drivers.MsSQL]: function () {
      return knex.raw("WAITFOR DELAY '00:00:10'");
    },
    [drivers.Oracle]: function () {
      return knex.raw('begin dbms_lock.sleep(10); end;');
    },
  };
}

module.exports = {
  setupSleepTestQueries,
};