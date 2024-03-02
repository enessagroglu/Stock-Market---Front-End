import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js'; 
import { LinearScale, LineElement, CategoryScale, PointElement } from 'chart.js';
import Footer from './Footer'; 


Chart.register(LinearScale, LineElement, CategoryScale, PointElement);


const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };
  

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };


export default function Home() {
    return (
        <div>
            <div className="col-5">

            </div>

        </div>
    )
}