import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '@modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '@modules/cars/useCases/importCategory/ImportCategoryController';
import { ListCategoriesController } from '@modules/cars/useCases/listCategories/ListCategoriesController';
import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';
import { ensureAuthentication } from '@shared/infra/http/middlewares/ensureAuthentication';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryControlle = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post(
  '/',
  ensureAuthentication,
  ensureAdmin,
  createCategoryControlle.handle,
);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  ensureAuthentication,
  ensureAdmin,
  importCategoryController.handle,
);

export { categoriesRoutes };
