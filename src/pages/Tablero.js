import React, { useState } from 'react'

import { Button } from '@material-ui/core';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { makeStyles } from '@material-ui/core/styles'
import Add from '@material-ui/icons/Add';

/* Components */
import Layout from '../components/Layout';
import Column from '../components/Column';


/* Data */
import initialData from '../initial_data';

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
	divContainer: {
		display: 'flex',
		justifyContent: 'flex-start',
		borderTopLeftRadius: 40,
		padding: '30px 0px 30px 30px',
		backgroundColor: '#fafafa',
	}
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

	return (
		<Layout>

			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="all-columns" direction="horizontal" type="column" >
					{(provided) => (
						<div
							className={ classes.divContainer }
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{state.columnsOrder.map((columnId, index) => {
								const column = state.columns[columnId]
								const tasks  = column.taskIds.map(taskId => state.tasks[taskId])

								return <Column key={column.id} column={column} tasks={tasks} index={index} />
							})}
							{provided.placeholder}
							<div style={{ width: 260, margin: 8 }}>
								<Button className={[ classes.button_column_name ]}>
									<div style={{ display:'flex', justifyContent: 'flex-start' }}>
										<Add style={{ marginRight: 5 }} /> Añadir sección
									</div>
								</Button>
							</div>
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</Layout>
	)
}