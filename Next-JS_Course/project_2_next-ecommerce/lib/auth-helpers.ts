// Server-only helper functions for authentication
// These run in Node.js runtime ONLY - never in Edge Runtime

import bcrypt from "bcryptjs";

export async function hashPassword(password: string) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

export async function comparePasswords(
  password: string,
  hashedPassword: string,
) {
  return await bcrypt.compare(password, hashedPassword);
}
