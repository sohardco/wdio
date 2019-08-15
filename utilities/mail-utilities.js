
async function wait(ms) {
  return new Promise(resolve => {
        setTimeout(resolve, ms);
  });
};

var counter = 0;

async function fetchMail(mailId){
    try{
      let responce = await fetch(`https://getnada.com/api/v1/inboxes/${mailId}@getnada.com`);
      let data = await responce.json()
      let mailCount = await data.msgs.length
        if(mailCount === 0 && counter < 5){
            counter++
            console.log(`No message received. Retry`)
            await wait(5000)
            await fetchMail(mailId)
            return
        }

      let mailCodeString = await data.msgs[0].s
      console.log(mailCodeString)

      let numberPattern = /\d+/g;
      let parsedMailCode = Number.parseInt(mailCodeString.match(numberPattern).join([]));
      console.log(parsedMailCode)

      return parsedMailCode
    }

    catch(e){console.log(e)}
}

//async function verifyMail(mailId) {
    //let data = await fetchMail(mailId);
    //let responceCode = await checkMessages(data, fetchMail, mailId)
}
