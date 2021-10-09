'use strict';

/*
// 1秒待機する非同期処理
const waitPromise = new Promise((resolve, reject) => {
    // 1000ミリ秒経過後にコールバック関数が呼ばれる
    setTimeout(() => resolve(), 1000);
});

waitPromise.then(() => console.log('hoge'));
console.log('fuge');
*/

/* コールバック地獄になってしまう書き方
new Promise((resolve) => {  
    // new Date()の結果を次のthenに渡す
    const nowDate = new Date();
    resolve(nowDate);
}).then((v1) => { // v1は現在の時刻情報
    // 日付の情報のみ抽出する
    new Promise((resolve) => {
        const monthAndDate = {
            month: v1.getMonth(),
            date: v1.getDate()
        }
        resolve(monthAndDate);
    }).then((v2) => { // v2は日付の情報
        // 文章に整形する
        new Promise((resolve) => {
            const text = `今日は${v2.month+1}月${v2.date}日です。`;
            resolve(text);
        }).then((v3) => { // v3は日付を示す文章
            // 結果をコンソールに出力する
            console.log(v3); // 今日の日付に関する文章が出力される
        });
    });
});
*/

/**
 * プロミスチェインを意識した書き方
 */
new Promise((resolve) => {  
    // new Date()の結果を次のthenに渡す
    const nowDate = new Date();
    resolve(nowDate);
})
    .then((v1) => { // v1は現在の時刻情報
    // 日付の情報のみ抽出する
    new Promise((resolve) => {
        const monthAndDate = {
            month: v1.getMonth(),
            date: v1.getDate()
        }
        return new Promise((resolve => {
            resolve(monthAndDate);
        }));
    })
    .then((v2) => { // v2は日付の情報
        // 文章に整形する
        new Promise((resolve) => {
            const text = `今日は${v2.month+1}月${v2.date}日です。`;
            return new Promise((resolve) => {
                resolve(text);
            });
        })
        .then((v3) => { // v3は日付を示す文章
            // 結果をコンソールに出力する
            console.log(v3); // 今日の日付に関する文章が出力される
        });
    });
});