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
                  name: 'Top 100 Nhạc Audiophile Âu',
                  des: 'Bobby Vinton, Herman\'s Hermits'
              },
              {
                  id: 2,
                  name: 'Top 100 Nhạc Folk Âu Mỹ',
                  des: 'Lydia Cole, The Paper Kites'
              },
              {
                  id: 3,
                  name: 'Top 100 Nhạc Blue/Jazz Âu',
                  des: 'Eartha Kitt, Pablo Cepeda'
              },
              {
                  id: 4,
                  name: 'Top 100 Nhạc',
                  des: 'Alan Walker, K-391, Emelie Hollow'
              },
              {
                  id: 5,
                  name: 'Top 100 Nhạc Indie Âu Mỹ',
                  des: 'Au/Ra, Luke Hemmings'
              },
              {
                  id: 6,
                  name: 'Top 100 Nhạc Christian &',
                  des: 'Rhett Walker, Pentatonix'
              },
              {
                  id: 7,
                  name: 'Top 100 Nhạc Phim Âu Mỹ',
                  des: 'Lionel Richie, Ariana Grande'
              },
              {
                  id: 8,
                  name: 'Top 100 Nhạc R&B Âu Mỹ',
                  des: 'Giveon, Khalid, Nicki Minaj'
              },
              {
                  id: 9,
                  name: 'Top 100 Nhạc Blue/Jazz Âu',
                  des: 'Eartha Kitt, Pablo Cepeda'
              },
          ]
      }
  )
}
