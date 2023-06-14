import DeleteIcon from '@mui/icons-material/Delete'
import Fab from '@mui/material/Fab'
import deleteAct from '../serverActions/deleteAct'
import { Beat } from '../../types/beat'

const DeleteActButton = (props: { actId: string; beats: Beat[] }) => {
  const { actId, beats } = props
  const handleClick = () => {
    deleteAct({ actId, beats })
  }

  return (
    <Fab
      color="error"
      aria-label="add"
      onClick={handleClick}
    >
      <DeleteIcon />
    </Fab>
  )
}

export default DeleteActButton
