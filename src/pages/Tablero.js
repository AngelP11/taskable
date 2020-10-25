import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, Grid,
} from '@material-ui/core';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Add from '@material-ui/icons/Add';

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
		boxShadow: '1px 1px 0px rgba(0, 0, 0, .2)',
		'&:hover': {
			backgroundColor: '#fff',
		},
	
	},
}))

export default function Tablero(){
	
	const classes = useStyles();

	return (
		<Grid container spacing={2} alignItems="flex-start">
					
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
					<CardTask title="Terminar asignaciones pendientes" />
				</Grid>
				
				<Grid item xs={12}>
					<Paper style={{ padding: 20 }}>ITEM extremadamente largo dividido en 4 columnas queso</Paper>
				</Grid>
				
				<Grid item xs={12}>
					<Paper style={{ padding: 20 }}>ITEM extremadamente largo dividido en 4 columnas queso</Paper>
				</Grid>

				<Grid item xs={12}>
					<Paper style={{ padding: 20 }}>ITEM extremadamente largo dividido en 4 columnas queso</Paper>
				</Grid>

				<Grid item xs={12}>
					<Paper style={{ padding: 20 }}>ITEM extremadamente largo dividido en 4 columnas queso</Paper>
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
					<Paper style={{ padding: 20 }}>ITEM extremadamente largo dividido en 4 columnas queso</Paper>
				</Grid>
				
				<Grid item xs={12}>
					<Paper style={{ padding: 20 }}>ITEM extremadamente largo dividido en 4 columnas queso</Paper>
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
					<CardTask title="Terminar asignaciones pendientes" />
				</Grid>
				
				<Grid item xs={12}>
					<Paper style={{ padding: 20 }}>ITEM extremadamente largo dividido en 4 columnas queso</Paper>
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
	)
}