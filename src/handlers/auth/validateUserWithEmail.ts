import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

const validateUserWithEmail = async (email: string): Promise<User | null> => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  return user;
};

export default validateUserWithEmail;
