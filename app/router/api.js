import Router from '@koa/router'
import fsController from '../controller/fsController.js'

const router = new Router()
  .get('/:type/:filename', fsController.getFile)
  .get('/:type/:username/:filename', fsController.getFile)
  .post('/:type/:filename', fsController.setFile)
  .post('/:type/:username/:filename', fsController.setFile)
  .delete('/:type/:filename', fsController.deleteFile)
  .delete('/:type/:username/:filename', fsController.deleteFile)
  .patch('/:type/:username/:filename', fsController.moveFile)
  .put('/:type/:filename', fsController.updateFile)
  .put('/:type/:username/:filename', fsController.updateFile)

export default router
