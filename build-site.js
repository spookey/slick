#!/usr/bin/env node

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');


const dir = (() => {
  const base = path.resolve(__dirname, '_sites');
  const site = path.join(base, (process.argv[2] || 'example'));

  if (!fs.existsSync(site)) {
    const dirs = fs.readdirSync(base).filter(
      (sub) => fs.statSync(path.join(base, sub)).isDirectory()
    );
    console.error(`no such site: ${site}`);
    console.log(`try: ${dirs.join(', ')}`);

    process.exit(1);
  }

  return site;
})();

const commandline = `hugo \
  --baseURL "//${path.join(dir, 'public')}/" \
  --source "${dir}" \
  --buildDrafts \
  --buildExpired \
  --buildFuture \
  --noChmod \
  --noTimes \
  --templateMetrics \
  --templateMetricsHints \
  --cleanDestinationDir \
  --gc \
  --ignoreCache \
  --verbose
`;


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
