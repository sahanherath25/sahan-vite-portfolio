import axios from "axios";

const API_KEY="0ea73a8feb8c4826b1866ce5b28fd12f"

export const getNewsData=async ()=>{


    try{
        const response=await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
        console.log("NEWS data response",response)

        const data=response.data.articles
        return data
    }catch (e) {

        console.log("ERROR ",e)

    }



}