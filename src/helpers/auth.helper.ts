import jwt_decode from "jwt-decode";
export function getDecodedTokenUser() {
  const token = window.localStorage.getItem('token');
  if (token) {
    let decoded: any = jwt_decode(token);
    return decoded.user;
  }
  return null;
}