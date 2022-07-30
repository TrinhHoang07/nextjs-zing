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
                  name: 'V-Pop Tháng 7/2022',
                  des: 'Da LAB Phương Ly Văn Mai Hương'
              },
              {
                  id: 2,
                  name: 'US-UK Tháng 7/2022',
                  des: 'Ellie Goulding, Calvin Harris, Imagine Dragons'
              },
              {
                  id: 3,
                  name: 'K-Pop Tháng 7/2022',
                  des: 'Sunmi, aespa, WINNER'
              },
              {
                  id: 4,
                  name: 'C-Pop Tháng 7/2022',
                  des: 'Bất Thị Hoa Hỏa Nha, INTO1 Lưu Vũ, 蘇星婕 / Tô Tinh Tiệp'
              }
          ]
      }
  )
}
