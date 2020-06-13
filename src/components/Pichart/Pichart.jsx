

import React from 'react';
import {Pie, Bar} from 'react-chartjs-2';
import styles from './Pichart.module.css'
// import {fetchDailyData} from '../../api';



const PiChart = ({data:{confirmed,recovered,deaths},country}) => {
 
  
    if(!confirmed){
        return 'Loading'
    }
   
    const state = {
          labels: ['Confirmed', 'Recovered', 'Death',
                   ],
          datasets: [
            {
              label: 'Analysis By Pi Chart',
              backgroundColor: [
                '#0000FF',
                '#7CFC00',
                '#FF0000',
               
              ],
              data: [confirmed.value, recovered.value, deaths.value]
            }
          ]
        }
        let recoverdCase= recovered.value ;
        let totalConfirmedCase = confirmed.value;
        let totaldeath = deaths.value;
        const avgRecoveredCase = () => {
          
             let avgRecover =Math.round( recoverdCase / totalConfirmedCase * 100);
             return avgRecover ;
      
           }
          const avgDeathCase = () =>{
              let avgDeath = Math.round(totaldeath / totalConfirmedCase * 100);
              return avgDeath;
          } 
          //  const LastUpdateCase = () => {
          //    let updateCase = new Date(lastUpdate).toDateString();
          //    return updateCase;
          // }
          // console.log(avgDeathCase());
        const barChart =(
          
          confirmed
          ? (
            <Bar
            
            data ={{
              labels:['Recovery Rate %','Death Rate %'],
                datasets:[{
                label:'Average',
                backgroundColor:[
                  'rgba(0,255,0,0.5)',
                  'rgba(255,0,0,0.5)',
                ],
                data:[avgRecoveredCase(),avgDeathCase()]

              }]

            }}
            options={{
              legend:{display:false},
              title: {display:true, text:`Current state is ${country}`}

            }}

            
            /> ) : null
          ) 
        
    return (
      <div className={styles.container}>
     
        <div  className={styles.piChartId} >
      
        <Pie
       
          data={state}
          options={{
            title:{
              display:true,
              fontSize:20
            },
            legend:{
              display:true,
              position:'left'
            }
          }}
        />
        </div>
        
        <div className={styles.barChartCase}>{barChart}</div>
      </div>
    );
  }
export default PiChart;













