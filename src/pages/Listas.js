import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';


/* Components */
import Layout from '../components/Layout'
import ExpandedList from '../components/ExpandedList'
import ListColumn from '../components/ListColumn'

/* Assets */
import '../components/styles/Header.css'
import { buttons } from '../styles/buttons.js'

/* Initial Data*/
import initialData from '../initial_data';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	grid_borders: {
		borderTop: '1px solid #e1e2e6',
		borderBottom: '1px solid #e1e2e6',
		borderLeft: '1px solid #e1e2e6',
		'&:nth-child(1)': {
			borderLeft: 0,
			textAlign: 'left'
		},
		textAlign: 'center'
	},
}))

export default function Lista(){
	const classes = useStyles()

	const [isShowedDetailedList, setIsShowedDetailedList] = React.useState(false);
	const [listWidth, setListWidth] = React.useState(12);
	const [state, setState] = React.useState(initialData);

	const [checked, setChecked] = React.useState([0]);

	const handleToggle = (value) => (e) => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		}
		else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	const openDetailedList = (value) => (e) => {
		// eliminar el borde azul de las demás listas...
		let listas = document.querySelectorAll('.listas')
		listas.forEach((v, i) => {
			v.style = "display: flex; justify-content: space-between; border: none;"
		})

		// ... menos a la que le estoy dándole click.
		e.target.parentNode.parentNode.style = "display: flex; justify-content: space-between; border-top: 1px solid #2979ff; border-bottom: 1px solid #2979ff; border-left: 1px solid #2979ff;"

		setIsShowedDetailedList(true)
		setListWidth(6)
	}

	const closeDetailedList = () => {
		// eliminar el borde azul de todas las listas.
		let listas = document.querySelectorAll('.listas')
		listas.forEach((v, i) => {
			v.style = "display: flex; justify-content: space-between; border: none;"
		})

		setIsShowedDetailedList(false)
		setListWidth(12)
	}

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

	return (
		<Layout>
			<Paper className={classes.root} style={{ padding: 20 }}>
				<Grid container style={{ marginBottom: 10 }}>
					<Grid item className={ classes.grid_borders } xs={5}>
						<p style={{ paddingLeft: 20 }}>Tareas</p>
					</Grid>
					<Grid item className={ classes.grid_borders } xs>
						<p>Personas</p>
					</Grid>
					<Grid item className={ classes.grid_borders } xs>
						<p>Progeso</p>
					</Grid>
					<Grid item className={ classes.grid_borders } xs>
						<p>Tiempo</p>
					</Grid>
					<Grid item className={ classes.grid_borders } xs>
						<p>Prioridad</p>
					</Grid>
					<Grid item className={ classes.grid_borders } xs>
						<p>Etiqueta</p>
					</Grid>
				</Grid>

				<DragDropContext onDragEnd={onDragEnd}>
					<Grid container>
						<Grid item xs={ listWidth }>
							{state.columnsOrder.map((columnId, index) => {
								const column = state.columns[columnId]
								const tasks  = column.taskIds.map(taskId => state.tasks[taskId])

								return <ListColumn
											key={columnId}
											column={column}
											tasks={tasks}
											index={index}
											handleToggle={handleToggle}
											openDetailedList={openDetailedList}
											isShowedDetailedList={isShowedDetailedList}
											checked={checked}
										/>
							})}
						</Grid>

						{ (isShowedDetailedList) ? (
							<Grid item container className={ classes.blueBorder } style={{ padding: 13 }} xs={6}>
								<ExpandedList onCerrar={ () => closeDetailedList() } value={ [] } />
							</Grid> ) : null
						}
					</Grid>
				</DragDropContext>
			</Paper>
		</Layout>
	)
}