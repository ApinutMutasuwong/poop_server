const fs = require('fs');
const https = require('https');
const WebSocket = require('ws');

const server = https.createServer({
  cert: fs.readFileSync('../certificate.crt'),
  key: fs.readFileSync('../private.key')
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('WebSocket connection established');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

// Start the HTTPS server on port 443 (or your desired port)
const PORT = process.env.PORT || 443;
server.listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});
