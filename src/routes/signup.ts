import Router from "@koa/router";
import handleSignup from "../handlers/handleSignup.ts";

const signupRouter = new Router();
signupRouter.post("/signup", handleSignup);

export default signupRouter;
