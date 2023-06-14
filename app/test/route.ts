// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // export const fetchGraphQL = (props: {query: string, preview?:boolean}) => {
  //   const {query, preview = false} = props

  //   return fetch(
  //     `https://graphql.contentful.com/content/v1/spaces/7h5ll49y193l/environments/master`,
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: "Bearer osl7TBg84Se7zYfrsHYiynTDXOEaZNHqG9DPqo8xn18",
  //         // Authorization: `Bearer ${
  //           // preview
  //           //   ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
  //           //   : process.env.CONTENTFUL_ACCESS_TOKEN
  //         // }`,
  //       },
  //       body: JSON.stringify({ query }),
  //     }
  //   ).then((response) => response.json())
  // }

  res.status(200).json({ name: 'John Doe' })
}

// Example	URL	params
// app/dashboard/[team]/route.js	/dashboard/1	{ team: '1' }
// app/shop/[tag]/[item]/route.js	/shop/1/2	{ tag: '1', item: '2' }
// app/blog/[...slug]/route.js	/blog/1/2	{ slug: ['1', '2'] }
// export async function GET(request, context: { params }) {
//   const team = params.team // '1'
// }
