import { SigninForm } from "../interfaces/auth";
import instance from "./config";
const Login_user = (user: SigninForm) => {
    return instance.post('/athu/user_login', user)
}
export { Login_user }