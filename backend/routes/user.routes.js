const express = require('express');
const { setUsers, getUsers, editUsers, deleteUser } = require('../controllers/user.controller');
const router = express.Router();

router.get("/", getUsers)
router.post("/", setUsers)
router.put('/:id', editUsers)
router.delete("/:id", deleteUser)

module.exports = router