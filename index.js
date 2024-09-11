const http = require('http');
const { getRandomUserData } = require('./apiModule');

// Create a server that listens for requests and responds with the API data
const server = http.createServer(async (req, res) => {
    if (req.url === '/user' && req.method === 'GET') {
        try {
            // Fetch the random user data from the external API
            const user = await getRandomUserData();

            //user.id = Math.floor(Math.random() * 10000000);
            //console.log (user);

            // Set the response headers to serve JSON
            res.writeHead(200, { 'Content-Type': 'application/json' });
            
            // Respond with the user data in JSON format
            res.end(JSON.stringify(user));
        } catch (error) {
            // Handle errors and respond with a 500 error status
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to fetch user data' }));
        }
    } else {
        // Handle invalid routes or methods
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Route not found' }));
    }
});

// Start the server and listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    // console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Server running the example on http://localhost:${PORT}/user`);
});