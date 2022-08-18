import * as controllers from '../controller/crud_controller.js'
import { Router } from "express"

const router = Router()

router.get('/read', controllers.Read)
router.post('/create', controllers.Create)
router.put('/update/:id', controllers.Update)
router.delete('/delete/:id', controllers.Delete)

export default router