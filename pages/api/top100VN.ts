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
                  name: 'Top 100 Nhạc EDM Việt hay',
                  des: 'Masew, Pháo, CM1X'
              },
              {
                  id: 2,
                  name: 'Top 100 Nhạc V-Pop Hay Nhất',
                  des: 'Miu Lê, Karik, Hương Ly'
              },
              {
                  id: 3,
                  name: 'Top 100 Nhạc Phim Việt Nam',
                  des: 'Phan Mạnh Quỳnh, Lâm Bảo Ngọc, Khải Đăng'
              },
              {
                  id: 4,
                  name: 'Top 100 Nhạc Trịnh Hay Nhất',
                  des: 'Hùng Cường, Lưu Ánh Loan, Việt Hòa'
              },
              {
                  id: 5,
                  name: 'Top 100 Nhạc EDM Không Lời Hay Nhất',
                  des: 'Masew, Pháo, CM1X'
              },
              {
                  id: 6,
                  name: 'Top 100 Cải Lương Hay nhất',
                  des: 'Miu Lê, Karik, Hương Ly'
              },
              {
                  id: 7,
                  name: 'Top 100 Nhạc Phim Tuyển Chọn',
                  des: 'Phan Mạnh Quỳnh, Lâm Bảo Ngọc, Khải Đăng'
              },
              {
                  id: 8,
                  name: 'Top 100 Nhạc Quê Hương Hay Nhất',
                  des: 'Hùng Cường, Lưu Ánh Loan, Việt Hòa'
              }
          ]
      }
  )
}
