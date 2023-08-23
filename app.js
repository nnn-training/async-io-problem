'use strict';

const fs = require('fs');
const fileName = './test.txt';

// appendFilePromise関数ではfs.appendFileをPromiseオブジェクト化している
function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve())
  });
}
/** 
 * まずasync function main()で、main関数が非同期関数であることを宣言
 * こうすることで、main関数ないでawait演算子が使えるようになる
**/
async function main() {
  /**
   * for文内では、await appendFilePromise()で、appendFilePromise関数を呼び出している
   * 関数の前にawait演算子をつけることで、関数から返されたPromiseの完了を待機して、次の行の処理へ移るようになる
   */
  for (let count = 0; count < 500; count++) {
    await appendFilePromise(fileName, 'あ');
    await appendFilePromise(fileName, 'い');
    await appendFilePromise(fileName, 'う');
    await appendFilePromise(fileName, 'え');
    await appendFilePromise(fileName, 'お');
    await appendFilePromise(fileName, '\n');
  }
}
main();