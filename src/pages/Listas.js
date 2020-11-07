import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
	Paper, Button, Grid, Accordion, AccordionDetails, Typography, Collapse, Box, IconButton, AccordionSummary, 
	List, ListItem, ListItemSecondaryAction, ListItemText, Checkbox
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ListItemIcon from '@material-ui/core/ListItemIcon';


import Layout from '../components/Layout'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: 0
	},
	raiz: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	border: {
		borderTop: '1px solid #e1e2e6',
		'&:last-child': {
	    	borderBottom: '1px solid #e1e2e6',
	    },
		padding: 0
	},
	subtitle: {
		fontSize: 20,
		color: '#2d2d37'
	},
	heading: {
		fontSize: theme.typography.pxToRem(20),
		flexBasis: '33.33%',
		flexShrink: 0,
	},
	grid_borders: {
		borderTop: '1px solid #e1e2e6',
		borderBottom: '1px solid #e1e2e6',
		borderLeft: '1px solid #e1e2e6',
		'&:nth-child(-n+2)': {
			borderLeft: 0,
	    },
	    paddingLeft: 10
	},
	br: {
		borderRight: '1px solid #e1e2e6',
		padding: 0,
		'&:last-child': {
			borderRight: 0,
	    },
	    paddingLeft: 10
	}
}))

export default function Lista(){

	let classes = useStyles()

	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	}

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

	let arr = [0, 1, 2, 3]

	return (
		<Layout>
			<Paper className={classes.root} style={{ padding: 20 }}>
				<Grid container style={{ marginBottom: 10 }}>
					<Grid item className={ classes.grid_borders } style={{ width: 25 }}></Grid>
					<Grid item className={ classes.grid_borders } xs={5}>
						<p>Tareas</p>
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

				<Grid container spacing={2}>
					<Grid style={{ padding: 0 }} item xs={12}>
						<Accordion expanded={ expanded === 'panel1' } onChange={ handleChange('panel1') } style={{ boxShadow: 'none' }} >
							<AccordionSummary
								expandIcon={ <ExpandMoreIcon /> }
								aria-controls="panel1bh-content"
								id="panel1bh-header"
							>
								<Typography className={classes.heading}>Sin comenzar</Typography>
							</AccordionSummary>
							<AccordionDetails style={{ padding: 0 }}>
								
								<List className={classes.raiz}>
									{arr.map((value, index) => {
										const labelId = `checkbox-list-label-${value}`;

										return (
											<ListItem 
												alignItems="center" 
												className={ classes.border } 
												key={index} 
												role={undefined} 
												dense
											>
												<ListItemIcon onClick={ handleToggle(value) }>
													<Checkbox
														edge="start"
														checked={checked.indexOf(value) !== -1}
														tabIndex={-1}
														disableRipple
														inputProps={{ 'aria-labelledby': labelId }}
													/>
												</ListItemIcon>
												<Grid container>
													<Grid item className={ classes.br } xs={5}>
														<p>Tareas</p>
													</Grid>
													<Grid item className={ classes.br } xs>
														<p>Personas</p>
													</Grid>
													<Grid item className={ classes.br } xs>
														<p>Progeso</p>
													</Grid>
													<Grid item className={ classes.br } xs>
														<p>Tiempo</p>
													</Grid>
													<Grid item className={ classes.br } xs>
														<p>Prioridad</p>
													</Grid>
													<Grid item className={ classes.br } xs>
														<p>Etiqueta</p>
													</Grid>
												</Grid>
											</ListItem>
										);
									})}
								</List>
							</AccordionDetails>
						</Accordion>
					</Grid>
				</Grid>
			</Paper>
		</Layout>
	)
}