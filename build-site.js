#!/usr/bin/env node

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');


const dir = (() => {
  const base = path.resolve(__dirname, '_sites');
  const result = path.join(base, (process.argv[2] || 'example'));

  if (!fs.existsSync(result)) {
    const dirs = fs.readdirSync(base).filter(
      (sub) => fs.statSync(path.join(base, sub)).isDirectory()
    );
    console.error('no such site:', result);
    console.log('try:', dirs.join(', '));

    process.exit(0);
  }
  return result;
})();

const commandline = 'hugo' +
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
  if (err) {
    console.error(err);
    process.exit(err.code);
  }

  if (stdout) {
    console.log(stdout);
  }
  if (stderr) {
    console.error(stderr);
  }

  process.exit(0);
});
