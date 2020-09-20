import React from 'react'
import { Button, Box, Typography, Grid, Card, CardActions, CardContent, TextField } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Link } from "react-router-dom";

import { buttons, ripple } from '../styles/buttons.js'

const useStyles = makeStyles({
	...buttons,
	card: {
		width: 468,
		textAlign: 'center',
		borderRadius: 16,
		borderStyle: 'none',
		paddingRight: 25,
		paddingLeft: 5,
		paddingTop: 5,
		paddingBottom: 25,
	},
	appText: {
		fontSize: 9,
		color: "#2979ff",
		position: 'relative',
		bottom: 11,
		right: 5,
	},
	title: {
		fontSize: 28,
		opacity: 0.87,
		fontWeight: 700,
		color: '#2d2d37'
	},
	input: {
		marginTop: 18,
		marginBottom: 26,
		width: 364,
		height: 54,
		borderRadius: 6,
	},
	btn: {
	  width: 364,
	  height: 36,
	  boxShadow: 'none',
	  borderRadius: 6,
	  backgroundColor: '#2979ff',
	  color: '#fff',
	  marginBottom: 25,
	  fontFamily: 'Manrope',
	  textTransform: 'capitalize',
	  '&:hover': {
		cursor: 'pointer',
		backgroundColor: '#2979ff',
		boxShadow: '0 1px 3px 2px rgba(0, 0, 0, .2)',
	  },
	  '&:active': {
		backgroundColor: '#2979ff',
		boxShadow: '0px 8px 9px 0px rgba(0, 0, 0, .24)',
	  },
	},
	footer: {
	  marginTop: 10,
	  width: '100%',
	  textAlign: 'center',
	  fontFamily:'Manrope',
	  fontSize: 10,
	  fontWeight: 500,
	  lineHeight: 1.21,
	  letterSpacing: 0.02,
	  color: '#797979',
	  opacity: .4,
	},
	pos: {
		marginBottom: 18,
		marginTop: 30,
		color: '#2d2d37',
		opacity: 0.87,
		fontSize: 24,
		fontFamily:'Inter-light',
		fontWeight: 600,
	},
	text: {
		color: '#2d2d37',
		fontSize: 16,
		fontWeight: 300,
	},
	link: {
		color: '#797979',
		fontSize: 10,
		fontFamily:'Manrope',
	}
})

function Login() {

	const classes = useStyles()
			
	return (
		<Grid container justify="center" alignItems="center" style={{ height: '97vh' }}>
			<Grid item>
				
				<Card className={classes.card} variant="outlined">
					<CardContent>
						<Typography variant="h5" className={classes.title} gutterBottom>Taskble <span className={classes.appText}>app</span></Typography>
						<Typography className={classes.pos}>Iniciar Sesión</Typography>
						<Typography variant="body2" className={classes.text} component="p">Utiliza tu usuario o correo electrónico</Typography>

						<TextField id="outlined-basic" size="small" className={classes.input} label="Usuario o correo" variant="outlined" size="big"/>

						<Button variant="contained" className={ classes.btn } disableElevation>Siguiente</Button>
					</CardContent>
				</Card>

				<Typography variant="body2" className={classes.footer} component="p">Al dar click en crear cuenta esta aceptando los <Link className={classes.link} to="/register">Terminos y condiciones</Link> de Taskble LLC.</Typography>
			</Grid>
		</Grid>
	)
}

export default Login