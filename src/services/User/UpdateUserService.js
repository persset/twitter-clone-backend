const { PrismaClient } = require("@prisma/client");
const hash = require("bcryptjs");

const prisma = new PrismaClient();

module.exports = {
  async execute(id, name, email) {
    let userBeingUpdated = prisma.user.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!id || id != userBeingUpdated.id) {
      throw new Error("Usuário não encontrado");
    }

    if (!name) {
      throw new Error("O nome informado é inválido");
    }

    const emailAlreadyExists = await prisma.user.findFirst({
      where: { email: String(email) },
    });

    if (emailAlreadyExists.id != userBeingUpdated.id) {
      throw new Error("O email informado já está sendo utilizado!");
    }

    async function main() {
      const user = await prisma.user.update({
        where: { id: Number(id) },
        data: {
          name: String(name),
          email: String(email),
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
