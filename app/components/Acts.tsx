'use client'
import { Act } from '../types/act'
import Beats from './Beats'
import CreateActButton from '@/components/CTAs/CreateActButton'

const Acts = (props: { acts: Act[] }) => {
  const { acts } = props

  return acts.map((act) => {
    return (
      <article
        key={act?.id}
        className="bg-neutral-800/70 border-2 border-amber-200  hover:border-amber-500 rounded-md my-3 p-2 relative"
      >
        <h1 className="absolute left-2 text-yellow-500/80 font-semibold">
          {act.name}
        </h1>

        <div className="absolute -top-[42px] w-full z-50">
          <div className="flex justify-center">
            <div className="md:opacity-70 md:hover:opacity-100">
              <CreateActButton />
            </div>
          </div>
        </div>

        <Beats
          actId={act?.id}
          key={act.id}
        />
      </article>
    )
  })
}

export default Acts
