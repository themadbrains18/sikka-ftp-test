
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonCard from "../Snippets/Slider-card";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const api = [
    {
        Cardheading: "Polkadex Crowdloan Carnival!",
        Cardbodyheading: "Enjoy An",
        Crdprice: "860,000",
        Crdtokam: "Toko",
        cardfooterheading: "Prize Pool!",
        ctabutton: "Join Now",
        image: "card-logo"
    },
    {
        Cardheading: "Polkadex Crowdloan Carnival!",
        Cardbodyheading: "Enjoy An",
        Crdprice: "860,000",
        Crdtokam: "Toko",
        cardfooterheading: "Prize Pool!",
        ctabutton: "Join Now",
        image: "card-logo"
    },
    {
        Cardheading: "Polkadex Crowdloan Carnival!",
        Cardbodyheading: "Enjoy An",
        Crdprice: "860,000",
        Crdtokam: "Toko",
        cardfooterheading: "Prize Pool!",
        ctabutton: "Join Now",
        image: "card-logo"
    },
    {
        Cardheading: "Polkadex Crowdloan Carnival!",
        Cardbodyheading: "Enjoy An",
        Crdprice: "860,000",
        Crdtokam: "Toko",
        cardfooterheading: "Prize Pool!",
        ctabutton: "Join Now",
        image: "card-logo"
    },
    {
        Cardheading: "Polkadex Crowdloan Carnival!",
        Cardbodyheading: "Enjoy An",
        Crdprice: "860,000",
        Crdtokam: "Toko",
        cardfooterheading: "Prize Pool!",
        ctabutton: "Join Now",
        image: "card-logo"
    },
    {
        Cardheading: "Polkadex Crowdloan Carnival!",
        Cardbodyheading: "Enjoy An",
        Crdprice: "860,000",
        Crdtokam: "Toko",
        cardfooterheading: "Prize Pool!",
        ctabutton: "Join Now",
        image: "card-logo"
    },
    {
        Cardheading: "Polkadex Crowdloan Carnival!",
        Cardbodyheading: "Enjoy An",
        Crdprice: "860,000",
        Crdtokam: "Toko",
        cardfooterheading: "Prize Pool!",
        ctabutton: "Join Now",
        image: "card-logo"
    }

]

const MarketSlider = () => {
    return (
        <>
            <section className="market_slider sec-py s-normal-bg">
                <div className="container">
                    <div className="sec_content">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            navigation={true}
                            modules={[Navigation]}
                            breakpoints={{
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                                991: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },

                                768: {
                                    slidesPerView: 2,
                                },
                                280: {
                                    slidesPerView: 1.42,
                                    spaceBetween: 10,
                                },
                            }}
                            className="mySwiper">
                            {

                                api.map((elem, index) => {
                                    return (

                                        <SwiperSlide key={index}>
                                            <CommonCard
                                                marketSlidercondition={false}
                                                Cardheading={elem.Cardheading}
                                                Cardbodyheading={elem.Cardbodyheading}
                                                Crdprice={elem.Crdprice}
                                                Crdtokam={elem.Crdtokam}
                                                cardfooterheading={elem.cardfooterheading}
                                                ctabutton={elem.ctabutton}
                                                image={elem.image}
                                            />
                                        </SwiperSlide>
                                    );
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MarketSlider;