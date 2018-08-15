const ora = require('ora')
const chalk = require('chalk')
const sortGhStarredSize = require('.')

const spinner = ora('Testing...')
spinner.start()

const username = 'ZYSzys'

sortGhStarredSize(username, (err, repos) => {
  spinner.stop()
  console.log(err || repos.map(function(c) {
    return `${c.full_name} => ` + chalk.red(`${c.size}`) + `kb`
  }).join("\n"))
})