const fs = require('fs');
const https = require('https');
const WebSocket = require('ws');
const cors = require('cors');

const server = https.createServer({
  cert: fs.readFileSync('../certificate.crt'),
  key: fs.readFileSync('../private.key')
});

const wss = new WebSocket.Server({ noServer: true });

// Apply CORS middleware to handle the WebSocket handshake
server.on('upgrade', (request, socket, head) => {
  cors()(request, null, () => {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  });
});

wss.on('connection', (ws) => {
  console.log('WebSocket connection established');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

server.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
