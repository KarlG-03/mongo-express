import app from './app';
import testSocketServer from './sockets/testSocketServer';

const PORT = process.env.PORT || 3000;

// WebSocket server
testSocketServer.init();

// Start Express Server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
