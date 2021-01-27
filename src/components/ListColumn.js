import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, List, ListItem, Grid, Typography, AccordionDetails, AccordionSummary } from '@material-ui/core';

/* Icons */
import Add from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

/* Components */
import ListTask from './ListTask'

const useStyles = makeStyles((theme) => ({
	heading: {
		fontSize: theme.typography.pxToRem(20),
		flexBasis: '100%',
		flexShrink: 0,
		color: '#424242',
    },
    raiz: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: 0,
	},
	border: {
		borderTop: '1px solid #e1e2e6',
		'&:last-child': {
			borderBottom: '1px solid #e1e2e6',
		},
		padding: 0
    },
    br: {
		borderRight: '1px solid #e1e2e6',
		padding: 0,
		'&:last-child': {
			borderRight: 0,
		},
		paddingLeft: 6,
		paddingRight: 6,
		color: 'grey'
	},
    icon: {
        order: -1,
        padding: 0,
        marginRight: 5
    }
}))

function ListColumn(props) {
    const classes = useStyles()

    return (
        <Accordion
            style={{ boxShadow: 'none' }}
            defaultExpanded={true}
        >
            <AccordionSummary
                expandIcon={ <ExpandMoreIcon /> }
                classes={{ expandIcon: classes.icon }}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography className={classes.heading}>{ props.column.title }</Typography>
            </AccordionSummary>

            <AccordionDetails style={{ padding: 0 }}>
                <List className={classes.raiz}>
                    {props.tasks.map((task, index) => {
                        return <ListTask
                                    key={task.id}
                                    task={task}
                                    index={index}
                                    handleToggle={props.handleToggle}
                                    openDetailedList={props.openDetailedList}
                                    isShowedDetailedList={props.isShowedDetailedList}
                                    checked={props.checked}
                                />
                    })}
                    <ListItem
                        alignItems="center"
                        className={ classes.border }
                        role={undefined}
                        dense
                    >
                        <Grid container style={{ opacity: 0.5, padding: 6 }} alignItems="center">
                            <Grid item className={ classes.br } container xs>
                                <Add style={{ marginRight: 5, paddingBottom: 4 }}></Add>
                                <span>Añadir tarea</span>
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
            </AccordionDetails>
        </Accordion>
    )
}

export default ListColumn