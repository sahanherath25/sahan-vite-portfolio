// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';

const styles={
    border:"1px solid red",
    color:"whitesmoke"
}


export default () => {
    return (
        <Swiper
            // style={styles}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            style={{ width: "80%", margin: "0 auto" }}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    );
};