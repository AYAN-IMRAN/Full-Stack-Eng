import WebSocket, { WebSocketServer } from "ws";


const wss = new WebSocketServer({port : 5000})

let allClient :WebSocket[] = [];

let count = 0

wss.on("connection" ,(client) => {
    // count++
    //  console.log("✅ Client connected");
    //  console.log(`Total Client is ${count}`)
    allClient.push(client)

     client.on("message" , (msg) =>{
        allClient.forEach((singleClient)  =>{
            if(singleClient !== client){
singleClient.send(msg.toString())
            console.log(msg.toString())
            }
            
        } )
     })
})