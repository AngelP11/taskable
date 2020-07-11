import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import uuid from 'uuid/v4'

/* Assets */
import './styles/Home.css'
import buttons from './styles/styles'

/* Components */
import Kanban from '../components/Kanban'

const useStyle = makeStyles(buttons)
/* <Box border={1} width={300} p={1} borderRadius="borderRadius" mr={2} key={column.id}></Box> */

const items = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" }
];

const columns = [
  {
    id: uuid(), 
    name: "Requested",
    items: items
  },
  {
    id: uuid(), 
    name: "To do",
    items: []
  },
  {
    id: uuid(), 
    name: "Doing",
    items: []
  },
]

function Home() {
  const classes = useStyle();
      
  return (
    <React.Fragment>
      <Button className={classes.button}>Hablemos</Button>
      <Kanban columns={columns} />
    </React.Fragment>
  )
}

export default Home