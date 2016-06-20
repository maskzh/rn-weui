# rn-weui [![Build Status](https://travis-ci.org/maskzh/rn-weui.svg?branch=master)](https://travis-ci.org/maskzh/rn-weui) [![npm version](https://img.shields.io/npm/v/rn-weui.svg)](https://www.npmjs.org/package/rn-weui)
一套基于 [Weui](https://github.com/weui/weui) 的 React Native 组件库

### 目录结构

```
rn-weui
├── README.md
├── assets                  # 资源
├── docs                    # 文档说明
├── fonts                   # 字体
├── example                 # 示例代码
├── package.json            # package.json
├── src                     # rn-weui 组件源码
└── test                    # 测试文件
```

### 安装
```shell
# install
npm i rn-weui --save

# link
rnpm link
rnpm link react-native-image-picker
```

### 使用
```js
import { Button } from 'rn-weui'
export default () =>
  <Button type="primary" onPress={() => {}}></Button>
```

### 文档
正在路上...

<!-- - [快速上手](./docs/installation.md)
- [ActionSheet](./docs/actionsheet.md)
- [Button](./docs/button.md)
- [Cell](./docs/cell.md)
- [Dialog](./docs/dialog.md)
- [Form](./docs/form.md)
- [Icon](./docs/icon.md)
- [Mask](./docs/mask.md)
- [Msg](./docs/msg.md)
- [Progress](./docs/progress.md)
- [Toast](./docs/toast.md) -->

### 效果图
![Grid](http://elliott.b0.upaiyun.com/img/1554b80f86!sm)
![Button](http://elliott.b0.upaiyun.com/img/0eaee86242!sm)
<img src="http://elliott.b0.upaiyun.com/img/629cdb855a.gif" width="200" alt="Cell">
![Toast](http://elliott.b0.upaiyun.com/img/7a1c514893!sm)
![Dialog](http://elliott.b0.upaiyun.com/img/ff2041ef74!sm)
![Progress](http://elliott.b0.upaiyun.com/img/bcf87aa546!sm)
![Msg](http://elliott.b0.upaiyun.com/img/a074f60ff3!sm)
![Article](http://elliott.b0.upaiyun.com/img/2b560538a0!sm)
![ActionSheet](http://elliott.b0.upaiyun.com/img/e102bc3e15!sm)
![Icon](http://elliott.b0.upaiyun.com/img/f121200771!sm)
![Panel](http://elliott.b0.upaiyun.com/img/cf3b622b9f!sm)
![Tab](http://elliott.b0.upaiyun.com/img/7a2f8c250d!sm)
![SearchBar](http://elliott.b0.upaiyun.com/img/df211a3def!sm)

### TODO
- <s>Grid</s>
- <s>Button</s>
- <s>Toast</s>
- <s>Msg</s>
- <s>Article</s>
- <s>Icons</s>
- <s>Panel</s>
- <s>Progress</s>
- <s>Tab</s>
- <s>ActionSheet</s>
- <s>Dialog</s>
- <s>SearchBar</s>
- <s>Cell</s>
- test and optimize
- docs

### License
The MIT License(http://opensource.org/licenses/MIT)
