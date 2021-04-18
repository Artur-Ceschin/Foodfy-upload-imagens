const express = require('express')
const routes = express.Router()
// const multer = require('./app/middlewares/multer')


routes.get("/", function (req, res) {
    return res.render('admin/layout')
})


module.exports = routes