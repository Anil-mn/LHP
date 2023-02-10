
import {API} from '../backend'

export const login = async (user)=>{
    console.log(user);
  return fetch(`${API}/login`,{
    method:'Post',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
  }).then(res =>{
    return res.json();
  }).catch(console.log("Error"))
}