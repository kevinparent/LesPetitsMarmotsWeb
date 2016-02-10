import React from 'react';
import { Link } from 'react-router';
import { LoginLink, LogoutLink, Authenticated, NotAuthenticated } from 'react-stormpath';

var Cart = require('./Cart');
var CartStore = require('../stores/CartStore');
var ProductStore = require('../stores/ProductStore');
var Product = require('./Product');

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

var Header = React.createClass ({
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
    
    _onChange: function() {
        this.setState(getCartState());
    },   
    
    render: function() {
        return(
           <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div id="navbar-collapse" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li><Link to="/">Home</Link></li>
                    <Authenticated>
                      <li>
                        <Link to="/profile">Profile</Link>
                      </li>
                    </Authenticated>
                    <Authenticated>
                        <li><Cart products={this.state.cartItems} count={this.state.cartCount} total={this.state.cartTotal} visible=     {this.state.cartVisible} /></li>
                    </Authenticated>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <NotAuthenticated>
                        <li>
                            <LoginLink />
                        </li>
                    </NotAuthenticated>
                    <NotAuthenticated>
                      <li>
                        <Link to="/register">Create Account</Link>
                      </li>
                    </NotAuthenticated>
                    <Authenticated>
                      <li>
                        <LogoutLink />
                      </li>
                    </Authenticated>
                </ul>
              </div>
            </div>
          </nav>
        )}
});

module.exports = Header;