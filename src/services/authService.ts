import {Database, token} from 'midgar';

// // Check if the user exists in database (matching username and password) which we'll say is good enough to be authenticated.
const authenticate = async (username: string, password: string): Promise<string|boolean> => {
  try {
    const response = await Database.select(`
    SELECT idt_id_patient FROM identifiants
      WHERE idt_connexion = ?
        AND idt_password = ?
  `, [username, password]);
  return Promise.resolve(response.length > 0 ? token.createToken({username, password}) : false);
  } catch (e) {
    return Promise.reject(e);
  }
}

const register = async (args: any): Promise<string|boolean> => {
  const {
    username,
    password
  } = args;

  try {
    const exist = await Database.select(`
    SELECT idt_id_patient FROM identifiants
      WHERE idt_connexion = ?
    `, [username]);

    if (exist.length > 0) return Promise.reject(`registerFault( User "${username}" already exists. )`);
    const idt_token = token.createToken({username, password});
    // const value = await Database.insert('identifiants',
    // {
    //   idt_connexion: username,
    //   idt_password: password,
    //   idt_token
    // })
    const value = await Database.insert('identifiants', [username, password, idt_token]);
    return Promise.resolve(idt_token);
  } catch (e) {
    Promise.reject(e);
  }
}

export default {
  authenticate,
  register
};