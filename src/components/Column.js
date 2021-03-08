import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Dialog, DialogContentText, DialogContent, Box } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Add from '@material-ui/icons/Add';

/* Components */
import CardTask from '../components/CardTask'
import ExpandedList from '../components/ExpandedList'

const useStyles = makeStyles((theme) => ({
	column_name: {
		textAlign: 'left',
		textTransform: 'capitalize',
		boxShadow: 'none',
		backgroundColor:'transparent',
		borderBottom: '1px solid grey',
		color: '#2d2d37',
		borderRadius: 0,
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between'
	},
	column_name__title: {
		fontFamily: "Inter-regular",
		fontSize: '20px',
		paddingBottom:'14px',
	},
	addTaskBtn: {
		width: '100%',
		backgroundColor:'#fff',
		fontSize: '17px',
		fontWeight: '500',
		fontFamily: "Inter-medium",
		paddingTop: '12px',
		paddingBottom: '12px',
		display: 'flex',
		justifyContent: 'center',
		color: '#2d2d37',
		opacity: '56%',
		textTransform: 'capitalize',
		borderRadius: '8px',
		boxShadow: '0 1px 3px 0 rgba(45, 45, 55, 0.12);',
		'&:hover': {
			backgroundColor: '#fff',
			cursor: 'pointer',
		},
	},
	isDraggingOverClass: {
		backgroundColor: "lightgrey",
		borderRadius: 8,
	},
	m8: {
		padding: 10
	}
}))

export default function Column (props) {
	const classes = useStyles()

	const [open, setOpen]       = React.useState(false)
	const [value, setValue]     = React.useState(false)
	// const [checked, setChecked] = React.useState([0]);

	return (
		<Draggable draggableId={props.column.id} index={props.index}>
			{(provided) => (
				<React.Fragment>
					<div
						{...provided.draggableProps}
						ref={provided.innerRef}
					>
						{/* Titulo */}
						<div className={ classes.m8 }>
							<Box className={[ classes.column_name ]} {...provided.dragHandleProps}>
								<span className={[classes.column_name__title]}>{props.column.title}</span>
								<MoreHorizIcon />
							</Box>
						</div>

						{/* Agregar tarea */}
						<div className={ classes.m8 }>
							<Box className={[ classes.addTaskBtn ]}>
								<Add />
								<span>Nueva Tarea</span>
							</Box>
						</div>

						{/* Tareas */}
						<Droppable droppableId={props.column.id} type="task">
							{(provided, snapshot) => (
								<div style={{ width: 340 }}>
									<Grid
										item
										{...provided.droppableProps}
										innerRef={provided.innerRef}
										className={  snapshot.isDraggingOver ? [classes.isDraggingOverClass] : "" }
									>
										{ props.tasks.map((task, index) => {
											return <CardTask onClick={ () => setOpen(true) } key={task.id} task={task} index={index}/> })
										}
										{ provided.placeholder }
									</Grid>
								</div>
							)}
						</Droppable>
					</div>

					<Dialog
						open={open}
						onClose={ () => setOpen(false) }
						fullWidth={true}
						scroll="body"
						maxWidth="sm"
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<DialogContent>
							<DialogContentText id="alert-dialog-description">

								<ExpandedList onCerrar={() => setOpen(false)} value={value} />

							</DialogContentText>
						</DialogContent>
					</Dialog>
				</React.Fragment>
			)}
		</Draggable>
	)
}