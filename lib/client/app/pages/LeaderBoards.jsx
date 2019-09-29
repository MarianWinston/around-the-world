import React, {useState, useRef} from 'react'
import '../styles/home.scss'
import Button from '@material-ui/core/Button'
import {TextInput} from 'react-materialize-forms'

const addPlayer = (player) => ({
	person: player,
	wins: 0,
})

const setWins = (players, idx) => {
	players[idx].wins += 1
}

function LeaderBoards() {
	const [players, setPlayers] = useState([])
	const [name, setName] = useState(null)
	const plNameIn = useRef(null)

	const addWin = (idx) => {
		setWins(players, idx)
		setPlayers([...players])
	}

	const createPlayer = () => {
		const playerName = name
		const newPlayer = addPlayer(playerName)

		if (!players.some((player) => player.person === newPlayer.person)) {
			const newPlayerList = [newPlayer, ...players]
			setPlayers(newPlayerList)
		}
	}

	return (
		<div>
			<h1>Add a player</h1>
			<div className="row">
				<div className="col m8">
					<TextInput label="Player Name" onChange={(value) => setName(value)} />
				</div>
				<div className="col m4">
					<Button onClick={createPlayer} variant="contained" color="secondary"> New Player </Button>
				</div>
			</div>
			<ul className="container">
				{players.map((player, idx) => (
					<li className="item" key={`${idx}-${player.person}`}>Name: {player.person} Wins: {player.wins} <Button onClick={() => addWin(idx)}>Increase Wins</Button></li>
				))}
			</ul>
		</div>
	)
}

export default LeaderBoards
