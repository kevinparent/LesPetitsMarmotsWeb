import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import { LoginLink } from 'react-stormpath';

export default class IndexPage extends UserComponent {
    render() {
        return (
          <div className="container">
            <h1>Les Petits Marmots</h1>
            <h2>Conception et fabrications de vêtements et accessoires pour bébés et enfants</h2>
          </div>
        );
    }      
}