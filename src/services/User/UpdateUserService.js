const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async execute(id, name, email) {
    const userBeingUpdated = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!userBeingUpdated) {
      throw new Error("Usuário não encontrado");
    }

    if (!name) {
      throw new Error("O nome informado é inválido");
    }

    const emailAlreadyExists = await prisma.user.findFirst({
      where: { email: String(email) },
    });

    if (emailAlreadyExists) {
      if (emailAlreadyExists.id != userBeingUpdated.id)
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
