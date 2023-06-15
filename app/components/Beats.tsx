'use client'
import { Suspense, use } from 'react'

import { FetchMethod, FetchTags } from '@/components/enums/api'
import { apiUrl, headers } from '@/components/singletons/api'
import { Beat } from '../types/beat'

import VideoCameraIcon from './icons/VideoCamera'
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
    <div
      className="flex flex-nowrap w-full mx-auto my-8 p-4 gap-x-4"
      key={`${actId}-beatsheet`}
    >
      <div
        key="edit-delete-actions"
        className="flex flex-col basis-14 bg-neutral/40"
        style={{ minWidth: 56 }}
      >
        <div className="flex">
          <CreateBeatButton actId={actId} />
        </div>
        <div className="absolute bottom-4">
          <DeleteActButton
            actId={actId}
            beats={beats}
          />
        </div>
      </div>

      {beats.map((beat) => {
        return (
          <div
            key={`${actId}-${beat?.id}-beat-${beat.name}`}
            className="relative"
          >
            <div
              key={`${actId}-${beat?.id}-beat-${beat.name}-content`}
              className="card caret-red-700 relative border-amber-200  hover:border-lime-500 rounded-md p-4 active:skew-x-1"
              draggable
            >
              <div className="absolute top-0 right-0">
                <UpdateBeatButton beat={beat} />
              </div>

              <div className="box-border">
                {/* DATE FORMAT TIMECODE BUT HONESTLY THE SCHEMA IS OFF...  I WOULD CHANGE IT AT DB SCHEMA AS  LEVEL SO TWO NUMBERS AND ALLOW THE ABILITY AND PUSH A PR FOR THE BACKEND REPO, BUT THAT WAS NOT ASSIGNMENT AS I AM TO SHOWCASE MORE FE SKILLS HERE */}
                <div className="flex justify-center text-slate-400">
                  {beat.time}
                </div>

                <h2 className="mt-1 font-thin text-yellow-400">{beat.name}</h2>
                <h3 className="mb-1 text-amber-700 text-sm italic underline decoration-yellow-500/30">
                  {beat?.cameraAngle}
                </h3>

                <div className=" text-amber-700 text-sm italic underline decoration-yellow-500/30">
                  <VideoCameraIcon />
                </div>

                <p className="mt-5 text-gray-400 text-sm">Content:</p>
                <p className="mb-2 indent-8 text-gray-300 leading-snug">
                  {beat.content}
                </p>

                <p className="mt-5 text-slate-400 text-sm">Notes:</p>
                <p className="mb-6 indent-8 text-slate-300 leading-snug">
                  {beat?.notes}
                </p>
              </div>
            </div>

            <div
              key={`${actId}-${beat?.id}-delete-this-beat`}
              className="absolute -bottom-9 w-full"
            >
              <div className="flex justify-center">
                <DeleteBeatButton
                  actId={actId}
                  beat={beat}
                />
              </div>
            </div>
          </div>
        )
      })}
    </div>
    // </Suspense>
  )
}

export default Beats
