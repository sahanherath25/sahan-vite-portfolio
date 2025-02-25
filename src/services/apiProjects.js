import supabase from "./supabase.js";

export const fetchProjectOverView=async ()=>{

    const {data,error}=await supabase.from("project-overview").select("*").single();

    if(error){
        throw new Error("Error "+error)
    }

    return data

}