import React from 'react'
import { Grid, AppBar, Toolbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'

import { NotificationsOutlined, SettingsOutlined, 
	ViewListOutlined, AssessmentOutlined, SwapVertOutlined,
	FilterListOutlined, MoreVertOutlined
} from '@material-ui/icons';

import { buttons } from '../styles/buttons.js'

/* Assets */
import './styles/Header.css'
import persona1 from '../assets/imagen-4.png'
import persona2 from '../assets/imagen-24.png'
import persona3 from '../assets/imagen-25.png'

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	mr2: {
		marginRight: theme.spacing(2)
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		boxShadow: '0px 0px 0px #fff',
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
	active: {
		color: '#2979ff',
	}
}));

function Header() {
	const classes = useStyles()

	return (

		<AppBar position="fixed" className={classes.appBar} color="white">
				
			<Toolbar disableGutters="true" style={{ borderBottom: '1px solid lightgrey' }}>
				<div className={classes.root}>
					<Grid container>
						<Grid item xs={2}>
							<div className="Header-logoContainer">
								<p>Taskable</p>
							</div>
						</Grid>
						<Grid item xs={10}>
							<section className="Header-Container">
								<article className="Header-infoContainer">
									<div className="Header-infoIcono"></div>
									<div className="Header-info">
										<p className="Header-infoTitle">Ventas y administracion</p>

										<div className="Header-infoTeamContainer">
											<div className="team_container">
												<p className="Header-infoCompany">Multiceras</p>
												<div className="Header-infoTeam ml_10">
													<img id="member1" src={persona1} alt="1"/>
													<img id="member2" src={persona2} alt="2"/>
													<img id="member3" src={persona3} alt="3"/>
												</div>
											</div>
										</div>
									</div>
								</article>

								<article className="Header-infoContainer">
									<NotificationsOutlined className={ classes.mr2 } />
									<SettingsOutlined className={ classes.mr2 } />
									<div className="Header-userImage"></div>
								</article>
							</section>
						</Grid>
					</Grid>
				</div>
			</Toolbar>
			
			<Toolbar disableGutters="true" className={ classes.second_toolbar } >
				<div>
					<Button 
						to="/taskable/listas" 
						className={[ classes.button_high, classes.button_high_local ]} 
						component={NavLink}
						startIcon={ <ViewListOutlined />}
						activeClassName={ classes.active }
					>
						Listas
					</Button>
					<Button
						to="/taskable/tablero"
						className={[ classes.button_high, classes.button_high_local ]}
						component={NavLink}
						startIcon={ <AssessmentOutlined />}
						activeClassName={ classes.active }
					>
						Tablero
					</Button>
				</div>
				<div> 
					<Button className={[ classes.button_high, classes.button_high_local ]} startIcon={ <SwapVertOutlined />} >Ordenar</Button>
					<Button className={[ classes.button_high, classes.button_high_local ]} startIcon={ <FilterListOutlined />} >Filtrar</Button>
					<Button className={[ classes.button_high, classes.button_high_local ]} startIcon={ <MoreVertOutlined />} ></Button>
				</div> 
			</Toolbar>

		</AppBar>

	)
}

export default Header