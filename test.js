const WebSocket = require('ws');
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket server is running');
});

// Create a WebSocket server by passing the HTTP server
const wss = new WebSocket.Server({ server });

// WebSocket connection handling
wss.on('connection', (ws) => {
  console.log('Client connected');

  // Handle messages from the client
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);

    // Echo the message back to the client
    ws.send(`Server: ${message}`);
  });

  // Handle disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Start the server on port 4000
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`WebSocket server is listening on port ${PORT}`);
});
