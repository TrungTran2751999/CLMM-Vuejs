import { baseController } from "./BaseController";
import { util } from "./Util";
function getKhConNo(body){
    const api = `${process.env.VUE_APP_API_URL}${process.env.VUE_APP_GET_KH_CON_NO}`
    const headers = {
        "Authorization": `Bearer ${util.checkJWTToken()}`,
        "Content-Type": "application/json"
    }
    
    return baseController.postData(api, undefined, headers, body)
}
function searchDuongPho(hint){
    const api = `${process.env.VUE_APP_API_URL}${process.env.VUE_APP_GET_ALL_DUONG_PHO}`
    const params = {hint}
    const headers = {"Authorization": `Bearer ${util.checkJWTToken()}`}
    return baseController.getData(api, params, headers)
}
function searchKhuVuc(hint){
    const api = `${process.env.VUE_APP_API_URL}${process.env.VUE_APP_GET_ALL_KHU_VUC}`
    const params = {hint}
    const headers = {"Authorization": `Bearer ${util.checkJWTToken()}`}
    return baseController.getData(api, params, headers)
}
const homeController = {
    getKhConNo,
    searchDuongPho,
    searchKhuVuc
}
export {homeController}