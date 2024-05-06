import { Router } from 'express';

import loginRequired from '../middlewares/loginRequired'
import fotoController from '../controllers/FotoController';

const router = new Router();

router.post('/', loginRequired, fotoController.store);

export default router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
