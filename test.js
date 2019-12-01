const func = require('./puppeteer')

const promise = new Promise((res, rej) => {
    res(func())
})

promise.then(value => console.log(value))