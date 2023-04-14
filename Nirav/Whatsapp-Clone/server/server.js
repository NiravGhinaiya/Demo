const io = require('socket.io')(5000, {
  cors: {
    origin: ["http://172.22.11.16:3000"],
  },
})



io.on('connection', socket => {
  const id = socket.handshake.query.id
  socket.join(id)
  console.log("user id", id);

  socket.on('send-message', ({ recipients, text }) => {
    recipients.forEach(recipient => {
      const newRecipients = recipients.filter(r => r !== recipient)
      console.log("newRecipients", newRecipients)
      newRecipients.push(id)
      socket.broadcast.to(recipient).emit('receive-message', {
        recipients: newRecipients, sender: id, text
      })
    })
  })
})