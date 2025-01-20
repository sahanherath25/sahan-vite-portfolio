import supabase from "../../services/supabase.js";

const getProjectData = async () => {

    let {data: projects, error} = await supabase
        .from('projects')
        .select('*').single()

    if (error) {
        console.error("ERROR ", error)
        throw new Error("Cabins are Not Loading Due to Error")
    }

    return {projects}

}

export default getProjectData