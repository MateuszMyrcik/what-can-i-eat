import './App.css';
import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import LandingPage from './components/LandingPage'
import 'cross-fetch/polyfill';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
    fetchOptions: {
        mode: 'no-cors',
    }
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div>
                <h2>My first Apollo app 🚀</h2>
                <LandingPage></LandingPage>
            </div>
        </ApolloProvider>
    );
}

export default App;
