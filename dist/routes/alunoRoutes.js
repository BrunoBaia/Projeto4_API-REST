"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AlunoControllerjs = require('../controllers/AlunoController.js'); var _AlunoControllerjs2 = _interopRequireDefault(_AlunoControllerjs);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _AlunoControllerjs2.default.index);
router.post('/', _loginRequired2.default, _AlunoControllerjs2.default.store);
router.get('/:id', _AlunoControllerjs2.default.show);
router.put('/:id', _loginRequired2.default, _AlunoControllerjs2.default.update);
router.delete('/:id', _loginRequired2.default, _AlunoControllerjs2.default.delete);

exports. default = router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
