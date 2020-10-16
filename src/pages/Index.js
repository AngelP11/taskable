import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, AppBar, CssBaseline, Paper, Toolbar, List, Box, IconButton, Typography, Divider, ListItem, ListItemIcon, ListItemText, Collapse, Button, Grid } from '@material-ui/core';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ArrowRightOutlined from '@material-ui/icons/ArrowRightOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CheckBoxOutlined from '@material-ui/icons/CheckBoxOutlined';
import DashboardOutlined from '@material-ui/icons/DashboardOutlined';
import FolderOutlined from '@material-ui/icons/FolderOutlined';
import GroupOutlined from '@material-ui/icons/GroupOutlined';
import ListAltOutlined from '@material-ui/icons/ListAltOutlined';
import ViewListOutlined from '@material-ui/icons/ViewListOutlined';
import AssessmentOutlined from '@material-ui/icons/AssessmentOutlined';
import SwapVertOutlined from '@material-ui/icons/SwapVertOutlined';
import FilterListOutlined from '@material-ui/icons/FilterListOutlined';
import MoreVertOutlined from '@material-ui/icons/MoreVertOutlined';
import Add from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import Header from '../components/Header'
import CardTask from '../components/CardTask'

import { buttons } from '../styles/buttons.js'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		boxShadow: '0px 0px 0px #fff',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerContainer: {
		overflow: 'auto',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
	active: {
		color: '#2979ff'
	},
	addTaskBtn: {
		width: '100%',
		backgroundColor:'#fff',
		textTransform: 'capitalize',
		boxShadow: '1px 1px 0px rgba(0, 0, 0, .2)',
		'&:hover': {
			backgroundColor: '#fff',
		},
	
	},
	second_toolbar: {
		marginLeft: 240,
		display: 'flex',
		justifyContent: 'space-between'
	},

	...buttons,
	
	button_high_local:{
		backgroundColor: 'transparent',
		color: 'black',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: '#f5f5f5',
			boxShadow: 'none',
		},
	},
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
	}
}));

export default function Index() {
	const classes = useStyles();

	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	}

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar} color="white">
				
				<Toolbar disableGutters="true" style={{ borderBottom: '1px solid lightgrey' }}>
					<Header />
				</Toolbar>
				
				<Toolbar disableGutters="true" className={ classes.second_toolbar } >
					<div>
						<Button className={[ classes.button_high, classes.button_high_local ]} startIcon={ <ViewListOutlined />} >Listas</Button>
						<Button className={[ classes.button_high, classes.button_high_local ]} style={{ color: '#2979ff' }} startIcon={ <AssessmentOutlined className={ classes.active } />} >Tablero</Button>
					</div>
					<div> 
						<Button className={[ classes.button_high, classes.button_high_local ]} startIcon={ <SwapVertOutlined />} >Ordenar</Button>
						<Button className={[ classes.button_high, classes.button_high_local ]} startIcon={ <FilterListOutlined />} >Filtrar</Button>
						<Button className={[ classes.button_high, classes.button_high_local ]} startIcon={ <MoreVertOutlined />} ></Button>
					</div> 
				</Toolbar>

			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<Toolbar />
				<Toolbar />
				<div className={classes.drawerContainer}>
					<List>

						<ListItem button>
							<ListItemIcon>
								<HomeOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary="Inicio" />
						</ListItem>
						
						<ListItem button onClick={handleClick}>
							<ListItemIcon>
								<CheckBoxOutlined />
							</ListItemIcon>
							<ListItemText primary="Proyectos" />
							{ open ? <ExpandLess /> : <ExpandMore /> }
						</ListItem>
						<Collapse in={open} timeout="auto" unmountOnExit>
							
							<List component="div" disablePadding>
								
								<ListItem button className={classes.nested}>
									<ListItemIcon>
										<ArrowRightOutlined />
									</ListItemIcon>
									<ListItemText primary="Multiceras" />
								</ListItem>
								
								<ListItem button className={classes.nested}>
									<ListItemIcon>
										<ArrowRightOutlined />
									</ListItemIcon>
									<ListItemText primary="Producción" />
								</ListItem>

								<ListItem button className={classes.nested}>
									<ListItemIcon>
										<ArrowRightOutlined />
									</ListItemIcon>
									<ListItemText primary="Gerencia" />
								</ListItem>
							
							</List>

						</Collapse>

						<ListItem button>
							<ListItemIcon>
								<DashboardOutlined />
							</ListItemIcon>
							<ListItemText primary="Dashboard" />
						</ListItem>

						<ListItem button>
							<ListItemIcon>
								<ListAltOutlined />
							</ListItemIcon>
							<ListItemText primary="Inventario" />
						</ListItem>

						<ListItem button>
							<ListItemIcon>
								<FolderOutlined />
							</ListItemIcon>
							<ListItemText primary="Ventas" />
						</ListItem>

						<ListItem button>
							<ListItemIcon>
								<GroupOutlined />
							</ListItemIcon>
							<ListItemText primary="Clientes" />
						</ListItem>

					</List>
					
					<Typography variant="overline" gutterBottom style={{ marginLeft: 10 }}>TEAMS</Typography>
					
					<List>
						<ListItem button>
							<ListItemIcon>
								<FolderOutlined />
							</ListItemIcon>
							<ListItemText primary="Multiceras" />
						</ListItem>

						<ListItem button>
							<ListItemIcon>
								<Add />
							</ListItemIcon>
							<ListItemText primary="Add new team" />
						</ListItem>  
					</List>
				</div>
			</Drawer>
			<main className={classes.content}>
				<Toolbar />
				<Toolbar />
				
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


			</main>
		</div>
	);
}

