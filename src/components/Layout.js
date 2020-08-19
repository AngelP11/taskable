import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

/* Assests */
import './styles/Layout.css'

/* Components */
import Header from './Header'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
}));

function Layout ({ children }) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={2}>
                    <div className="Layout-navbarContainer">
                        Navbar
                    </div>
                </Grid>
                <Grid item xs={10}>
                    <div className="Layout-Container">
                        { children }
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Layout