const createUserService = require("../../services/User/CreateUserService");

module.exports = {
  async handle(request, response) {
    const { username, name, email, password } = request.body;

    const user = await createUserService.execute(
      username,
      name,
      email,
      password
    );

    return response.json(user);
  },
};
