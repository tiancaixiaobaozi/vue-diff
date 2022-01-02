import vnode from "./vnode";

/**
 * 1. h('div', {}, '')
 * 2. h('div', {}, [])
 * 3. h('div', {}, h())
 * @param sel
 * @param data
 * @param c
 */
export default function (sel, data, c) {
  // 检查参数个数
  if (arguments.length !== 3) {
    throw new Error('argument 传入有误')
  }

  if (typeof c === 'string' || typeof c === 'number') {
    // 情况1
    return vnode(sel, data, undefined, c, undefined)
  } else if (Array.isArray(c)) {
    // 情况2
    let children = []
    for (let i = 0; i < c.length; i++) {
      if (!(typeof c[i] === 'object' && c[i].hasOwnProperty('sel'))) {
        throw new Error('数组中有非h函数')
      }
      // 收集children
      children.push(c[i])
    }
    // 循环结束，说明children收集结束
    return vnode(sel, data, children, undefined, undefined)
  } else if (typeof c === 'object' && c.hasOwnProperty('sel')) {
    // 情况3
    return vnode(sel, data, [c], undefined, undefined)
  } else {
    throw new Error('函数调用有误')
  }
}
