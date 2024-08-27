import WebSocket, { WebSocketServer } from 'ws';

const WEBSOCKET_PORT = process.env.WEBSOCKET_PORT ?? 5050;

const init = () => {
  // WebSocket server
  const wss = new WebSocketServer({ port: +WEBSOCKET_PORT });

  console.log(
    `Test Socket Server is running at http://localhost:${WEBSOCKET_PORT}`,
  );

  wss.on('connection', (ws, req) => {
    ws.on('error', console.error);
    const ip = req.socket.remoteAddress;
    console.log('Client Connected. IP => ', ip);
    console.log('Total Clients Connected ', wss.clients.size);

    // Braodcast message to all connected client
    ws.on('message', (data, isBinary) => {
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data, { binary: isBinary });
        }
      });
    });

    ws.send(`Welcome to Test Socket Server...`);
  });
};

export default { init };
