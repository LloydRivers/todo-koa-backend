import Router from "@koa/router";
import signupValidator from "../validator/signup-validator.ts";
import hasMessage from "../helpers/hasMessage.ts";

const signupRouter = new Router();

signupRouter.post("/signup", async (ctx) => {
  try {
    const data = signupValidator.parse(ctx.request.body);
    ctx.body = { message: "Signup successful!", data };
    ctx.status = 201;
  } catch (error) {
    if (hasMessage(error)) {
      console.error("Validation Error:", error.message);
      ctx.status = 400;
      ctx.body = { error: "Invalid request data" };
    } else {
      console.error("Unhandled Error:", error);
      ctx.status = 500;
      ctx.body = { error: "Internal server error" };
    }
  }
});

export default signupRouter;
