import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Layout from './Layout'
import LeaderBoards from './pages/LeaderBoards'

const App = () => (
	<Layout>
		<Router>
			<Route exact path="/" component={LeaderBoards} />
		</Router>
	</Layout>
)

window.addEventListener('DOMContentLoaded', () => {
	const entry = document.getElementById('root')
	render(<App />, entry)
})
