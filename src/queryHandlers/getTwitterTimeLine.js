const Twitter = require('twitter');
require("env2")("./config.env");

const client = new Twitter({ consumer_key: process.env.consumer_key ,
                        consumer_secret: process.env.consumer_secret,
                        access_token_key: process.env.access_token_key,
                        access_token_secret: process.env.access_token_secret
                    })

                    
exports.get = (req, res) => {
    client.get( 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=SSunuwar5&count=5', function(err, data, response) {
    if(err) throw err;
    res.send(data);
    data.map((val) => {
        console.log('VAL=', val)
        console.log('tweet_status_id=',val);
    })
    // console.log('data=',data);
    // console.log('response=', response)
    })
}

