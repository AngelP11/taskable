import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ArrowRightOutlined from '@material-ui/icons/ArrowRightOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CheckBoxOutlined from '@material-ui/icons/CheckBoxOutlined';
import DashboardOutlined from '@material-ui/icons/DashboardOutlined';
import FolderOutlined from '@material-ui/icons/FolderOutlined';
import GroupOutlined from '@material-ui/icons/GroupOutlined';
import ListAltOutlined from '@material-ui/icons/ListAltOutlined';

import Header from '../components/Header'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: '0px 0px 0px #fff',
    borderBottom: '1px solid lightgrey'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  }
}));

export default function Index() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} color="white">
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
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
              <ListItemText primary="Ventas" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <GroupOutlined />
              </ListItemIcon>
              <ListItemText primary="Clientes" />
            </ListItem>  
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}
