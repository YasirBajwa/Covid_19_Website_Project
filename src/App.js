import React from 'react';

import {Cards,Chart,CountryPicker} from './components/index';
import PiChart from './components/Pichart/Pichart'
import styles from './App.module.css';
import {fetchData} from './api';

import covidImg from './images/covid.png';

// import {LastUpdateCase} from  './components/Cards/Cards';
 
class App extends React.Component{
// we are using await because we are dealing with asynchronus data and await need to wrap in a function asynchrounus function

state={
    data:{},
    country: ''
}

    async componentDidMount(){
        const fetchedData = await fetchData();
        
        this.setState({ data : fetchedData })
    }

    handleCountryChange = async (country) =>{
        const fetchedData = await fetchData(country);
        this.setState({ data : fetchedData, country:country })
      
        
    }

    render(){

        const {data,country} = this.state;
        return(
               <div>
               <div className={styles.container}>
                <img className={styles.covid} src={covidImg} alt={'Covid-19'}/>
               
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                
                <Cards data={data} />
                <div><h1>Visual Representation of data using Different Graphs</h1></div>
                <PiChart  data={data} country={country}/>
                <Chart data={data} country={country} />
               
            </div>
            <div className={styles.footer}>
                <h2>Made By Yasir Bajwa From Faisalabad</h2>
            </div>
            </div>
        )
    }
}

export default App;