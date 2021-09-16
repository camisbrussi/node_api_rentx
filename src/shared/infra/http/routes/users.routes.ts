import { ProfileUserController } from '@modules/accounts/useCases/profileUser/ProfileUserController';
import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../../../../config/upload';
import { CreateUserController } from '../../../../modules/accounts/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '../../../../modules/accounts/useCases/UpdateUserAvatar/UpdateUserAvatarController';
import { ensureAuthentication } from '../middlewares/ensureAuthentication';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const profileUserController = new ProfileUserController();

usersRoutes.post('/', createUserController.handle);
usersRoutes.patch('/avatar',
  ensureAuthentication,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle);
usersRoutes.get('/profile', ensureAuthentication, profileUserController.handle);

export { usersRoutes };
