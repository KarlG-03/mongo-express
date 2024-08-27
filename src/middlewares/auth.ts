import jwt from 'jsonwebtoken';
import User, { TUser } from '../models/User';
import { Request, Response, NextFunction } from 'express';
import { createGeneralError } from '../errors/CustomError';

const protect = async (req: Request, res: Response, next: NextFunction) => {
  let token;
  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) return res.json(createGeneralError());

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, JWT_SECRET);

      const decodedIsString = typeof decoded === 'string';
      const res = await User.findById(decodedIsString ? decoded : decoded.id).select('-password');
      if (res) {
        console.log(res);
        req.user = { id: res.id };
      }

      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

export { protect };
