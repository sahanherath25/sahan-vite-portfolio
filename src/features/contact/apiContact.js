import supabase from "../../services/supabase.js";

export async function createContactUser(userData) {

    const {data,error}=await supabase.from("contact").insert(userData)


    if(error){
        console.log("ERROR ",error)
        throw new Error("Could not Send Data ")
    }

    return data

}