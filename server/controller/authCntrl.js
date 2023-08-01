import asyncHandler from "express-async-handler";

import { prisma } from "../config/prismaConfig.js";

import jwt from "jsonwebtoken";

import bcrypt from "bcryptjs";

export const createUser = asyncHandler(async (req, res) => {
  console.log("creating a user");

  let { email, password, name } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("You must provide an email and a password.");
  }

  const salt = bcrypt.genSaltSync(10);

  password = bcrypt.hashSync(req.body.password, salt);

  const userExists = await prisma.user.findUnique({
    where: { email: req.body.email },
  });

  if (!userExists) {
    const user = await prisma.user.create({
      data: { email, password, name },
    });
    res.send({
      message: "User registered successfully",
      user: user,
    });
  } else res.status(201).send({ message: "User already registered" });
});

export const loginUser = asyncHandler(async (req, res) => {
  console.log("user login");

  let { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("You must provide an email and a password.");
  }

  const user = await prisma.user.findUnique({
    where: { email: req.body.email },
  });

  if (!user)
    res.status(400).json({
      message: "User not found",
    });

  const isCorrect = await bcrypt.compare(password, user.password);

  if (!isCorrect) {
    return res.status(400).json({ message: "Wrong Credentials!" });
  } else {
    const token = jwt.sign({ id: user._id }, process.env.JWT);

    const { password, ...other } = user;
    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...other, token: token });
  }
});
