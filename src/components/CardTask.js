import React from 'react'
import { Grid, Card, CardContent, Box, Typography, Button, LinearProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { NotificationsOutlined, SettingsOutlined, ScheduleOutlined } from '@material-ui/icons';

import { buttons } from '../styles/buttons'

import './styles/Header.css'
import persona1 from '../assets/imagen-4.png'
import persona2 from '../assets/imagen-24.png'
import persona3 from '../assets/imagen-25.png'

const useStyles = makeStyles((theme) => ({
	...buttons,
	btn_priority: {
		backgroundColor: '#ffbdbd',
		height: 20,
		color: '#ff8d8d',
		fontSize:12,
		textTransform: 'capitalize',
		minWidth: 20,
		lineHeight: '0px',
		padding: 10,
		boxShadow: 'none',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: '#ffbdbd',
			boxShadow: 'none',
		},
	},
}))


export default function CardTask(props){

	const classes = useStyles()

	return (
		<Card>
			<CardContent>
				<div style={{ marginBottom: 5 }}>
					<Typography variant="subtitle2" style={{ marginBottom: 10 }} component="h2" gutterBottom>{ props.title }</Typography>
					<Button className={[ classes.btn_priority ]} variant="contained">Alta</Button>
					<ScheduleOutlined style={{ fontSize: 14, margin: '-3px  5px', color: '#ff8d8d' }} />
					<Typography variant="caption" style={{ color: '#ff8d8d' }} component="small">2 dias restantes</Typography>
				</div>
				<div style={{ width: '100%', }}>
				    <Box style={{ display: 'flex', justifyContent: 'flex-end' }} minWidth={35}>
				    	<Typography variant="caption" style={{ color: '#aaa', fontSize: '12px' }}>47%</Typography>
				    </Box>
					<Box width="100%" mr={1}>
						<LinearProgress variant="determinate" value="47" />
					</Box>
				</div>
				<div className="Header-infoTeamContainer" style={{ marginTop: 10 }}>
                    <div className="Header-infoTeam" >
                    	<img src={persona1} alt="1"/>
                    </div> 
                    <div className="Header-infoTeam">
                        <img id="member1" src={persona1} alt="1"/>
                        <img id="member2" src={persona2} alt="2"/>
                        <img id="member3" src={persona3} alt="3"/>
                    </div>
                </div>
			</CardContent>
		</Card>
	)
}