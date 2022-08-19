const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUsers,
    deleteUser,
    addThought,
    removeThought,
} = require('../../controllers/userController');

// /api/students
router.route('/').get(getUsers).post(createUsers);

// /api/students/:studentId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/students/:studentId/assignments
router.route('/:userId/thoughts').post(addThought);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

module.exports = router;