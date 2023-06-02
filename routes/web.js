const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');

router.get('/', bookController.getAllBooks);
router.post('/', bookController.addBook);
router.get('/details', bookController.getBookDetails);
router.put('/update', bookController.updateBook);
router.delete('/delete', bookController.deleteBook);
router.get('/search', bookController.searchBooks);

const membersController = require('../controllers/membersController');
router.get('/', membersController.getAllMembers);
router.post('/', membersController.addMember);
router.get('/details', membersController.getMemberDetails);
router.put('/update', membersController.updateMember);
router.delete('/delete', membersController.deleteMember);
router.get('/search', membersController.searchMembers);

module.exports = router;