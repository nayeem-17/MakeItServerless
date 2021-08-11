var express = require('express');
const { getUser, createUser, deleteUser, updateUser } = require('../controllers/userController');
var router = express.Router();

router.get('/get/:id', getUser)
router.post('/create', createUser)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

module.exports = router;

