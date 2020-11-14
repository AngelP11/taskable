import React from 'react'
import { Button, Typography, Grid, Card, CardContent, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from "react-router-dom";

import { buttons } from '../styles/buttons.js'
import globals from '../styles/globals.js'

const useStyles = makeStyles({
	...buttons,
	...globals,
	btn: {
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
						<Typography variant="h5" className={classes.title} gutterBottom>Taskable <span className={ classes.appText }>app</span></Typography>
						<Typography className={classes.pos}>Iniciar Sesión</Typography>
						<Typography variant="body2" className={classes.text} component="p">Utiliza tu usuario o correo electrónico</Typography>

						<TextField id="outlined-basic" fullWidth size="small" className={classes.input} label="Usuario o correo" variant="outlined"/>

						<Button variant="contained" fullWidth className={ classes.button_high } disableElevation>Siguiente</Button>
					</CardContent>
				</Card>

				<Typography variant="body2" className={classes.footer} component="p">Al dar click en crear cuenta esta aceptando los <Link className={classes.link} to="/taskable/register">Terminos y condiciones</Link> de Taskble LLC.</Typography>
			</Grid>
		</Grid>
	)
}

export default Login