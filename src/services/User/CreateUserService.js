const { PrismaClient } = require("@prisma/client");
const hash = require("bcryptjs");

const prisma = new PrismaClient();

module.exports = {
  async execute(username, name, email, password) {
    if (!name) {
      throw new Error("O nome informado é inválido");
    }

    const usernameAlreadyExists = await prisma.user.findFirst({
      where: {
        username: String(username),
      },
    });

    if (usernameAlreadyExists) {
      throw new Error("O nome de usuário informado já foi selecionado!");
    }

    const emailAlreadyExists = await prisma.user.findFirst({
      where: {
        email: String(email),
      },
    });

    if (emailAlreadyExists) {
      throw new Error("O email informado já está cadastrado!");
    }

    async function main() {
      const passwordHash = await hash.hash(password, 8);
      const user = await prisma.user.create({
        data: {
          username,
          name,
          email,
          password: String(passwordHash),
        },
      });

      return user;
    }

    return main()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  },
};
