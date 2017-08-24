## art在大文件模板下存在较大性能问题
数据如下：

```txt
> node index.js
Example app listening at http://:::3000
render-end------bigfile----> 14874
render-end-----fast-----> 17
```
### 复现步骤
```bash
npm i
node index.js
```

访问127.0.0.1：3000/ 和 /fast
