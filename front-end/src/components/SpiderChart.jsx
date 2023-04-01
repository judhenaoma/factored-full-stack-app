import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Radar } from 'react-chartjs-2';

  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  

  var options = {
    responsive: true,
    scale: {
        ticks: {
            beginAtZero: true,
            stepSize: 10,
            max: 100
        }
    }
};
function SpiderChar({skills, profiencyLevel}) {
    const data = {
        labels: skills,
        datasets: [
          {
            label: 'Employee Skills',
            data: profiencyLevel,
            backgroundColor: 'rgba(62,188,200,0.4)',
            borderColor: 'rgba(62,188,200,0.4)',
            borderWidth: 2,
          },
        ],
      };
    return <Radar data={data} options={options}/>;
  }

export { SpiderChar }