import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Card, CardContent, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ScheduleOutlined, AssignmentTurnedIn, AttachFile } from '@material-ui/icons';

/* Components */
import Label from './Label'

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
		fontSize:14,
		textTransform: 'capitalize',
		minWidth: 20,
		lineHeight: '0px',
		padding: 12,
		borderRadius: '6px',
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
		margin: 10,
		paddingTop: 18,
	},
	icons: {
		fontSize: '12px',
		color: '#c0c0c0',
	},
	iconsText: {
		fontSize: '10px',
		color: '#c0c0c0',
		fontFamily: 'Inter-regular !important',
	},
	cardTitle: {
		fontFamily: 'Inter-regular !important',
		fontSize: '16px',
		color: '#2d2d37',
		fontWeight: 500,
		margin: 0
	},
	caption: {
		color: '#ff5861',
		fontWeight: 300,
		fontSize: '11px',
		fontFamily: 'Inter-regular !important',
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
					<CardContent style={{ paddingTop: 0, paddingBottom: 5 }}>
						<div style={{ marginBottom: 5 }}>
							<h2 className={ classes.cardTitle }>{ props.task.content }</h2>
							<div style={{ display: 'flex', alignItems: 'center', marginTop: 12 }}>
								<Label value="Baja" priority="low" />
								{/* <Button className={ classes.btn_priority }>Alta</Button> */}
								<ScheduleOutlined style={{ fontSize: 16, margin: '-3px  5px', color: '#ff8d8d' }} />
								{
									props.isCompleted ? ( <small className={ classes.caption }>Finalizado</small> ) : ( <small className={ classes.caption }>2 días restantes</small> )
								}
							</div>
						</div>
						<div style={{ width: '100%', }}>
							<BarraProgreso />
						</div>
						<div className="Header-infoTeamContainer" style={{ marginTop: 10, marginBottom: 10,  }}>
							<Team />
							<div className="team_container">
								<div style={{ marginRight: '5px' }}>
									<span className={classes.iconsText}>0/2 </span>
									<AssignmentTurnedIn className={classes.icons} />
								</div>
								<div >
									<span className={classes.iconsText}>1 </span>
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