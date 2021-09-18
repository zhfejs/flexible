# @zhfejs/flexible

> 大屏适配解决方案脚本

# npm 安装

```javascript
    npm i  @zhfejs/flexible -S
```

# 引入

在 main.js 中写入以下内容：

```javascript
import { CssScale } from '@zhfejs/flexible';

new CssScale({scaleControlEl, designWidth, rootEl});
```

CDN

```html
<script src="https://unpkg.com/@zhfejs/flexible@0.0.4/lib/flexible.umd.js"></script>
<script>
  var CssScale = window['@zhfejs/flexible'].CssScale;
  new CssScale({scaleControlEl, designWidth, rootEl});
</script>
```

### CssScale类属性配置说明

| 名称              | 类型                           | 默认值      | 必选 | 说明 |
| ----------------- | ------------------------------ | ----------- | ---- | ---- |
| scaleControlEl | string/HTMLElement | body |  否  |  缩放控制dom节点  |
| designWidth | number | 1920 |  否   |   设计稿宽度   |
| rootEl | string/HTMLElement | body>div |  否   |  视图dom根节点    |
