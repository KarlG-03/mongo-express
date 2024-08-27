import jwt from 'jsonwebtoken';

const generateToken = (id: string, expire: string = '30d') => {
  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) throw new Error('Missing JWT_SECRET');
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: expire,
  });
};

export { generateToken };
