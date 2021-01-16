const https = require('https');
const { data } = require('jquery');

function fetch(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (rd) => data = data + rd);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        });
    });
}

fetch('https://www.javascript.com/')
    .then(data => {
        console.log(data.length);
    });


(async function read(){
    const data = await fetch('https://www.javascript.com/');  // await will give as access to data after is available from the async function
    console.log(data.length);
})();



 
