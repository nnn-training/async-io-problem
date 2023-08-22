'use strict';

// const https = require('node:https');
// const fs = require('node:fs');
// let data = '';

// https.get('https://www.nicovideo.jp/ranking/genre/all?term=hour&rss=2.0&lang=ja-jp', (response) => {
//   response
//     .on('data', (chunk) => {
//       data += chunk;
//     })
//     .on('end', () => {
//     });
// });

// fs.writeFile('test.txt', data, 'utf8', () => {});

'use strict';
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 500; count++) {
  fs.appendFileSync(fileName, 'あ', 'utf8');
  fs.appendFileSync(fileName, 'い', 'utf8');
  fs.appendFileSync(fileName, 'う', 'utf8');
  fs.appendFileSync(fileName, 'え', 'utf8');
  fs.appendFileSync(fileName, 'お', 'utf8');
  fs.appendFileSync(fileName, '\n', 'utf8');
}