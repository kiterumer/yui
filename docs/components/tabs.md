---
title: Tabs - 标签
---
# 标签

## 简单用法
**预览**
<tabs-demo></tabs-demo>

**代码**
```html
<g-tabs :selected="selected">
    <g-tabs-head>
        <g-tabs-item name="1">1</g-tabs-item>
        <g-tabs-item name="2">2</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
        <g-tabs-pane name="1">stay hungry</g-tabs-pane>
        <g-tabs-pane name="2">stay foolish</g-tabs-pane>
    </g-tabs-body>
</g-tabs>
```
```javascript
data () {
  return {
    selected: '1',
  }
}
```

