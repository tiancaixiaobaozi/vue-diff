import h from './lib/h'

let res
// 1
res = h('div', {}, '')
// 2
res = h('div', {}, [
  h('p', {}, 'item1'),
  h('p', {}, 'item2'),
  h('p', {}, [
    h('span', {}, 'span1'),
    h('span', {}, 'span2'),
    h('span', {}, 'span3')
  ]),
])
// 3
res = h('div', {}, h('p', {}, 'hello'))
console.log(res)
