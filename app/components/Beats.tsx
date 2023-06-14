'use client'
import { Suspense, use } from 'react'

import { FetchMethod, FetchTags } from '@/components/enums/api'
import { apiUrl, headers } from '@/components/singletons/api'
import { Beat } from '../types/beat'

import CreateBeatButton from '@/components/CTAs/CreateBeatButton'
import DeleteActButton from '@/components/CTAs/DeleteActButton'
import DeleteBeatButton from '@/components/CTAs/DeleteBeatButton'
import UpdateBeatButton from '@/components/CTAs/UpdateBeatButton'

const getBeats = async (props: { actId: string }) => {
  const { actId } = props

  const resBeats = await fetch(`${apiUrl}acts/${actId}/beats`, {
    method: FetchMethod.GET,
    headers,
    next: {
      tags: [FetchTags.BEATS],
    },
  })
  const beats: Beat[] = await resBeats.json()
  return beats
}

const Beats = (props: { actId: string }) => {
  const { actId } = props
  const beats = use(getBeats({ actId }))

  return (
    // <Suspense fallback={<Skeleton>Loading..</Skeleton>}>
    <div className="flex flex-nowrap overflow-x-auto">
      {/* <div className="overflow-x-auto"> */}
      <DeleteActButton
        actId={actId}
        beats={beats}
      />
      <CreateBeatButton actId={actId} />
      {beats
        ? beats?.map((beat) => (
            <div
              key={beat?.id}
              className="card box-border"
              draggable
            >
              <div>
                <UpdateBeatButton beat={beat} />
              </div>
              <div>
                <DeleteBeatButton
                  actId={actId}
                  beat={beat}
                />
                {beat.name}
                {beat?.time} {/* //DATE FORMAT TIMECODE */}
              </div>
              {/* {beat?.id} */}
              <br />
              {beat?.time}
              <br />
              {beat?.cameraAngle}
              <br />
              {beat?.content}
              <br />
              {beat?.notes}
              <br />
            </div>
          ))
        : 'No'}
      {/* </div> */}
    </div>
    // </Suspense>
  )
}

export default Beats
