const WebSocket = require('ws');
const http = require('http');

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

server.listen(PORT, () => {
  console.log(`WebSocket server listening on port ${PORT}`);
});

server.listen(4000, () => {
  console.log('Server is listening on port 4000');
});

