import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, CssBaseline, Toolbar } from '@material-ui/core';

import Header from './Header'
import SideBarContent from './SideBarContent'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	'@global': {
		body: {
			
		}
	},
	root: {
		display: 'flex',
		backgroundColor: 'white'
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
	},
	container: {
		borderTopLeftRadius: 40,
		padding: '30px 0px 30px 30px',
		backgroundColor: '#fafafa',
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
	active: {
		color: '#2979ff'
	},
	
}));

export default function Layout({ children }) {
	
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
				
				{/* ONTENIDO DE LA PAGINA */}
				<div className={classes.container}>
					{ children }
				</div>

			</main>
		</div>
	);
}

