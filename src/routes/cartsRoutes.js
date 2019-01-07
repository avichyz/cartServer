
'use strict';
module.exports = function (app) {
    var cartsManager = require('../controllers/cartsController');

    // routes
    app.route('/carts')
        .get(cartsManager.getAllCarts)
        .post(cartsManager.saveAndUpdateCartPost);
        // .post(cartsManager.saveCart);

    app.route('/carts/:cartId')
        .get(cartsManager.getCart)
        .post(cartsManager.updateCartPost)
        .put(cartsManager.updateCart)
        .delete(cartsManager.deleteCart)
}