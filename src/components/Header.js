import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { NotificationsOutlined, SettingsOutlined } from '@material-ui/icons';

/* Assets */
import './styles/Header.css'
import persona1 from '../assets/imagen-4.png'
import persona2 from '../assets/imagen-24.png'
import persona3 from '../assets/imagen-25.png'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    mr2: {
        marginRight: theme.spacing(2)
    }
}));

function Header() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={2}>
                    <div className="Header-logoContainer">
                        <p>Taskable</p>
                    </div>
                </Grid>
                <Grid item xs={10}>
                    <section className="Header-Container">
                        <article className="Header-infoContainer">
                            <div className="Header-infoIcono"></div>
                            <div className="Header-info">
                                <p className="Header-infoTitle">Ventas y administracion</p>

                                <div className="Header-infoTeamContainer">
                                    <p className="Header-infoCompany">Multiceras</p>
                                    <div className="Header-infoTeam">
                                        <img id="member1" src={persona1} alt="1"/>
                                        <img id="member2" src={persona2} alt="2"/>
                                        <img id="member3" src={persona3} alt="3"/>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="Header-infoContainer">
                            <NotificationsOutlined className={ classes.mr2 } />
                            <SettingsOutlined className={ classes.mr2 } />
                            <div className="Header-userImage"></div>
                        </article>
                    </section>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header