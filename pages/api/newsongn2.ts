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
                  name: 'Đám Cưới Tụi Mình (Single)',
                  des: 'Kỳ Lân Luxury'
              },
              {
                  id: 2,
                  name: 'Điều Chưa Nói (Single)',
                  des: 'Duongg'
              },
              {
                  id: 3,
                  name: 'Say Love (Single)',
                  des: 'dinhhung, T-Golden'
              },
              {
                  id: 4,
                  name: 'Sweet (Single)',
                  des: 'Hngle, Lil Tian'
              }
          ]
      }
  )
}
