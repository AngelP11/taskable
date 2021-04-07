import React from 'react'
import uuid from 'uuid/v4'
// import { Button, Box, Slider, Typography, Switch } from '@material-ui/core'
// import { makeStyles, withStyles } from '@material-ui/core/styles'


import Layout from './components/Layout'

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


function HomeOld() {
  return (
    <React.Fragment>
      <Layout>
      </Layout>
    </React.Fragment>
  )
}

export default HomeOld