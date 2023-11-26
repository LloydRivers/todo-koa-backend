import bcrypt from 'bcrypt';

const comparePassword = async (enteredPassword: string, hashedPassword: string): Promise<boolean> => {
  try {
    const isValidPassword = await bcrypt.compare(enteredPassword, hashedPassword);
    return isValidPassword;
  } catch (error) {
    throw new Error('Error comparing passwords');
  }
};

export default comparePassword;
