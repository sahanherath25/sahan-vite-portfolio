import {Pagination, Navigation, Autoplay, EffectFade} from "swiper/modules";

// Define Swiper options separately
export const swiperOptions = {
    pagination: { clickable: true },
    navigation: true,
    modules: [Pagination, Navigation,Autoplay ],
    spaceBetween: 50,
    slidesPerView: 3,
    loop:true,
    autoplay: {
        delay: 800, // Delay between slides (in ms)
        disableOnInteraction: true, // Keep autoplay running after user interaction
    },
    effect: ""

};