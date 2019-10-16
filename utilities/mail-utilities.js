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


function createRandomUrl(length, randomString){
  //let mailId = crypto.randomBytes(3).toString('hex');
    let mailName = randomString(length).toLowerCase();
    let mailUrl = `https://getnada.com/api/v1/inboxes/${mailName}@getnada.com`
	return [mailName, mailUrl]
}

function parseMailCode(mailcodeString){
    let numberPattern = /\d+/g;
    let parsedMailCode = mailcodeString.match(numberPattern).join([]);
    //let parsedMailCode = parseInt(mailcodeString.match(numberPattern).join([]));
    console.log(parsedMailCode);
    return parsedMailCode
}

/*function concatenate(a, b, base) {
        if(typeof base == 'undefined') {
            base = 10;
        }
        return a * Math.pow(base, Math.floor(Math.log(b) / Math.log(base)) + 1) + b;
    }
*/
let counter = 0;

async function fetchMail(mailUrl, parseMailCode){
    console.log(`mailUrl: ${mailUrl}`);

    let counter = 0;
    const { data } = await axios(mailUrl);
    console.log(`data: ${data}`);

    const { msgs } = data;
    const mailCount = msgs.length;
    console.log(`mailCount: ${mailCount}`);

    if (mailCount === 0 && counter < 5) {
        counter++;
        console.log(`No message received. Retry`)
        await wait(70000);
        return await fetchMail(mailUrl, parseMailCode);
    }

    const mailcodeString = msgs[0].s;
    console.log(`mailcodeString: ${mailcodeString}`);

    const parsedMailcodeString = parseMailCode(mailcodeString);
    console.log(`parsedMailcodeString: ${parsedMailcodeString}`);

    return parsedMailcodeString;
  }

export { randomString, randomPhoneNumber, createRandomUrl, parseMailCode, fetchMail, mailHost }
