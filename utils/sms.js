var qs = require('qs');
var axios = require('axios');
var config = require('../config');
var SMS_TYPE = require('../enums').SMS_TYPE;

let smsService = axios.create()
let smsUrl = config.sms.url

smsService.defaults.timeout = 10000 // 10 seconds
smsService.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const send = async ({receptor, message}) => {
  // check inputs
  if (!receptor || !message) {
    return {
      success: false,
      error: 'Invalid params',
    }
  }

  let params = {
    receptor,
    message
  }

  try {
    response = await smsService.post(smsUrl, qs.stringify(params))
    console.log(response)
    console.log('SMS sent.')
  } catch (err) {
    console.log(err)
  }
}

module.exports.send = send;
