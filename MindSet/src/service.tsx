import axios from "axios";
import { TIMEOUT } from "dns";


const config =axios.create({
    baseURL:'https://dummyjson.com/',
    timeout :1500,
    

})
export const login = (username:string,password:string) => {
    const sendObj = {
      username:username,
        password:password
    }
    return config.post('auth/login',sendObj)


}


