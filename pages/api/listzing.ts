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
                  name: 'Không Sao Mà, Em Đây Rồi',
                  des: 'Suni Hạ Linh',
                  date: 'Mãi mãi là thế',
                  time: '05:00',
                  src: 'https://docs.google.com/uc?id=1LSZ03E4jw19pwstR4c_EOxtDE8HxVyeT'
              },
              {
                  id: 2,
                  name: 'Lời Nói Điêu Trên Môi Em',
                  des: 'Đỗ Nguyên Phúc, Lil Z',
                  date: 'Sự thật',
                  time: '03:50',
                  src: 'https://docs.google.com/uc?id=1DQLtLdb_U3a6Xa-Wbef2FTmGAuX6uyAK'
              },
              {
                  id: 3,
                  name: 'Trời Mang Giấu Đi',
                  des: 'AMEE, Hoàng Dũng',
                  date: 'Hôm nay',
                  time: '04:30',
                  src: 'https://docs.google.com/uc?id=1Ev0ZabBM9ZEdqkuG8yRR1nQiYAMYfTgV'
              },
              {
                  id: 4,
                  name: 'Rồi Em Sẽ Nhận Ra',
                  des: 'Jason Việt Nguyễn',
                  date: 'So I\'m ok',
                  time: '02:58',
                  src: 'https://docs.google.com/uc?id=1YRq6kG4qSr44TXycW2fYlEf2PZ4o2V-S'
              },
              {
                  id: 5,
                  name: 'Nụ Hôn Đánh Rơi',
                  des: 'Hoàng Yến Chibi',
                  date: 'Nước mắt',
                  time: '05:00',
                  src: 'https://docs.google.com/uc?id=1gy0FMkl9tojhd_dCQkGKBxoI897SyCeX'
              },
              {
                  id: 6,
                  name: 'Phố Cũ Còn Anh',
                  des: 'Quinn',
                  date: 'Còn lại gì?',
                  time: '04:50',
                  src: 'https://docs.google.com/uc?id=1F2ZNtSlpc9b4Jw9wjfRfnMPO2aM_iMSr'
              },
              {
                  id: 7,
                  name: 'Trong Trí Nhớ Của Anh',
                  des: 'Trần Nguyễn Trung Quân',
                  date: 'Quân Single',
                  time: '03:30',
                  src: 'https://docs.google.com/uc?id=1fyqt2E1k1wpL6kmUg3mroAtqEK9gd_NI'
              },
              {
                  id: 8,
                  name: 'Anh Mơ',
                  des: 'Ngô Ngô',
                  date: '(Single)',
                  time: '04:12',
                  src: 'https://docs.google.com/uc?id=1v6R5pKclh2Kv_zD4-nSu3X761_R-Ro84'
              },
              {
                  id: 9,
                  name: 'Gửi',
                  des: 'Readdy',
                  date: 'Gửi (Single)',
                  time: '05:09',
                  src: 'https://docs.google.com/uc?id=1kQ_Qanx4QhXQUM1Q3FN6LQHV8NUIaerq'
              },
              {
                  id: 10,
                  name: 'Em Đã Biết',
                  des: 'Suni Hạ Linh',
                  date: 'The First Single',
                  time: '04:32',
                  src: 'https://docs.google.com/uc?id=16iXAMYQ2VnfS_jA0II1bArYvrvVp8V5W'
              }
          ]
      }
  )
}
