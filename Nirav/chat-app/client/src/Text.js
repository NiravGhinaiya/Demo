// import React, { useEffect, useState } from 'react'
// import io from "socket.io-client"
// const socket = io.connect("http://localhost:3001/")

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   const [roomId, setRoomId] = useState('')


//   useEffect(() => {
//     socket.on('receive_message', (data) => {
//       setMessages([...messages, data]);
//       console.log('=======>', data)
//     });

//     console.log(messages)

//     return () => {
//       socket.off('receive_message');
//     };
//   }, [messages]);

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     socket.emit("send_message", {
//       text: message,
//       room: roomId
//     })
//     setMessage('')
//     setRoomId('')
//   }



//   const handleClickCreateRoom = (e) => {
//     e.preventDefault();
//     socket.emit('join_room', roomId)
//   }


//   return (
//     <div>
//       <ul id="messages"></ul>
//       <form id="form" action="" onSubmit={handleSubmit}>
//         <input id="input" autocomplete="off" value={message} placeholder='Enter Message...' onChange={(e) => setMessage(e.target.value)} /><br />
//         <input type='number' value={roomId} placeholder='Enter Room ID...' onChange={(e) => setRoomId(e.target.value)} /><br /><br />
//         <button type='submit'>send</button>
//       </form>
//       <div>
//         {
//           messages.length > 0 &&
//           messages?.map((e) => {
//             return (
//               <div>
//                 <h2>{e.text}</h2>
//                 <h4>{e.room}</h4>
//                 <hr />
//               </div>
//             )
//           })
//         }
//       </div>
//     </div>
//   )
// }

// export default App






    // console.log()

    // var key = "2e35f242a46d67eeb74aabc37d5e5d05";
    // let obj = {
    //   a: 123,
    //   name: "nirav",
    //   language: "react js",
    // };
    // var data = CryptoJS.AES.encrypt(JSON.stringify(obj), key).toString(); // Encryption Part
    // var decrypted = CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8); // Message

    // console.log("data", data);
    // console.log("decrypted", JSON.parse(decrypted));
