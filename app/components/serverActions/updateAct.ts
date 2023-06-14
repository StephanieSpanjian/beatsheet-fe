'use server'
import { revalidateTag } from 'next/cache'
import { FetchMethod, FetchTags } from '../enums/api'
import { apiUrl, headers } from '../singletons/api'

const updateAct = async (props: { id: string; name: string }) => {
  console.log(props)
  console.log(props.name)
  const { id: actId, name } = props

  const resActs = await fetch(`${apiUrl}act/${actId}`, {
    method: FetchMethod.PUT,
    headers,
    body: JSON.stringify({ name }),
  })
  const act = await resActs.json()
  console.log(act)
  revalidateTag(FetchTags.ACTS)

  return act
}

export default updateAct
