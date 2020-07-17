import * as React from 'react'
import { render } from 'react-dom'
import { load as FontLoader } from 'webfontloader'
import { App } from './App/index.tsx'
import './index.css'

FontLoader({
	google: { families: ['Rubik:500,600', 'Work Sans:300,400,500'] }
})

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
	uri: 'https://api.github.com/graphql',
	request: async operation => {
		operation.setContext({
			headers: {
				authorization: process.env.GITHUB_TOKEN
			}
		})
	}
})


render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('app'))