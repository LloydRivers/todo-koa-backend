import { Context } from 'koa';
import hasMessage from '../../helpers/hasMessage.ts';
import loginValidator from '../../validator/login-validator.ts';
import validateUserWithEmail from '../../handlers/auth/validateUserWithEmail.ts';
import comparePassword from '../../helpers/comparePassword.ts';
import generateToken from '../../handlers/auth/generateToken.ts';

const handleLogin = async (ctx: Context) => {
  try {
    const data = loginValidator.parse(ctx.request.body);
    const user = await validateUserWithEmail(data.email);

    if (!user || !(await comparePassword(data.password, user.password))) {
      ctx.status = 401;
      ctx.body = { error: 'Invalid credentials' };
      return;
    }

    const token = generateToken(data.email);

    ctx.status = 200;
    ctx.body = { message: 'Login successful!', token };
  } catch (error) {
    if (hasMessage(error)) {
      console.error('Validation Error:', error.message);
      ctx.status = 400;
      ctx.body = { error: 'Invalid request data' };
    } else {
      console.error('Unhandled Error:', error);
      ctx.status = 500;
      ctx.body = { error: 'Internal server error' };
    }
  }
};

export default handleLogin;
