const config = {
  host: process.env.NEXT_PGSQL_HOST,
  port: process.env.NEXT_PGSQL_PORT,
  database: process.env.NEXT_PGSQL_DATABASE,
  user: process.env.NEXT_PGSQL_USER,
  password: process.env.NEXT_PGSQL_PASSWORD,
  ssl: {
    rejectUnauthorized: true,
    ca: process.env.NEXT_PUBLIC_SQL_CERT,
    },
  };
  exports.config = config;