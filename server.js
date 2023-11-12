const fs = require('fs');
const https = require('https');
const WebSocket = require('ws'); // Import the WebSocket module

const server = https.createServer({
  cert: fs.readFileSync('../certificate.crt'),
  key: fs.readFileSync('../private.key')
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  // WebSocket connection handling
  console.log('WebSocket connection established');

  ws.on('message', (message) => {
    // Handle WebSocket messages
    console.log(`Received message: ${message}`);
  });

  ws.on('close', () => {
    // Handle WebSocket connection closure
    console.log('WebSocket connection closed');
  });
});

server.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
