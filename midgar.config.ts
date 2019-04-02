export const config = {
  log: {
    level: 0,
    type: "console",
    dir: "./logs/",
    name: "log-server"
  },
  bdd: {
    development: {
      host      : "localhost",
      user      : "root",
      password  : "",
      database  : "larimar"
    },
    production: {
      host      : "localhost",
      user      : "client",
      password  : "",
      database  : "larimar",
      socketPath: "/var/run/mysqld/mysqld.sock"
    }
  },
}
