import React from 'react'
import Router from './Router'
import ErrorBoundary from './components/ErrorBoundary'

export const App = () => {
	return (
		<ErrorBoundary>
			<Router />
		</ErrorBoundary>
	)
}