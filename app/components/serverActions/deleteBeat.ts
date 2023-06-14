'use server'
import { revalidateTag } from 'next/cache'
import { FetchMethod, FetchTags } from '../enums/api'
import { apiUrl, headers } from '../singletons/api'

const deleteBeat = async (props: {
  actId: string
  beat: {
    cameraAngle: string
    content: string
    id: string
    name: string
    notes: string
    time: string
  }
}) => {
  const { actId, beat } = props
  console.log(props)

  const resBeat = await fetch(`${apiUrl}acts/${actId}/beats/${beat.id}`, {
    method: FetchMethod.DELETE,
    headers,
  })
  revalidateTag(FetchTags.BEATS)

  return resBeat.status
}

export default deleteBeat
