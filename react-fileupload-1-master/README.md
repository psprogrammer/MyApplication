# @mtfe/react-fileupload
---
[![NPM version](http://npm.sankuai.com/badge/v/@mtfe/react-fileupload.svg?style=flat-square)](http://npm.sankuai.com/package/@mtfe/react-fileupload)
[![Build Status](http://castle.sankuai.com/api/badge/liuxijin/turbo-component)](http://castle.sankuai.com/gh/liuxijin/turbo-component)

## Install

```
npm --registry=http://r.npm.sankuai.com install @mtfe/react-fileupload
```

## Development

```
git clone [git@github.com:sprintsun/react-fileupload.git]
npm --registry=http://r.npm.sankuai.com install
npm start
```

## Usage

```js
var Component = require('@mtfe/react-fileupload');
var React = require('react');
React.render(<Component />, container);
```

## Compare
![compare](http://mss.vip.sankuai.com/v1/mss_758360c7d14e488b9e97cd68043246d0/paste/pHEC3In.jpg 'compare')

## API

### props


| 参数       | 说明                                        | 类型      |  可选值        | 默认值  |
|------------|---------------------------------------------|-----------|----------------|---------|
|  cls      |  组件class                       | string    |                         |  aloha-file-upload|
|  style      |  自定义样式                      | object    |                         |  {}|
|  req.url      |  文件上传服务器地址,必须设置                       | string / function   |                         |  ''|
|  req.timeout  |  超时时间(单位毫秒), 0为不限制超时时间           | number    |                |  0|
|  req.data     |  上传时需要一起提交的数据  | object    |                |  null |
|  req.headers     |  附加在request header上的键值对  | object    |                |  null |
|  req.dataType |  预期服务器返回的数据类型                       | string    |       'json' / 'text'         |  json|
|  req.postType |  上传方式，'': 直接上传 / form: FormData / blob: Blob / buffer: FileReader | string    |    '' / 'form' / 'blob' / 'buffer'         |  'form' |
|  name      |  服务端接收文件的key           | string    |                |  files[] |
|  filename      |  自定义上传文件的文件名          | string / function    |                |  file.name |
|  accept      |  支持上传的文件类型, 具体使用请参考HTML5 input 标签的accept 属性           | string    |                |  * |
|  maxSize   |  文件大小限制, 单位支持['B', 'KB', 'MB', 'GB', 'TB'], 如果没传单位则默认为B          | string    |   |  5MB      |
|  maxFiles      |  最大可以上传文件数量，-1不限制           | number    |             |  -1     |
|  maxWaitFiles      |  最大允许等待上传的文件数量，-1不限制        | number    |             |  -1      |
|  concurrent      |  并发上传数量           | number    |                                  |  2      |
|  multiple      |  是否允许选择多文件上传           | boolean    |                              |  true      |
|  disabled      |  组件是否禁用           | boolean    |                                      |  false      |
|  allowSameFile   |  一次上传操作后, 是否允许选择相同的文件继续上传       | boolean     |           |  true   |
|  uploadChecker   | 额外的上传检查, 在所有自带的检查完成后触发, 返回true才会被添加到上传队列中                | function     |                         |  noop   |
|  resultChecker   | 结果检查, 返回true才会触发上传的success事件                | function     |                         |  noop   |
|  events     |   组件事件对象   | object | |  null |
|  clipboardData      |  剪贴板数据, 更新该属性, 传入event.clipboardData可以触发上传事件                      | object    |                         |  null|
|  files      |  上传的文件, 更新该属性, 传入files对象可以触发上传事件                      | array    |                         |  null|
|  dropNode      |  拖拽组件节点, 更新该属性, 传入组件节点可以通过拖拽事件触发上传事件                      | object    |                         |  null|
|  abortFileIndex      |  需要终止上传的文件索引, 更新该属性, 可以中止文件上传                       | number    |                         |  -1|
|  removeFileIndex     |  需要移除文件的文件索引, 更新该属性, 可以中止文件上传, 从等待队列/成功上传队列/上传失败队列 中删除文件    | number | |   -1|

### event

| 事件名       | 说明                                        | 参数      |
|------------|---------------------------------------------|-----------|
|  overUploadLimit     |   文件总上传数量超过限制   | file |
|  notAllow     |   所选文件类型不在允许上传类型的列表内   | file |
|  zeroFileSize     |   上传文件为空   | file |
|  overSizeLimit     |   上传文件大小超过限制   | file |
|  overWaitLimit     |   文件等待上传数量超过限制   | file |
|  afterChecked     |   添加的所有文件检查后   | files |
|  start     |   单个文件上传开始   | file |
|  progress     |   单个文件上传中   | loaded, total, percentage, file |
|  success     |   单个文件上传成功   | data, file |
|  error     |   单个文件上传失败   | error, file |
|  timeout     |   单个文件上传超时   | error, file |
|  finish     |   所有文件上传完成   | succList, failList |


## Question
Q: 如何获取file的index参数?           
A: 在添加到等待队列过程中,file对象都被注入了index属性, 可以通过各种事件暴露的file参数的file.index获取

Q: afterChecked事件什么时候触发?           
A: 通过各种检查后(包括如果有自定义的uploadChecker), 在添加到等待上传队列前触发

Q: 为什么我对props.files赋值了, 却没有触发上传?           
A: props.files等属性, 必须通过"更新该属性"才能够触发上传, 初始时就赋值并无法触发.

Q: 支持哪些浏览器?            
A: 目前只在最新版的chrome上测试过

## License

@mtfe/react-fileupload is released under the MIT license.
