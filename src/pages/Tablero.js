import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Add from '@material-ui/icons/Add';

import Layout from '../components/Layout';
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
}))

export default function Tablero(){
	
	const classes = useStyles();

	return (
		<Layout>
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
						<CardTask title="Refactorizar todo el código" />
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
		</Layout>
	)
}