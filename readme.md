
## 基于webpack，postcss-modules改变css变量名，自动替换html中的class类名

### 使用方式：

1.引入 html-replace-css-module-plugin

```
var HtmlReplaceCssModulePlugin = require('html-replace-css-module-plugin');
```

2.HtmlReplaceCssModulePlugin 要和HtmlWebpackPlugin配合使用，放置在HtmlWebpackPlugin之前

**postcss-modules每次编译会生成一个包含class变换关系的json，作为参数传递给HtmlReplaceCssModulePlugin**

```
plugins:[
    ...
    new HtmlReplaceCssModulePlugin({
        translate: path.resolve(__dirname, './dist/translate/index.json')
    }),
    new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'views/index.html'),
            template: path.resolve(__dirname, 'index.html')
    }),
]


```
