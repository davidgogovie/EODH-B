require('dotenv').config()
global.osPlatform = process.platform

// const env = require('./config/index')
// console.log(env.url_local_server)

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data/db.json");
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(router);
server.listen(process.env.DATABASE_PORT || 8001, () => {
  console.log('listening for jsonserver requests on port', process.env.DATABASE_PORT || 8001)
})


const express = require('express')
// const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const fileUpload = require('express-fileupload')
const pdfParse = require('pdf-parse')
const formidable = require('formidable')
const fs = require('fs')

// express app
const app = express()

const path = require('path')
app.use(express.static(path.join(__dirname + "public")))

// middleware
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(express.json({limit: '50mb'}))
app.use(fileUpload());
// app.use("/", express.static("public"));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const cors = require("cors");
// const helmet = require("helmet");
// const compression = require("compression");
// const config = require("./config");
// const { port, allowedDomains } = config;
// app.use(cors({ origin: ['*'] }))
// app.use(helmet()) //will set the necessary headers when making cross server request
// app.use(compression()) // will compress large files before sending out

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  console.log(req.path, req.method)
  next()
})

// routes
// console.log('server')
app.use('/api/workouts', workoutRoutes)
app.post('/extract-text', (req, res) => {
  if(!req.files && !req.files.myFile){
      res.status(400);
      res.end();
  }
  
  let paragraphing = false;
  let paragraphPattern = '';
  let pagePattern = '[pagex]';
  let charsPerLine = 80;
  let linesPerParagraph = 5;
  let paragraphsPerPage = 4;
  if(req.query.paragraphing){
    if(req.query.paragraphing === 'true') paragraphing = true;
    if(req.query.paragraphing === 'false') paragraphing = false;
  }
  if(req.query.paragraphPattern) paragraphPattern = req.query.paragraphPattern;
  if(req.query.linesPerParagraph) linesPerParagraph = +req.query.linesPerParagraph;
  if(req.query.paragraphsPerPage) paragraphsPerPage = +req.query.paragraphsPerPage;
  
  let paragraph=1;
  let page=1;

  let replaceString = "";
  let prevOffset = 0;
  let resultText;

  pdfParse(req.files.myFile).then(result => {
      // // save file to folder
      // const form = new formidable.IncomingForm();
      // form.parse(req, (err, fields, files) => {
      //   const oldpath = files.filetoupload.filepath;
      //   const newpath = 'c://' + files.filetoupload.originalFilename;
      //   fs.rename(oldpath, newpath, (err) => {
      //     if (err) throw err;
      //     // res.write('File uploaded and moved!');
      //     // res.end();
      //   });
      // });
      // resultText = result.text.replace(/^\s*\n/gm, "[px]");
      if(paragraphing){
        // if(paragraphPattern){
          if(paragraphPattern==='blanks' || paragraphPattern===''){
            resultText = result.text.replace(/^\s*$(?:\r\n?|\n)/gm, (match, offset, string) => {
              if(string.slice(prevOffset, offset).length > charsPerLine * linesPerParagraph){
                if(paragraph % (paragraphsPerPage + 1) === 0){
                  paragraph = 1;
                  replaceString = `\n`+`[page${page++}]`+`\n\n`+`[p${paragraph++}]`+`\n\n`;
                }else{
                  replaceString = `\n`+`[p${paragraph++}]`+`\n\n`;
                };
              }else{
                replaceString = "";
              };
              prevOffset = offset;
              return replaceString;
            });
          }else{
            if(paragraphPattern==='lines'){
              resultText = result.text.replace(/^\s*$(?:\r\n?|\n)/gm, (match, offset, string) => {
                if(string.slice(prevOffset, offset).length > charsPerLine * linesPerParagraph){
                  if(paragraph % (paragraphsPerPage + 1) === 0){
                    paragraph = 1;
                    replaceString = `\n`+`[page${page++}]`+`\n\n`+`[p${paragraph++}]`+`\n\n`;
                  }else{
                    replaceString = `\n`+`[p${paragraph++}]`+`\n\n`;
                  };
                }else{
                  replaceString = "";
                };
                prevOffset = offset;
                return replaceString;
              });
            }else{
              // paragraphPattern = paragraphPattern.replace(/[a-zA-Z\s(x|\d)]/gmi, `[p${paragraph++}]`);
              // pagePattern = pagePattern.replace(/[a-zA-Z\s(x|\d)]/gm, `[page${page++}]`);
              let paragraphPatternBegin = paragraphPattern;
              let paragraphPatternRegExp = new RegExp(paragraphPatternBegin, "gm");
              // let paragraphPatternRegExp = new RegExp(paragraphPattern, "gm");
              // console.log(paragraphPatternRegExp)
              // resultText = result.text.replace(paragraphPatternRegExp, (match, offset, string) => {
              //   if(string.slice(prevOffset, offset).length > charsPerLine * linesPerParagraph){
              //     if(paragraph % (paragraphsPerPage + 1) === 0){
              //       paragraph = 1;
              //       replaceString = `\n`+`[page${page++}]`+`\n\n`+`[p${paragraph++}]`+`\n\n`;
              //     }else{
              //       replaceString = `\n`+`[p${paragraph++}]`+`\n\n`;
              //     };
              //   }else{
              //     replaceString = "";
              //   };
              //   prevOffset = offset;
              //   return replaceString;
              // });
              
              if(paragraphPatternBegin.toUpperCase()==='<ST>'){
                resultText = result.text.replace(paragraphPatternRegExp, (match, offset, string) => {
                  replaceString = `\n`+`[p${paragraph++}]`+`\n\n`;
                  return replaceString;
                });

                let paragraphPatternEnd = paragraphPattern.slice(0,1)+"/"+paragraphPattern.slice(1,paragraphPattern.length);
                paragraphPatternRegExp = new RegExp(paragraphPatternEnd, "gm");
                resultText = resultText.replace(paragraphPatternRegExp, () => {
                  replaceString = `\n`;
                  return replaceString;
                });
              }else{
                resultText = result.text.replace(paragraphPatternRegExp, (match, offset, string) => {
                  replaceString = `\n`+`[p${paragraph++}]`+`\n\n`+match;
                  return replaceString;

                  // let counter = 0;
                  // let resultText2 = match.replace(/[a-z]/gm, (match2, offset2, string2) => {
                  //   counter = counter + match2.trim().length;
                  //   return match2;
                  // });
                  // console.log('counter: '+counter)
                  // console.log('match len: '+match.trim().length)
                  // if (counter < (match.trim().length - counter)){
                  //   replaceString = `\n`+`[p${paragraph++}]`+`\n\n`+match;
                  // }else{
                  //   replaceString = match;
                  // }
                  // return replaceString;
                });

                resultText = resultText.replace(/(<ST>|<\/ST>|<st>|<\/st>)/gm, () => {
                  replaceString = '';
                  return replaceString;
                });
              }

              // if(pagePattern){
              //   resultText = result.text.replace(pagePattern, () => {
              //     replaceString = `\n`+`[page${page++}]`+`\n\n`;
              //     return replaceString;
              //   });
              // }
            }
          }
        // }
      }else{
        resultText = result.text;
      };
      res.send(resultText);
  });
})

