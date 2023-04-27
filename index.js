// const http = require('http');
// const host = '127.0.0.1';
// const port = 8080;

// const server = http.createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader('Content-type', 'text/plain');
//     response.end('Hello world!');
// });

// server.listen(port, host, () => {
//     console.log(`Server running at http://${host}:${port}/`);
// })

// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)



const http = require('http');
const hostName = 'localhost';
const portNumber = 8080;

const server = http.createServer((req, res) => {
  //front end request format

  /*
    payload

    Request Method: POST
    Request URL: http://localhost:8080/profile > this is the endpoint accessed by the front end
  */
  if (req.method === 'POST' && req.url === '/profile') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Data to be sent to the database using the profile route');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Request Cannot Be Completed');
  }
});

server.listen(portNumber, () => {
  console.log(`Server running at http://${hostName}:${portNumber}/`);
});