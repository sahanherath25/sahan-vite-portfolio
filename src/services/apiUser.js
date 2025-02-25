import supabase from "./supabase.js";
import axios from "axios";

// export const getUserData = async () => {
//
//     let {data:cabins,error}=await supabase.from("users").select("*").single()
//
//     if (error) {
//         console.error("ERROR ", error)
//         throw new Error("Cabins are Not Loading Due to Error")
//     }
//     return cabins
//
// }

export const fetchUserData=async ()=>{

    const {data:userData,error}=await supabase.from("projects").select("*")


    if (error) {
        console.error("ERROR ", error)
        throw new Error("Cabins are Not Loading Due to Error")
    }

    return userData

}

export const fetchUserDataForHome=async ()=>{

    const {data:userData,error}=await supabase.from("users").select("bio_description_p1,bio_description_p2,bio_description_p3").single()

    if (error) {
        console.error("ERROR ", error)
        throw new Error("Cabins are Not Loading Due to Error")
    }

    return userData

}


export const getNewsData=async ()=>{

    const response=await axios.get("http://127.0.0.1:3000/api/v1/tours")
    const data=response.data.tours;
    console.log("MY D TA ",data)

    return response;

}

export const myApiTours=async ()=>{

    try{
        const response=await axios.get("http://localhost:3000/api/v1/tours");
        const data=response.data.data.tours;

        console.log("OBJECT SHAPE ",response.data)
        return data
    }catch (e) {
        console.log("ERROR ",e.message)

    }
}

