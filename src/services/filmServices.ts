import request from "../../request/request";
export async function getFilms(category:any) {
    try {
        const res = request.get(`/upcoming?q=${category}`);
        return {
            success:true,
            data: (await res).data
        }
        
    } catch (error) {
        return {
            success:false,
            data:undefined
        }
        
    }
}