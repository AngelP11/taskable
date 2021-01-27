import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

import persona1 from '../assets/imagen-4.png'

const useStyles = makeStyles((theme) => ({
	card: {
		borderRadius: 20,
		padding: '24px 24px 24px 23px',
		width: 420,
		margin: '0 32px 0 0',
	},
	small: {
		fontSize: 14,
		color: '#2d2d37',
		opacity: '.86',
		fontFamily: 'Inter-regular'
	},
	imageContainer: {
		// border: '1px solid',
		width: 50,
		marginRight: 18,
	},
	img: {
		width: 48,
	    height: 48,
	    borderRadius: '50%',
	},
	bold: {
		color: '#2d2d37'
	},
	cardTitle: {
		fontFamily: 'Manrope',
		fontSize: 20,
		color: '#a2a2a2'
	},
	cardTitleContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'start',
		marginTop: 16
	},
	cardText: {
		color: '#2d2d37',
		opacity: .72,
		fontSize: 16
	},
	cardTextContainer: {
		padding: '17px 16px 16px',
		borderRadius: 10,
		backgroundColor: '#f6f6f8',
		marginTop: 24
	}
}));

export default function NovedadesCard(props) {

	const classes = useStyles();

	return (
		<Paper className={classes.card} elevation={0}>
			<div>
				<span className={classes.small}>Hace 4 horas</span>
			</div>
			
			<div className={classes.cardTitleContainer}>
				<div className={classes.imageContainer}>
					<img className={classes.img} src={persona1} alt="1"/>
				</div>
				<div>
					<span className={classes.cardTitle}>
						<span className={classes.bold}>Joan</span> te mencionó en <span className={classes.bold}>"Emitir factura"</span>
					</span>
				</div>
			</div>

			<div>
				<div className={classes.cardTextContainer}>
					<p className={classes.cardText}>¡Hola, Marco! ¿Cómo vas con este tema?, Lo necesitamos urgente.</p>
				</div>
			</div>
		</Paper>
	)
}