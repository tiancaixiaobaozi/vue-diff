import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

// 创建patch函数
const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule
])

// 创建虚拟节点
let vnode1 = h(
  'a',
  {
    props: {
      href: 'www.baidu.com',
      target: '_blank'
    }
  },
  'hello world'
)
let vnode2 = h(
  'div',
  {},
  '我是一个盒子'
)
// 1. 空属性也可直接省略
// h('div', '我是一个盒子')

const vnode3 = h(
  'ul',
  [
    h('li', 'item1'),
    h('li', 'item2'),
    h('li', [
      h('div', [
        h('p', 'hello'),
        h('p', 'world')
      ])
    ]),
    h('li', h('p', '只有一个子元素'))
  ]
)
// 2. 当子元素只有一个时，可以省略不传数组

// 让虚拟节点上树
const container = document.getElementById('container')
patch(container, vnode3)
