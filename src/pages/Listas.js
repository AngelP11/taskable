import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Paper, Accordion, Button, Grid, Typography, AccordionDetails,
	List, ListItem, Checkbox, FormControlLabel, TextField, Dialog,
	ListItemSecondaryAction, ListItemIcon, AccordionSummary,
	Icon, IconButton, DialogContent, DialogContentText,
	Divider, ListItemText
} from '@material-ui/core';

import { ScheduleOutlined } from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ViewList from '@material-ui/icons/ViewList'
import Add from '@material-ui/icons/Add';

import imagen1 from "../assets/imagen-4@3x.png"
import imagen2 from "../assets/imagen-24@2x.png"
import imagen3 from "../assets/imagen-25@2x.png"

import '../components/styles/Header.css'
import Team from '../components/Team'
import BarraProgreso from '../components/BarraProgreso'
import Layout from '../components/Layout'

import { buttons } from '../styles/buttons.js'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	raiz: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: 0,
	},
	border: {
		borderTop: '1px solid #e1e2e6',
		'&:last-child': {
			borderBottom: '1px solid #e1e2e6',
		},
		padding: 0
	},
	text: {
		color: '#757575'
	},
	heading: {
		fontSize: theme.typography.pxToRem(20),
		flexBasis: '33.33%',
		flexShrink: 0,
		color: '#424242',
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
	br: {
		borderRight: '1px solid #e1e2e6',
		padding: 0,
		'&:last-child': {
			borderRight: 0,
		},
		paddingLeft: 6,
		paddingRight: 6,
	},
	caption: {
		color: '#ff5861',
		fontWeight: 300,
		fontSize: '10px',
		fontFamily: 'Inter-regular',
	},
	btn_priority: {
		backgroundColor: '#ffd3d4',
		height: 20,
		color: '#ff5861',
		fontSize:10,
		textTransform: 'capitalize',
		minWidth: 20,
		lineHeight: '0px',
		padding: 10,
		borderRadius: '4px',
		boxShadow: 'none',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: '#ffbdbd',
			boxShadow: 'none',
		},
	},
	div: {
		paddingTop: 15,
		textAlign: 'center',
	},
	divCenter: {
		textAlign: 'center',
		paddingTop: 6
	},
	ml: {
		marginLeft: 0
	},

	...buttons,
	btn: {
		backgroundColor: '#fff',
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
	btn_priority_dialog: {
		backgroundColor: '#ffbdbd',
		height: 25,
		color: 'ff8d8d',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: '#ff9b9b',
			boxShadow: '0 0px 0px 0px rgba(0, 0, 0, 0)',
		},
	},
	rootDialog: {
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
}))

