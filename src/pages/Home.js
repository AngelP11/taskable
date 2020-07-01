import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  button: {
    height: 36,
    padding: '8px 16px 8px 16px',
    boxShadow: 'none',
    borderRadius: 4,
    backgroundColor: '#1a73e8',
    color: 'white',
    fontFamily: 'Manrope',
    textTransform: 'capitalize',
    fontSize: 14,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#1a73e8',
      boxShadow: '0 1px 3px 2px rgba(22, 115, 232, .2)'
    }
  }
})

function Home () {
    const classes = useStyles()

    return (
        <Button className={classes.button}>Hablemos</Button>
    )
}

export default Home