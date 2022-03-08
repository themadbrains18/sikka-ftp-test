import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonCard from "../Snippets/Slider-card";
import "swiper/css";
import "swiper/css/pagination";

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
    }
]
const DepositSlider = () => {
    return (
        <>
            <section className="sec_deposit_withdrawal s-secondary-bg sec-py">
                <div className="container">
                    <div className="sec_content">
                        <div className="sec_header">
                            <h2>Deposit and Withdrawal Services of Dego Finance..</h2>
                            <Link to="/" className="t-normal-color">
                                View More
                                <span>
                                    <svg width={7} height={13} viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L6 6.5L1 11.5" stroke="#636F7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            loop={true}
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
                                    slidesPerView: 1.5,
                                    spaceBetween: 20,
                                },
                            }}
                            className="mySwiper">
                            {
                                api.map((elem, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <CommonCard
                                                marketSlidercondition={true}
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
export default DepositSlider;