import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Dialog, DialogContentText, DialogContent } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Add from '@material-ui/icons/Add';

/* Components */
import CardTask from '../components/CardTask'
import ExpandedList from '../components/ExpandedList'

const useStyles = makeStyles((theme) => ({
	button_column_name: {
		textAlign: 'left',
		textTransform: 'capitalize',
		boxShadow: 'none',
		backgroundColor:'transparent',
		borderBottom: '1px solid grey',
		color: 'grey',
		borderRadius: 0,
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between'
	},
	addTaskBtn: {
		width: '100%',
		backgroundColor:'#fff',
		color: '#2d2d37',
		opacity: '56%',
		textTransform: 'capitalize',
		borderRadius: '8px',
		boxShadow: '0 1px 3px 0 rgba(45, 45, 55, 0.12);',
		'&:hover': {
			backgroundColor: '#fff',
		},
	},
	isDraggingOverClass: {
		backgroundColor: "lightgrey",
		borderRadius: 8,
		padding: 5
	},
	m8: {
		margin: 10
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
				<>
					<div
						{...provided.draggableProps}
						ref={provided.innerRef}
					>
						{/* Titulo */}
						<div className={ classes.m8 }>
							<Button className={[ classes.button_column_name ]} {...provided.dragHandleProps}>
								<span>{props.column.title}</span>
								<MoreHorizIcon />
							</Button>
						</div>

						{/* Agregar tarea */}
						<div className={ classes.m8 }>
							<Button className={[ classes.addTaskBtn ]} startIcon={<Add />}>Nueva Tarea</Button>
						</div>

						{/* Tareas */}
						<Droppable droppableId={props.column.id} type="task">
							{(provided, snapshot) => (
								<div style={{ width: 295 }}>
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
				</>
			)}
		</Draggable>
	)
}