import express from 'express';
import * as controller from '../controller/picturesController.js';

const router = express.Router();

router.get('/pictures', controller.getPictures);
router.post('/insert', controller.postPictures);

export default router;
