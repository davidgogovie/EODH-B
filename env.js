// const HOST = 'localhost'
// // const HOST = '192.168.43.1'
// const HOST_URL = `http://${HOST}:3000`
// require('dotenv').config()
// const os = require('os')
// import os from 'os'

// import { Platform } from 'react-native'

let port_local_client = 3000
let port_local_server = 4000
let port_remote_client = 3000
let port_remote_server = 4000
// let host_local_client = '192.168.56.1'
// let host_local_server = '192.168.56.1'
// let host_local_client = '192.168.100.6'
// let host_local_server = '192.168.100.6'
let host_local_client = '127.0.0.1'
let host_local_server = '127.0.0.1'
let host_remote_client = 'https://eodh-b.onrender.com'
let host_remote_server = 'https://eodh-b.onrender.com'
// let url_local_client = 'http://192.168.56.1:3000'
// let url_local_server = 'http://192.168.56.1:4000'
// let url_local_client = 'http://192.168.100.6:3000'
// let url_local_server = 'http://192.168.100.6:4000'
// let url_local_client = 'http://0.0.0.0:3000'
// let url_local_server = 'http://0.0.0.0:4000'
let url_local_client = 'http://127.0.0.1:3000'
let url_local_server = 'http://127.0.0.1:4000'
let url_remote_client = 'https://eodh-b.onrender.com'
let url_remote_server = 'https://eodh-b.onrender.com'
// if (Platform.OS === 'android') {
// if (global.osPlatform === 'android') {
    // url_local_client = 'http://10.0.2.2:3000'
    // url_local_server = 'http://10.0.2.2:4000'
    // url_local_client = 'https://eodh-b.onrender.com'
    // url_local_server = 'https://eodh-b.onrender.com'
// }
let database_port = 8000
// let database_url = 'http://192.168.56.1:8000'
// let database_url = 'http://192.168.100.6:8000'
let database_url = 'http://127.0.0.1:8000'
// let database_url = 'http://0.0.0.0:8000'
// let database_url = 'https://eodh-b.onrender.com'

let env = {
    port_local_client: port_local_client,
    port_local_server: port_local_server,
    port_remote_client: port_remote_client,
    port_remote_server: port_remote_server,
    host_local_client: host_local_client,
    host_local_server: host_local_server,
    host_remote_client: host_remote_client,
    host_remote_server: host_remote_server,
    url_local_client: url_local_client,
    url_local_server: url_local_server,
    url_remote_client: url_remote_client,
    url_remote_server: url_remote_server,
    database_port: database_port,
    database_url: database_url,
}

module.exports = env;

// export default env;