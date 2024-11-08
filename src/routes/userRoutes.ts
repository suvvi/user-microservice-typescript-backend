import { Router, Request, Response } from 'express';
import User, { IUser } from '../models/userModel';

const router = Router();



function isError(err: unknown): err is Error {
  return err instanceof Error;
}

// Get all users
router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    if (isError(err)) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
});



// Create a new user
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    const savedUser = await newUser.save();
    res.status(201).json({ insertedId: savedUser._id });
  } catch (err) {
    if (isError(err)) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
});
export default router;
