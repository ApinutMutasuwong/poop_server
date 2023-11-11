const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('WebSocket connection established');

  // Send a welcome message to the connected client
  ws.send('Welcome to the WebSocket server!');

  // Listen for messages from the client
  ws.on('message', (message) => {
    console.log('Received message:', message);

    // Send a response back to the client
    ws.send(`You said: ${message}`);
  });

  // Listen for the WebSocket connection to close
  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`WebSocket server is listening on port ${PORT}`);
});
