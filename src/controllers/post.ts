import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

type UserData = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const saveUserDataToDatabase = async (data: UserData) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        id: uuidv4(),
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: data.password,
      },
    });
    return newUser;
  } catch (error) {
    console.error("Unhandled Error:", error);
    throw error; // Rethrow the error to be caught by the caller
  }
};

export default saveUserDataToDatabase;
