'use client'
// import { useContext } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import SnackbarAlert from '../SnackbarAlert'
import TextField from '@mui/material/TextField'

import { DbTable, Operation } from '../enums/db'
import { Act } from '@/types/act'
import { Beat } from '@/types/beat'
import addAct from '@/components/serverActions/addAct'
import addBeat from '@/components/serverActions/addBeat'
import updateBeat from '../serverActions/updateBeat'

type FormData = Act | Beat
type FormPropsActUpdate = {
  act: Act
}
type FormPropsBeatUpdate = {
  beat: Beat
}
type FormPropsBeatCreate = {
  actId: string
}
type FormProps =
  | FormPropsActUpdate
  | FormPropsBeatUpdate
  | FormPropsBeatCreate
  | {}

const Form = (
  props: {
    operation: Operation
    dbTable: DbTable
  } & FormProps
) => {
  // const open = useContext(ModalContext)
  // console.log(open)
  const { act, actId, beat, dbTable, operation } = props
  const {
    control,
    handleSubmit,
    // formState: { errors },  TODO: NICE ERROR HANDLING AND BETTER SCHEMA CHEKING
    register,
  } = useForm<FormData>({
    defaultValues: {
      name: act?.name || beat?.name,
      ...beat,
    },
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    let handleSubmission
    let submissionData = data

    if (operation === Operation.CREATE && dbTable === DbTable.ACT) {
      handleSubmission = addAct
    } else if (operation === Operation.CREATE && dbTable === DbTable.BEAT) {
      handleSubmission = addBeat
      submissionData = { actId, beat: data }
      // } else if (operation === Operation.UPDATE && dbTable === DbTable.ACT) {
      // For some reason that Endpoint does not exist
      // handleSubmission = updateAct
      // submissionData = { id: act?.id, ...submissionData }
    } else if (operation === Operation.UPDATE && dbTable === DbTable.BEAT) {
      handleSubmission = updateBeat
      submissionData = { id: beat?.id, ...submissionData }
    }

    const promise: Promise<unknown> = handleSubmission(submissionData)
    promise.finally(() => {
      console.log(promise)

      // setOpen(false)
      // Toast biethc
      // <Snackbar />
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!beat && !actId ? (
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              autoFocus
              fullWidth
              label="Act Name"
              margin="dense"
              type="text"
              variant="standard"
              {...field}
            />
          )}
        />
      ) : (
        <>
          {/* <TextField
            id="id"
            type="hidden"
            {...register('id', { required: true })}
          /> */}
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                autoFocus
                fullWidth
                label="Beat Name"
                margin="dense"
                type="text"
                variant="standard"
                {...field}
              />
            )}
          />
          <Controller
            name="cameraAngle"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                margin="dense"
                id="cameraAngle"
                label="Camera Angle"
                type="text"
                fullWidth
                variant="standard"
                {...field}
              />
            )}
          />
          <Controller
            name="content"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                margin="dense"
                id="content"
                label="Content"
                type="text"
                fullWidth
                variant="standard"
                {...field}
              />
            )}
          />
          <Controller
            name="notes"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                margin="dense"
                id="notes"
                label="Notes"
                type="text"
                fullWidth
                variant="standard"
                {...field}
              />
            )}
          />
          <Controller
            name="time"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                margin="dense"
                id="time"
                label="Time"
                type="text"
                fullWidth
                variant="standard"
                {...field}
              />
            )}
          />
        </>
      )}
      {/* <SnackbarAlert /> */}
      <button
        className="rounded-full"
        type="submit"
      >{`${operation} ${dbTable}`}</button>
    </form>
  )
}

export default Form
