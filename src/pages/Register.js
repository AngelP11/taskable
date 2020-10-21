import React, { useState } from 'react'
import { Button, Typography, Grid, Card, CardActions, CardContent, TextField, Select, MenuItem, FormControl, InputLabel, InputAdornment, IconButton, Tooltip, Popper, Fade } from '@material-ui/core'

import { Help, CheckCircleOutline, Visibility, VisibilityOff } from '@material-ui/icons'

import { makeStyles } from '@material-ui/core/styles'


import { Link } from "react-router-dom";

import { buttons } from '../styles/buttons.js'
import globals from '../styles/globals.js'

import background from '../assets/backgrund_checkpassword.png'


const useStyles = makeStyles((theme) => ({
	inputContainer: {
		marginTop: 24,
		marginBottom: 20,
		flexGrow: 1
	},
	terminos: {
		color: '#2d2d37',
		fontSize: 10,
		textAlign: 'center',
		marginTop: 10,
		opacity: 0.54
	},
	formControl: {
		width: '100%'
	},

	arrow: {
		position: 'absolute',
		fontSize: 10,
		width: '4em',
		height: '5em',
		'&::before': {
			content: '""',
			margin: 'auto',
			display: 'block',
			width: 0,
			height: 0,
			borderStyle: 'solid',
		},
	},
	popper: {
		zIndex: 1,
		marginBottom: 8,
		// '&[x-placement*="top"] $arrow': {
		// 	bottom: 0,
		// 	left: 90,
		// 	marginBottom: '-1.5em',
		// 	width: '3.5em',
		// 	height: '1.5em',
		// 	'&::before': {
		// 		borderWidth: '1em 1em 0 1em',
		// 		borderColor: `#f9f9f9 transparent transparent transparent`,
		// 	},
		// },
	},
	paper: {
		backgroundImage: `url(${background})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		border: 'none',
		boxShadow: '0 0 0 #fff',
	},
	small: {
		fontSize: 10
	},
	isValid: {
		color: 'green'
	},

	...buttons,
	...globals
}))

function Register() {

	const classes = useStyles()

	const meses = [
		{ mes: 'Enero', dias: 31 },
		{ mes: 'Febrero', dias: 28 },
		{ mes: 'Marzo', dias: 31 },
		{ mes: 'Abril', dias: 30 },
		{ mes: 'Mayo', dias: 31 },
		{ mes: 'Junio', dias: 30 },
		{ mes: 'Julio', dias: 31 },
		{ mes: 'Agosto', dias: 31 },
		{ mes: 'Septiempre', dias: 30 },
		{ mes: 'Octubre', dias: 31 },
		{ mes: 'Noviembre', dias: 30 },
		{ mes: 'Diciembre', dias: 31 },
	] 
	const [dias, setDias] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]) // cantidad de dias por mes
	const [dia, setDia] = useState(0) // valor del dia seleccionado
	const [mes, setMes] = useState('')
	const [anio, setAnio] = useState(0)
	const [password, setPassword] = useState(null)
	const [password_confirmation, setPassword_confirmation] = useState(null)
	const [showPassword, setShowPassword] = useState(false)
	const [password_confirm_error, setPassword_confirm_error] = useState(false);
	
	const [rule1, setRule1] = useState(false);
	const [rule2, setRule2] = useState(false);
	const [rule3, setRule3] = useState(false);
	// const [rule4, setRule4] = useState(false);
	
	const [anchorEl, setAnchorEl] = useState(null);
	const anchorRef = React.useRef(null)
	const [arrowRef, setArrowRef] = React.useState(null)

	const handleDia = (ev) => {
		setDia(ev.target.value)
	}
	const handleMes = (ev) => {
		setMes(ev.target.value)
	}
	const handleAnio = (ev) => {
		setAnio(ev.target.value)
	}

	const handlePassword = (ev) => {
		let value = ev.target.value

		// 8 catacteres como minimo
		if ( value.length >= 8 ) {
			setRule1(true)
		}
		else {
			setRule1(false)	
		}

		// Letas mayusculas y minusculas
		if ( /(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+/.test(value) ) {
			setRule2(true)	
		}
		else {
			setRule2(false)
		}

		// al menos un numero
		if ( /(?=.*\d)[\d]+/.test(value) ) {
			setRule3(true)
		}
		else {
			setRule3(false)
		}

		// // Caracteres especiales
		// if ( /(?=.*?[#?!@$%^&*-/_\[\]\{\}:\+=])?/.test(value) ) {
		// 	setRule4(true)	
		// }
		// else {
		// 	setRule4(false)
		// }

		setPassword(value)
	}

	const handleConfirmPassword = (ev) => {

		let value = ev.target.value

		if (value != password) {
			setPassword_confirm_error(true)
		}
		else {
			setPassword_confirm_error(false)
		}

		setPassword_confirmation(value)
	}

	const managePopper = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	}

	const open = Boolean(anchorEl);

	// <span className={classes.arrow} ref={setArrowRef} />
			
	return (
		<Grid container justify="center" alignItems="center" style={{ height: '97vh' }}>
			<Grid item>
				
				<Card className={classes.card} variant="outlined">
					<CardContent>
						<Typography variant="h5" className={classes.title} gutterBottom>Taskble <span className={classes.appText}>app</span></Typography>

						<div className={classes.inputContainer}>
							
							<Grid container spacing={2} style={{ marginBottom: 8 }}>
								<Grid xs={12} sm={6} item >
									<TextField id="outlined-name" size="small" label="Nombre" variant="outlined" />
								</Grid>
								<Grid xs={12} item sm={6}>
									<TextField id="outlined-lastname" size="small" label="Apellidos" variant="outlined" />
								</Grid>
							</Grid>

							<Grid container spacing={2} style={{ marginBottom: 8 }}>
								<Grid item xs={12}>
									<TextField fullWidth id="outlined-username" size="small" label="Nombre de usuario" variant="outlined" />
								</Grid>
							</Grid>

							<Grid container spacing={2} style={{ marginBottom: 8 }}>
								<Grid item xs={12}>
									<TextField fullWidth id="outlined-email" size="small" label="Correo electrónico" variant="outlined" />
								</Grid>
							</Grid>
							
							<Grid container spacing={2} style={{ marginBottom: 8 }}>
								
								<Grid item xs={3}>
									<FormControl variant="outlined" className={classes.formControl}>
										<InputLabel id="demo-simple-select-outlined-label">Día</InputLabel>
										<Select
											labelId="demo-simple-select-outlined-label"
											id="demo-simple-select-outlined"
											onChange={ handleDia }
											label="Día"
										>
											{ dias.map((v, i) => <MenuItem key={i} value={v}>{v}</MenuItem> ) }
										</Select>
									</FormControl>
								</Grid>

								<Grid item xs={6}>
									<FormControl variant="outlined" className={classes.formControl}>
										<InputLabel id="demo-simple-select-outlined-label">Mes</InputLabel>
										<Select
											labelId="demo-simple-select-outlined-label"
											id="demo-simple-select-outlined"
											onChange={ handleMes }
											label="Mes"
										>
											{
												meses.map((v, i) => <MenuItem key={i} value={v.mes}>{v.mes}</MenuItem> )
											}
										</Select>
									</FormControl>
								</Grid>
								
								<Grid item xs={3}>
									<FormControl variant="outlined" className={classes.formControl}>
										<InputLabel id="demo-simple-select-outlined-label">Año</InputLabel>
										<Select
											labelId="demo-simple-select-outlined-label"
											id="demo-simple-select-outlined"
											onChange={ handleAnio }
											label="Año"
										>
											<MenuItem value={2010}>2010</MenuItem>
											<MenuItem value={2009}>2009</MenuItem>
											<MenuItem value={2008}>2008</MenuItem>
											<MenuItem value={2007}>2007</MenuItem>
											<MenuItem value={2006}>2006</MenuItem>
											<MenuItem value={2005}>2005</MenuItem>
											<MenuItem value={2004}>2004</MenuItem>
											<MenuItem value={2003}>2003</MenuItem>
											<MenuItem value={2002}>2002</MenuItem>
											<MenuItem value={2001}>2001</MenuItem>
											<MenuItem value={2000}>2000</MenuItem>
											<MenuItem value={1999}>1999</MenuItem>
											<MenuItem value={1998}>1998</MenuItem>
											<MenuItem value={1997}>1997</MenuItem>
											<MenuItem value={1996}>1996</MenuItem>
											<MenuItem value={1995}>1995</MenuItem>
											<MenuItem value={1994}>1994</MenuItem>
											<MenuItem value={1993}>1993</MenuItem>
											<MenuItem value={1992}>1992</MenuItem>
											<MenuItem value={1991}>1991</MenuItem>
											<MenuItem value={1990}>1990</MenuItem>
										</Select>
									</FormControl>
								</Grid>
							</Grid>

							<Popper className={classes.popper} open={open} anchorEl={anchorEl} placement="top-start" transition>
								{({ TransitionProps }) => (
									<Fade {...TransitionProps} timeout={350}>
										<Card className={classes.paper} raised={false}>
											<CardContent>
												<Typography className={classes.small} component="p" variant="caption" gutterBottom >
													Por tu seguridad, la contraseña debe contener:
												</Typography>
												<Typography className={ rule1 ? classes.isValid : null } component="p" variant="caption" gutterBottom >
													<CheckCircleOutline style={{ fontSize: 12 }} /> 8 caracteres como mínimo
												</Typography>
												<Typography className={ rule2 ? classes.isValid : null } component="p" variant="caption" gutterBottom >
													<CheckCircleOutline style={{ fontSize: 12 }} /> Letras mayúsculas y minúsculas
												</Typography>
												<Typography className={ rule3 ? classes.isValid : null } component="p" variant="caption" gutterBottom >
													<CheckCircleOutline style={{ fontSize: 12 }} /> Al menos un número
												</Typography>
											</CardContent>
										</Card>
									</Fade>
								)}
							</Popper>

							<Grid container alignItems="center" spacing={1} style={{ marginBottom: 8 }}>
								<Grid item xs>
									<TextField
										onFocus={ (e) => managePopper(e) }
										onBlur={ (e) => managePopper(e) }
										onChange={ (e) => handlePassword(e) }
										id="outlined-name"
										size="small"
										label="Contraseña"
										type={ showPassword ? 'text' : 'password' }
										variant="outlined" 
									/>
								</Grid>
								<Grid item xs>
									<TextField
										label="Confirmación"
										variant="outlined"
										error={ password_confirm_error }
										size="small"
										type={ showPassword ? 'text' : 'password' }
										onChange={ (e) => handleConfirmPassword(e) }
										InputProps={{
											endAdornment: <InputAdornment position="end">
												{ password_confirm_error ? 
													<Tooltip title="Las contraseñas no coinciden" placement="top" arrow>
														<IconButton edge="end">
															<Help style={{ fontSize: 14 }} />
														</IconButton>
													</Tooltip> : null
												}
											</InputAdornment>
										}}
									/>
								</Grid>
								<Grid xs={1} item>
									<IconButton size="small" onClick={ () => setShowPassword(!showPassword) }>{ showPassword ? <Visibility /> : <VisibilityOff /> }</IconButton>
								</Grid>
							</Grid>

						</div>

						<Button variant="contained" fullWidth className={[ classes.button_high]} disableElevation>Crear cuenta</Button>

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