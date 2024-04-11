import * as CryptoJS from 'crypto-js';
//const secretKey = process.env.REACT_APP_SECRET_KEY ? process.env.REACT_APP_SECRET_KEY : '12345'
const secretKey = '12345'
export const encrypt = async (plainText: any) => {
  const cipherText = CryptoJS.AES.encrypt(
    JSON.stringify(plainText),
    secretKey
  ).toString();
  return cipherText;
}

export const decrypt = async (cipherText: any) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}