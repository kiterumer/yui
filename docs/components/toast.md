---
title: Toast - 土司
---
# Toast

## 提示弹出
**预览**
<toast-demo></toast-demo>

**代码**
```html
<div>
    <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
    <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
    <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
</div>
```