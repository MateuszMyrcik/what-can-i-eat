import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost'


export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        const clientParam = { uri: '/graphql' };
        const client = new ApolloClient(clientParam);

        return (
            <div>
                <NavMenu />
                <Container>
                    <ApolloProvider client={client} >
                        {this.props.children}
                    </ApolloProvider>
                </Container>
            </div>
        );
    }
}