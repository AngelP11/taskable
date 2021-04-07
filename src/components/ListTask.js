import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {  Button, Grid, ListItem, Checkbox } from '@material-ui/core';

/* Icons */
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { ScheduleOutlined } from '@material-ui/icons';

/* Components */
import Team from './Team'
import BarraProgreso from './BarraProgreso'

/* Assets */
import { buttons } from '../styles/buttons.js'

const useStyles = makeStyles((theme) => ({
	text: {
		color: '#757575'
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
	border: {
		borderTop: '1px solid #e1e2e6',
		'&:last-child': {
			borderBottom: '1px solid #e1e2e6',
		},
		padding: 0
    },
    br: {
		borderRight: '1px solid #e1e2e6',
		padding: 0,
		'&:last-child': {
			borderRight: 0,
		},
		paddingLeft: 6,
		paddingRight: 6,
		color: 'grey'
	},
	caption: {
		color: '#ff5861',
		fontWeight: 300,
		fontSize: '10px',
		fontFamily: 'Inter-regular !important',
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
		paddingTop: 12,
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
	blueBorder: {
		border: '1px solid #2979ff'
	},
	buttonRightContainer: {
		color: 'grey',
		fontSize: 12,
		alignItems: 'center',
		display: 'flex',
		opacity: 0
	},
	detalles: { cursor: 'pointer' },
}))


function ListTask(props) {
    const classes = useStyles()

    // efecto hover los elementos "detalles" y los "tres puntos"
    document.addEventListener('DOMContentLoaded', () => {
	    let hover = document.querySelector('#hover_container')
	    let detalle = document.querySelector('#detalle_3puntos')

	    hover.addEventListener('mouseover', () => {
	    	detalle.style = "opacity: 1; transition: opacity 0.5s"
	    })
    })
    
    return (
		<ListItem
			alignItems="center"
			className={ classes.border }
			key={props.index}
			role={undefined}
			dense
		>
			<Grid container>
				<Grid
					item
					style={{ display: 'flex', justifyContent: 'space-between' }}
					className={[ classes.br, 'listas']}
					xs={ (props.isShowedDetailedList) ? 12 : 5 }
				>
					<div id="hover_container">
						{/* <DragIndicator style={{ color: 'grey' }}></DragIndicator> */}

						<Checkbox 
							onChange={props.handleToggle(props.index, props.task)}
							color="lightgrey"
							checked={props.checked.indexOf(props.index) !== -1}
						/>
						<label
							onClick={ props.openDetailedList(props.task) }
							style={{ fontWeight: 200, cursor: 'pointer' }}>
							{ props.task.content }
						</label>
					</div>
					<div id="detalle_3puntos" className={ classes.buttonRightContainer }>
						<small className={ classes.detalles } onClick={ props.openDetailedList(props.task) }>Detalles </small>
						<MoreHorizIcon style={{ marginLeft: 5 }} />
					</div>
				</Grid>
				
				{ ( ! props.isShowedDetailedList ) ? (
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
								{ props.task.timeLeft ?
									( <small className={ classes.caption }>Finalizado</small> )
									:
									( <small className={ classes.caption }>2 días restantes</small> )
								}
							</div>
						</Grid>
						<Grid item className={ classes.br } xs>
							<div className={ classes.div }>
							<Button className={ classes.btn_priority } >{ props.task.priority }</Button>
							</div>
						</Grid>
						<Grid item className={ classes.br } xs>
							<div className={ classes.divCenter }>
							</div>
						</Grid>
					</> ) : null
				}
			</Grid>
		</ListItem>
    )
}

export default ListTask