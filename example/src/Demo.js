import React, { useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/styles'
import MultipleDatePicker from './lib'
import { Button, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginBottom: theme.spacing(3)
  }
}))

const Demo = props => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [dates, setDates] = useState(null)
  const toggleOpen = useCallback(() => setOpen(o => !o), [setOpen])
  const onCancel = useCallback(() => setOpen(false), [setOpen])
  const onSubmit = useCallback(
    dates => {
      setDates(dates)
      setOpen(false)
    },
    [setDates]
  )

  return (
    <div className={classes.root}>
      <Button variant='contained' color='primary' className={classes.button} onClick={toggleOpen}>
        Select Dates
      </Button>
      <MultipleDatePicker
        open={open}
        selectedDates={dates}
        onCancel={onCancel}
        onSubmit={onSubmit}
        cancelButtonText='No'
        submitButtonText='Yes'
        selectedDatesTitle='Selected'
      />
      <Typography color='textSecondary'>
        <code>{JSON.stringify(dates)}</code>
      </Typography>
    </div>
  )
}

export default Demo
