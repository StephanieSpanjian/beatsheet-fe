import AlertDialogSlide from '../AlertDialogSlide'
import Form from '../forms/Form'
import { DbTable, Operation } from '@/components/enums/db'

const CreateActButton = () => {
  return (
    <AlertDialogSlide
      dbTable={DbTable.ACT}
      operation={Operation.CREATE}
    >
      <Form
        dbTable={DbTable.ACT}
        operation={Operation.CREATE}
      />
    </AlertDialogSlide>
  )
}

export default CreateActButton
