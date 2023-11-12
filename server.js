const https = require('https');
const fs = require('fs');

const server = https.createServer({
  cert: fs.readFileSync('certificate.crt'),
  key: fs.readFileSync('private.key')
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    // You can process the message here and send a response if needed
    ws.send('Server received your message');
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

server.listen(4000, () => {
  console.log('Server listening on port 4000');
});
