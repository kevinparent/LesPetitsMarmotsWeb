var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CartConstants = require('../constants/CartConstants');
var _ = require('underscore');

var _product = {}, _select = null;

function loadProductData(data) {
    _product = data[0];
    _select = data[0].variants[0];
}

function setSelected(index) {
    _select = _products.variants[index];
}

var ProductStore = _.extend({}, EventEmitter.prototype, {

  // Return Product data
  getProduct: function() {
    return _product;
  },

  getSelected: function(){
    return _select;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});
        
AppDispatcher.register(function(payload) {
    var action = payload.action;
    var text;
    
    switch(action.actionType) {
        case CartConstants.RECEIVE_DATA:
            loadProductData(action.data);
            break;
        
        case CartConstants.SELECT_PRODUCT:
            setSelected(action.data);
            break;
            
        default:
            return true;
    }
    
    ProductStore.emitChange();
    return true;
});

module.exports = ProductStore;