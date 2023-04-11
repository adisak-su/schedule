import axios from 'axios'
import request from 'request'
import logger from '../../utils/Logger.js';
import common from '../../utils/commonFunction.js';

const nodeName = "MEARain";

let config = null;
let options = null;
let dam = null;
class MEARain {
    constructor(dam="rpb",apikey=null) {
        if(!apikey)
            apikey = '0aZw2G1e54dJ82g46t5Ku73jM15n2J0m4PM3jGo5Lc4Ef8U41C';

        const baseURL = 'http://water.egat.co.th/API/' + dam +'/' + apikey;

        options = {
            'method': 'GET',
            'url': baseURL,
            'headers': {
              'Content-Type': 'application/json'
            }
        };

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
                if(!response.data || !response.data.length){
                    logger.error(common.messageError(nodeName,401,"Server response null"))
                    resolve([])
                }
                resolve(response.data)
            })
            .catch((error) => {
                if(error.errno && error.code) {
                    logger.error(common.messageError(nodeName,error.errno,error.code))
                }
                else if(error.response.status && error.response.statusText) {
                    logger.error(common.messageError(nodeName,error.response.status,error.response.statusText))
                }
            });            
        });
    }
}

export default MEARain