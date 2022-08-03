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
                  name: 'Top 100 Nhạc V-Pop Hay Nhất',
                  des: 'Dương Edward, Miu Lê, Châu Khải Phong'
              },
              {
                  id: 2,
                  name: 'Top 100 Bài Hát Nhạc Trẻ',
                  des: 'Miu Lê, Karik, Hương Ly'
              },
              {
                  id: 3,
                  name: 'Top 100 Pop Âu Mỹ Hay Nhất',
                  des: 'Adele, The Kid LAROI, Justin Bieber'
              },
              {
                  id: 4,
                  name: 'Top 100 Nhạc...',
                  des: 'Alan Walker, K-391, Emelie Hollow'
              }
          ]
      }
  )
}
