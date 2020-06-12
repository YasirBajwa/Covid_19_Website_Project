import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import {fetchCountries } from '../../api';


import styles from  './CountryPicker.module.css';



const CounrtyPicker = ({handleCountryChange}) =>{
     const [fetchedCounties,setFetchedCountires] = useState([]);
      
     useEffect(() => {
         const fetchAPI = async () => {
          setFetchedCountires(await fetchCountries())
         }

         fetchAPI();
     },[setFetchedCountires])

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange = {(e) => handleCountryChange(e.target.value)}>
                <option value=''>Global</option>
                 {fetchedCounties.map( (country,i) => <option key={i} value={country} >{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CounrtyPicker;