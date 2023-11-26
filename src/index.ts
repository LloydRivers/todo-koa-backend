import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import signupRouter from './routes/signup.ts';
import loginRouter from './routes/login.ts';

const app = new Koa();
app.use(bodyParser());
app.use(signupRouter.routes());
app.use(loginRouter.routes());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
