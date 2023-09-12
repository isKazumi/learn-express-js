import express from "express";
import {
  getAllUsers,
  createUser,
  delletUser,
  editUser,
  updataUser,
} from "../controller/user.js";

const route = express.Router();

route.get("/", getAllUsers);

route.post("/", createUser);

route.delete("/:user_id", delletUser);

route.patch("/", editUser);

route.put("/:user_id", updataUser);

export default route;
