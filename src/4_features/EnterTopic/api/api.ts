import { $api } from "6_shared/api/api";


export const getHFD = async ()=>{
	const {data} = await $api.get('HFD')
	return data
}

export const changeHFD = async (hfd: any)=>{  
	const {data} = await $api.put(`HFD/${hfd.id}`, {...hfd})
	console.log('data from api', data);
	
	return data
}