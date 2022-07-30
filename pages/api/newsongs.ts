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
                  name: 'Mặt Trời Khóc',
                  des: 'Emcee L, Orange',
                  date: '16.07.2022'
              },
              {
                  id: 2,
                  name: 'Fade - Alan walker',
                  des: 'EDM - L391',
                  date: '18.07.2022'
              },
              {
                  id: 3,
                  name: 'Nếu Ngày Ấy',
                  des: 'Sobin Hoàng Sơn',
                  date: '20.07.2022'
              }
          ]
      }
  )
}
