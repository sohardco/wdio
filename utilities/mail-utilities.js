function randomString(length) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function wait(ms) {
  return new Promise(resolve => {
        setTimeout(resolve, ms);
  });
};

let counter = 0;

function createRandomUrl(length, randomString){
  //let mailId = crypto.randomBytes(3).toString('hex');
    let mailName = randomString(length);
    let mailUrl = `https://getnada.com/api/v1/inboxes/${mailName}@getnada.com`
	return [mailName, mailUrl]
}

function parseMailCode(mailcodeString){
    let numberPattern = /\d+/g;
    let parsedMailCode = parseInt(mailCodeString.match(numberPattern).join([]));
    console.log(parsedMailCode);
    return mailCode
}


async function fetchMail(mailUrl, parseMailCode, ){
      let responсe = await fetch(mailUrl);
      let data = await responсe.json();
      let mailCount = data.msgs.length;
        if (mailCount === 0 && counter < 5) {
            counter++
            console.log(`No message received. Retry`)
            await wait(5000);
            await fetchMail(mailUrl);
            return
        }

      let mailcodeString = await data.msgs[0].s;
      console.log(mailCodeString)

      return  parseMailCode(mailcodeString)
      //return parsedMailCode
}

//async function verifyMail(mailId) {
    //let data = await fetchMail(mailId);
    //let responceCode = await checkMessages(data, fetchMail, mailId)
//}
