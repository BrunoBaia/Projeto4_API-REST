"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Alunojs = require('../models/Aluno.js'); var _Alunojs2 = _interopRequireDefault(_Alunojs);
var _Fotojs = require('../models/Foto.js'); var _Fotojs2 = _interopRequireDefault(_Fotojs);

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await _Alunojs2.default.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Fotojs2.default, 'id', 'DESC']],
        include: {
          model: _Fotojs2.default,
          attributes: ['url', 'originalname', 'filename']
        }
      });
      return res.json(alunos);
    } catch (e) {
      return res.status(404).json({ errors: ['Algo deu errado...'] });
    }
  }

  async store(req, res) {
    try {
      const newAluno = await _Alunojs2.default.create(req.body);
      const { id, nome, sobrenome, email } = newAluno;
      return res.json({ id, nome, sobrenome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map(err => err.message) });
    }
  }

  async show(req, res) {
    try {
      const aluno = await _Alunojs2.default.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [[_Fotojs2.default, 'id', 'DESC']],
        include: {
          model: _Fotojs2.default,
          attributes: ['url', 'originalname', 'filename']
        }
      });

      if (!aluno) {
        return res.status(400).json({ errors: ['Usuario nao existe'] });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map(err => err.message) });
    }
  }

  async update(req, res) {
    try {
      const aluno = await _Alunojs2.default.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({ errors: ['Aluno nao existe'] });
      }

      const alunoUpdate = await aluno.update(req.body);
      const { id, nome, sobrenome, email } = alunoUpdate;
      return res.json({ id, nome, sobrenome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map(err => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const aluno = await _Alunojs2.default.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({ errors: ['Aluno nao existe'] });
      }

      await aluno.destroy();
      return res.json({ result: [`O aluno '${aluno.nome} ${aluno.sobrenome}' foi excluido com sucesso`] });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ errors: e.errors.map(err => err.message) });
    }
  }
}

exports. default = new AlunoController();
