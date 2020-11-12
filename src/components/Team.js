import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import './styles/Header.css'
import persona1 from '../assets/imagen-4.png'
import persona2 from '../assets/imagen-24.png'
import persona3 from '../assets/imagen-25.png'

const useStyles = makeStyles((theme) => ({
	icons: {
		fontSize: '10px',
		color: '#c0c0c0',
		fontFamily: 'Inter-regular',
	}
}))

export default function Team(props){

	let classes = useStyles()

	return (
		<>
			<div className="team_container">
				<div className="Header-infoTeam persona1" >
					<img src={persona1} alt="1"/>
				</div>
				<div className="Header-infoTeam">
					<img id="member1" src={persona1} alt="1"/>
					<img id="member2" src={persona2} alt="2"/>
					<img id="member3" src={persona3} alt="3"/>
					<span id="member4" className={ classes.icons }>+3</span>
				</div>
			</div>
		</>
	)	
}