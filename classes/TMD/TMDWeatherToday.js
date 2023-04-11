import axios from 'axios'
import logger from '../../utils/Logger.js';
import xml2js from 'xml2js'
const parser = new xml2js.Parser({ attrkey: "ATTR"});

import common from '../../utils/commonFunction.js';
const nodeName = "TMDWeatherToday";

let config = null;
let id = null;
class TMDWeatherToday {
    constructor(uid=null,ukey=null) {
        if(!ukey)
            ukey = 'api12345';
        if(!uid)
            uid = 'api';
        const baseURL = 'https://data.tmd.go.th/api/WeatherToday/V2/?uid=' + uid + '&ukey=' + ukey;
        this.axios = axios.create({
            baseURL
        })
        config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: baseURL
        };
    }
    
    getData() {
        return new Promise(function(resolve, reject) {
            axios.request(config)
            .then((response) => {
                if(response?.data){
                    if(response.data=="Authentication fail"){
                        logger.error(common.messageError(nodeName,401,response.data))
                        resolve([])
                    }
                    else{
                        parser.parseString(response.data, function(errParse, result) {
                            if(errParse) {
                                logger.error(common.messageError(nodeName,401,"{" + errParse + "}"))
                                resolve([])
                            }
                            resolve(result)
                        })
                        resolve([])
                    }    
                }
                else{
                    logger.error(common.messageError(nodeName,204,"Server response no Content"))
                    resolve([])
                }
            })
            .catch((error) => {
                if(error.errno) {
                    logger.error(common.messageError(nodeName,error.errno,error.code))
                }
                else{
                    logger.error(common.messageError(nodeName,error.response.status,error.response.statusText))
                }
            });
        });
    }
}

export default TMDWeatherToday