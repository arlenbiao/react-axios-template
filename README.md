# React-axios 

## 这是一个React + axios数据请求的模版项目

### 1、首先需要克隆项目

```
git clone https://github.com/arlenbiao/react-axios-template.git
```

### 2、首次用脚手架初始化需要上传到git项目
```
cd 进入项目目录

git add .

git commit -m '更新'

git push


tips:如果不上传到git项目里面会出现不了配置文件

```
### 3、然后执行命令行，暴露配置文件
```
npm run eject 
```
### 4、打开config里面的【webpackDevServer.config.js】文件

### 5、找到【proxy】代理设置，改成如下
```
proxy: {
    '/api': {
        target: '这里写你请求的域名即可',
        changeOrigin: true,
    }
}

```
### 6、如何需要配置多个不同域名的请求
```
proxy: {
    '/apia': {
        target: '这里写你请求的域名即可',
        changeOrigin: true,
    },
    '/apib': {
        target: '这里写你请求的域名即可',
        changeOrigin: true,
    },
    '/apic': {
        target: '这里写你请求的域名即可',
        changeOrigin: true,
    }
}
```
### 7、请求的时候
```
axios.post("/api/xxxx",{}).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})
```

### 8、新增sass功能，新增路由功能【react-router-dom】
```
npm install --save node-sass css-loader style-loader react-router-dom

tips：npm下载估计会很慢，可以采用cnpm 淘宝镜像

----------------
npm install -g cnpm --registry=https://registry.npm.taobao.org
----------------

```

## 关注我，从此踏上踩坑的不归路，踩坑从我开始

# 个人归纳总结，给个星星吧
