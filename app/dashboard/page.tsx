import Acts from '@/components/Acts'
import { FetchMethod, FetchTags } from '@/components/enums/api'
import { apiUrl, headers } from '@/components/singletons/api'
import { Act } from '../types/act'
// import CreateActButton from '@/components/CTAs/CreateActButton'

const getData = async () => {
  const resActs = await fetch(`${apiUrl}acts`, {
    method: FetchMethod.GET,
    headers,
    next: {
      tags: [FetchTags.ACTS],
    },
  })

  const acts: Act[] = await resActs.json()
  return acts
}

const Page = async () => {
  const acts = await getData()

  return (
    //   <CreateActButton />
    // <div className="border-2 border-amber-200  hover:border-slate-400 rounded-md ">
    //   <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
    //     Save Changes
    //   </button>
    // <div className="scroll-ml-6 snap-start ...">
    <div>
      {/* <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" /> */}
      <Acts acts={acts} />
    </div>
  )

  // return <Acts acts={acts} />
}

export default Page
