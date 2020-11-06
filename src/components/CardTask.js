import React from 'react'
import { Grid, Card, CardContent, Box, Typography, Button, LinearProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { NotificationsOutlined, SettingsOutlined, ScheduleOutlined, AssignmentTurnedIn, AttachFile } from '@material-ui/icons';

import { buttons } from '../styles/buttons'

import './styles/Header.css'
import persona1 from '../assets/imagen-4.png'
import persona2 from '../assets/imagen-24.png'
import persona3 from '../assets/imagen-25.png'

const useStyles = makeStyles((theme) => ({
	...buttons,
	btn_priority: {
		backgroundColor: '#ffd3d4',
		height: 20,
		color: '#ff5861',
		fontSize:10,
		textTransform: 'capitalize',
		minWidth: 20,
		lineHeight: '0px',
		padding: 10,
		borderRadius: '4px',
		boxShadow: 'none',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: '#ffbdbd',
			boxShadow: 'none',
		},
	},
	card: {
		borderRadius: '8px',
		boxShadow: '0 1px 3px 0 rgba(45, 45, 55, 0.12);'
	},
	icons: {
		fontSize: '10px',
		color: '#c0c0c0',
		fontFamily: 'Inter-regular',
	},
	cardTitle: {
		fontFamily: 'Inter-regular',
		fontSize: '16px',
		color: '#2d2d37',
		fontWeight: 500,
	},
	caption: {
		color: '#ff5861',
		fontWeight: 300,
		fontSize: '11px',
		fontFamily: 'Inter-regular',
	},
	linearProgress: {
		color: '#f1f1f5',
		borderRadius: '3px',
		backgroundColor: '#f1f1f5',
	},
	barColorPrimary: {
		backgroundColor: '#36ecae'
	},
	completed: {
		opacity: '0.54'
	}
}))


export default function CardTask(props){

	const classes = useStyles()

	return (
		<Card className={ props.isCompleted ? [ classes.card, classes.completed ] : classes.card }>
			<CardContent>
				<div style={{ marginBottom: 5 }}>
					<h2 className={ classes.cardTitle }>{ props.title }</h2>
					<Button className={[ classes.btn_priority ]} >Alta</Button>
					<ScheduleOutlined style={{ fontSize: 14, margin: '-3px  5px', color: '#ff8d8d' }} />
					{
						props.isCompleted ? ( <small className={ classes.caption }>Finalizado</small> ) : ( <small className={ classes.caption }>2 días restantes</small> )
					}
				</div>
				<div style={{ width: '100%', }}>
					<Box style={{ display: 'flex', justifyContent: 'flex-end' }} minWidth={35}>
						<Typography variant="caption" className={classes.icons }>47%</Typography>
					</Box>
					<Box width="100%" mr={1}>
						<LinearProgress variant="determinate" className={[ classes.linearProgress ]} classes={{ barColorPrimary: classes.barColorPrimary }} value="47" />
					</Box>
				</div>
				<div className="Header-infoTeamContainer" style={{ marginTop: 10 }}>
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
					<div className="team_container">
						<div style={{ marginRight: '5px' }}>
							<spam className={classes.icons}>0/2 </spam>
							<AssignmentTurnedIn className={classes.icons} />
						</div>
						<div >
							<spam className={classes.icons}>1 </spam>
							<AttachFile className={classes.icons} />
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}