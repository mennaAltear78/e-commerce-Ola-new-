import Cookies from "universal-cookie";
const cookies=new Cookies()
class CookieService{
//set cookies
set(name ,value ,options){//options when you want to set cookies when it will expire
  return cookies.set(name ,value ,options)
}
//get cookies
get(name){
    return cookies.get(name)
}
//remove cookies
  remove(name){
    return cookies.remove(name)
  }
}


export default new CookieService() // which mean that dont need to make instance of CookieService class every time 