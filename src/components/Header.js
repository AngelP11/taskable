import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

/* Assets */
import './styles/Header.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height: 64,
    },
}));

function Header() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={2}>
                    <div className="Header-logoContainer">
                        Taskble
                    </div>
                </Grid>
                <Grid item xs={10}>
                    <div className="Header-Container">
                        Info
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header