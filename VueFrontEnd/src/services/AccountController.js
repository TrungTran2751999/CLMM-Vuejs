import { baseController } from "./BaseController";
import { util } from "./Util";
function login(body){
    const api = `${process.env.VUE_APP_API_URL}${process.env.VUE_APP_LOGIN}`
    const headers = {
        "Content-Type": "application/json"
    }
    return baseController.postData(api, undefined, headers, body)
}
function logout(){
    util.removeJWTToken();
}   
const accountController = {
    login,
    logout
}
export default accountController