import { Router } from 'express'
import * as booksCtrl from '../controllers/books.js'
const router = Router()

/* GET books listing. */
router.get('/', booksCtrl.index)
router.post('/', booksCtrl.create)

router.get('/:id', booksCtrl.show)
router.put('/:id', booksCtrl.update)
router.delete('/:id', booksCtrl.delete)

export {
  router
}
