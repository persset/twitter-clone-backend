const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async execute(id) {
    const userBeingDeleted = await prisma.user.findUnique({
      where: { id: Number(id) },
    });

    if (!userBeingDeleted) {
      throw new Error("Usuário não encontrado");
    }

    async function main() {
      const user = await prisma.user.delete({
        where: { id: Number(id) },
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
