const express = require('express')
const router = express.Router()
const contactsController = require('../../../controllers/contacts')
const validation = require('./validation')
const guard = require('../../../helpers/guard')

router
  .get('/', guard, contactsController.listContacts)
  .post('/', guard, validation.addContact, contactsController.addContact)

router
  .get('/:contactId', guard, contactsController.getContactById)
  .delete('/:contactId', guard, contactsController.removeContact)

router.patch(
  '/:contactId',
  guard, validation.updateContact,
  contactsController.updateContact,
)

module.exports = router
