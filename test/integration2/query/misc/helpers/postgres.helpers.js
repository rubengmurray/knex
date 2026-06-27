const getPostgresSleepCommand = (knex, time) => knex.raw('SELECT pg_sleep(?)', time);

module.exports = {
  getPostgresSleepCommand,
};
