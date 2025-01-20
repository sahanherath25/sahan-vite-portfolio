import axios from "axios";

export const fetchTours =async () => {

    const response=await axios.get("http://127.0.0.1:3030/api/v1/tours")
    console.log("USERS DATA RESPONSE ",response)

    return response.data.data.tours

}




