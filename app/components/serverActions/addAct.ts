'use server'
import { revalidateTag } from 'next/cache'
import { FetchMethod, FetchTags } from '../enums/api'
import { apiUrl, headers } from '../singletons/api'

const addAct = async (props: { name: string }) => {
  const resActs = await fetch(`${apiUrl}acts`, {
    method: FetchMethod.POST,
    headers,
    body: JSON.stringify(props),
  })
  const act = await resActs.json()
  revalidateTag(FetchTags.ACTS)

  return act
}

export default addAct
