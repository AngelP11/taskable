import React from 'react'
import { Button, Typography, Divider, Grid, TextField,
	ListItemText, Checkbox, ListItemSecondaryAction, ListItem, 
	Icon, IconButton, ListItemIcon, List } from '@material-ui/core'
import Add from '@material-ui/icons/Add';

import { makeStyles } from '@material-ui/core/styles'

import { buttons } from '../styles/buttons.js'

import imagen1 from "../assets/imagen-4@3x.png"
import imagen2 from "../assets/imagen-24@2x.png"
import imagen3 from "../assets/imagen-25@2x.png"

const useStyles = makeStyles((theme) => ({
	...buttons,
	btn: {
		backgroundColor: '#fff',
		borderColor: '#2979ff',
		color: '#2979ff',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: '#fafafa',
			boxShadow: '0 0px 0px 0px rgba(0, 0, 0, 0)',
		},
	},
	black: {
		color: '#000'
	},
	imgcircle: {
		borderRadius: '50%',
		width: 33,
		height: 30
	},
	btn_priority: {
		backgroundColor: '#ffbdbd',
		height: 25,
		color: 'ff8d8d',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: '#ff9b9b',
			boxShadow: '0 0px 0px 0px rgba(0, 0, 0, 0)',
		},
	},
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
	button_reject_task: {
		color: 'grey',
		backgroundColor: 'transparent',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: '#fafafa',
			boxShadow: '0 0px 0px 0px rgba(0, 0, 0, 0)',
		},
	}

}));

function ExpandedList(props) {

	const classes = useStyles()
	
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
		
		<>
			<Grid container justify="space-between" alignItems="center" style={{ marginBottom: '20px' }}>
				<IconButton onClick={ () => props.onCerrar() }><Icon fontSize="small">close</Icon></IconButton>
				<Button 
					variant="outlined" 
					color="primary"
					className={[ classes.button_high, classes.btn ]}
					startIcon={ <Icon fontSize="small">check</Icon> }
				>
					Marcar como realizada
				</Button>
			</Grid>
			<Grid container spacing={2}>
				<Grid item>
					<Typography className={ classes.black } variant="h5" component="h5" gutterBottom >
						Emitir factura
					</Typography>
				</Grid>
			</Grid>
			<Grid container alignItems="center" spacing={1} >
				<Grid item >
					<Typography variant="body2"  style={{ color: 'grey' }} gutterBottom >Responsable</Typography>
				</Grid>
				<Grid item >
					<img alt="404" src={ imagen1 } className={ classes.imgcircle } />
				</Grid>
				<Grid item >
					<Typography variant="caption" component="span" gutterBottom >Richard Jimenez</Typography>
				</Grid>
			</Grid>
			<Grid container alignItems="center" spacing={1} >
				<Grid item >
					<Typography variant="body2"  style={{ color: 'grey' }} gutterBottom >Colaboradores</Typography>
				</Grid>
				<Grid item >
					<img alt="404" src={ imagen2 } className={ classes.imgcircle } />
				</Grid>
				<Grid item >
					<img alt="404" src={ imagen3 } className={ classes.imgcircle } />
				</Grid>
				<Grid item >
					<img alt="404" src={ imagen2 } className={ classes.imgcircle } />
				</Grid>
				<Grid item >
					<img alt="404" src={ imagen3 } className={ classes.imgcircle } />
				</Grid>
				<Grid item >
					<img alt="404" src={ imagen2 } className={ classes.imgcircle } />
				</Grid>
				<Grid item >
					<img alt="404" src={ imagen3 } className={ classes.imgcircle } />
				</Grid>
				<Grid item >
					<Add style={{ color: 'grey' }} />
				</Grid>
			</Grid>
			<Grid container alignItems="center" style={{ margin: '15px 0px' }}>
				<Grid item >
					<Typography variant="body2"  style={{ color: 'grey' }} gutterBottom >Fecha de entrega</Typography>
				</Grid>
				<Grid item style={{ marginLeft: 15, marginRight: 5 }}>
					<Icon style={{ color: 'grey' }}>event_note</Icon>
				</Grid>
				<Grid item >
					<Typography style={{ marginBottom: 3 }} variant="caption" >17 Jul</Typography>
				</Grid>
			</Grid>
			<Grid container alignItems="center" spacing={3}>
				<Grid item >
					<Typography variant="body2"  style={{ color: 'grey' }} gutterBottom >Prioridad</Typography>
				</Grid>
				<Grid item >
					<Button size="small" className={[ classes.button_high, classes.btn_priority ]} variant="contained">Alta</Button>
				</Grid>
			</Grid>
			<Grid container alignItems="center" spacing={3}>
				<Grid item >
					<Typography variant="body2"  style={{ color: 'grey' }} gutterBottom >Descripción</Typography>
				</Grid>
				<Grid item >
					<Typography variant="caption" style={{ color: 'grey' }} component="small" gutterBottom >Añade mas detalles a esta actividad...</Typography>
				</Grid>
			</Grid>
			<Grid container alignItems="center" style={{ margin: '15px 0px 15px 0px' }}>
				<Grid item xs={12} >
					<Typography variant="body2"  style={{ color: 'grey' }} gutterBottom >Subtareas</Typography>
				</Grid>
				<Grid item xs={12} >
					<List className={classes.root}>
						<Divider />
						{[0, 1].map((value) => {
							const labelId = `checkbox-list-label-${value}`;

							return (
								<ListItem key={value} role={undefined} dense divider alignItems="center" onClick={ handleToggle(value) }>
									<ListItemIcon>
										<Checkbox
											edge="start"
											checked={checked.indexOf(value) !== -1}
											tabIndex={-1}
											disableRipple
											color="primary"
											inputProps={{ 'aria-labelledby': labelId }}
										/>
									</ListItemIcon>
									<ListItemText id={labelId} style={{ color: 'grey' }} primary={`List item ${value + 1}`} />
									<ListItemSecondaryAction>
										<img alt="404" src={ imagen1 } className={ classes.imgcircle } />
									</ListItemSecondaryAction>
								</ListItem>
							);
						})}
					</List>
				</Grid>
			</Grid>
			<Grid container spacing={3} style={{ backgroundColor: '#f5f5f5' }} >
				<Grid xs={1} item >
					<img alt="404" src={ imagen1 } className={ classes.imgcircle } />
				</Grid>
				<Grid xs={11} item >
					<TextField
						multiline
						placeholder="Realiza una pregunta pública"
						fullWidth
						rows={5}
						variant="outlined" 
						style={{ fontSize: 12, backgroundColor: '#fff', borderRadius: 5 }}
					/>
				</Grid>
				<Grid xs={12} item  justify="flex-end" container>
					<Grid item>
						<Button
							className={[ classes.button_high, classes.button_reject_task ]}
							size="small"
					        startIcon={ <Icon>remove_circle</Icon> }
					    >
					        Abandonar la tarea
					    </Button>
					</Grid>
				</Grid>
			</Grid>
		</>
	)
}

export default ExpandedList