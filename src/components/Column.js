import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Add from '@material-ui/icons/Add';

/* Components */
import CardTask from '../components/CardTask'

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
    }
}))

export default function Column (props) {
    const classes = useStyles()

    return (
        <Draggable draggableId={props.column.id} index={props.index}>
            {(provided) => (
                <Grid
                    container
                    item
                    spacing={2}
                    xs={3}
                    {...provided.draggableProps}
                    innerRef={provided.innerRef}
                >
                    {/* Titulo */}
                    <Grid item xs={12}>
                        <Button className={[ classes.button_column_name ]} {...provided.dragHandleProps}>
                            <span>{props.column.title}</span>
                            <MoreHorizIcon />
                        </Button>
                    </Grid>

                    {/* Agregar tarea */}
                    <Grid item xs={12}>
                        <Button className={[ classes.addTaskBtn ]} startIcon={<Add />}>Nueva Tarea</Button>
                    </Grid>

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
                                {props.tasks.map((task, index) => { return <CardTask key={task.id} task={task} index={index}/> })}
                                {provided.placeholder}
                            </Grid>
                        )}
                    </Droppable>
                </Grid>
            )}
        </Draggable>
    )
}