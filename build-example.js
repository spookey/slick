#!/usr/bin/env node

const { exec } = require('child_process');
const path = require('path');

const dir = path.resolve('_sites/example');

let commandline = 'hugo' +
  ' --baseURL "//' + path.join(dir, 'public') + '/"' +
  ' --source "' + dir + '"' +
  ' -DEF' +
  ' --templateMetrics' +
  ' --templateMetricsHints' +
  ' --cleanDestinationDir' +
  ' --gc' +
  ' --ignoreCache' +
  ' --verbose';


console.log(commandline);

exec(commandline, (err, stdout, stderr) => {
  if (stdout) {
    console.log(stdout);
  }
  if (stderr) {
    console.error(stderr);
  }
});
