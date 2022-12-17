import { Request, Response } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";

class CreateUserController {
  async handle(request, response) {
    const { username, name, email, password } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      username,
      name,
      email,
      password,
    });

    return response.json(user);
  }
}

export { CreateUserController };
