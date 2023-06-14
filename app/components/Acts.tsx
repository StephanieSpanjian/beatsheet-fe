'use client'
import { Suspense } from 'react'

import { Act } from '../types/act'
import Beats from './Beats'
import CreateActButton from '@/components/CTAs/CreateActButton'

const Acts = (props: { acts: Act[] }) => {
  const { acts } = props

  return (
    <div className="md:container md:mx-auto">
      <CreateActButton />
      <div className="flex flex-col">
        {acts.map((act) => {
          return (
            // <div key={act?.id}>
            <Beats
              key={act?.id}
              actId={act?.id}
            />
            // <div className="hover:rotate-30">{act.name}</div>
            // </div>
          )
        })}
      </div>
    </div>
  )
}

export default Acts
