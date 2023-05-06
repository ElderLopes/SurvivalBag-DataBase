import { Router } from 'express'

import ItemController from './app/controllers/ItemController'

const routes = new Router()

routes.post('/itens', ItemController.store )
routes.get('/itens', ItemController.index )
routes.delete('/itens/:id', ItemController.delete);
routes.put('/itens/:id', ItemController.update);


export default routes