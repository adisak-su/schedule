import MEARain from '../classes/MEA/MEARain.js'
import MEA24Hr from '../classes/MEA/MEA24Hr.js'
import MEA30Day from '../classes/MEA/MEA30day.js'
import MEA7Day from '../classes/MEA/MEA7Day.js'

import BKKRainLastData from '../classes/BKK/BKKRainLastData.js'
import BKKRainInfo from '../classes/BKK/BKKRainInfo.js'
import BKKRainHistory from '../classes/BKK/BKKRainHistory.js'

import TMDWeather3Hours from '../classes/TMD/TMDWeather3Hours.js'
import TMDWeatherToday from '../classes/TMD/TMDWeatherToday.js'

const init = async () => {
    
    const server_api = new MEARain();
    const result = await server_api.getData();
    if(result){
        if(result.length)
            console.log(result[0]);
    }

    //Call TMD WeatherToday
    /*
    const server_api = new TMDWeatherToday();
    const result = await server_api.getData();
    console.log(result)
    if(result.length){
        let Stations = result.WeatherToday.Stations;
        console.log(Stations[0]);
    }
    */
   
    //Call TMD Weather3Hours
    /*
    const server_api = new TMDWeather3Hours();
    const result = await server_api.getData();
    if(result.length){
        let Stations = result.Weather3Hours.Stations;
        console.log(Stations[0]);
    }
    */

    //Call BKK RainInfo
    /*
    const server_api = new BKKRainInfo();
    const result = await server_api.getData();
    if(result){
        if(result.length)
            console.log(result[0]);
    }
    */

    //Call BKK RainLastData
    /*
    const server_api = new BKKRainLastData();
    const result = await server_api.getData();
    if(result){
        if(result.length)
            console.log(result[0]);
    }
    */

    //Call MEA
    /*
    const server_api = new MEARain();
    const result = await server_api.getData();
    if(result){
        if(result.length)
            console.log(result[0]);
    }
    */

}
init();