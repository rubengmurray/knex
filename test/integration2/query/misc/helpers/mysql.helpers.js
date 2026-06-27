const MySQLSleepCommand = (knex, time) => knex.raw('SELECT SLEEP(?)', time);

module.exports = {
  MySQLSleepCommand,
};
