// routers/routers.js
import express from 'express';
import cors from 'cors';
import { insertSignUpPublisherDataFromFront, insertPic, fetchSignedPublisherData, insertSignUpClientDataFromFront, logPic, checkPic } from '../controllers/controllers.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

router.post('/api/endpoints/sendPublisherSignUpData', cors(), insertSignUpPublisherDataFromFront);
router.post('/api/endpoints/sendClientSignUpData', cors(), insertSignUpClientDataFromFront);
router.post('/api/endpoints/picture', cors(), logPic);
router.post('/api/endpoints/insertPic', cors(),upload.single('picture'),  insertPic); // Apply multer middleware here
router.get('/api/endpoints/getAllSignedPublisherData', fetchSignedPublisherData);

export default router;
