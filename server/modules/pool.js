const pg = require('pg');
const url = require('url');
let config = {};

if (process.env.DATABASE_URL) {
    let params = url.parse(process.env.DATABASE_URL);
    let auth = params.auth.split(':');

    config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true,
        max: 10,
        idleTimeoutMillis: 30000
    };

} else {
    config = {
        user: process.env.PG_USER,
        password: process.env.DATABASE_SECRET,
        host: process.env.DATABASE_SERVER,
        port: process.env.DATABASE_PORT,
        database: process.env.DATABASE_NAME,
        max: 10,
        idleTimeoutMillis: 30000
    };
}

module.exports = new pg.Pool(config);