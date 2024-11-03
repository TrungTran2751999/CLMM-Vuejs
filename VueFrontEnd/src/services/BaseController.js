
function getData(api, params, headers){
    let paramStr = "";
    if(params!=null){
        for (const [key, value] of Object.entries(params)) {
            paramStr+=`&${key}=${value}`;
        }
    }
    api = `${api}?${paramStr}`
    const paramGET = {
        method:"GET",
        headers:headers
    }
    const fetchAll = async ()=>{
        try{
            const res = await fetch(`${api}`, paramGET)
            if(!res.ok) return []
            return res.json()
        }catch(e){
            return []
        }
    }
    return fetchAll()
}
function postData(api, params, headers, body){
    for (let key of Object.keys(body)) {
        if(typeof(body[key])=="string"){
            body[key] = body[key].trim()
        }
    }
    body = JSON.stringify(body)
    let paramStr = "";
    if(params!=null){
        for (const [key, value] of Object.entries(params)) {
            paramStr+=`&${key}=${value}`;
        }
    }
    api = `${api}`
    const paramPOST = {
        method:"POST",
        headers:headers,
        body: body
    }
    const fetchAll = async ()=>{
        try{
            const res = await fetch(`${api}`, paramPOST)
            if(!res.ok) return []
            return res.json()
        }catch(e){
            return []
        }
    }
    return fetchAll()
}
const baseController = {
    getData,
    postData
}
export {baseController}
