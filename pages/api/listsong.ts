// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

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
                    name: 'Mưa Trong Lòng',
                    des: 'Trịnh Đình Quang',
                    time: '04:30',
                    date: '3 ngày trước',
                    type: 'vpop',
                    src: 'https://docs.google.com/uc?id=1TtA5BAtQx5hqwP-hYBYhtZK360Y-6yjz'
                },
                {
                    id: 2,
                    name: 'Nếu Là Anh',
                    des: 'The Men',
                    time: '03:20',
                    date: '5 ngày trước',
                    type: 'vpop',
                    src: 'https://docs.google.com/uc?id=1o7FT79tHmVJydfRZ4cPqJMNXieEl5owz'
                },
                {
                    id: 3,
                    name: 'Khóc Trong Mưa',
                    des: 'Không Nhớ Tên',
                    time: '04:12',
                    date: '1 ngày trước',
                    type: 'vpop',
                    src: 'https://docs.google.com/uc?id=1RJGwABuVgRvG4vF3hadF37xbCcDBcgNy'
                },
                {
                    id: 4,
                    name: 'Là Bạn Không Thể Yêu',
                    des: 'Lou Hoàng',
                    time: '03:50',
                    date: 'Hôm nay',
                    type: 'vpop',
                    src: 'https://docs.google.com/uc?id=1tFVFVdMcYBnfL3i_JIAln3kNAtS_zrfl'
                },
                {
                    id: 5,
                    name: 'Một Mình Có Buồn Không',
                    des: 'Thiều Bảo Trâm',
                    time: '05:01',
                    date: '2 ngày trước',
                    type: 'vpop',
                    src: 'https://docs.google.com/uc?id=1WwwVja-Fr_IKRK0hNctW5JTqLyDuv0me'
                },
                {
                    id: 6,
                    name: 'Simple Love',
                    des: 'Obito, Seachains, Davis',
                    time: '03:45',
                    date: '1 ngày trước',
                    type: 'usuk',
                    src: 'https://docs.google.com/uc?id=1WPbUMTB5HKHnKudrp3yG6oCDqp97bXuV'
                },
                {
                    id: 7,
                    name: 'I Love You',
                    des: 'Bảo Thy',
                    time: '05:00',
                    date: '3 ngày trước',
                    type: 'usuk',
                    src: 'https://docs.google.com/uc?id=1-dcBZms98_UQiaHYPDDgZinIYlaIffD-'
                },
                {
                    id: 8,
                    name: 'Cause I Love You',
                    des: 'Noo Phước Thịnh',
                    time: '03:50',
                    date: '2 ngày trước',
                    type: 'usuk',
                    src: 'https://docs.google.com/uc?id=12aUWtncIlhxiGK-Nb-AeDee6QXvCn8st'
                },
                {
                    id: 9,
                    name: 'Sao Em Vô Tình',
                    des: 'Jack 5 trịu',
                    time: '05:02',
                    date: '1 ngày trước',
                    type: 'usuk',
                    src: 'https://docs.google.com/uc?id=1TFjttotfvk2tLHiPYbQjQKdvrSIrrgsy'
                },
                {
                    id: 10,
                    name: 'Sao Em Nỡ',
                    des: 'Jaykii',
                    time: '04:09',
                    date: '5 ngày trước',
                    type: 'kpop',
                    src: 'https://docs.google.com/uc?id=1ihAZ_5ucz0h3V7Tzl5oBbZt4c7mUzUzr'
                },
                {
                    id: 11,
                    name: 'Yêu Một Người Có Lẽ',
                    des: 'Lou Hoàng, Miu Lê',
                    time: '05:00',
                    date: '3 ngày trước',
                    type: 'kpop',
                    src: 'https://docs.google.com/uc?id=1Lfh0VhP4tSUm8e0ZyVtPRvTFpNu0SBVv'
                },
                {
                    id: 12,
                    name: 'Là Bạn Không Thể Yêu',
                    des: 'Lou Hoàng',
                    time: '03:09',
                    date: '1 ngày trước',
                    type: 'kpop',
                    src: 'https://docs.google.com/uc?id=1tFVFVdMcYBnfL3i_JIAln3kNAtS_zrfl'
                }
            ]
        }
    )
}
