import { Request, Response } from 'express';
import User from '../models/User';

const getUserProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('req.user', req.user);
    if (req.user) {
      const user = await User.findById(req.user.id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } else {
      res.status(401).json({ message: 'User not authenticated' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: error });
    }
  }
};

export { getUserProfile };
