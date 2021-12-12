import express from "express";
import { remove, see, editUser, logout } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", editUser);
userRouter.get("/remove", remove);
userRouter.get("/:id(\\d+)", see);

export default userRouter;
