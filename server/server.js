const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

const userInfo = require('./routes/userInfo');
const book = require('./routes/book');
router.use('/userInfo', userInfo.routes());
router.use('/book', book.routes());
app.use(router.routes(), router.allowedMethods());

app.use(async ctx => {
    ctx.body = `<h1>微信小程序服务端项目</h1>`
})
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`server is listen ${PORT}`)
})