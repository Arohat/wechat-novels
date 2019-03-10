const request = require('request');

module.exports = {
    get(opts) {
        return new Promise((resolve, reject) => {
            request(opts, (err, response, body) => {
                if (!err && response.statusCode == 200) {
                    resolve(body)
                } else {
                    reject(err)
                }
            })
        })
    },
    post(opts) {
        return new Promise((resolve, reject) => {
            /**
             * @params(url, form)
             */
            request.post(opts, (err, response, body) => {
                if (!err && response.statusCode == 200) {
                    resolve(body)
                } else {
                    reject(err)
                }
            })
        })
    }
}