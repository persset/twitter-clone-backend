const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async execute() {
    async function main() {
      const users = await prisma.user.findMany();

      return users;
    }

    return main()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect;
      });
  },
};
