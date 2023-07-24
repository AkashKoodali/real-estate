import asyncHandler from "express-async-handler";

export const createUser = asyncHandler(async (req, res) => {
  let { email } = req.body;

  console.log(email);
});
