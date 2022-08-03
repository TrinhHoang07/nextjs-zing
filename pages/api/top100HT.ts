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
                  name: 'Top 100 Nhạc Hòa Tấu Nhạc',
                  des: 'Relax Lab, Igor Krutoy'
              },
              {
                  id: 2,
                  name: 'Top 100 Hòa Tấu New Age /',
                  des: 'Louie Ocampo, Bandari, Richard Clayderman'
              },
              {
                  id: 3,
                  name: 'Top 100 Nhạc Hòa Tấu Nhạc',
                  des: 'Đinh Quang Minh, Đông Hòa, Kenny G'
              },
              {
                  id: 4,
                  name: 'Top 100 Nhạc Hòa Tấu Nhạc...',
                  des: 'Hiền Lê, Yanni, Jmi'
              },
              {
                  id: 5,
                  name: 'Top 100 Nhạc Hòa Tấu Nhạc...',
                  des: 'Masew, Pháo, CM1X'
              },
              {
                  id: 6,
                  name: 'Top 100 Nhạc Hòa Tấu Nhạc...',
                  des: 'Contempo-Divo, 한규원, Hawa'
              },
              {
                  id: 7,
                  name: 'Top 100 Nhạc Hòa Tấu Nhạc...',
                  des: 'Louie Ocampo, Richard Clayderman'
              },
              {
                  id: 8,
                  name: 'Top 100 Nhạc Hòa Tấu Nhạc...',
                  des: 'Hùng Cường, Lưu Ánh Loan, Việt Hòa'
              }
          ]
      }
  )
}
