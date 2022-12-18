const deleteUserService = require("../../services/User/DeleteUserService");

module.exports = {
  async handle(request, response) {
    const id = request.params.id;

    const user = await deleteUserService.execute(id);

    return response.json(user);
  },
};
