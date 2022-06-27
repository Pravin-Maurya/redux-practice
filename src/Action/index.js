export const incNumber = (number)=>{
    return{
        type: "INCREMENT",
        payload: number
    }
}

export const decNumber = (number)=>{ 
    return{
        type: "DECREMENT",
        payload: number
    }
 }