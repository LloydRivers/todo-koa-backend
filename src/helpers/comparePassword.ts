import bcrypt from "bcrypt";

export const comparePassword = async (
  enteredPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  try {
    const isValidPassword = await bcrypt.compare(
      enteredPassword,
      hashedPassword
    );
    return isValidPassword;
  } catch (error) {
    throw new Error("Error comparing passwords");
  }
};
