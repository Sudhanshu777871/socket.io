const app = require("express")();
const http = require("http").Server(app);
const path = require("path");
const complete_Path = path.join(__dirname, "index.html");
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(complete_Path);
});

user = 0;
room = 1;
// CODE FOR USING NAMESPACES
// const ns = io.of("/admin");
// code for Socket.io
// ns.on("connection",(socket)=>{ IF WE USE NAMESPACES
io.on("connection", (socket) => {
  console.log("Users Is connected");

  // CODE FOR SEND DEFAULT MESSAGE TO CLIENT SIDE
  // socket.send("This is default message from server...");

  // CODE FOR SEND CUSTOME MESSAGE TO CLIENT SIDE
  // socket.emit("customeMsg","This is Custome message from server...");

  // CODE FOR RECEVING MESSAGE FROM CLEINT
  // socket.on("clientMsg", (data)=>{
  // console.log(data);
  // });

  // CODE FOR SENDING MESSAGE TO EVREYONE (BROADDCASTING)
  //   user++;
  //   socket.emit("connectedUsers", "Welcome To Chat App");
  //   socket.broadcast.emit("connectedUsers", user);
  // io.sockets.emit("connectedUsers", user)

  //   CODE FOR CREATING ROOMS
  socket.join("roomNo" + room);
  io.sockets
    .in("roomNo" + room)
    .emit("roomMsg", "Your Are In The Room Of " + room);
  // code for diconnect user
  socket.on("disconnect", () => {
    user--;
    // io.sockets.emit("connectedUsers",user);
    // socket.broadcast.emit("connectedUsers", user);
    console.log("User Is Disconnected..");
  });
});

http.listen(2100, () => {
  console.log("Server is connected...");
});
