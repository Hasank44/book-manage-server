const router = require('express').Router();
const {
    booksGetController, booksPostController, booksUpdateController, booksDeleteController, booksGetFindController
} = require('../controllers/booksController');

router.get('/', booksGetController);
router.get('/:id', booksGetFindController);
router.post('/', booksPostController);
router.put('/:id', booksUpdateController);
router.delete('/:id', booksDeleteController);

module.exports = router;