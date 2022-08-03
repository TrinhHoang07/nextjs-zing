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
                  name: 'Top 100 Nhạc Phim Hoa Ngữ',
                  des: 'Cheng Xiao, Xu Kai, Angela Zhang'
              },
              {
                  id: 2,
                  name: 'Top 100 Nhạc Phim Hàn',
                  des: 'Jo Jung Suk, Gaho, DAVICHI'
              },
              {
                  id: 3,
                  name: 'Top 100 Nhạc Hoa Hay Nhất',
                  des: 'A Nhũng, Mộng Nhiên, Danh Quyết'
              },
              {
                  id: 4,
                  name: 'Top 100 Nhạc Nhật Bản Hay',
                  des: 'Kenshi Yonezu, YOASOBI, FLOW'
              },
              {
                  id: 5,
                  name: 'Top 100 Nhạc Hàn Quốc Hay',
                  des: 'BIGBANG, IVE, BLACKPINK'
              }
          ]
      }
  )
}
