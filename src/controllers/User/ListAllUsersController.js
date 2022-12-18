const listAllUsersService = require("../../services/User/ListAllUsersService");

module.exports = {
  async handle(request, response) {
    const users = await listAllUsersService.execute();

    return response.json(users);
  },
};
