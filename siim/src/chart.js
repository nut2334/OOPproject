import {Bar} from 'react-chartjs-2';
import {train} from './count';
import 'antd/dist/antd.css';
import './chart.css'

var study=train;

const Config1 = {
    type: 'bar', //ประเภท
    labels: [0,1],
    datasets: [
        {
            label: 'Negative for Pneumonia',
            data: [study.total3[0],study.total3[1]],
            backgroundColor: 'rgba(70, 130, 180, 1)',
            borderWidth: 1
        }
    ], //ข้อมูล
};
  const Config2 = {
    type: 'bar', //ประเภท
    labels: [0,1],
    datasets: [
        {
            label: 'Typical Appearance',
            data: [study.total3[2],study.total3[3]],
            backgroundColor: 'rgba(70, 130, 180, 1)',
            borderWidth: 1
          }
    ], //ข้อมูล
  };
  const Config3 = {
    type: 'bar', //ประเภท
    labels: [0,1],
    datasets: [
        {
            label: 'Indeterminate Appearance',
            data: [study.total3[4],study.total3[5]],
            backgroundColor: 'rgba(70, 130, 180, 1)',
            borderWidth: 1
          }
    ], //ข้อมูล
  };
  const Config4 = {
    type: 'bar', //ประเภท
    labels: [0,1],
    datasets: [
        {
            label: 'Atypical Appearance',
            data: [study.total3[6],study.total3[7]],
            backgroundColor: 'rgba(70, 130, 180, 1)',
            borderWidth: 1
          }
    ], //ข้อมูล
};
const options = { 
  //responsive: true,
  scales: { 
    x:{
      grid:{
        display: false,
      }
    },
      y: { 
          display: false,
      },
  },
  plugins:{
      legend: {
        display: false
      }
  }
};

  export function Train1() {
      return(
        <div class="c"><Bar data={Config1} options={options}/></div>
      );
  }
  export function Train2() {
    return(
      <div class="c"><Bar data={Config2} options={options}/></div>
    );
}
export function Train3() {
  return(
    <div class="c"><Bar data={Config3} options={options}/></div>
  );
}
export function Train4() {
  return(
    <div class="c"><Bar data={Config4} options={options}/></div>
  );
}