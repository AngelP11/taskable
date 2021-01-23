import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, AppBar, Tabs, Tab, List, ListItem, ListItemIcon,
	Checkbox, ListItemSecondaryAction, ListItemText, Link, Divider
} from '@material-ui/core';

import { ScheduleOutlined } from '@material-ui/icons';

import Layout from '../components/Layout'
import NovedadesCard from '../components/NovedadesCard'

const useStyles = makeStyles((theme) => ({
	container: {
		borderTopLeftRadius: 40,
		padding: '30px 0px 30px 30px',
		backgroundColor: '#f6f6f8',
	},
	cardsContainer: {
		marginBottom: 44,
		display: 'flex',
		justifyContent: 'start',
		overflowX: 'auto'
	},
	cardBody: {
		backgroundColor: 'white',
		padding: '27px 48px 0 38px',
		borderRadius: 10,
	},
	caption: {
		color: '#ff5861',
		fontWeight: 300,
		fontSize: 16,
		fontFamily: 'Inter-regular',
	},
	wrapper: {
		'& span' : {
			fontFamily: 'Manrope',
			fontVariant: 'small-caps'
		}
	},
	primary: {
		fontFamily: 'Manrope',
		fontSize: 20,
		color: '#2d2d37'
	},
	secondary: {
		color: '#2d2d37',
		opacity: .68,
		fontFamily: 'Inter-regular',
		fontSize: 16
	},
	primaryLink: {
		fontFamily: 'Inter-regular',
		fontSize: 14
	}
}));


function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Paper elevation={0} style={{ padding: 5 }}>
					<span>{children}</span>
				</Paper>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}


export default function Home(props) {
	const classes = useStyles();

	const [value, setValue]     = React.useState(0);
	const [checked, setChecked] = React.useState([0]);


	const handleChange = (event, newValue) => {
		setValue(newValue);
	}


	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked   = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		}
		else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	return (
		<Layout>
			<div className={classes.container}>
				<div className={classes.cardsContainer}>
					<NovedadesCard />
					<NovedadesCard />
					<NovedadesCard />
					<NovedadesCard />
				</div>

				<div className={classes.cardBody}>
					<Tabs
						value={value}
						indicatorColor="primary"
						onChange={handleChange}
						aria-label="simple tabs example"
					>
						<Tab classes={{ wrapper: classes.wrapper }} label="Tareas por completar" {...a11yProps(0)} />
						<Tab label="Nuevas" {...a11yProps(1)} />
					</Tabs>
					<TabPanel value={value} index={0}>
						
						<List className={classes.root}>
							{[0, 1, 2, 3].map((value) => {
								const labelId = `checkbox-list-label-${value}`;

								return (
									<>
										<ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
											<ListItemIcon>
												<Checkbox
													edge="start"
													checked={checked.indexOf(value) !== -1}
													tabIndex={-1}
													disableRipple
													color=""
													inputProps={{ 'aria-labelledby': labelId }}
												/>
											</ListItemIcon>
											<ListItemText
												classes={{ primary: classes.primary }}
												id={labelId}
												primary={"Terminar prueba de molde"}
												secondary={"Realizar pruebas de parafinas para moldes PVC de la producción 154."}
											/>
											<ListItemText primary={
												<>
													<ScheduleOutlined style={{ fontSize: 18, margin: '-3px  5px', color: '#ff8d8d' }} />
													<small className={ classes.caption }>2 días restantes</small>
												</>
											}/>
											<ListItemText 
												classes={{ primary: classes.primaryLink }}
												primary={<Link style={{ color: '#29a2ff' }} href="#">Ir a la tarea></Link>}
											/>
										</ListItem>
										<Divider variant="inset" />
									</>
								);
							})}
						</List>

					</TabPanel>
					<TabPanel value={value} index={1}>
						Item Two
					</TabPanel>
				</div>
			</div>
		</Layout>
	) 
}													