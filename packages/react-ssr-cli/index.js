'use strict'

var chalk = require('chalk');

var currentNodeVersion = process.versions.node;
var major = currentNodeVersion.split('.')[0];

// 判断node版本
if (major < 8) {
  console.error(
    chalk.red(
      '您当前的node版本为v' +
        currentNodeVersion +
        '.\n' +
        'React Server Cli要求node版本为v8.0.0 +\n' +
        '请更新您的node版本'
    )
  );
  process.exit(1);
}

require('./react-ssr-cli');