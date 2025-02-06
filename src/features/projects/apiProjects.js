import axios from "axios";

const API_KEY =import.meta.env.NEWS_API;
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