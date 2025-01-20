import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import {Pagination, Navigation, EffectCoverflow, Autoplay} from "swiper/modules";
import styled from "styled-components";
import {swiperOptions} from "../features/Swiper/SwiperOptions.js";
import {useEffect} from "react";
import AOSConfig from "../aos/aos.js";


const slides = [
    {id: 1, content: "Slide 1 Content",imgSrc:"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/technologies/react-logo.png"},
    {id: 2, content: "Slide 1 Content",imgSrc:"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/technologies/react-logo.png"},
    {id: 3, content: "Slide 1 Content",imgSrc:"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/technologies/react-logo.png"},
    {id: 4, content: "Slide 1 Content",imgSrc:"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/technologies/react-logo.png"},
    {id: 5, content: "Slide 2 Content",imgSrc:"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/technologies/javascript-logo.png"},
    {id: 6, content: "Slide 3 Content",imgSrc:"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/technologies/python_logo.png"},
    {id: 7, content: "Slide 3 Content",imgSrc:"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/technologies/python_logo.png"},
    {id: 8, content: "Slide 4 Content",imgSrc:"https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/sign/technologies/mongodb-logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0ZWNobm9sb2dpZXMvbW9uZ29kYi1sb2dvLnBuZyIsImlhdCI6MTczNzI2NTk3MiwiZXhwIjoyMDUyNjI1OTcyfQ.CgML2Mz97K1s9mMbV6fAyh3v4EfCHIVvfU8yZyz9jt4"},
];

const SlideContent = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #09122c;
  color: white;
  font-size: 20px;
  border: 1px solid yellowgreen;
  
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`

const StyledSwiper = styled(Swiper)`
  width: 80%;
  height: 400px;
  margin: 0 auto;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s;
    background-color: #f4f4f4;
  }
  .swiper-slide-active {
    transform: scale(1.1);
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #09122c;
  }
`;

const CustomArrow = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.isPrev ? "left: 10px;" : "right: 10px;")}
  &:hover {
    color: yellowgreen;
  }
`;


const SwiperComponent = () => {

    useEffect(() => {
        // initAOS()
        // AOS.init()

        // new AOSConfig()

    })

    // {...swiperOptions}

    return (

        <div style={{ position: "relative" }}>

            {/* Custom Arrows */}
            <CustomArrow className="custom-prev" isPrev>
                -
            </CustomArrow>
            <CustomArrow className="custom-next">
               +
            </CustomArrow>

            <StyledSwiper
                modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
                effect="coverflow"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                grabCursor
                loop
                centeredSlides
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                navigation
                pagination={{ clickable: true }}

            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <SlideContent>
                            <ImageContainer>
                                <Image
                                    src={slide.imgSrc}
                                    alt=""/>
                            </ImageContainer>
                        </SlideContent>
                    </SwiperSlide>
                ))}
            </StyledSwiper>

        </div>

    )
}

export default SwiperComponent