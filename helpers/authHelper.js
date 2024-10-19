import { hashPassword, comparePassword } from '../helpers/authHelper.js';

// Example usage in a registration controller
const register = async (req, res) => {
  const { password } = req.body;
  const hashedPassword = await hashPassword(password);
  
  // Save the hashed password to your database
};

// Example usage in a login controller
const login = async (req, res) => {
  const { password, storedHashedPassword } = req.body; // Assuming you fetched the stored hash from the DB
  const isMatch = await comparePassword(password, storedHashedPassword);
  
  if (isMatch) {
    // Proceed with login
  } else {
    // Handle incorrect password
  }
};

export { register, login };
  