<<<<<<< HEAD
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Dialog, DialogContent, DialogContentText } from '@material-ui/core';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
=======
import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid } from '@material-ui/core';
>>>>>>> 19b29a8b68343c81e06ef6e5642a4c739bcf3ab0
import Add from '@material-ui/icons/Add';

/* Components */
import Layout from '../components/Layout';
<<<<<<< HEAD
import CardTask from '../components/CardTask'
import ExpandedList from '../components/ExpandedList'
=======
import Column from '../components/Column';


/* Data */
import initialData from '../initial_data';
>>>>>>> 19b29a8b68343c81e06ef6e5642a4c739bcf3ab0

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
}))

export default function Tablero(){
	const [state, setState] = useState(initialData);
	const classes = useStyles()

	const onDragEnd = (result) => {
		const { destination, source, draggableId, type } = result

		if (!destination) return

		if (destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return
		}

		if (type === 'column') {
			const newColumnOrder = Array.from(state.columnsOrder)
			newColumnOrder.splice(source.index, 1)
			newColumnOrder.splice(destination.index, 0, draggableId)

			setState({
				...state,
				columnsOrder: newColumnOrder
			})

			return
		}

		const start = state.columns[source.droppableId]
		const finish = state.columns[destination.droppableId]

		if (finish === start) {
			const newTaskIds = Array.from(start.taskIds)
			newTaskIds.splice(source.index, 1)
			newTaskIds.splice(destination.index, 0, draggableId)

			const newColumn = {
				...start,
				taskIds: newTaskIds
			}

			setState({
				...state,
				columns: {
					...state.columns,
					[newColumn.id]: newColumn,
				}
			})

			return
		}

		const startTaskIds = Array.from(start.taskIds)
		startTaskIds.splice(source.index, 1)
		const newStart = {
			...start,
			taskIds: startTaskIds
		}

		const finishTaskIds = Array.from(finish.taskIds)
		finishTaskIds.splice(destination.index, 0, draggableId)
		const newFinish = {
			...finish,
			taskIds: finishTaskIds
		}

		setState({
			...state,
			columns: {
				...state.columns,
				[newStart.id]: newStart,
				[newFinish.id]: newFinish,
			}
		})

	}

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
		<Layout>
<<<<<<< HEAD
			<Grid container spacing={2} alignItems="flex-start" >
						
				<Grid container item spacing={2} xs={3}>

					<Grid item xs={12}>
						<Button className={[ classes.button_column_name ]}>
							<span>Sin comenzar</span>
							<MoreHorizIcon />
						</Button>
					</Grid>

					<Grid item xs={12}>
						<Button className={[ classes.addTaskBtn ]} startIcon={<Add />}>Nueva Tarea</Button>
					</Grid>

					<Grid item xs={12}>
						<CardTask onClick={ () => setOpen(true) } title="Refactorizar todo el código" />
					</Grid>

					<Grid item xs={12}>
						<CardTask title="Aplicarle lógica a las vistas" />
					</Grid>
					
				</Grid>

				<Grid container item spacing={2} xs={3}>

					<Grid item xs={12}>
						<Button className={[ classes.button_column_name ]}>
							<span>En curso</span>
							<MoreHorizIcon />
						</Button>
					</Grid>

					<Grid item xs={12}>
						<Button className={[ classes.addTaskBtn ]} startIcon={<Add />}>Nueva Tarea</Button>
					</Grid>

					<Grid item xs={12}>
						<CardTask title="Terminar asignaciones pendientes" />
					</Grid>

					<Grid item xs={12}>
						<CardTask title="Terminar la vista de listas extendidas" />
					</Grid>

					<Grid item xs={12}>
						<CardTask title="Ser feliz :')" />
					</Grid>
					
				</Grid>

				<Grid container item spacing={2} xs={3}>

					<Grid item xs={12}>
						<Button className={[ classes.button_column_name ]}>
							<span>Finalizadas</span>
							<MoreHorizIcon />
						</Button>
					</Grid>

					<Grid item xs={12}>
						<Button className={[ classes.addTaskBtn ]} startIcon={<Add />}>Nueva Tarea</Button>
					</Grid>

					<Grid item xs={12}>
						<CardTask title="Vista del login" isCompleted={true} />
					</Grid>

					<Grid item xs={12}>
						<CardTask title="Vista de register" isCompleted={true} />
					</Grid>

					<Grid item xs={12}>
						<CardTask title="Vista de contraseña" isCompleted={true} />
					</Grid>
					
				</Grid>
				

				<Grid item container xs={3} spacing={2}>
					<Grid item xs={12}>
						<Button className={[ classes.button_column_name ]}>
							<div style={{ display:'flex', justifyContent: 'flex-start' }}>
								<Add /> Añadir sección
							</div>
						</Button>
					</Grid>

				</Grid>
			</Grid>

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

=======
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="all-columns" direction="horizontal" type="column">
					{(provided) => (
						<Grid
							container
							spacing={2}
							alignItems="flex-start"
							{...provided.droppableProps}
							innerRef={provided.innerRef}
						>
							{state.columnsOrder.map((columnId, index) => {
								const column = state.columns[columnId]
								const tasks = column.taskIds.map(taskId => state.tasks[taskId])

								return <Column key={column.id} column={column} tasks={tasks} index={index} />
							})}
							{provided.placeholder}
							<Grid item container xs={3} spacing={2}>
								<Grid item xs={12}>
									<Button className={[ classes.button_column_name ]}>
										<div style={{ display:'flex', justifyContent: 'flex-start' }}>
											<Add /> Añadir sección
										</div>
									</Button>
								</Grid>
							</Grid>
						</Grid>
					)}
				</Droppable>
			</DragDropContext>
>>>>>>> 19b29a8b68343c81e06ef6e5642a4c739bcf3ab0
		</Layout>
	)
}