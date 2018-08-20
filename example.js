const sortGhStarredSize = require('.')

const username = 'torvalds'

sortGhStarredSize(username, (err, repos) => {
  console.log(err || repos.map(function(c) {
    return `${c.full_name} =>  ${c.size} kb`
  }).join('\n'))
})