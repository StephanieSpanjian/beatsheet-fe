'use server'
import { revalidateTag } from 'next/cache'
import { FetchMethod, FetchTags } from '../enums/api'
import { apiUrl, headers } from '../singletons/api'

const updateBeat = async (props: {
  cameraAngle: string
  content: string
  id: string
  name: string
  notes: string
  time: string
}) => {
  const { id } = props
  console.log(props)

  const resBeats = await fetch(`${apiUrl}acts/beats/${id}`, {
    method: FetchMethod.PUT,
    headers,
    body: JSON.stringify(props),
  })
  console.log(resBeats)
  revalidateTag(FetchTags.BEATS)

  return true
}

export default updateBeat
