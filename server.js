const http = require('http');
const WebSocket = require('ws');

const server = http.createServer();

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    // You can send a response back to the client if needed
    // ws.send(`Server received message: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

const PORT = 4000;

// Listen for incoming HTTP requests
server.on('request', (req, res) => {
  // You can handle HTTP requests here if needed
});

// Start the server only if it's not already listening
if (!module.parent) {
  server.listen(PORT, () => {
    console.log(`WebSocket server listening on port ${PORT}`);
  });
}
