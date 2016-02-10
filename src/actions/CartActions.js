var AppDispatcher = require('../dispatcher/AppDispatcher');
var CartConstants = require('../constants/CartConstants');

var CartActions = {
    receiveProduct: function(data) {
        AppDispatcher.handleAction({
            actionType: CartConstants.RECEIVE_DATA,
            data: data            
        })
    },
    
    selectProduct: function(data) {
        AppDispatcher.handleAction({
            actionType: CartConstants.SET_SELECTED,
            data: data
        })
    },
    addToCart: function(sku, update) {
        AppDispatcher.handleAction({
            actionType: CartConstants.CART_ADD,
            sku: sku,
            update: update
        })
    },
    removeFromCart: function(sku) {
        AppDispatcher.handleAction({
            actionType: CartConstants.CART_REMOVE,
            sku: sku
        })
    },
    updateCartVisible: function(cartVisible) {
        AppDispatcher.handleAction({
            actionType: CartConstants.CART_VISIBLE,
            cartVisible: cartVisible
        })
    }
};

module.exports = CartActions;