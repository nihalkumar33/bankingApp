'use client'

import { Chart , ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
        {
            label: 'Banks',
            data: [1234, 4564, 4543],
            backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
        }
    ],
    labels: ['Bank1', 'Bank2', 'Bank3']
  }
  
    return <
        Doughnut data={data} 
        options={ {
            cutoff: '60%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }}
    />
}

export default DoughnutChart