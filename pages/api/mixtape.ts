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
                  name: 'Mixtapes Họ Yêu Ai Mất Rồiii',
                  des: ''
              },
              {
                  id: 2,
                  name: 'Mixtape Thương Thầm',
                  des: 'NB3 Hoài Bảo, Lee Ken, Nal'
              },
              {
                  id: 3,
                  name: 'Mixtape Răng Khôn',
                  des: 'Phí Phương Anh, RIN9, Orange'
              },
              {
                  id: 4,
                  name: 'Mixtape Ánh Chiều Tàn (Lofi Version)',
                  des: ''
              }
          ]
      }
  )
}
