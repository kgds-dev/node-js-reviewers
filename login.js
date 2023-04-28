/* 
    1. Use the existing code discussion.
    2. Create an endpoint called “/login. (http://localhost:3000/login/)
    3. Use HTTP method “POST”.
    4. Create a response with a statement “Login successfully”
    5. For the endpoint doesn’t exist, send a response “Wrong username or password was supplied”.
    6. Send username and password data to check on the node server if it is correct.
    6. Ensure that the endpoint is running on PostMan.
*/

// Code here.

// calls the built in module inside node js
const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/login') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
            console.log(typeof body);
        });

        req.on('end', () => {
            const data = JSON.parse(body);
            const userName = 'kimbosanz123';
            const passWord = 'root123';

            if (data.username === userName && data.password === passWord) {
                // Here we're just echoing back the received data in the response
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write('You have logged in successful');
                res.end();
            } else {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.write('Wrong password or username is being supplied');
                res.end();
            }

        });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});