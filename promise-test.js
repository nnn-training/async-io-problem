'use strict';

const https = require('node:https');
const fs = require('node:fs');
let data = '';

const promise = new Promise((resolve,reject) =>{
    https.get('https://www.nicovideo.jp/ranking/genre/all?term=hour&rss=2.0&lang=ja-jp', (response) =>
    {
        response
            .on('data', (chunk) => {
                data += chunk;
            })
            .on('end', () => {
                resolve();
            });
    })
});

promise.then(() => {
    fs.writeFile('test.txt', data, 'utf8', () => {})
});