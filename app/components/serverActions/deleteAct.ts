'use server'
import { revalidateTag } from 'next/cache'
import { FetchMethod, FetchTags } from '../enums/api'
import { apiUrl, headers } from '../singletons/api'
import { Beat } from '@/types/beat'

const deleteAct = async (props: { actId: string; beats: Beat[] }) => {
  const { actId, beats } = props
  console.log(props)

  beats.forEach(async (beatToDelete) => {
    const resBeat = await fetch(
      `${apiUrl}acts/${actId}/beats/${beatToDelete.id}`,
      {
        method: FetchMethod.DELETE,
        headers,
      }
    )
  })

  const resActs = await fetch(`${apiUrl}acts/${actId}`, {
    method: FetchMethod.DELETE,
    headers,
  })

  revalidateTag(FetchTags.ACTS)

  return resActs.status
}

export default deleteAct
