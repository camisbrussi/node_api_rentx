import { Router } from 'express';

import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/createSpecificationController';
import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';
import { ensureAuthentication } from '@shared/infra/http/middlewares/ensureAuthentication';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post(
  '/',
  ensureAuthentication,
  ensureAdmin,
  createSpecificationController.handle,
);

export { specificationRoutes };
