const GitHub = require('gh.js')

/**
 * sortByStarredSize
 * Sort your personal starred repos by size.
 *
 * @name sortByStarredSize
 * @function
 * @param {String} username The GitHub username.
 * @param {String} token An optional access token.
 * @param {Function} callback The callback function.
 * @return {gh.js} The `gh.js` instance.
 */
function sortByStarredSize (username, token, callback) {
  if (typeof token === 'function') {
    callback = token
    token = undefined
  }

  const gh = new GitHub({ token: token })
  gh.get(`users/${username}/starred`, { all: true }, (err, repos) => {
    if (err) { return callback(err) }
    repos.sort(function (a, b) {
      return a.size > b.size ? 1 : -1
    })
    callback(null, repos)
  })

  return gh
}

module.exports = sortByStarredSize
