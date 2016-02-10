var React = require('react');
var CartStore = require('../stores/CartStore');
var ProductStore = require('../stores/ProductStore');
var Product = require('./Product');
var Cart = require('./Cart');


function getCartState() {
    return {
        product: ProductStore.getProduct(),
        selectedProduct: ProductStore.getSelected(),
        cartItems: CartStore.getCartItems(),
        cartCount: CartStore.getCartCount(),
        cartTotal: CartStore.getCartTotal,
        cartVisible: CartStore.getCartVisible()
    }
}

var Test = React.createClass({
    getInitialState: function() {
        return getCartState();
    },
    
    componentDidMount: function() {
        ProductStore.addChangeListener(this._onChange);
        CartStore.addChangeListener(this._onChange);
    },
    
    componentWillUnmount: function() {
        ProductStore.removeChangeListener(this._onChange);
        CartStore.removeChangeListener(this._onChange);
    },
    
    render: function () {
        return (
            <div className="cart">
                <Cart products={this.state.cartItems} count={this.state.cartCount} total={this.state.cartTotal} visible=     {this.state.cartVisible} />
                <Product product={this.state.product} cartitems={this.state.cartItems} selected={this.state.selectedProduct} />
            </div>
        );
    },
    _onChange: function() {
        this.setState(getCartState());
    }
    
});

module.exports = Test;