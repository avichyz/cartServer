
let mongoose = require('mongoose');
var assert = require('assert');
let CartsSchema = mongoose.model('Carts');

exports.getAllCarts = function (req, res) {
    CartsSchema.find({}, function (err, cart) {
        if (err) res.send(err);
        res.json(cart);
    });
};

exports.saveCart = function (req, res) {
    let newCart = new CartsSchema(req.body);
    newCart.save(
        function (err, cart) {
            if (err) {
                assert.equal(err.errors['name'].message,
                    'Path `name` is required.');
                res.send(err);
            }
        });
    res.json(cart);
}


exports.saveAndUpdateCartPost = function (req, res) {
    CartsSchema.findOneAndUpdate({ cartId: req.body.cartId }, req.body, { new: true },
        function (err, cart) {
            // if the function found no cart, create one
            if (!cart) {
                let newCart = new CartsSchema(req.body);
                newCart.save(
                    function (err, cart) {
                        if (err) {
                            assert.equal(err.errors['name'].message,
                                'Path `name` is required.');
                            res.send(err);
                        }
                    });
            }

            res.json(cart);
        });
    ;
}


exports.getCart = function (req, res) {
    CartsSchema.findById(req.params.cartId,
        function (err, cart) {
            if (err) res.send(err);
            res.json(cart);
        });
};

exports.updateCartPost = function (req, res) {
    CartsSchema.findOneAndUpdate({ cartId: req.params.cartId }, req.body, { new: true },
        function (err, cart) {
            console.log(cart)
            if (err) res.send(err);
            res.json(cart);
        });
    ;
}

exports.updateCart = function (req, res) {
    CartsSchema.findOneAndUpdate({ _id: req.params.cartId }, req.body, { new: true },
        function (err, cart) {
            console.log(cart)
            if (err) res.send(err);
            res.json(cart);
        });
    ;
}
exports.deleteCart = function (req, res) {
    CartsSchema.remove({
        _id: req.params.cartId
    },
        function (err, cart) {
            if (err) res.send(err);
            res.json({ message: 'Cart was succefully deleted' });
        });
};

// exports.findCarts = function (req, res) {
//     return CartsSchema.find({ $text: { $search: req.params.searchString} },
//         function (err, cart) {
//         console.log(req.params.name);
//             if (err) res.send(err);
//         res.json(cart)
//     })
// }
