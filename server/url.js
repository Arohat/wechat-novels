const BASE_URL = 'https://read.douban.com/j'

module.exports = {
    // 书籍首页
    CATEGORY: `${BASE_URL}/category/`,
    // 书籍详情页 @params(id)
    DETAIL: `${BASE_URL}/ebook/`,
    // 书籍分类
    CLASSIFY: `${BASE_URL}/tag/`,
    // 连载
    SERIAL: `${BASE_URL}/column_v2/`
}