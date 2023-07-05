// const HOST = 'localhost'
// // const HOST = '192.168.43.1'
// const HOST_URL = `http://${HOST}:3000`

module.exports = {
    port_local_client: process.env.PORT_LOCAL_CLIENT,
    port_local_server: process.env.PORT_LOCAL_SERVER,
    port_remote_client: process.env.PORT_REMOTE_CLIENT,
    port_remote_server: process.env.PORT_REMOTE_SERVER,
    host_local_client: process.env.HOST_LOCAL_CLIENT,
    host_local_server: process.env.HOST_LOCAL_SERVER,
    host_remote_client: process.env.HOST_REMOTE_CLIENT,
    host_remote_server: process.env.HOST_REMOTE_SERVER,
    url_local_client: process.env.URL_LOCAL_CLIENT,
    url_local_server: process.env.URL_LOCAL_SERVER,
    url_remote_client: process.env.URL_REMOTE_CLIENT,
    url_remote_server: process.env.URL_REMOTE_SERVER,
    allowedDomains: (process.env.NODE_ENV === 'production')?
        [
            process.env.URL_REMOTE_CLIENT,
            process.env.URL_REMOTE_SERVER,
        ]:[
            process.env.URL_LOCAL_CLIENT,
            process.env.URL_LOCAL_SERVER,
        ]
};