import React from 'react'
import { Button, Box, Typography, Grid, Card, CardActions, CardContent, TextField } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Link } from "react-router-dom";

import { buttons, ripple } from '../styles/buttons.js'

const useStyles = makeStyles({
	card: {
		width: 468,
		textAlign: 'center',
		borderRadius: 16,
		borderStyle: 'none',
		paddingRight: 30,
		paddingLeft: 30,
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
	inputContainer: {
		marginTop: 24,
		marginBottom: 40,
	},
	btn: {
		width: 364,
	  height: 36,
	  borderRadius: 4,
	  borderStyle: 'solid',
	  borderWidth: 1,
	  borderColor: '#e1e2e6',
	  backgroundColor: '#2979ff',
	  color: '#fff',
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
	terminos: {
		color: '#2d2d37',
		fontSize: 10,
		textAlign: 'center',
		marginTop: 10,
		opacity: 0.54
	},
	link: {
		color: '#1a70ff',
		fontWeight: 500,
		fontSize: 14,
	}
})

function Register() {

	const classes = useStyles()
			
	return (
		<Grid container justify="center" alignItems="center" style={{ height: '97vh' }}>
			<Grid item>
				
				<Card className={classes.card} variant="outlined">
					<CardContent>
						<Typography variant="h5" className={classes.title} gutterBottom>Taskble <span className={classes.appText}>app</span></Typography>

						<div className={classes.inputContainer}>
							
							<Grid container spacing={3} style={{ marginBottom: 8 }}>
								<Grid xs={12} sm={6} item >
									<TextField id="outlined-name" size="small" label="Nombre" variant="outlined" />
								</Grid>
								<Grid xs={12} item sm={6}>
									<TextField id="outlined-lastname" size="small" label="Apellidos" variant="outlined" />
								</Grid>
							</Grid>

							<Grid container spacing={3} style={{ marginBottom: 8 }}>
								<Grid item xs={12}>
									<TextField fullWidth id="outlined-username" size="small" label="Nombre de usuario" variant="outlined" />
								</Grid>
							</Grid>

							<Grid container spacing={3} style={{ marginBottom: 8 }}>
								<Grid item xs={12}>
									<TextField fullWidth id="outlined-email" size="small" label="Correo electrónico" variant="outlined" />
								</Grid>
							</Grid>

						</div>


						<Button variant="contained" className={classes.btn} disableElevation>Crear cuenta</Button>
					</CardContent>

					<CardActions >
						<Typography variant="body2" className={classes.footer} component="p">¿Ya tienes una cuenta? <Link className={classes.link} to="/login">Inicia sesión</Link></Typography>
					</CardActions>
				</Card>
				<Typography className={classes.terminos} variant="caption" component="p" gutterBottom>Al dar click en "Crear cuenta" estás aceptando los <Link to="/terminos">términos y condiciones</Link> de Taskble LLC</Typography>
			
			</Grid>
		</Grid>
	)
}

export default Register