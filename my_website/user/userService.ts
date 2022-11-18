import { api } from '../services/servicesHelper';

export const fetchUser = async () =>{
    return await api.get("/user/")
  }

//   .then((Response) =>{
//     console.log(Response.data);
// })