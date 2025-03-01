import {useEffect} from "react";
import initAOS from "../aos/aos";
import AOS from "aos";
const Wave=({dataAOS})=>{


    useEffect(() => {
        AOS.refresh();
    }, []);

    return(
        <div className="wave" style={{
            border:"1px solid red",
        }} data-aos={dataAOS}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#001220" fillOpacity="1" d="M0,160L18.5,176C36.9,192,74,224,111,245.3C147.7,267,185,277,222,240C258.5,203,295,117,332,69.3C369.2,21,406,11,443,42.7C480,75,517,149,554,192C590.8,235,628,245,665,240C701.5,235,738,213,775,192C812.3,171,849,149,886,117.3C923.1,85,960,43,997,26.7C1033.8,11,1071,21,1108,64C1144.6,107,1182,181,1218,208C1255.4,235,1292,213,1329,202.7C1366.2,192,1403,192,1422,192L1440,192L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path>
            </svg>
        </div>
    )
}

export default Wave