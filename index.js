const express = require("express");
const app = express();
const path = require("path");
const httpServer = require("http").createServer(app);
const { Server } = require("socket.io");

const io = new Server(httpServer);
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "/pages")));

app.get("/", (req, res) => {
  res.sendFile("/pages/index.html");
});
app.get("/game", (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/game.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

httpServer.listen(port, () => console.log("listening on port " + port));
