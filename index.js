"use strict";
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
// const bodyParser = require("body-parser");
const { Logger, tampilkan } = require("./src/lib");
const cors = require("cors");
const bearerToken = require("express-bearer-token");
app.use(bearerToken());
require("dotenv").config();
//? req --> middleware -->
app.use(cors());
//? untuk tempat middleware diakses semua endpoint
app.use(Logger);
//!  boleh body parser || boleh express
//? parse form data berguna untuk upload file /
app.use(express.urlencoded({ extended: false }));
//? parsing data dari json ke js untuk buat req.body ada juga buat parsing pada asaat axios/fetch di front end
app.use(express.json());
//? menyediakan file statis
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const html = await tampilkan("./src/content/index.html");
    // console.log(html);
    res.status(200).send(html);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.get("/coba", (req, res) => {
  res.set("coba", "tesaja"); //header request
  res.status(200).send({ coba: "ddd" });
});

const {
  usersRoutes,
  hashRoutes,
  AuthRoutes,
  ProductRoutes,
} = require("./src/route");

app.use("/users", usersRoutes);
app.use("/products", ProductRoutes);
app.use("/auth", AuthRoutes);
app.use("/hashrouter", hashRoutes);

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(PORT, () => console.log("listen in PORT " + PORT));
