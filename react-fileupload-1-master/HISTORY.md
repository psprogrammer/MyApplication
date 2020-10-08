HISTORY
=======================

## 0.0.1
first commit

## 0.0.2
更新readme.md和package.json

## 0.0.3
* 修复文件后缀检查bug
* 修改blob类型文件上传逻辑
* 优化从剪贴板添加上传文件的逻辑
* 更新readme.md, props.files类型有误, 现修改为array
* 完善advance示例

## 0.0.4
* 增加props.filename属性,支持自定义上传文件的文件名
* props.req.url现在还支持函数, 可以在上传操作中动态改变url地址了
* 完善props.files类型检查

## 0.0.5
* props.filename支持函数

## 0.1.0
* 修复props.files类型检查时使用FileList导致无法在使用服务端渲染的bug
* advance demo 新增对剪贴板上传文件文件名的处理
* 更新readme.md, 新增竞品比较介绍

## 0.1.1
* 移除内置form节点, 现在通过(file.value = '')来清空file, 规避嵌套form表单的问题