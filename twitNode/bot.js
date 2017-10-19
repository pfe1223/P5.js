console.log("The bot is starting.");

//Twitter Variables
let Twit = require('twit');
let T = new Twit({
  consumer_key: 'IXrFqKMYJfs4WfTttKQdVPz3o',
  consumer_secret: 'XW6GwMcGbdYVsAoXewhLRs5WSJdyD403Yd9k39uzU9hIEPj8q9',
  access_token: '763439881141878784-1i3RkGMV4We5WCO9CBJCKKvTNBanlqt',
  access_token_secret: 'umG7RrMlffmk6elAntlr8u664erFNqaSbMDasMmdiDTeF'
});

//Arduino Variables
let five = require('johnny-five');
let board = new five.Board();
let led;
let toggleState = false;

//Arduino Code
board.on("ready", readyMsg);

function ledOn() {
  led = new five.Led(13);
  led.on();
}

function ledOff() {
  led = new five.Led(13);
  led.off();
}

function readyMsg() {
  console.log("Board ready!");
}

//Twitter Code
let stream = T.stream('user');

stream.on('tweet', tweetEvent);

function tweetIt(txt) {
  console.log("In tweetIt function.");
  let tweet = {
    status: txt
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("Something went wrong.");
    } else {
      console.log("It worked.");
    }
  }
}

function tweetEvent(eventMsg) {
  console.log('Tweet Event!');
  let replyto = eventMsg.in_reply_to_screen_name;
  let text = eventMsg.text;
  let from = eventMsg.user.screen_name;

  console.log(replyto + ' ' + from);

  if (replyto === 'FaisBot') {
    let hasHashTag = eventMsg.entities.hashtags;
    if (hasHashTag) {
      console.log("There is a hastag");
      let hashTag = eventMsg.entities.hashtags[0].text;
      if (hashTag === 'on') {
        console.log('Turn LED on');
        ledOn();
      } else if (hashTag === 'off') {
        console.log('Turn LED off');
        ledOff();
      }
    } else {
      console.log("No hashtag");
    }
  }
}
