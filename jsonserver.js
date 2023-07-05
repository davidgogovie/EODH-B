// node `json-server --watch data/db.json --host 0.0.0.0 --port 8000`
require('dotenv').config()
global.osPlatform = process.platform

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data/db.json");
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(router);
  server.listen(process.env.DATABASE_PORT || 8001, () => {
console.log('listening for jsonserver requests on port', process.env.DATABASE_PORT || 8001)
})



// var exec = require('child_process').exec;

// exec('cat *.js bad_file | wc -l',
//     function (error, stdout, stderr) {
//         console.log('stdout: ' + stdout);
//         console.log('stderr: ' + stderr);
//         if (error !== null) {
//              console.log('exec error: ' + error);
//         }
//     });

// const execSync = require('child_process').execSync;
// // import { execSync } from 'child_process';  // replace ^ if using ES modules

// const output = execSync('ls', { encoding: 'utf-8' });  // the default is 'buffer'
// console.log('Output was:\n', output);




// var exec = require('child_process').exec;

// exec('php main.php', function (error, stdOut, stdErr) {
//     // do what you want!
// });


// exec('echo test');
// //output:
// //test

// exec('echo test', function(err, stdout){console.log(stdout+stdout+stdout)});
// //output:
// //testtesttest


// If you are using npm you can use the shelljs package

// To install: npm install [-g] shelljs

// var shell = require('shelljs');
// shell.ls('*.js').forEach(function (file) {
// // do something
// });

