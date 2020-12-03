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
		color: 'grey',
		textTransform: 'capitalize',
		borderRadius: '8px',
		boxShadow: '0 1px 3px 0 rgba(45, 45, 55, 0.12);',
		'&:hover': {
			backgroundColor: '#fff',
		},
	},
	isDraggingOverClass: {
		backgroundColor: "lightgrey"
	},
	m8: {
		margin: 8
	}
}))

export default function Column (props) {
	const classes = useStyles()

	const [open, setOpen]       = React.useState(false)
	const [value, setValue]     = React.useState(false)
	const [checked, setChecked] = React.useState([0]);

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	return (
		<Draggable draggableId={props.column.id} index={props.index}>
			{(provided) => (
				<>
					<div
						style={{ width: 260 }}
						{...provided.draggableProps}
						innerRef={provided.innerRef}
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
								<Grid
									item
									xs={12}
									{...provided.droppableProps}
									innerRef={provided.innerRef}
									className={  snapshot.isDraggingOver ? [classes.isDraggingOverClass] : "" }
								>
									{ props.tasks.map((task, index) => { 
										return <CardTask onClick={ () => setOpen(true) } key={task.id} task={task} index={index}/> }) 
									}
									{ provided.placeholder }
								</Grid>
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