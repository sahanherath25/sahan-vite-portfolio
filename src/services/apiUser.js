import supabase from "./supabase.js";

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

