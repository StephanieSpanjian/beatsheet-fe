'use client'
import { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
// import Slide from '@mui/material/Slide'

import AddIcon from '@/components/icons/PlusCircle'
import DeleteIcon from '@/components/icons/Trash'
import EditIcon from '@/components/icons/EditPencil'

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

  return (
    // <MondalProvider value={{ data: { open }, setOpen }}>
    <>
      <button
        aria-label={`${operation} ${dbTable}`}
        onClick={handleClickOpen}
      >
        {operation === Operation.CREATE ? <AddIcon /> : null}
        {operation === Operation.DELETE ? <DeleteIcon /> : null}
        {operation === Operation.UPDATE ? <EditIcon /> : null}
      </button>
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
        <DialogTitle id="alert-dialog-slide-description">{`${operation} ${dbTable}`}</DialogTitle>
        <DialogContent>
          {children}
          {/* <button type="submit">Submit</button> */}
          <button
            className="my-4 mr-auto"
            onClick={handleClose}
          >
            Cancel
          </button>
        </DialogContent>
      </Dialog>
    </>
    // </MondalProvider>
  )
}
export default AlertDialogSlide
