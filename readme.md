### Vue Diff

1. 虚拟DOM：用JavaScript对象描述DOM的层次结构，DOM中的一切属性在虚拟DOM中有对应的属性。
2. 新的虚拟DOM和旧的虚拟DOM进行diff（精细化比较），算出最小量更新，最后反映到真实DOM。

h函数用来产生虚拟节点（vnode）
```js
vnode = {
  children: undefinend,
  data: {},
  elm: undefinend,
  key: undefinend,
  sel: "div",
  text: "Hello world"
}
```

diff 算法只比较同层
```js
<div>
  <p>item1</p>
  <p>item2</p>
  <p>item3</p>
</div>

<div>
  <section>
    <p>item1</p>
    <p>item2</p>
    <p>item3</p>
  </section>
</div>

// diff 会将旧dom的div下子元素直接删除，再放入section
```
