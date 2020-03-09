const CreateUser = require('./users/create.js')
const ShowUser = require('./users/show.js')
const UpdateUser = require('./users/update.js')
const DeleteUser = require('./users/delete.js')
const ListUser = require('./users/list.js')

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

const CreateSurvey = require('./surveys/create.js')
const ShowSurvey = require('./surveys/show.js')
const UpdateSurvey = require('./surveys/update.js')
const DeleteSurvey = require('./surveys/delete.js')

const CreateChat = require('./chats/create.js')
const ShowChat = require('./chats/show.js')
const UpdateChat = require('./chats/update.js')
const DeleteChat = require('./chats/delete.js')

module.exports = {
  users: {
    Create: CreateUser,
    Show: ShowUser,
    Update: UpdateUser,
    Delete: DeleteUser,
    List: ListUser
  },
  albums: {
    Create: CreateAlbum,
    Show: ShowAlbum,
    Update: UpdateAlbum,
    Delete: DeleteAlbum
  },
  chats: {
    Create: CreateChat,
    Show: ShowChat,
    Update: UpdateChat,
    Delete: DeleteChat
  },
  groups: {
    Create: CreateGroup,
    Show: ShowGroup,
    Update: UpdateGroup,
    Delete: DeleteGroup
  },
  events: {
    Create: CreateEvent,
    Show: ShowEvent,
    Update: UpdateEvent,
    Delete: DeleteEvent
  },
  surveys: {
    Create: CreateSurvey,
    Show: ShowSurvey,
    Update: UpdateSurvey,
    Delete: DeleteSurvey
  }
}
