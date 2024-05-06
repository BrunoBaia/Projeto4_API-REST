import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const { password, passwordConfirm } = req.body;
      if (password !== passwordConfirm) {
        return res.status(400).json({
          errors: ["As senhas nao batem"]
        });
      }

      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario nao existe'],
        });
      }

      const newUser = await user.update(req.body);
      const { id, nome, email } = newUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario nao existe'],
        });
      }

      await user.destroy();
      const { nome } = user;
      return res.json({ Result: `Usuario ${nome} foi apagado` });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }
}

export default new UserController();
