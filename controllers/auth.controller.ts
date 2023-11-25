import { SignupDTO } from "../dtos/auth.dtos";
import { Request, Response, NextFunction } from 'express';
import AuthService from "../services/auth.service";
class AuthController
{
    public authservice = new AuthService();
    public signup = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData: SignupDTO = req.body;
            const data = await this.authservice.signup(userData);
            res.status(200).json({ message: 'User Created!', data });
            console.log(data);
        } catch (error: any) {
            res.status(error.status ?? 500).json({ message: error.message ?? 'Something went wrong...' });
        }
    };
}

export default AuthController;