'use strict';

// 最初のPromiseでnew Date()の結果を、resolve関数で指定している
new Promise((resolve) => {
    const nowDate = new Date();
    resolve(nowDate);    
})
    .then((v1) => {
        // v1 は 現在の時刻情報
        // 最初のPromiseのnew Date()の結果がv1に代入される
        // 引数v1から月と日を取得して、monthAndDateオブジェクトを作る
        const monthAndDate = {
            month: v1.getMonth(),
            date: v1.getDate()
        }
        return new Promise((resolve) => {
            resolve(monthAndDate);
        });
    })
    // return を使うことで、then 関数の後ろに then 関数をつなげて書けるようになった
    .then((v2) => {
        // v2 は 日付の情報
        // 2番目のProject のmonthAndDateオブジェクトをv2に渡している
        const text = `今日は${v2.month+1}月${v2.date}日です。`;
        return new Promise((resolve) => {
            resolve(text);
        });
    })
    .then((v3) => {
        // v3 は　日付を示す文章
        console.log(v3); // 今日の日付に関する文章が出力される
    });
