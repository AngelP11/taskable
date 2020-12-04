import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Card, CardContent, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ScheduleOutlined, AssignmentTurnedIn, AttachFile } from '@material-ui/icons';

import './styles/Header.css'
import { buttons } from '../styles/buttons'
import Team from '../components/Team'
import BarraProgreso from '../components/BarraProgreso'

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
		boxShadow: '0 1px 3px 0 rgba(45, 45, 55, 0.12);',
		cursor: 'pointer',
		marginBottom: 12,
		width: 260,
		margin: 8
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
	completed: {
		opacity: '0.54'
	}
}))

export default function CardTask(props){

	const classes = useStyles()

	return (
		<Draggable draggableId={props.task.id} index={props.index}>
			{(provided, snapshot) => (
				<Card
					{...props}
					className={ props.isCompleted || snapshot.isDragging ? [ classes.card, classes.completed ] : classes.card }
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					<CardContent>
						<div style={{ marginBottom: 5 }}>
							<h2 className={ classes.cardTitle }>{ props.task.content }</h2>
							<Button className={ classes.btn_priority }>Alta</Button>
							<ScheduleOutlined style={{ fontSize: 14, margin: '-3px  5px', color: '#ff8d8d' }} />
							{
								props.isCompleted ? ( <small className={ classes.caption }>Finalizado</small> ) : ( <small className={ classes.caption }>2 días restantes</small> )
							}
						</div>
						<div style={{ width: '100%', }}>
							<BarraProgreso />
						</div>
						<div className="Header-infoTeamContainer" style={{ marginTop: 10 }}>
							<Team />
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
			)}
		</Draggable>
	)
}