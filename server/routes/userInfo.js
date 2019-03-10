const Router = require('koa-router');
const router = new Router();

const api = require('../utils.js');

router.get('/openId', async ctx => {
    console.log(ctx.query.code)
    // appid, 密钥，code
    const LOGININFO = {
        APPID: 'wx7761e58c1f411f15',
        SECRET: '47e1f6809d6f077dbde88d279fb709d3',
        JS_CODE: ctx.query.code
    }
    const OPTS = {
        URL: `https://api.weixin.qq.com/sns/jscode2session?appid=${LOGININFO.APPID}&secret=${LOGININFO.SECRET}&js_code=${LOGININFO.JS_CODE}&grant_type=authorization_code`
    }
    // 登录凭证校验
    try {
        const res = await api.get(OPTS.URL);
        if (!res.errcode) {
            ctx.body = {
                code: 200,
                msg: '获取成功',
                result: JSON.parse(res)
            }
        } else {
            ctx.body = {
                code: 500,
                msg: '获取失败',
                err: JSON.parse(res)
            }
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;