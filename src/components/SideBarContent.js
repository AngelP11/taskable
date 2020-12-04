import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
// import styled from 'styled-components';
// import { styled } from '@material-ui/core/styles';


import { CheckBoxOutlined, ExpandLess, 
	ExpandMore, DashboardOutlined, FolderOutlined,
	GroupOutlined, Add, ListAltOutlined
} from '@material-ui/icons';
import ArrowRightOutlined from '@material-ui/icons/ArrowRightOutlined'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

// import './styles/sidebarStyles.css'

const useStyles = makeStyles((theme) => ({
	listText: {
		color: '#8f92a1',
		fontSize: 14,
		fontFamily: 'Inter-regular',
	},
	textTeam: {
		color: '#8f92a1',
		fontSize: 11,
		fontWeight: 600,
		fontFamily: 'Inter-regular',
		marginLeft: 20
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
	},
	width: {
		width: '85%'
	},
	listItemRoot: {
		
	}
}))

const StyledListItem = withStyles({
	root: {
		'&:hover' : {
			borderTopRightRadius: '40px',
			borderBottomRightRadius: '40px',
		}
	},
	selected: {
		borderLeft: '4px solid #2979ff',
		borderTopRightRadius: '40px',
		borderBottomRightRadius: '40px',
		backgroundColor : 'rgba(41, 121, 255, .12)',
		'&:hover' : {
			borderLeft: '4px solid #2979ff',
		},
		'& .MuiListItemIcon-root': {
			color : '#2979ff',
		},
		'& .MuiListItemText-root span': {
			color : '#2979ff',
		}
	},
})(ListItem)

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
			<List className={ classes.width }>

				<StyledListItem button
					selected={ selectedIndex === 0 }
					onClick={ (event) => handleListItemClick(event, 0) }
				>
					<ListItemIcon className={ classes.listItemIcon }>
						<HomeOutlinedIcon />
					</ListItemIcon>
					<ListItemText classes={{ primary: classes.listText }} primary="Inicio" />
				</StyledListItem>
				
				<StyledListItem 
					button 
					onClick={handleClick}
				>
					<ListItemIcon className={ classes.listItemIcon }>
						<CheckBoxOutlined />
					</ListItemIcon>
					<ListItemText classes={{ primary: classes.listText }} primary="Proyectos" />
					{ open ? <ExpandLess /> : <ExpandMore /> }
				</StyledListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					
					<List component="div" disablePadding>
						
						<StyledListItem button className={classes.nested}>
							<ListItemIcon className={ classes.listItemIcon2 }>
								<ArrowRightOutlined />
							</ListItemIcon>
							<ListItemText classes={{ primary: classes.listText }} primary="Multiceras" />
						</StyledListItem>
						
						<StyledListItem button className={classes.nested}>
							<ListItemIcon className={ classes.listItemIcon2 }>
								<ArrowRightOutlined />
							</ListItemIcon>
							<ListItemText classes={{ primary: classes.listText }} primary="Producción" />
						</StyledListItem>

						<StyledListItem button className={classes.nested}>
							<ListItemIcon className={ classes.listItemIcon2 }>
								<ArrowRightOutlined />
							</ListItemIcon>
							<ListItemText classes={{ primary: classes.listText }} primary="Gerencia" />
						</StyledListItem>
					
					</List>

				</Collapse>

				<StyledListItem button
					selected={ selectedIndex === 1 }
					onClick={ (event) => handleListItemClick(event, 1) }
				>
					<ListItemIcon className={ classes.listItemIcon }>
						<DashboardOutlined />
					</ListItemIcon>
					<ListItemText classes={{ primary: classes.listText }} primary="Dashboard" />
				</StyledListItem>

				<StyledListItem button
					selected={ selectedIndex === 2 }
					onClick={ (event) => handleListItemClick(event, 2) }
				>
					<ListItemIcon className={ classes.listItemIcon }>
						<ListAltOutlined />
					</ListItemIcon>
					<ListItemText classes={{ primary: classes.listText }} primary="Inventario" />
				</StyledListItem>

				<StyledListItem button
					selected={ selectedIndex === 3 }
					onClick={ (event) => handleListItemClick(event, 3) }
				>
					<ListItemIcon className={ classes.listItemIcon }>
						<FolderOutlined />
					</ListItemIcon>
					<ListItemText classes={{ primary: classes.listText }} primary="Ventas" />
				</StyledListItem>

				<StyledListItem button
					selected={ selectedIndex === 4 }
					onClick={ (event) => handleListItemClick(event, 4) }
				>
					<ListItemIcon className={ classes.listItemIcon }>
						<GroupOutlined />
					</ListItemIcon>
					<ListItemText classes={{ primary: classes.listText }} primary="Clientes" />
				</StyledListItem>

			</List>
			
			<p className={ classes.textTeam }>TEAMS</p>
			
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