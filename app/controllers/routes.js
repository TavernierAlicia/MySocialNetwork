const CreateUser = require('./users/create.js')
const ShowUser = require('./users/show.js')
const UpdateUser = require('./users/update.js')
const DeleteUser = require('./users/delete.js')

const CreateGroup = require('./groups/create.js')
const ShowGroup = require('./groups/show.js')
const UpdateGroup = require('./groups/update.js')
const DeleteGroup = require('./groups/delete.js')

const CreateAlbum = require('./albums/create.js')
const ShowAlbum = require('./albums/show.js')
const UpdateAlbum = require('./albums/update.js')
const DeleteAlbum = require('./albums/delete.js')

const CreateEvent = require('./events/create.js')
const ShowEvent = require('./events/show.js')
const UpdateEvent = require('./events/update.js')
const DeleteEvent = require('./events/delete.js')

const CreateSurvey = require('./survey/create.js')
const ShowSurvey = require('./survey/show.js')
const UpdateSurvey = require('./survey/update.js')
const DeleteSurvey = require('./survey/delete.js')

const CreateChat = require('./chat/create.js')
const ShowChat = require('./chat/show.js')
const UpdateChat = require('./chat/update.js')
const DeleteChat = require('./chat/delete.js')




module.exports = {
  users: {
    CreateUser,
    ShowUser,
    UpdateUser,
    DeleteUser
  },
  albums: {
    CreateAlbum,
    ShowAlbum,
    UpdateAlbum,
    DeleteAlbum
  },
  chats: {
    CreateChat,
    ShowChat,
    UpdateChat,
    DeleteChat
  },
  groups: {
    CreateGroup,
    ShowGroup,
    UpdateGroup,
    DeleteGroup
  },
  events: {
    CreateEvent,
    ShowEvent,
    UpdateEvent,
    DeleteEvent
  },
  surveys: {
    CreateSurvey,
    ShowSurvey,
    UpdateSurvey,
    DeleteSurvey
  }
}
