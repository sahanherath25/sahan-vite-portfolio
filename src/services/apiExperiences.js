import supabase from "./supabase.js";

export const getExperiences=async ()=>{

    const {data,error}=await supabase.from("experience").select("*").single();

    if (error) {
        console.error("ERROR ", error)
        throw new Error("Cabins are Not Loading Due to Error")
    }

    return data

}