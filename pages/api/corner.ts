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
                  name: 'V-Pop I Have A Crush On You',
                  des: 'Ở đây có thính, nghe là dính đó nha'
              },
              {
                  id: 2,
                  name: 'K-Pop Hot Summer',
                  des: 'Sẵn sàng cho những ngày hè sôi động cùng giai điệu KPop'
              },
              {
                  id: 3,
                  name: 'Pop The Rock',
                  des: 'Pop Rock ở đây là hay nhất'
              },
              {
                  id: 4,
                  name: 'Smooth Jazz Tuesday',
                  des: 'Nhạc Jazz nhẹ nhàng cho bạn làm việc hiệu quả'
              }
          ]
      }
  )
}
