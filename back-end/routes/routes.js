import * as controllers from '../controller/crud_controller.js'
import { Router } from "express"

const router = Router()

router.get('/read', controllers.Read)
router.post('/create', controllers.Create)
router.post('/update', controllers.Update)
router.post('/delete', controllers.Delete)

export default router