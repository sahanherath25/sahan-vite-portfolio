import supabase from "./supabase.js";

export const getUserData = async () => {

    let {data:cabins,error}=await supabase.from("users").select("*").single()

    if (error) {
        console.error("ERROR ", error)
        throw new Error("Cabins are Not Loading Due to Error")
    }
    return cabins


}

