import request from "../../request/request";
export async function getFilms() {
    try {
        const res = request.get("/upcoming");
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