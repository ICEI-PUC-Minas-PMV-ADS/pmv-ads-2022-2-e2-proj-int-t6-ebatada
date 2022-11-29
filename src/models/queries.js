const getUsers = "SELECT * FROM users";
const getUsersById = "SELECT * FROM users WHERE id = $1";
const checkEmailExists = "SELECT * FROM users s where s.email = $1";
const addUsers =
  "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)";
const removeUsers = "DELETE FROM users WHERE id = $1";
const updateUsers = "UPDATE users SET name = $1 WHERE id = $2";

module.exports = {
  getUsers,
  getUsersById,
  checkEmailExists,
  addUsers,
  removeUsers,
  updateUsers,
};
