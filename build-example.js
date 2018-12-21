#!/usr/bin/env node

const { exec } = require('child_process');
const path = require('path');

const dir = path.resolve('exampleSite');

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
  const log = err ? console.error : console.log;

  if (stdout) {
    log(stdout);
  }
  if (stderr) {
    log(stderr);
  }
});
