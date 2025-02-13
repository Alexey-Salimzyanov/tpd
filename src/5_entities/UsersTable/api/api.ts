import { $api } from "6_shared/api/api";
import { User } from "../model/types/User/User";

export const getUsers = async ()=>{
    const {data} = await $api.get('users')
    return data
}

export const changeUser = async (user: User)=>{  
    const {data} = await $api.put(`users/${user.id}`, {...user})
    return data
}