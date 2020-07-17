import * as React from 'react'
import Router from './Router.tsx'
import ErrorBoundary from './components/ErrorBoundary/index.tsx'
import { AppContainer } from 'react-hot-loader';

export const App = () => {
	return (
		<AppContainer>
			<ErrorBoundary>
				<Router />
			</ErrorBoundary>
		</AppContainer>
	)
}