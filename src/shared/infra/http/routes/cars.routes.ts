import { Router } from 'express';
import multer from 'multer';

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { CreateCarSpecificationController } from '@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController';
import { ListAvailableCarsController } from '@modules/cars/useCases/listAvailableCars/ListAvailableCarsController';
import { UploadCarImagesController } from '@modules/cars/useCases/uploadCarImages/UploadCarImagesController';

import uploadConfig from '../../../../config/upload';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthentication } from '../middlewares/ensureAuthentication';

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarsSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();

const upload = multer(uploadConfig);

carsRoutes.post('/', ensureAuthentication, ensureAdmin, createCarController.handle);

carsRoutes.get('/available', listAvailableCarsController.handle);

carsRoutes.post(
  '/specifications/:id',
  ensureAuthentication,
  ensureAdmin,
  createCarsSpecificationController.handle,
);

carsRoutes.post(
  '/images/:id',
  ensureAuthentication,
  ensureAdmin,
  upload.array('images'),
  uploadCarImagesController.handle,
);

export { carsRoutes };
