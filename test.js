import test from 'ava'
import sortGhStarredSize from '.'

test.cb('sort torvalds starred repos', t => {
  sortGhStarredSize('torvalds', t.end)
})

test.cb('sort ZYSzys starred js repos', t => {
  sortGhStarredSize('ZYSzys', 'js', t.end)
})
