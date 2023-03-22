const express = require('express')
const { addProductToCart, removeProductFromCart, calculateCartCost } = require('../controller/cartController')


const router = express.Router()



router.post('/', addProductToCart)

router.post('/remove', removeProductFromCart)

router.post('/getCartPrice', calculateCartCost)





module.exports = router