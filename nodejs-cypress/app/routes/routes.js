const router = require('express').Router();

//catagory routes
const { addUsers } = require('../../controllers/users/addUsers')
const { updateUsers } = require('../../controllers/users/updateUsrs')
const { deleteUsers } = require('../../controllers/users/deleteUsrs')
const { viewUsers } = require('../../controllers/users/viewUsers')

//catagories
router.post('/add-Users', addUsers)
router.put('/update-Users/:id', updateUsers)
router.delete('/delete-Users/:id', deleteUsers)
router.get('/view-Users', viewUsers)

module.exports = router;
