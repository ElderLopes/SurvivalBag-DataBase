import { Router } from 'express'

import ItemController from './app/controllers/ItemController'

const routes = new Router()

routes.post('/itens', ItemController.store )


export default routes