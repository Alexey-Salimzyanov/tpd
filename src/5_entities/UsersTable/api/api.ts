import { $api } from "6_shared/api/api";

export const getUsers = async ()=>{
    const {data} = await $api.get('users')
    return data
}