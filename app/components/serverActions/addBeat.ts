'use server'
import { revalidateTag } from 'next/cache'
import { FetchMethod, FetchTags } from '../enums/api'
import { apiUrl, headers } from '../singletons/api'

const addBeat = async (props: {
  actId: string
  beat: {
    cameraAngle: string
    content: string
    name: string
    notes: string
    time: string
  }
}) => {
  const { actId } = props

  const resActs = await fetch(`${apiUrl}acts/${actId}/beats`, {
    method: FetchMethod.POST,
    headers,
    body: JSON.stringify(props.beat),
  })
  const beat = await resActs.json()
  revalidateTag(FetchTags.BEATS)

  return beat
}

export default addBeat
