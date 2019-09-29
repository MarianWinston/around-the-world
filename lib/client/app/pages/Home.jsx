import React, {useState, useEffect} from 'react'
import '../styles/home.scss'

function Home() {
	const [count, setCount] = useState(0);
	const [sqrtCount, setSqrtCount] = useState(Math.sqrt(count));

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>
				Click me!
			</button>
			<p>Its square root is {sqrtCount}</p>
			<button onClick={() => setSqrtCount(Math.sqrt(count))}>
				Click me!
			</button>
		</div>
	)
}

export default Home
