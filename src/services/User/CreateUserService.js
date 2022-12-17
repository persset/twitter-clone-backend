const prisma = require("@prisma/client");

module.exports = {
  async execute(username, name, email, password) {
    if (!name) {
      throw new Error("O nome informado é inválido");
    }

    const emailAlreadyExists = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (emailAlreadyExists) {
      throw new Error("O email informado já está cadastrado!");
    }

    async function main() {
      const user = await prisma.user.create({
        data: {
          username: username,
          name: name,
          email: email,
          password: password,
        },
      });
      return user;
    }

    main()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  },
};
