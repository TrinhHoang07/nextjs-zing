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
                  name: '1 Phút',
                  des: 'Andrew',
                  date: '3 ngày trước',
                  src: 'https://docs.google.com/uc?id=1U3hH9c3HFkmmOrhY2yOPvBR-uuErsSvi'
              },
              {
                  id: 2,
                  name: 'Chiều Hôm Ấy',
                  des: 'Jaykii',
                  date: '5 ngày trước',
                  src: 'https://docs.google.com/uc?id=1-y98ccYJcSrzBzpFwkoOeB_g-7BlXnz9'
              },
              {
                  id: 3,
                  name: 'Thấy Là Yêu Thương',
                  des: 'Only C, Lou Hoàng',
                  date: '1 ngày trước',
                  src: 'https://docs.google.com/uc?id=1saFqexwo8EF52pEN8ghIPHbUYvJeBFhu'
              },
              {
                  id: 4,
                  name: 'Mãi Mãi Không Phải Anh',
                  des: 'Không Nhớ',
                  date: 'Hôm nay',
                  src: 'https://docs.google.com/uc?id=1p0G3xk2CshlQDN227ewj1Ohx9JLOEkRY'
              },
              {
                  id: 5,
                  name: 'Hồng Nhan',
                  des: 'Jack 5 Trịu',
                  date: '2 ngày trước',
                  src: 'https://docs.google.com/uc?id=1J-P4ifKTqJjiR9ys3ZeYsrzm_TSAfr4D'
              }
          ]
      }
  )
}
