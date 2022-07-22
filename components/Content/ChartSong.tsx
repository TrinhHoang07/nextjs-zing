import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: null,
        title: {
            display: false,
            text: '',
        },
    },
};

const labels = ['09:00', '11:00', '13:00', '15:00', '17:00', '19:00', '21:00', '23:00', '01:00', '03:00', '05:00', '07:00'];

export const data = {
    labels,
    datasets: [
        {
            label: '',
            data: [56, 53, 50, 62, 52, 48, 52, 54, 47, 55, 32, 55],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: '',
            data: [28, 29, 24, 29, 23, 28, 26, 25, 22, 25, 15, 32],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: '',
            data: [22, 23, 21, 20, 19, 24, 23, 22, 20, 21, 11, 23],
            borderColor: '#50e3c2',
            backgroundColor: '#2d927d',
        },
    ],
};

export default function ChartSong() {
    return <Line options={options} data={data} />;
}