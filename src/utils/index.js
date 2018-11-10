const POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const generateToken = () => {
  let token = '', i;
  for (i = 0; i < 7; i++) {
    token += POOL.charAt(Math.floor(Math.random() * POOL.length));
  }
  return token;
};