// listen to port
app.listen(process.env.PORT_LOCAL_SERVER, () => {
  console.log('listening for server requests on port', process.env.PORT_LOCAL_SERVER)
})

// // connect to mongodb
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true, 
//   useUnifiedTopology: true,
//   family: 4,
// })
//   .then(() => {
//     console.log('connected to mongodb ')
//   })
//   .catch((err) => {
//     console.log(err)
//   }) 


// // connect to mysql
// const mysql = require('mysql')
// const  connection = mysql.createConnection({
//   host: '127.0.0.1',
//   port: '3306',
//   user: 'root',
//   password: '',
//   // socketPath: '/var/run/mysqld/mysqld.sock',
//   database: 'appdata'
  
// })
// connection.connect((err) => {
//   if (err) {
//     return console.error('error: ' + err.message)
//   }

//   console.log('Connected to the MySQL server.')
//   connection.query("show databases", (err, result) => {
//     if (err) throw err
//     console.log("Result: " + result[1].Database)
//   })
// })
// // connection.end(function(err) {
// //   if (err) {
// //     return console.log('error:' + err.message);
// //   }
// //   console.log('Close the database connection.');
// // });





// node way of creating a server
/*let path = '/';
const fs = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {
  console.log('request made');

  // routing
  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-us':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
  }

  // send html
  res.setHeader('Content-Type', 'text/html');
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });
});

// localhost is the default value for 2nd argument
server.listen(8000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});*/