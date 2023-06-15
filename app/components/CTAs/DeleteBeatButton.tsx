import DeleteIcon from '@/components/icons/XCircle'
import deleteBeat from '../serverActions/deleteBeat'
import { Beat } from '../../types/beat'

const DeleteBeatButton = (props: { actId: string; beat: Beat }) => {
  const { actId, beat } = props

  const handleClick = () => {
    deleteBeat({ actId, beat })
  }

  return (
    <button
      aria-label="delete-beat-icon"
      onClick={handleClick}
    >
      <DeleteIcon />
    </button>
  )
}

export default DeleteBeatButton
