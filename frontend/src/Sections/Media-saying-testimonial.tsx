import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Controller } from "swiper";
import { Link } from "react-router-dom";

// import { Navigation } from "swiper";
import "swiper/css/navigation";
// import { Thumbs } from "swiper";
// import { Controller } from "swiper";

const TestimonialLogoData = [
    {
        Logo: "testimonial-logo",
        LogoName: "MarketWatch",
    },
    {
        Logo: "testimonial-logo",
        LogoName: "MarketWatch",
    },
    {
        Logo: "testimonial-logo",
        LogoName: "MarketWatch",
    },
    {
        Logo: "testimonial-logo",
        LogoName: "MarketWatch",
    },
]

const TestimonialContentData = [
    {
        TestimonialText: "Sikkaa has, as a reputable and one of the most well-known crypto platforms, been persistent in its pursuit of finding and supporting blockchain and cryptocurrency projects with real potential.",
    },
    {
        TestimonialText: "Sikkaa has, as a reputable and one of the most well-known crypto platforms, been persistent in its pursuit of finding and supporting blockchain and cryptocurrency projects with real potential.",
    },
    {
        TestimonialText: "Sikkaa has, as a reputable and one of the most well-known crypto platforms, been persistent in its pursuit of finding and supporting blockchain and cryptocurrency projects with real potential.",
    },
    {
        TestimonialText: "Sikkaa has, as a reputable and one of the most well-known crypto platforms, been persistent in its pursuit of finding and supporting blockchain and cryptocurrency projects with real potential.",
    },
]
const Testimonial = () => {
    const [controlledSwiper, setControlledSwiper] = useState(null as any);
    const [controlledSwiper2, setControlledSwiper2] = useState(null as any);

    return (
        <>
            <section className="sec_media_saying_testimonial s-normal-color sec-py">
                <div className="container">
                    <div className="sec_header "><h2 className="t-primary-color sec_heading">What the Media Is Saying</h2>
                        <Link to="/" className="t-normal-color">View More<span><svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L1 11.5" stroke="#636F7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></Link>
                    </div>
                    <div className="testimonial_slider">
                        <div className="slider">
                            <Swiper
                                onSwiper={setControlledSwiper2}
                                controller={{ control: controlledSwiper }}
                                modules={[Navigation, Controller]}
                                slidesPerView={1}
                                spaceBetween={30}
                                navigation={true}
                                className="mySwsdadiper">
                                {TestimonialLogoData.map(function (val, index) {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="testimonial_logo">
                                                <img src={require(`../Assets/Icons/${val.Logo}.svg`)} alt="" />
                                                <span className="t-normal-color">{val.LogoName}</span>
                                            </div>
                                        </SwiperSlide>

                                    )
                                })}
                            </Swiper>
                        </div>
                        <div className="slider">
                            <Swiper
                                onSwiper={setControlledSwiper}
                                controller={{ control: controlledSwiper2 }}
                                slidesPerView={1}
                                spaceBetween={30}
                                pagination={true}
                                modules={[Pagination, Navigation, Controller]}
                                className="mySwiper">
                                {TestimonialContentData.map(function (val, index) {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="testimonial_text ">
                                                <h3 className="t-primary-color">{val.TestimonialText}</h3>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Testimonial;
