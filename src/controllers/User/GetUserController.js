const getUserService = require("../../services/User/GetUserService");

module.exports = {
  async handle(request, response) {
    const id = request.params.id;

    const user = await getUserService.execute(id);

    return response.json(user);
  },
};
