import { Users } from "../models/Users";
import bcrypt from "bcrypt";
import { SignupDTO } from "../dtos/auth.dtos";
class AuthService {
  public async signup(data: SignupDTO): Promise<any> {
    const user = await Users.findOne({ where: { email: data.email } });
    if (user) {
      throw { status: 409, message: "User already exists!" };
    }

    const newPassword = await bcrypt.hash(data.password, 10);
    const newUser = await Users.create({
      email: data.email,
      name: data.name,
      password: newPassword,
    });
    console.log(newUser);
    return newUser;
  }
}

export default AuthService;
