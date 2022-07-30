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
                  name: 'Nhạc Cho Thứ Hai',
                  des: 'Pop tràn đầy năng lượng cho thứ hai đầu tiên'
              },
              {
                  id: 2,
                  name: 'Catchy Tune',
                  des: 'Dễ nghe dễ nhớ, bắt tai gây nghiện ngay từ lần đầu tiên'
              },
              {
                  id: 3,
                  name: 'V-Pop Summer',
                  des: 'Mùa hè đến gần với những sự lựa chọn V-Pop đầy màu sắc'
              },
              {
                  id: 4,
                  name: 'Coffe & Chill',
                  des: 'Sắm ngay cho mình một cốc cafe và bật ngay chế độ '
              }
          ]
      }
  )
}
