import express from 'express'

const configViewEngine = (app) => {
    app.set('view engine', 'ejs')
    app.set('views', './src/views')
    app.use(express.static('./src/public'))
    // app.use(express.static(__dirname + './src/public'))
}

export default configViewEngine