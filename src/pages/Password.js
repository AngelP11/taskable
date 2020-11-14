import React from 'react'
import { Button, Typography, Grid, Card, CardActions, CardContent, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from "react-router-dom";

import { buttons } from '../styles/buttons.js'
import globals from '../styles/globals.js'

const useStyles = makeStyles({
	btn: {
		marginBottom: 25,
	},
	footer: {
		width: '100%',
		textAlign: 'center',
	  	fontSize: 14,
	  	fontWeight: 500,
	  	lineHeight: 1.21,
	  	letterSpacing: 0.02,
	  	color: '#797979'
	},
	pos: {
		marginBottom: 18,
		marginTop: 30,
		color: '#2d2d37',
		opacity: 0.87,
		fontSize: 24,
		fontWeight: 500,
	},
	text: {
		color: '#2d2d37',
		fontSize: 16,
		fontWeight: 300,
	},
	...buttons,
	...globals
})

function Password() {

	const classes = useStyles()
			
	return (
		<Grid container justify="center" alignItems="center" style={{ height: '97vh' }}>
			<Grid item>
				
				<Card className={classes.card} variant="outlined">
					<CardContent>
						<Typography variant="h5" className={classes.title} gutterBottom>Taskable <span className={classes.appText}>app</span></Typography>
						<Typography className={classes.pos}>¡Hola, Joan!</Typography>
						<Typography variant="body2" className={classes.text} component="p">Ingresa tu contraseña de seguridad</Typography>

						<TextField id="outlined-basic" type="password" size="small" fullWidth className={ classes.input } label="Contraseña" variant="outlined" />

						<Button variant="contained" fullWidth className={[classes.btn, classes.button_high]} disableElevation>Iniciar Sesión</Button>
					</CardContent>

					<CardActions >
						<Typography variant="body2" className={classes.footer} component="p">¿Aún no tienes una cuenta Taskble? <Link className={classes.link} to="/register">Crea una cuenta</Link></Typography>
					</CardActions>
				</Card>
			
			</Grid>
		</Grid>
	)
}

export default Password