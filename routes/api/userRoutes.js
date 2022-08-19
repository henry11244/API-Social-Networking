const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUsers,
    deleteUser,
    updateUser,
    addThought,
    removeThought,
    addFriend,
    deleteFriend,

} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUsers);

router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

router.route('/:userId/thoughts').post(addThought);

router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

router.route("/userID/friends/:friendsId").post(addFriend).delete(deleteFriend);

module.exports = router;