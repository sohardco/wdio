const axios = require('axios');
let mailHost = "@getnada.com"

function randomString(length) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function randomPhoneNumber() {
  return Math.floor(Math.random() * 10000000000)
}

async function wait(ms) {
  return new Promise(resolve => {
        setTimeout(resolve, ms);
  });
};

let counter = 0;

function createRandomUrl(length, randomString){
  //let mailId = crypto.randomBytes(3).toString('hex');
    let mailName = randomString(length).toLowerCase();
    let mailUrl = `https://getnada.com/api/v1/inboxes/${mailName}@getnada.com`
	return [mailName, mailUrl]
}

function parseMailCode(mailcodeString){
    let numberPattern = /\d+/g;
    let parsedMailCode = parseInt(mailcodeString.match(numberPattern).join([]));
    console.log(parsedMailCode);
    return parsedMailCode
}


async function fetchMail(mailUrl, parseMailCode){
      console.log('This is Url ' + mailUrl)
      const response = await axios(mailUrl);
      //console.log('This is response  ' + response)
      //console.log(response.data)
      //const data = await response.data;
      //console.log('This is data ' + data)
      let data = response.data
      console.log(data)
      let mailCount = response.data.msgs.length;
      console.log('this is mailcount: ' + mailCount)
        if (mailCount === 0 && counter < 5) {
            counter++
            console.log(`No message received. Retry`)
            await wait(10000);
            await fetchMail(mailUrl, parseMailCode);
            return
        }

      const mailcodeString = await data.msgs[0].s;

      console.log('This is mailCodeString ' + mailcodeString)
      console.log('This is parsed string:  '+ parseMailCode(mailcodeString))
      return  parseMailCode(mailcodeString)
      //return parsedMailCode
}

/*function fetchEmail(mailUrl, parseMailCode) {
  //console.log("Here is mailstring:   " + mailUrl)
   return axios(mailUrl)
   .then(res => {
     return res.data })
   .then(data => {
    let mailCount = data.msgs.length
    if (mailCount === 0 && counter < 5) {
        counter++
        console.log('No message received. Retry')
        //wait(5000);
        console.log('wait stopped')
        fetchEMail(mailUrl, parseMailCode);
        return
    }

    let mailcodeString = data.msgs[0].s;
    console.log(mailсodeString)

    return  parseMailCode(mailcodeString)
   })
   /*.then(res3 => {
     console.log(res3)
   })
  // .then(res2 => {
     //console.log(res2)
     //return res2.msgs.[0]s;
   }*/



export { randomString, randomPhoneNumber, createRandomUrl, parseMailCode, fetchMail, mailHost }
//async function verifyMail(mailId) {
    //let data = await fetchMail(mailId);
    //let responceCode = await checkMessages(data, fetchMail, mailId)
//}
