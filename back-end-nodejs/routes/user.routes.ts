import { Router, Request, Response } from 'express';
import { updateUser, findById, deleteUserById,saveUserData,getAllUsers } from '../services/user.service';

const router = Router();

router.post('/users', (req: Request, res: Response) => {
  saveUserData(req, res);
});
router.put('/users/:id', (req: Request, res: Response) => {
  updateUser(req, res);
});
router.get('/users', (req: Request, res: Response) => {
  getAllUsers(req, res);
});
router.delete('/users/:id', (req: Request, res: Response) => {
  deleteUserById(req, res);
});
router.get('/users/:id', (req: Request, res: Response) => {
  findById(req, res);
});
export = router