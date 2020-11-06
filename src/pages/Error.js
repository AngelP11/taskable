import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(() => ({
	error: {
		textAlign: 'center',
		width: '100%',
	}
}))

function Error() {

	const classes = useStyles()
		
  	return (
		<>
			<Box display="flex" flexDirection="row">
				<Box p={10} className={ classes.error }>
					<Typography variant="h2" component="h2">
						Sorry, but the page you are looking for could not be found.
					</Typography>
		        </Box>
			</Box>
		</>
	  )
}

export default Error