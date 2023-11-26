import jwt, { Secret } from 'jsonwebtoken';

const JWT_SECRET_KEY: Secret | undefined = process.env.JWT_SECRET_KEY;

const generateToken = (email: string): string => {
  if (!JWT_SECRET_KEY) {
    throw new Error('JWT_SECRET_KEY is not defined');
  }

  const token = jwt.sign({ email }, JWT_SECRET_KEY, { expiresIn: '1h' });
  return token;
};

export default generateToken;
