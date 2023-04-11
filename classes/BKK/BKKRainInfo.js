import axios from 'axios'
import Base64 from 'base-64'
import logger from '../../utils/Logger.js';
import common from '../../utils/commonFunction.js';

const nodeName = "BKKRainInfo";

let config = null;
class BKKRainInfo {
    
    constructor(username=null,password=null) {
        let user = username;
        let pass = password;
   
        if(!username) {
            user = 'hydro_haii';
            pass = 'hydro_ha11';
        }

        const userPass = `${user}:${pass}`;
        const hash = Base64.encode(userPass);
        const Basic = 'Basic ' + hash;
        const baseURL = 'https://weather.bangkok.go.th/dds_webservices/api/rain/info?status=on';
        this.axios = axios.create({
            method: 'POST',
            baseURL,
            headers : { 'Authorization' : Basic }         
        })
        config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: baseURL,
            headers: { 
            'Authorization': Basic
            }
        };
    }
    
    getData() {
        return new Promise(function(resolve, reject) {
            axios.request(config)
            .then((response) => {
                if(response.data.Error){
                    logger.error(common.messageError(nodeName,401,response.data.Error))
                    resolve([])
                }
                if(!response.data.length){
                    logger.error(common.messageError(nodeName,401,"Server response null"))
                    resolve([])
                }
                resolve(response.data)
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

export default BKKRainInfo