import { Router } from "express";
import RouterInterface from "../interface/routes.interface";
import AuthController from "../controllers/auth.controller";
class AuthRoutes implements RouterInterface {
  constructor() {
    this.initRouter();
    }
    public authcontroller = new AuthController();
    public router = Router();
         path = '/auth'
    private initRouter() {
        // this.router.get(`${this.path}/test`, (req, res) => {
        //     res.json({ Message: "SUCESS!" });
        // });
        this.router.post(`${this.path}/signup`, this.authcontroller.signup);
    }
}

export default AuthRoutes;
