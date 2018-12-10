
'use strict';
module.exports = function (app) {
    var cartsManager = require('../controllers/cartsController');

    // routes
    app.route('/carts')
        .get(cartsManager.getAllCarts)
        .post(cartsManager.saveCart);

    app.route('/carts/:cartId')
        .get(cartsManager.getCart)
        .put(cartsManager.updateCart)
        .delete(cartsManager.deleteCart)
}