import DeleteIcon from '@mui/icons-material/Delete'
import Fab from '@mui/material/Fab'
import deleteBeat from '../serverActions/deleteBeat'
import { Beat } from '../../types/beat'

const DeleteBeatButton = (props: { actId: string; beat: Beat }) => {
  const { actId, beat } = props

  const handleClick = () => {
    deleteBeat({ actId, beat })
  }

  return (
    <Fab
      color="warning"
      aria-label="delete"
      onClick={handleClick}
    >
      <DeleteIcon />
    </Fab>
  )
}

export default DeleteBeatButton
