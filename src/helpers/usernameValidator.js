export function usernameValidator(username) {
  if (!username || username.length <= 0) return "Username can't be empty.";
  return "";
}
