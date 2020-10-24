import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Collapse, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { CheckBoxOutlined, ExpandLess, 
	ExpandMore, DashboardOutlined, FolderOutlined,
	GroupOutlined, Add, ListAltOutlined
} from '@material-ui/icons';

import ArrowRightOutlined from '@material-ui/icons/ArrowRightOutlined'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

const useStyles = makeStyles((theme) => ({

}))

export default function SideBarContent(){

	const classes = useStyles();

	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	}

	return (
		<div className={classes.drawerContainer}>
			<List>

				<ListItem button>
					<ListItemIcon>
						<HomeOutlinedIcon />
					</ListItemIcon>
					<ListItemText primary="Inicio" />
				</ListItem>
				
				<ListItem button onClick={handleClick}>
					<ListItemIcon>
						<CheckBoxOutlined />
					</ListItemIcon>
					<ListItemText primary="Proyectos" />
					{ open ? <ExpandLess /> : <ExpandMore /> }
				</ListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					
					<List component="div" disablePadding>
						
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<ArrowRightOutlined />
							</ListItemIcon>
							<ListItemText primary="Multiceras" />
						</ListItem>
						
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<ArrowRightOutlined />
							</ListItemIcon>
							<ListItemText primary="Producción" />
						</ListItem>

						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<ArrowRightOutlined />
							</ListItemIcon>
							<ListItemText primary="Gerencia" />
						</ListItem>
					
					</List>

				</Collapse>

				<ListItem button>
					<ListItemIcon>
						<DashboardOutlined />
					</ListItemIcon>
					<ListItemText primary="Dashboard" />
				</ListItem>

				<ListItem button>
					<ListItemIcon>
						<ListAltOutlined />
					</ListItemIcon>
					<ListItemText primary="Inventario" />
				</ListItem>

				<ListItem button>
					<ListItemIcon>
						<FolderOutlined />
					</ListItemIcon>
					<ListItemText primary="Ventas" />
				</ListItem>

				<ListItem button>
					<ListItemIcon>
						<GroupOutlined />
					</ListItemIcon>
					<ListItemText primary="Clientes" />
				</ListItem>

			</List>
			
			<Typography variant="overline" gutterBottom style={{ marginLeft: 10 }}>TEAMS</Typography>
			
			<List>
				<ListItem button>
					<ListItemIcon>
						<FolderOutlined />
					</ListItemIcon>
					<ListItemText primary="Multiceras" />
				</ListItem>

				<ListItem button>
					<ListItemIcon>
						<Add />
					</ListItemIcon>
					<ListItemText primary="Add new team" />
				</ListItem>  
			</List>
		</div>
	)
}