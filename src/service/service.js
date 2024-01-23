const MessageDaoMongo = require("../Daos/Mongo/managers/messagesDaosMongo");
const { UserManagerMongo } = require("../Daos/Mongo/managers/userManager");

const userService = new UserManagerMongo()
const messageService = new MessageDaoMongo()

module.exports =  { userService, messageService}