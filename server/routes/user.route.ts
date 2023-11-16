import express from "express";
import {
  activationUser,
  registrationUser,
} from "../controller/user.controller";
const userRouter = express.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/activation-user", activationUser);

export default userRouter;
