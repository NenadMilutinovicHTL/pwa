import express from 'express';
import * as controller from '../controller/picturesController.js';

const router = express.Router();

router.get('/', controller.getPictures);
router.post('/', controller.postPictures);
router.delete('/:id', controller.deletePictures);
router.patch('/:id', controller.updatePictures);

export default router;
