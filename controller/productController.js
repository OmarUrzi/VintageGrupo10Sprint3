let productos = require('../data/datosProductos')

let productController = {

    index: (req, res) => {
        res.render('adminProducts', { productos })
    },
    edit: (req, res) => {
        res.render('edit', { productos })
    },
    detail: (req, res) => {
        res.render('detail-product', { productos })
    },
    create: (req, res) => {
        res.render('create')
    }
}

module.exports = productController