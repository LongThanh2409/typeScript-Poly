import { SigninForm } from "../interfaces/auth";
import instance from "./config";
const Login_user = (user: SigninForm) => {
    return instance.post('/athu/user_login', user)
}
const Sig_nup = (user: SigninForm) => {
    return instance.post('/athu/user_sigup', user)
}
const Get_user = () => {
    return instance.get('/users')
}
export { Login_user, Sig_nup, Get_user }