'use strict';

const https = require('node:https');
const fs = require('node:fs');
let data = '';

const apiEndpoint ='https://snapshot.search.nicovideo.jp/api/v2/snapshot/video/contents/search';
const search_keyword_param = 'q=ゲーム';
const search_targets_param = 'targets=tags';
const sort_param = '_sort=viewCounter';
const fields_param =
  'fields=contentId,title,description,tags,viewCounter,mylistCounter,likeCounter,lengthSeconds,commentCounter';
const filters_param =
  'filters[startTime][gte]=2025-05-13T00:00:00Z&filters[startTime][lte]=2025-05-13T23:59:59Z';
const limit_param = '_limit=5';

const apiRequestUrl = `${apiEndpoint}?${search_keyword_param}&${search_targets_param}&${sort_param}&${fields_param}&${filters_param}&${limit_param}`;

https.get(apiRequestUrl,
  {
    headers: {
      'User-Agent': 'node',
    },
  },
  (response) => {
    response
      .on('data', (chunk) => {
        data += chunk;
      })
      .on('end', () => {

      });
  }
);

fs.writeFile('test.txt', data, 'utf8', () => {});
