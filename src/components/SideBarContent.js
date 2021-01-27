import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Collapse, Typography, Button } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
// import styled from 'styled-components';
// import { styled } from '@material-ui/core/styles';

import { CheckBoxOutlined, ExpandLess, 
	ExpandMore, DashboardOutlined, FolderOutlined,
	GroupOutlined, Add, ListAltOutlined
} from '@material-ui/icons';
import ArrowRightOutlined from '@material-ui/icons/ArrowRightOutlined'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

// import './styles/sidebarStyles.css'

const useStyles = makeStyles((theme) => ({
	listText: {
		color: '#8f92a1',
		fontSize: 14,
		fontFamily: 'Inter-regular',
	},
	listButtonText: {
		extend: 'listText',
		fontWeight: 'bolder'
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
	buttonList: {
		marginLeft: 35
	},
	button: {
		marginBottom: 15,
		backgroundColor: '#f6f6f8',
		width: '80%',
		borderRadius: 12,
		padding: '5px',
		'& span': {
			color: '#2d2d37',
			fontSize: 12,
			textTransform: 'none',
			fontFamily: 'Inter-regular',
			fontWeight:'bold'
		},
		'& .MuiButton-startIcon': {
			color: '#2d2d37',
			opacity: '87%'
		}
	}
}))

const StyledListItem = withStyles({
	root: {
		'&:hover' : {
			borderTopRightRadius: '40px',
			borderBottomRightRadius: '40px',
		},
	},
	selected: {
		borderLeft: '4px solid #2979ff',
		borderTopRightRadius: '40px',
		borderBottomRightRadius: '40px',
		backgroundColor : 'rgba(41, 121, 255, .12) !important',
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
			
			<div>
				<p className={ classes.textTeam }>TEAMS</p>
					
				<div className={ classes.buttonList }>
					<Button
						className={ classes.button }
						disableElevation
						size="large"
						startIcon={<CloudUploadIcon />}
					>
						<div>
							<span style={{ display: 'block' }}>Multiceras</span>
							<span style={{ fontSize: 10, color: '#a0a0a0' }}>@multicerasve</span>
						</div>
					</Button>

					<Button 
						className={ classes.button } 
						size="large"
						variant="contained" 
						disableElevation
						startIcon={<Add />}
					>Add New Team</Button>
				</div>
			</div>
		</div>
	)
}