const express = require("express");
const prisma = require("@prisma/client");
const updateUserService = require("../../services/User/UpdateUserService");

module.exports = {
  async handle(request, response) {
    const { id, name, email } = request.body;

    const user = await updateUserService.execute(id, name, email);

    return response.json(user);
  },
};
