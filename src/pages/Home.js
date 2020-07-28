import React from 'react'
import { Button, Box, Slider, Typography, Switch } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
//import uuid from 'uuid/v4'

/* Assets */
import './styles/Home.css'
import { buttons, ripple } from '../styles/buttons.js'
import slider from '../styles/slider.js'
import switchButton from '../styles/switch.js'

/* Components */
// import Kanban from '../components/Kanban'
// import Calendar from '../components/Calendar'
// import Gantt from '../components/Gantt'

/* <Button className={classes.button}>Hablemos</Button>
   <Kanban columns={columns} /> 
   <Calendar /> 
   <Box border={1} width={300} p={1} borderRadius="borderRadius" mr={2} key={column.id}></Box> 
*/

const HubbleSlider = withStyles(slider)(Slider)
const IOSSwitch = switchButton(Switch)

const marks = [
  {
    value: 0,
  },
  {
    value: 10,
  },
  {
    value: 20,
  },
  {
    value: 30,
  },
  {
    value: 40,
  },
  {
    value: 50,
  },
  {
    value: 60,
  },
  {
    value: 70,
  },
  {
    value: 80,
  },
  {
    value: 90,
  },
  {
    value: 100,
  },
];

// const items = [
//   { id: uuid(), content: "First task" },
//   { id: uuid(), content: "Second task" },
//   { id: uuid(), content: "Third task" },
//   { id: uuid(), content: "Fourth task" },
//   { id: uuid(), content: "Fifth task" }
// ];

// const columns = [
//   {
//     id: uuid(), 
//     name: "Requested",
//     items: items
//   },
//   {
//     id: uuid(), 
//     name: "To do",
//     items: []
//   },
//   {
//     id: uuid(), 
//     name: "Doing",
//     items: []
//   },
// ]

function Home({ classes }) {
  const useStyle = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(5),
      "& .MuiSlider-thumb": {
        height: 12,
        width: 12
      }
    },
    ...buttons
  }))
  const classes_btn = useStyle();
  const { ...rippleClasses } = classes

  const [value, setValue] = React.useState(30);
  const [state, setState] = React.useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  } 

  const handleChangeSwitch = (event, newValue) => {
    setState(event.target.checked);
  };
      
  return (
    <React.Fragment>
      <Typography>Botones</Typography>
      <Box className={classes_btn.margin}>
        <Button 
          TouchRippleProps={{ classes: rippleClasses }} 
          className={classes_btn.button_low} 
        >
          Low
        </Button>
        <Button 
          TouchRippleProps={{ classes: rippleClasses }} 
          className={classes_btn.button_normal} 
        >
          Medium
        </Button>
        <Button 
          TouchRippleProps={{ classes: rippleClasses }} 
          className={classes_btn.button_high}
        >
          High
        </Button>
      </Box>
      <Box className={classes_btn.margin}>
        <span style={{ cursor: 'not-drop' }}>
          <Button disabled className={classes_btn.button_low}>Low</Button>
        </span>
        <Button disabled variant="outlined" className={classes_btn.button_normal}>Medium</Button>
        <Button disabled className={classes_btn.button_high}>High</Button>
      </Box>

      <Typography>Slider</Typography>
      <Box width={300} className={classes_btn.margin}>
        <HubbleSlider 
          value={value}
          onChange={handleChange}
        />
        <HubbleSlider
          disabled 
          value={50}
        />
        <HubbleSlider
          defaultValue={80}
          step={10}
          marks={marks}
          valueLabelDisplay="on"
        />
        <HubbleSlider
          disabled
          defaultValue={80}
          step={10}
          marks={marks}
          valueLabelDisplay="off"
        />
      </Box>

      <Typography>Swicth</Typography>
      <Box className={classes_btn.margin}>
        <IOSSwitch checked={state} onChange={handleChangeSwitch} name="checkedB" />
      </Box>

      <Typography>Titulos</Typography>
      <Box className={classes_btn.margin}>
        <h1>H1 head</h1>
        <h2>H2 head</h2>
        <h3>H3 head</h3>
        <h4>H4 head</h4>
        <h5>H5 head</h5>
        <h6>H6 head</h6>
        <p className='subtitle-1'>Subtitle 1</p>
        <p className='subtitle-2'>Subtitle 2</p>
        <p className='body-1'>Body 1</p>
        <p className='body-2'>Body 2</p>
        <p className='caption'>Caption</p>
      </Box>
    </React.Fragment>
  )
}

export default withStyles(ripple)(Home)