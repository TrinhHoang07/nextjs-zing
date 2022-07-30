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
                  name: 'Sau Lưng Anh Có Ai Kìa',
                  des: 'Thiều Bảo Trâm',
                  time: '04:01',
                  src: 'https://docs.google.com/uc?id=1Gvzul6NfhwwehZsXw-14C2PlyjfU_Bej'
              },
              {
                  id: 2,
                  name: 'Kém Duyên',
                  des: 'Rum, NIT, Masew',
                  time: '05:11',
                  src: 'https://docs.google.com/uc?id=1HzbsTJLbUBWQDNzuqQVY4EB61-W3t4Wp'
              },
              {
                  id: 3,
                  name: 'Bạc Phận',
                  des: 'Jack 5 trịu',
                  time: '05:01',
                  src: 'https://docs.google.com/uc?id=1RzO0civiiScLrAQmk4iRdtudI0ucu9Mx'
              },
              {
                  id: 4,
                  name: 'Em Gì Ơi',
                  des: 'Jack 5 trịu, KICM',
                  time: '04:25',
                  src: 'https://docs.google.com/uc?id=1iMnuKMwbfh9hvNORD442tv5q8Sl7Wun7'
              },
              {
                  id: 5,
                  name: 'Về Bên Anh',
                  des: 'Jack 5 trịu',
                  time: '05:01',
                  src: 'https://docs.google.com/uc?id=1tNnfclD9vqui-VI7yPcfl00djqtS4uvk'
              }
          ]

      }
  )
}
