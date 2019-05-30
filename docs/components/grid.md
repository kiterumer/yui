---
title: Grid - 网格
---

# 网格

## 无缝网格布局

**预览**
<grid-demo></grid-demo>

**代码**

```html
<g-row class="demoRow">
  <g-col span="8"><div class="demoCol">8</div></g-col>
  <g-col span="8"><div class="demoCol">8</div></g-col>
  <g-col span="8"><div class="demoCol">8</div></g-col>
</g-row>
<g-row class="demoRow">
  <g-col span="6"><div class="demoCol">6</div></g-col>
  <g-col span="6"><div class="demoCol">6</div></g-col>
  <g-col span="6"><div class="demoCol">6</div></g-col>
  <g-col span="6"><div class="demoCol">6</div></g-col> 
</g-row>
<g-row class="demoRow">
  <g-col span="4"><div class="demoCol">4</div></g-col>
  <g-col span="4"><div class="demoCol">4</div></g-col>
  <g-col span="4"><div class="demoCol">4</div></g-col>
  <g-col span="4"><div class="demoCol">4</div></g-col>
  <g-col span="4"><div class="demoCol">4</div></g-col>
  <g-col span="4"><div class="demoCol">4</div></g-col>
</g-row>
<g-row class="demoRow">
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
</g-row>
```
## 设置gutter网格布局
**预览**
<grid-gutter-demo></grid-gutter-demo>

**代码**
```html
<g-row class="demoRow" gutter="10">
    <g-col span="8"><div class="demoCol">8</div></g-col>
    <g-col span="8"><div class="demoCol">8</div></g-col>
    <g-col span="8"><div class="demoCol">8</div></g-col>
</g-row> 
<g-row class="demoRow" gutter="10">
    <g-col span="6"><div class="demoCol">6</div></g-col>
    <g-col span="6"><div class="demoCol">6</div></g-col>
    <g-col span="6"><div class="demoCol">6</div></g-col>
    <g-col span="6"><div class="demoCol">6</div></g-col>
</g-row> 
```
