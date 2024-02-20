import React from 'react';   
import ChartBar from './ChartBar'
import './Chart.css';
const Chart=props =>{
    return <div className='chart'>
        {props.datapoints.map(datapoint =>
         <ChartBar
         key={datapoint.lable}
        value={datapoint.value}
         maxValue={null} 
         lable={datapoint.lable}/>)}


    </div>

};
export default Chart