import test from 'ava';
import sortGhStarredSize from '.';

test.cb('sort torvalds starred repos', t => {
  sortGhStarredSize('torvalds', t.end);
});

test.cb('sort ZYSzys starred js repos', t => {
  sortGhStarredSize('ZYSzys', 'js', t.end);
});

test.cb('sort ZYSzys starred py repos', t => {
  sortGhStarredSize('ZYSzys', 'py', t.end);
});

test.cb('sort ZYSzys starred ts repos', t => {
  sortGhStarredSize('ZYSzys', 'ts', t.end);
});

test.cb('sort ZYSzys starred sh repos', t => {
  sortGhStarredSize('ZYSzys', 'sh', t.end);
});

test.cb('sort ZYSzys starred md repos', t => {
  sortGhStarredSize('ZYSzys', 'md', t.end);
});

test.cb('sort ZYSzys starred c repos', t => {
  sortGhStarredSize('ZYSzys', 'c', t.end);
});

test.cb('sort ZYSzys starred c++ repos', t => {
  sortGhStarredSize('ZYSzys', 'c++', t.end);
});
