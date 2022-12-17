const ReflectMetadata = require("reflect-metadata");
const express = require("express");

const router = require("./routes");

const app = express();

app.use(express.json());

app.use(router);

app.use((err, request, response, nextFunc) => {
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
