
var express = require('express');
var router = express.Router();

// レスポンスのデータ（ノート全体）
const response0bjectDataAll = {
    text0bject1 : {
        id: 1,
        title: 'ノート1のタイトルです',
        subTitle: 'ノート１のサブタイトルです',
        bodyText: 'ノート1の本文です'
    },
    text0bject2 : {
        id: 2,
        title: 'ノート2のタイトルです',
        subTitle: 'ノート2のサブタイトルです',
        bodyText: 'ノート2本文です'
    },
};

/**
 * メモを全件取得するAPI
 * @returns {0bject[]} data
 * @returns {number} data.id - ID
 * @returns {string} data.title - タイトル
 * @returns {string} data.text - 内容
 */
router.get('/',function (req, res, next) {
    // 全件取得して返す
    res.json(response0bjectDataAll);
})

module.exports = router;