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
                  name: 'Bài Nhạc Đánh Rơi - Yanbi,...',
                  des: '20:00 Thứ Sáu, 22 tháng 7',
                  ph: 'Phát hành bài hát',
                  count: 112
              },
              {
                  id: 2,
                  name: 'Minishow Ai Chung Tình Được Mãi',
                  des: '20:30 Thứ Năm, 21 tháng 7',
                  ph: 'Minishow',
                  count: 334
              },
              {
                  id: 3,
                  name: 'Trạm Ký Gửi Nổi Buồn - Chăng 3',
                  des: '21:00 Chủ Nhật, 24 tháng 7',
                  ph: 'minishow',
                  count: 674
              },
          ]
      }
  )
}
