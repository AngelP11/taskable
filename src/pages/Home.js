import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, CssBaseline, Paper, Box, IconButton, 
	Typography, Divider, ListItem, ListItemText, 
	Collapse, Button, Grid, Toolbar
} from '@material-ui/core';

import Add from '@material-ui/icons/Add';

import Header from '../components/Header'
import SideBarContent from '../components/SideBarContent'
import Tablero from './Tablero'


import { buttons } from '../styles/buttons.js'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
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
	
}));

export default function Home() {
	
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />

			{/* HEADER  */}
			<Header />
			
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<Toolbar />
				<Toolbar />

				{/* SIDEBAR */}
				<SideBarContent />

			</Drawer>
			<main className={classes.content}>
				<Toolbar />
				<Toolbar />
				
				{/* TABLERO CONTENIDO DE LA PAGINA */}
				<Tablero />

			</main>
		</div>
	);
}

