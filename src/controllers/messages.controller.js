const MessageDaoMongo = require('../../Daos/Mongo/managers/messagesDaosMongo')

const { messageService } = require ('../service/service.js')

class MessageController {

getMessages = async (req, res)=>{
    try {
        const messages = await messageService.getMessages()
    res.send({message: messages})        
    } catch (error) {
       console.log(error) 
    }
    
}
createMessage = async (req, res)=>{
    try {
        const result = await messageService.createMessage()
    res.send({message: result })        
    } catch (error) {
       console.log(error) 
    }
    
}
updateMessage = async (req, res)=>{
    try {
        const result = await messageService.updateMessage()
    res.send({message: result })        
    } catch (error) {
       console.log(error) 
    }
    
}
deleteMessage =  async (req, res)=>{
    try {
        const result = await messageService.deleteMessage()
    res.send({message: result })        
    } catch (error) {
       console.log(error) 
    }
    
}
}

module.exports = MessageController