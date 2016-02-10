import React from 'react';
import { Link } from 'react-router';
import { LoginLink } from 'react-stormpath';
import DocumentTitle from 'react-document-title';

var Header = require('./Header');

export default class is extends React.Component {
    render() {
        return (
            <DocumentTitle title='Les Petits Marmots'>
                <div className='MasterPage'>
                    <Header/>
                        { this.props.children }
                </div>
            </DocumentTitle>
        );
    }
}