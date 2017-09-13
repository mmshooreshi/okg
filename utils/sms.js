var qs = require('qs');
var axios = require('axios');
var config = require('../config');
var SMS_TYPE = require('../enums').SMS_TYPE;

let smsService = axios.create()
let bulkSMSUrl = config.sms.url
let smsUrl = config.sms.url
let smsVerifyUrl = config.sms.url

smsService.defaults.timeout = 10000 // 10 seconds
smsService.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const send = async ({receptors, messages, messageType}) => {
  // check inputs
  if (!receptors || !messages || receptors.length !== messages.length) {
    return {
      success: false,
      error: 'Invalid params',
    }
  }

  let result = {}
  let url
  let receptor
  let message
  let sender
  let response
  let params
  if (messageType === SMS_TYPE.VERIFY_CODE) {
    url = smsVerifyUrl
    receptor = receptors[0]
    message = messages[0]
    params = {
      receptor,
      token: message,
      template: 'verifycode',
    }
  } else {
    if (receptors.length > 1) {
      url = bulkSMSUrl
      receptor = JSON.stringify(receptors)
      message = JSON.stringify(messages)
      sender = JSON.stringify(Array(receptors.length).fill(config.sms.num))
    } else {
      url = smsUrl
      receptor = receptors[0]
      message = messages[0]
      sender = config.sms.num
    }
    params = {
      receptor,
      message,
      sender,
    }
  }

  try {
    response = await
      smsService.post(url, qs.stringify(params))
    result.success = true
    result.entries = response.data.entries
    console.log(':)))');
  } catch (err) {
    result.success = false
    result.error = err.response || {status: 0, statusText: 'Unknown'}
  }
  return result
}

module.exports.send = send;
