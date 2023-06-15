import DeleteIcon from '@/components/icons/Trash'
import deleteAct from '../serverActions/deleteAct'
import { Beat } from '../../types/beat'

const DeleteActButton = (props: { actId: string; beats: Beat[] }) => {
  const { actId, beats } = props
  const handleClick = () => {
    deleteAct({ actId, beats })
  }

  return (
    <button
      aria-label="delete-act-button"
      onClick={handleClick}
    >
      <DeleteIcon />
    </button>
  )
}

export default DeleteActButton
