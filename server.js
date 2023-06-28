const app = require('express')();
const http =require('http').Server(app);
const path = require('path');
const complete_Path = path.join(__dirname, "index.html");
const io = require('socket.io')(http);

app.get("/",(req, res)=>{
    res.sendFile(complete_Path);
})

// code for Socket.io
io.on("connection",(socket)=>{
console.log("Users Is connected");

// CODE FOR SEND DEFAULT MESSAGE TO CLIENT SIDE
// socket.send("This is default message from server...");

// CODE FOR SEND CUSTOME MESSAGE TO CLIENT SIDE
// socket.emit("customeMsg","This is Custome message from server...");

// CODE FOR RECEVING MESSAGE FROM CLEINT
socket.on("clientMsg", (data)=>{
console.log(data);
});

// code for diconnect user
socket.on("disconnect",()=>{
    console.log("User Is Disconnected..");
})
})

http.listen(2100,()=>{
    console.log("Server is connected...");
});