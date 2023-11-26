import Router from '@koa/router';
import handleLogin from '../handlers/auth/handleLogin.ts';

const loginRouter = new Router();
loginRouter.post('/login', handleLogin);

export default loginRouter;
