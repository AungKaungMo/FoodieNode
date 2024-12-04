import bcrypt from "bcrypt";

export const GenerateHashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
};