export default function Lista(){

	let classes = useStyles()

	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	}

	const [open, setOpen] = React.useState(false)

	const [checked, setChecked] = React.useState([0]);

	const handleToggle = (value) => () => {
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

	let arr = [
		{
			id: 1,
			nombre: 'Tarea name',
			personas: ['fulanito', 'menganito'],
			progreso: 68,
			timeLeft: true,
			priority: 'Alta',
			tag: null
		},
		{
			id: 2,
			nombre: 'Tarea name',
			personas: ['fulanito', 'menganito'],
			progreso: 68,
			timeLeft: true,
			priority: 'Alta',
			tag: null
		},
		{
			id: 3,
			nombre: 'Otra tarea con nombre distintro',
			personas: ['fulanito', 'menganito', 'pedrito'],
			progreso: 68,
			timeLeft: false,
			priority: 'Alta',
			tag: null
		}
	]

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

				<Grid container>
					<Grid item xs={6}>
						<Accordion expanded={ expanded === 'panel1' } onChange={ handleChange('panel1') } style={{ boxShadow: 'none' }} >
							<AccordionSummary
								expandIcon={ <ExpandMoreIcon /> }
								aria-controls="panel1bh-content"
								id="panel1bh-header"
							>
								<Typography className={classes.heading}>Finalizadas</Typography>
							</AccordionSummary>
							<AccordionDetails style={{ padding: 0 }}>
								
								<List className={classes.raiz}>
									{ arr.map((value, index) => {
										
										return (
											<ListItem 
												alignItems="center" 
												className={ classes.border } 
												key={index} 
												role={undefined} 
												dense
											>
												<Grid container>
													<Grid item className={ classes.br } xs={12}>
														<FormControlLabel
															aria-label="Acknowledge"
															className={ classes.ml }
															onClick={ handleToggle(index) }
															onFocus={(event) => event.stopPropagation()}
															control={ <Checkbox checked={checked.indexOf(index) !== -1} /> }
															label={ value.nombre }
														/>
													</Grid>
													<Grid item className={ classes.br } xs>
														<div className={ classes.div }>
															<Team />
														</div>
													</Grid>
													<Grid item className={ classes.br } xs>
														<div className={ classes.div }>
															<BarraProgreso />
														</div>
													</Grid>
													<Grid item className={ classes.br } xs>
														<div className={ classes.div }>
															<ScheduleOutlined style={{ fontSize: 13, margin: '-3px  3px', color: '#ff8d8d' }} />
															{ value.timeLeft ? 
																( <small className={ classes.caption }>Finalizado</small> )
																: 
																( <small className={ classes.caption }>2 días restantes</small> ) 
															}
														</div>
													</Grid>
													<Grid item className={ classes.br } xs>
														<div className={ classes.div }>
															<Button className={ classes.btn_priority } >Alta</Button>
														</div>
													</Grid>
													<Grid item className={ classes.br } xs>
														<div className={ classes.divCenter }>
															<IconButton onClick={ () => setOpen(true) }>
																<ViewList />
															</IconButton>
														</div>
													</Grid>
												</Grid>
											</ListItem>
										);
									})}
								</List>
							</AccordionDetails>
						</Accordion>
						
						<Accordion expanded={ expanded === 'panel2' } onChange={ handleChange('panel2') } style={{ boxShadow: 'none' }} >
							<AccordionSummary
								expandIcon={ <ExpandMoreIcon /> }
								aria-controls="panel2bh-content"
								id="panel1bh-header"
							>
								<Typography className={classes.heading}>Sin comenzar</Typography>
							</AccordionSummary>
							<AccordionDetails style={{ padding: 0 }}>
								
								<List className={classes.raiz}>
									{ arr.map((value, index) => {

										return (
											<ListItem 
												alignItems="center" 
												className={ classes.border } 
												key={index} 
												role={undefined} 
												dense
											>
												<Grid container>
													<Grid item className={ classes.br } xs={5}>
														<FormControlLabel
															aria-label="Acknowledge"
															className={ classes.ml }
															onClick={ handleToggle(index) }
															onFocus={(event) => event.stopPropagation()}
															control={ <Checkbox checked={checked.indexOf(index) !== -1} /> }
															label={ value.nombre }
														/>
													</Grid>
													<Grid item className={ classes.br } xs>
														<div className={ classes.div }>
															<Team />
														</div>
													</Grid>
													<Grid item className={ classes.br } xs>
														<div className={ classes.div }>
															<BarraProgreso />
														</div>
													</Grid>
													<Grid item className={ classes.br } xs>
														<div className={ classes.div }>
															<ScheduleOutlined style={{ fontSize: 13, margin: '-3px  3px', color: '#ff8d8d' }} />
															{ value.timeLeft ? 
																( <small className={ classes.caption }>Finalizado</small> )
																: 
																( <small className={ classes.caption }>2 días restantes</small> ) 
															}
														</div>
													</Grid>
													<Grid item className={ classes.br } xs>
														<div className={ classes.div }>
															<Button className={ classes.btn_priority } >Alta</Button>
														</div>
													</Grid>
													<Grid item className={ classes.br } xs>
														<div className={ classes.divCenter }>
															<IconButton onClick={ () => setOpen(true) }>
																<ViewList />
															</IconButton>
														</div>
													</Grid>
												</Grid>
											</ListItem>
										);
									})}
								</List>
							</AccordionDetails>
						</Accordion>

						<Accordion expanded={ expanded === 'panel3' } onChange={ handleChange('panel3') } style={{ boxShadow: 'none' }} >
							<AccordionSummary
								expandIcon={ <ExpandMoreIcon /> }
								aria-controls="panel3bh-content"
								id="panel1bh-header"
							>
								<Typography className={classes.heading}>Asignaciones terminadas</Typography>
							</AccordionSummary>
							<AccordionDetails style={{ padding: 0 }}>
								
								<List className={classes.raiz}>
									{ arr.map((value, index) => {
										

										return (
											<ListItem 
												alignItems="center" 
												className={ classes.border } 
												key={index} 
												role={undefined} 
												dense
											>
												<Grid container>
													<Grid item className={ classes.br } xs={5}>
														<FormControlLabel
															aria-label="Acknowledge"
															className={ classes.ml }
															onClick={ handleToggle(index) }
															onFocus={(event) => event.stopPropagation()}
															control={ <Checkbox checked={checked.indexOf(index) !== -1} /> }
															label={ value.nombre }
														/>
													</Grid>
													<Grid item className={ classes.br } xs>
														<div className={ classes.div }>
															<Team />
														</div>
													</Grid>
													<Grid item className={ classes.br } xs>
														<div className={ classes.div }>
															<BarraProgreso />
														</div>
													</Grid>
													<Grid item className={ classes.br } xs>
														<div className={ classes.div }>
															<ScheduleOutlined style={{ fontSize: 13, margin: '-3px  3px', color: '#ff8d8d' }} />
															{ value.timeLeft ? 
																( <small className={ classes.caption }>Finalizado</small> )
																: 
																( <small className={ classes.caption }>2 días restantes</small> ) 
															}
														</div>
													</Grid>
													<Grid item className={ classes.br } xs>
														<div className={ classes.div }>
															<Button className={ classes.btn_priority } >Alta</Button>
														</div>
													</Grid>
													<Grid item className={ classes.br } xs>
														<div className={ classes.divCenter }>
															<IconButton onClick={ () => setOpen(true) }>
																<ViewList />
															</IconButton>
														</div>
													</Grid>
												</Grid>
											</ListItem>
										);
									})}
								</List>
							</AccordionDetails>
						</Accordion>

						<Accordion expanded={ expanded === 'panel4' } onChange={ handleChange('panel4') } style={{ boxShadow: 'none' }} >
							<AccordionSummary
								expandIcon={ <ExpandMoreIcon /> }
								aria-controls="panel4bh-content"
								id="panel1bh-header"
							>
								<Typography className={classes.heading}>En progreso</Typography>
							</AccordionSummary>
							<AccordionDetails style={{ padding: 0 }}>
								
								<List className={classes.raiz}>
									{ arr.map((value, index) => {
										

										return (
											<ListItem 
												alignItems="center" 
												className={ classes.border } 
												key={index} 
												role={undefined} 
												dense
											>
												<Grid container>
													<Grid item className={ classes.br } xs={5}>
														<FormControlLabel
															aria-label="Acknowledge"
															className={ classes.ml }
															onClick={ handleToggle(index) }
															onFocus={(event) => event.stopPropagation()}
															control={ <Checkbox checked={checked.indexOf(index) !== -1} /> }
															label={ value.nombre }
														/>
													</Grid>
													<Grid item className={ classes.br } xs>
														<div className={ classes.div }>
															<Team />
														</div>
													</Grid>
													<Grid item className={ classes.br } xs>
														<div className={ classes.div }>
															<BarraProgreso />
														</div>
													</Grid>
													<Grid item className={ classes.br } xs>
														<div className={ classes.div }>
															<ScheduleOutlined style={{ fontSize: 13, margin: '-3px  3px', color: '#ff8d8d' }} />
															{ value.timeLeft ? 
																( <small className={ classes.caption }>Finalizado</small> )
																: 
																( <small className={ classes.caption }>2 días restantes</small> ) 
															}
														</div>
													</Grid>
													<Grid item className={ classes.br } xs>
														<div className={ classes.div }>
															<Button className={ classes.btn_priority } >Alta</Button>
														</div>
													</Grid>
													<Grid item className={ classes.br } xs>
														<div className={ classes.divCenter }>
															<IconButton onClick={ () => setOpen(true) }>
																<ViewList />
															</IconButton>
														</div>
													</Grid>
												</Grid>
											</ListItem>
										);
									})}
								</List>
							</AccordionDetails>
						</Accordion>
					</Grid>
					<Grid item container style={{ padding: 13, borderLeft: '1px solid lightgrey' }} xs={6}>
						
						<Grid container item justify="space-between" alignItems="center" style={{ marginBottom: '20px' }}>
							<IconButton><Icon fontSize="small">close</Icon></IconButton>
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
								<Typography variant="body2" component="p" style={{ color: 'grey' }} gutterBottom >Responsable</Typography>
							</Grid>
							<Grid item >
								<img alt="404" src={ imagen1 } className={ classes.imgcircle } />
							</Grid>
							<Grid item >
								<Typography variant="caption" className={ classes.black } component="span" gutterBottom >Richard Jimenez</Typography>
							</Grid>
						</Grid>
						<Grid container alignItems="center" spacing={1} >
							<Grid item >
								<Typography variant="body2" component="p" style={{ color: 'grey' }} gutterBottom >Colaboradores</Typography>
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
								<Add />
							</Grid>
						</Grid>
						<Grid container alignItems="center" style={{ margin: '15px 0px' }}>
							<Grid item >
								<Typography variant="body2" component="p" style={{ color: 'grey' }} gutterBottom >Fecha de entrega</Typography>
							</Grid>
							<Grid item style={{ marginLeft: 15, marginRight: 5 }}>
								<Icon >event_note</Icon>
							</Grid>
							<Grid item >
								<Typography style={{ marginBottom: 3 }} variant="caption" component="p">17 Jul</Typography>
							</Grid>
						</Grid>
						<Grid container alignItems="center" spacing={3}>
							<Grid item >
								<Typography variant="body2" component="p" style={{ color: 'grey' }} gutterBottom >Prioridad</Typography>
							</Grid>
							<Grid item >
								<Button size="small" className={[ classes.button_high, classes.btn_priority_dialog ]} variant="contained">Alta</Button>
							</Grid>
						</Grid>
						<Grid container alignItems="center" spacing={3}>
							<Grid item >
								<Typography variant="body2" component="p" style={{ color: 'grey' }} gutterBottom >Descripción</Typography>
							</Grid>
							<Grid item >
								<Typography variant="caption" component="small" gutterBottom >Añade mas detalles a esta actividad...</Typography>
							</Grid>
						</Grid>
						<Grid container alignItems="center" style={{ margin: '15px 0px 15px 0px' }}>
							<Grid item xs={12} >
								<Typography variant="body2" component="p" style={{ color: 'grey' }} gutterBottom >Subtareas</Typography>
							</Grid>
							<Grid item xs={12} >
								<List className={classes.rootDialog}>
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
														inputProps={{ 'aria-labelledby': labelId }}
													/>
												</ListItemIcon>
												<ListItemText id={labelId} primary={`List item ${value + 1}`} />
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
							<Grid xs={12} alignItems="center" item  justify="flex-end" container>
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

					</Grid>
				</Grid>
			</Paper>

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
						<Grid container justify="space-between" alignItems="center" style={{ marginBottom: '20px' }}>
							<IconButton><Icon fontSize="small">close</Icon></IconButton>
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
								<Typography variant="body2" component="p" style={{ color: 'grey' }} gutterBottom >Responsable</Typography>
							</Grid>
							<Grid item >
								<img alt="404" src={ imagen1 } className={ classes.imgcircle } />
							</Grid>
							<Grid item >
								<Typography variant="caption" className={ classes.black } component="span" gutterBottom >Richard Jimenez</Typography>
							</Grid>
						</Grid>
						<Grid container alignItems="center" spacing={1} >
							<Grid item >
								<Typography variant="body2" component="p" style={{ color: 'grey' }} gutterBottom >Colaboradores</Typography>
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
								<Add />
							</Grid>
						</Grid>
						<Grid container alignItems="center" style={{ margin: '15px 0px' }}>
							<Grid item >
								<Typography variant="body2" component="p" style={{ color: 'grey' }} gutterBottom >Fecha de entrega</Typography>
							</Grid>
							<Grid item style={{ marginLeft: 15, marginRight: 5 }}>
								<Icon >event_note</Icon>
							</Grid>
							<Grid item >
								<Typography style={{ marginBottom: 3 }} variant="caption" component="p">17 Jul</Typography>
							</Grid>
						</Grid>
						<Grid container alignItems="center" spacing={3}>
							<Grid item >
								<Typography variant="body2" component="p" style={{ color: 'grey' }} gutterBottom >Prioridad</Typography>
							</Grid>
							<Grid item >
								<Button size="small" className={[ classes.button_high, classes.btn_priority_dialog ]} variant="contained">Alta</Button>
							</Grid>
						</Grid>
						<Grid container alignItems="center" spacing={3}>
							<Grid item >
								<Typography variant="body2" component="p" style={{ color: 'grey' }} gutterBottom >Descripción</Typography>
							</Grid>
							<Grid item >
								<Typography variant="caption" component="small" gutterBottom >Añade mas detalles a esta actividad...</Typography>
							</Grid>
						</Grid>
						<Grid container alignItems="center" style={{ margin: '15px 0px 15px 0px' }}>
							<Grid item xs={12} >
								<Typography variant="body2" component="p" style={{ color: 'grey' }} gutterBottom >Subtareas</Typography>
							</Grid>
							<Grid item xs={12} >
								<List className={classes.rootDialog}>
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
														inputProps={{ 'aria-labelledby': labelId }}
													/>
												</ListItemIcon>
												<ListItemText id={labelId} primary={`List item ${value + 1}`} />
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
							<Grid xs={12} alignItems="center" item  justify="flex-end" container>
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
					</DialogContentText>
				</DialogContent>
			</Dialog>


		</Layout>
	)
}