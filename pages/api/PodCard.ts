// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(
      {
          general: [
              {
                  id: 1,
                  name: 'Đắp Chăn Nằm Ngủ',
              },
              {
                  id: 2,
                  name: 'Thức Dậy!',
              },
              {
                  id: 3,
                  name: 'Hoang>TV',
              },
              {
                  id: 4,
                  name: 'I Miss You!',
              }
          ]
      }
  )
}
