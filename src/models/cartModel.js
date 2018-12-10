'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CartsSchema = new Schema({
  // some kind of identifier for the cart
  cartId: {
    type: String
  },
  buyerId: {
    type: String
  },
  // when this cart was added to trhe system
  createdDate: {
    type: Date,
    default: Date.now
  },
  // when this cart got an update
  updateDate: {
    type: Date,
    default: Date.now
  },
  isInLoad: {
    type: Boolean,
    default: true
  },
  batteryPercentage: {
    type: Number
  },
  longitude: {
    type: String
  },
  latitude: {
    type: String
  },
  info: {
    type: String
  }
});

CartsSchema.index({ '$**': 'text' });

module.exports = mongoose.model('Carts', CartsSchema);