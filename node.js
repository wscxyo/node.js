var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

Response.statusCode=200
Response.setHeader('Content-Type','text/html;charset=utf-8') 
const filePath=path==='/'?'/index.html':path
const index=filePath.lastIndexOf('.')
const suffix=filePath.substring(index)
const fileTyepes={
    '.html':'tex/html',
    '.css':'text/css',
    '.js':'text/javascript',
    '.png':'image/png',
    '.jpg':'image/jpeg'
}
response.setHeader('Contenet-Type',`${fileTypes[suffix]||'text/html'};charset=utf-8`)

let Content
try{
    content=fs.readFileSync(`./public${filePath}`)
}catch(error){
    content='文件不存在'
    response.statusCode=404
}
response.write(content)
response.end()

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port) 