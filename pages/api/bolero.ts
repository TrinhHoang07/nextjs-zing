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
                  name: 'Nhạc Quê Hương Hôm Nay',
                  des: 'Lưu Ánh Loan, Khưu Huy Vũ'
              },
              {
                  id: 2,
                  name: 'Bolero Nổi Bật 2021',
                  des: 'Mạnh Quỳnh, Phi Nhung'
              },
              {
                  id: 3,
                  name: 'Bolero Phòng Trà Tuyển Chọn',
                  des: 'Lệ Quyên, Quang Lê'
              },
              {
                  id: 4,
                  name: 'The Best Of Bolero',
                  des: 'Chế Linh, Sơn Tuyền'
              }
          ]
      }
  )
}
