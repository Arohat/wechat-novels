const Router = require('koa-router')
const router = new Router()

const {
    CATEGORY,
    DETAIL,
    CLASSIFY,
    SERIAL
} = require('../url.js');
const api = require('../utils.js');

// 书城
router.get('/category', async ctx => {
    console.log(ctx.query)
    var URL = '';
    if (JSON.stringify(ctx.query) == '{}') {
        URL = CATEGORY;
    } else {
        const {
            type,
            start,
            limit
        } = ctx.query;
        URL = `${CATEGORY}${type}?start=${start}&limit=${limit}`;
    }
    const data = await api.get(URL)
    const res = JSON.parse(data)
    ctx.body = {
        code: 200,
        msg: '获取成功',
        result: res
    }
})
// 书籍详情
router.get('/detail', async ctx => {
    console.log(ctx.query.id)
    const data = await api.get(DETAIL + ctx.query.id)
    const res = JSON.parse(data)
    ctx.body = {
        code: 200,
        msg: '获取成功',
        result: res
    }
})
// 书籍分类
router.get('/classify', async ctx => {
    if (JSON.stringify(ctx.query) != '{}') {
        const {
            tag,
            start,
            limit,
            sort
        } = ctx.query;
        let url = `${CLASSIFY}${encodeURI(tag)}?start=${start}&limit=${limit}&sort=${sort}`;
        const data = await api.get(url)
        const res = JSON.parse(data)
        ctx.body = {
            code: 200,
            msg: '获取成功',
            result: res
        }
    }
})
// 连载分类
router.get('/serial', async ctx => {
    console.log(ctx.query.id)
    let url = '';
    if (JSON.stringify(ctx.query) == '{}') {
        url = SERIAL;
    } else {
        url = SERIAL + ctx.query.id;
    }
    const data = await api.get(url)
    const res = JSON.parse(data)
    ctx.body = {
        code: 200,
        msg: '获取成功',
        result: res
    }
})
// 目录
router.get('/directory', async ctx => {
    console.log(ctx.query)
    const {
        id,
        start,
        limit,
        latestFirst
    } = ctx.query
    const url = `${SERIAL}${ctx.query.id}/chapters?start=${start}&limit=${limit}&latestFirst=${latestFirst}`
    // 31431194/chapters?start=0&limit=10&latestFirst=0`
    const data = await api.get(url)
    const res = JSON.parse(data)
    ctx.body = {
        code: 200,
        msg: '请求成功',
        result: res
    }
})

module.exports = router