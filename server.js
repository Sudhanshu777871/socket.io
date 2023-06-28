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





// code for diconnect user
socket.on("disconnect",()=>{
    console.log("User Is Disconnected..");
})
})

http.listen(2100,()=>{
    console.log("Server is connected...");
});