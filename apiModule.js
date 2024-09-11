const https = require('https');

// Function to fetch random user data using Node.js's built-in https module
function getRandomUserData() {
    return new Promise((resolve, reject) => {
        const url = 'https://randomuser.me/api/';

        https.get(url, (res) => {
            let data = '';

            // A chunk of data has been received.
            res.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received.
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(data);
                    const userData = parsedData.results[0];
                    //console.log(userData);
                    resolve({
                        name: `${userData.name.first} ${userData.name.last}`,
                        email: userData.email,
                        location: userData.location.city
                    });
                } catch (error) {
                    reject('Error parsing data: ' + error.message);
                }
            });
        }).on('error', (err) => {
            reject('Error fetching data: ' + err.message);
        });
    });
}

module.exports = { getRandomUserData };