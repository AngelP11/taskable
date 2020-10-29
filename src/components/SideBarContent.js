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
	listText: {
		color: '#8f92a1',
		fontSize: 14,
		fontFamily: 'Inter-regular',
	},
	listItemIcon: {
		paddingLeft: 20,
		color: '#8f92a1'
	},
	listItemIcon2: {
		paddingLeft: 35,
	},
	listabtn: {
		borderRadius: 8,
		backgroundColor: 'lightgrey',
	}
}))

export default function SideBarContent(){

	const classes = useStyles();

	const [open, setOpen] = React.useState(false);
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const handleClick = () => {
		setOpen(!open);
	}

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};

	return (
		<div className={classes.drawerContainer}>
			<List>

				<ListItem button
					selected={ selectedIndex === 0 }
					onClick={ (event) => handleListItemClick(event, 0) }
				>
					<ListItemIcon className={ classes.listItemIcon }>
						<HomeOutlinedIcon />
					</ListItemIcon>
					<ListItemText classes={{ primary: classes.listText }} primary="Inicio" />
				</ListItem>
				
				<ListItem button onClick={handleClick}>
					<ListItemIcon className={ classes.listItemIcon }>
						<CheckBoxOutlined />
					</ListItemIcon>
					<ListItemText classes={{ primary: classes.listText }} primary="Proyectos" />
					{ open ? <ExpandLess /> : <ExpandMore /> }
				</ListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					
					<List component="div" disablePadding>
						
						<ListItem button className={classes.nested}>
							<ListItemIcon className={ classes.listItemIcon2 }>
								<ArrowRightOutlined />
							</ListItemIcon>
							<ListItemText classes={{ primary: classes.listText }} primary="Multiceras" />
						</ListItem>
						
						<ListItem button className={classes.nested}>
							<ListItemIcon className={ classes.listItemIcon2 }>
								<ArrowRightOutlined />
							</ListItemIcon>
							<ListItemText classes={{ primary: classes.listText }} primary="Producción" />
						</ListItem>

						<ListItem button className={classes.nested}>
							<ListItemIcon className={ classes.listItemIcon2 }>
								<ArrowRightOutlined />
							</ListItemIcon>
							<ListItemText classes={{ primary: classes.listText }} primary="Gerencia" />
						</ListItem>
					
					</List>

				</Collapse>

				<ListItem button
					selected={ selectedIndex === 1 }
					onClick={ (event) => handleListItemClick(event, 1) }
				>
					<ListItemIcon className={ classes.listItemIcon }>
						<DashboardOutlined />
					</ListItemIcon>
					<ListItemText classes={{ primary: classes.listText }} primary="Dashboard" />
				</ListItem>

				<ListItem button
					selected={ selectedIndex === 2 }
					onClick={ (event) => handleListItemClick(event, 2) }
				>
					<ListItemIcon className={ classes.listItemIcon }>
						<ListAltOutlined />
					</ListItemIcon>
					<ListItemText classes={{ primary: classes.listText }} primary="Inventario" />
				</ListItem>

				<ListItem button
					selected={ selectedIndex === 3 }
					onClick={ (event) => handleListItemClick(event, 3) }
				>
					<ListItemIcon className={ classes.listItemIcon }>
						<FolderOutlined />
					</ListItemIcon>
					<ListItemText classes={{ primary: classes.listText }} primary="Ventas" />
				</ListItem>

				<ListItem button
					selected={ selectedIndex === 4 }
					onClick={ (event) => handleListItemClick(event, 4) }
				>
					<ListItemIcon className={ classes.listItemIcon }>
						<GroupOutlined />
					</ListItemIcon>
					<ListItemText classes={{ primary: classes.listText }} primary="Clientes" />
				</ListItem>

			</List>
			
			<Typography variant="overline" gutterBottom style={{ marginLeft: 20 }}>TEAMS</Typography>
			
			<List>
				<ListItem button>
					<ListItemIcon className={ classes.listItemIcon }>
						<FolderOutlined />
					</ListItemIcon>
					<ListItemText classes={{ primary: classes.listText }} primary="Multiceras" />
				</ListItem>

				<ListItem button>
					<ListItemIcon className={ classes.listItemIcon }>
						<Add />
					</ListItemIcon>
					<ListItemText classes={{ primary: classes.listText }} primary="Add new team" />
				</ListItem>  
			</List>
		</div>
	)
}