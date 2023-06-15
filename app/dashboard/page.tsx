import Acts from '@/components/Acts'
import { FetchMethod, FetchTags } from '@/components/enums/api'
import { apiUrl, headers } from '@/components/singletons/api'
import { Act } from '../types/act'

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

  return <Acts acts={acts} />
}

export default Page
