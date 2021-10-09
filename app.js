'use strict';
const fs = require('fs');
const fileName = './test.txt';

// fs.appendFilePromiseをPromiseオブジェクト化
function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf-8', () => resolve());
  });
}

// main関数が非同期であることを宣言する
async function main() {
  for (let count = 0; count < 500; count++) {
    // await演算子を用いて処理が完了するのを待機する
    await appendFilePromise(fileName, 'あ');
    await appendFilePromise(fileName, 'い');
    await appendFilePromise(fileName, 'う');
    await appendFilePromise(fileName, 'え');
    await appendFilePromise(fileName, 'お');
    await appendFilePromise(fileName, '\n');
  }
}

main();

/*
for (let count = 0; count < 500; count++) {
  fs.appendFile(fileName, 'あ', 'utf8', () => {});
  fs.appendFile(fileName, 'い', 'utf8', () => {});
  fs.appendFile(fileName, 'う', 'utf8', () => {});
  fs.appendFile(fileName, 'え', 'utf8', () => {});
  fs.appendFile(fileName, 'お', 'utf8', () => {});
  fs.appendFile(fileName, '\n', 'utf8', () => {});
}
*/

/*
for (let count = 0; count < 500; count++) {
  fs.appendFileSync(fileName, 'あ', 'utf8');
  fs.appendFileSync(fileName, 'い', 'utf8');
  fs.appendFileSync(fileName, 'う', 'utf8');
  fs.appendFileSync(fileName, 'え', 'utf8');
  fs.appendFileSync(fileName, 'お', 'utf8');
  fs.appendFileSync(fileName, '\n', 'utf8');
}
*/