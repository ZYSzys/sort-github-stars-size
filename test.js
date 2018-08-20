import test from 'ava'
import sortGhStarredSize from '.'

test.cb('sort torvalds starred repos', t => {
  sortGhStarredSize('torvalds', t.end)
})

test.cb('sort ZYSzys starred repos', t => {
  sortGhStarredSize('ZYSzys', t.end)
})