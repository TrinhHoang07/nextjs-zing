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
                  name: 'Em Nên',
                  des: 'Khang Việt',
                  color: 'stroke1',
                  percent: '50%',
                  src: 'https://docs.google.com/uc?id=1ENBbfdmfsrVNOPSHfjOUFjn5bch7T320'
              },
              {
                  id: 2,
                  name: 'Mẹ Anh Bắt Chia Tay',
                  des: 'Miu Lê',
                  color: 'stroke2',
                  percent: '31%',
                  src: 'https://docs.google.com/uc?id=1EG5bUnqAz4fN91rmnCekxMTKlTIE3fgi'
              },
              {
                  id: 3,
                  name: 'Nếu Ngày Ấy',
                  des: 'Sobin',
                  color: 'stroke3',
                  percent: '19%',
                  src: 'https://docs.google.com/uc?id=1g5ihQrYDKe8VKfOsY8r6bGjy1YZ68J6I'
              }
          ]
      }
  )
}
