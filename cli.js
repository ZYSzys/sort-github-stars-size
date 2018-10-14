#!/usr/bin/env node
'use strict';

const ora = require('ora');
const chalk = require('chalk');
const program = require('commander');
const terminalLink = require('terminal-link');
const spinner = ora('Fetching data and sorting...');

const { version, description } = require('./package');

program
  .version(version, '-v, --version')
  .usage('<username> [language]')
  .description(description);

program.on('--help', function() {
  console.log('  Examples:');
  console.log('');
  console.log('    $ sort-starred-by-size torvalds');
  console.log('    $ sort-starred-by-size ZYSzys js');
  console.log('');
});

program.arguments('<cmd> [lang]').action((cmd, lang) => {
  spinner.start();

  const sort = require('.');
  const callback = (err, repos) => {
    spinner.stop();
    console.log(
      err ||
        repos
          .map(function(c) {
            const linkedName = terminalLink(c.full_name, c.html_url);
            return `${linkedName} => ` + chalk.red(`${c.size}`) + `kb`;
          })
          .join('\n')
    );
  };

  if (lang) {
    sort(cmd, lang, callback);
  } else {
    sort(cmd, callback);
  }
});

program.parse(process.argv);

if (!program.args.length) program.help();
