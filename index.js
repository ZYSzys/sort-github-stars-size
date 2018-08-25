const GitHub = require('gh.js')

/**
 * sortByStarredSize
 * Sort your personal starred repos by size.
 *
 * @name sortByStarredSize
 * @function
 * @param {String} username The GitHub username.
 * @param {String} lang A specific language.
 * @param {Function} callback The callback function.
 * @return {gh.js} The `gh.js` instance.
 */
function sortByStarredSize (username, lang, callback) {
  if (typeof lang === 'function') {
    callback = lang
    lang = undefined
  }

  const gh = new GitHub()
  gh.get(`users/${username}/starred`, { all: true }, (err, repos) => {
    if (err) { return callback(err) }

    if (lang) { repos = repos.filter(x => x.language === standardLang(lang)) }
    repos.sort(function (a, b) {
      return a.size > b.size ? 1 : -1
    })
    callback(null, repos)
  })

  return gh
}

function standardLang (lang) {
  // js
  if (['js', 'javascript', 'JavaScript'].includes(lang)) {
    return 'JavaScript'
  }

  // py
  if (['py', 'python', 'Python'].includes(lang)) {
    return 'Python'
  }

  // ts
  if (['ts', 'tsc', 'typescript', 'Typescript', 'TypeScript'].includes(lang)) {
    return 'Typescript'
  }

  // sh
  if (['sh', 'shell', 'Shell'].includes(lang)) {
    return 'Shell'
  }

  // md
  if (['md', 'markdown', 'MarkDown', 'null'].includes(lang)) {
    return null
  }

  // c
  if (['c', 'C'].includes(lang)) {
    return 'C'
  }

  // c++
  if (['c++', 'C++'].includes(lang)) {
    return 'C++'
  }
}

module.exports = sortByStarredSize
