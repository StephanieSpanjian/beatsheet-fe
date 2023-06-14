'use client'
import { useState } from 'react'

import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Fab from '@mui/material/Fab'
import Slide from '@mui/material/Slide'

import Transition from './Transition'
// import { SlideDirection } from './enums/transitions'
import { DbTable, Operation } from './enums/db'

const AlertDialogSlide = (props: {
  children: React.ReactElement<any, any>
  operation: Operation
  dbTable: DbTable
}) => {
  const { children, dbTable, operation } = props
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const fabColor = operation === Operation.DELETE ? 'warning' : 'primary'

  return (
    // <MondalProvider value={{ data: { open }, setOpen }}>
    <div>
      <Fab
        color={fabColor}
        aria-label={`${operation} ${dbTable}`}
        onClick={handleClickOpen}
      >
        {operation === Operation.CREATE ? <AddIcon /> : null}
        {operation === Operation.DELETE ? <DeleteIcon /> : null}
        {operation === Operation.UPDATE ? <EditIcon /> : null}
      </Fab>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        // TransitionComponent={forwardRef((props, ref) => (
        //   <Transition
        //     // direction={SlideDirection.UP}
        //     {...props}
        //     ref={ref}
        //   />
        // ))}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{`${operation} ${dbTable}`}</DialogTitle>
        <DialogContentText id="alert-dialog-slide-description">{`${operation} ${dbTable}`}</DialogContentText>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <button onClick={handleClose}>Cancel</button>
          {/* <Button type="submit">Add Act</Button> */}
        </DialogActions>
      </Dialog>
    </div>
    // </MondalProvider>
  )
}
export default AlertDialogSlide
