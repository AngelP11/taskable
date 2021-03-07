import React from 'react'
import { Box, Typography, LinearProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	icons: {
		fontSize: '10px',
		color: '#c0c0c0',
		fontFamily: 'Inter-regular !important',
	},
	linearProgress: {
		color: '#f1f1f5',
		borderRadius: '3px',
		backgroundColor: '#f1f1f5',
	},
	barColorPrimary: {
		backgroundColor: '#36ecae'
	},
}))

export default function BarraProgreso(props){
	let classes = useStyles()

	return (
		<>
			<Box style={{ display: 'flex', justifyContent: 'flex-end' }} minWidth={35}>
				<Typography variant="caption" className={ classes.icons }>69%</Typography>
			</Box>
			<Box width="100%" mr={1}>
				<LinearProgress variant="determinate" className={ classes.linearProgress } classes={{ barColorPrimary: classes.barColorPrimary }} value={69} />
			</Box>
		</>
	)
}