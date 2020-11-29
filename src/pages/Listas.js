import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Paper, Accordion, Button, Grid, Typography, AccordionDetails,
	List, ListItem, Checkbox, FormControlLabel, AccordionSummary,
} from '@material-ui/core';

import { ScheduleOutlined } from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Add from '@material-ui/icons/Add';
import DragIndicator from '@material-ui/icons/DragIndicator';

import '../components/styles/Header.css'
import Team from '../components/Team'
import BarraProgreso from '../components/BarraProgreso'
import Layout from '../components/Layout'
import ExpandedList from '../components/ExpandedList'

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
		color: '#4f4f4f',
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
		marginLeft: 0,
		color: 'grey'
	},
}))

export default function Lista(){

	const classes = useStyles()

	const [expanded, setExpanded] = React.useState(false);
	const [isShowedDetailedList, setIsShowedDetailedList] = React.useState(false);
	const [listWidth, setListWidth] = React.useState(12);
	const [value, setValue] = React.useState(null);

	// const [open, setOpen] = React.useState(false)
	const [checked, setChecked] = React.useState([0]);
	
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	}

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

	const openDetailedList = (value) => {
		setIsShowedDetailedList(true)
		setListWidth(6)
		setValue(value)
	}

	const closeDetailedList = () => {
		setIsShowedDetailedList(false)
		setListWidth(12)
		setValue(null)
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

				<Grid container>
					<Grid item xs={ listWidth }>
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
													<Grid 
														onClick={ () => openDetailedList(value) } 
														item
														style={{ cursor: 'pointer' }}
														className={ classes.br }
														xs={ (isShowedDetailedList) ? 12 : 5 }
													>
														<DragIndicator style={{ color: 'grey' }}></DragIndicator>
														<FormControlLabel
															aria-label="Acknowledge"
															className={ classes.ml }
															onClick={ handleToggle(index) }
															onFocus={(event) => event.stopPropagation()}
															control={ <Checkbox color="lightgrey" checked={checked.indexOf(index) !== -1} /> }
															label={ value.nombre }
														/>
													</Grid>
													{ ( ! isShowedDetailedList ) ? (
														<>
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
																	Etiqueta
																</div>
															</Grid>
														</> ) : null
													}
												</Grid>
											</ListItem>
										);
									})}
									<ListItem
										alignItems="center"
										className={ classes.border }
										role={undefined}
										dense
									>
										<Grid container style={{ opacity: 0.6, padding: 6 }}>
											<Grid item className={ classes.br } container xs>
												<Add style={{ color: 'grey', fontSize: 16, marginRight: 4 }}></Add>
												<span>Añadir tarea</span>
											</Grid>
										</Grid>
									</ListItem>
								</List>
							</AccordionDetails>
						</Accordion>
						

					</Grid>
					{ (isShowedDetailedList) ? (

						<Grid item container style={{ padding: 13, borderLeft: '1px solid lightgrey' }} xs={6}>
							
							<ExpandedList onCerrar={ () => closeDetailedList() } value={ value } />

						</Grid> ) : null
					}
				</Grid>
			</Paper>


		</Layout>
	)
}