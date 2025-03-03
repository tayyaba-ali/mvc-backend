import userSchema from "../schema/userSchema.js";
import { nanoid } from "nanoid";
let users = [];

const getAllUsers = (req, res) => {
  console.log("arhe ha req");
  try {
    res.send(users);
  } catch (e) {
    console.log(e);
  }
};

const createUser = async (req, res) => {
  try {
    const value = await userSchema.validateAsync(req.body);

    let user = { ...req.body, id: nanoid() };
    users.push(user);

    res.status(201).json("user created successfully");
    console.log(value);
  } catch (error) {
    res.status(500).json({
      error: error?.details,
    });
  }
};

const deleteUser = (req, res) => {
  try {
    const { id } = req.params;

    let index = users.findIndex((user) => user.id == id);
    users.splice(index, 1);

    res.send({
      deletedId: id,
      message: "user deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = (req, res) => {
  try {
    const { id } = req.params;

    let index = users.findIndex((user) => user.id == id);
    users.splice(index, 1, { ...req.body, id: id });

    res.send({
      updatedUser: id,
      message: "user updated successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
const getUser = (req, res) => {
  try {
    const { id } = req.params;
    let foundUser = users.find((obj) => obj.id == id);

    res.send({
      user: foundUser,
      message: "user found successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export { getAllUsers, updateUser, deleteUser, getUser, createUser };
