import AlertDialogSlide from '../AlertDialogSlide'
import Form from '../forms/Form'
import { Beat } from '@/types/beat'
import { DbTable, Operation } from '@/components/enums/db'

const UpdateBeatButton = (props: { beat: Beat }) => {
  const { beat } = props

  return (
    <AlertDialogSlide
      dbTable={DbTable.BEAT}
      operation={Operation.UPDATE}
    >
      <Form
        dbTable={DbTable.BEAT}
        operation={Operation.UPDATE}
        beat={beat}
      />
    </AlertDialogSlide>
  )
}

export default UpdateBeatButton
