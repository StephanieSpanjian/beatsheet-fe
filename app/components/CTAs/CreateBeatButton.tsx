import AlertDialogSlide from '../AlertDialogSlide'
import Form from '../forms/Form'
import { DbTable, Operation } from '@/components/enums/db'

const CreateBeatButton = (props: { actId: string }) => {
  const { actId } = props

  return (
    <AlertDialogSlide
      dbTable={DbTable.BEAT}
      operation={Operation.CREATE}
    >
      <Form
        dbTable={DbTable.BEAT}
        operation={Operation.CREATE}
        actId={actId}
      />
    </AlertDialogSlide>
  )
}

export default CreateBeatButton
