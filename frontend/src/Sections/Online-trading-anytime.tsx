import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
type CounterCrd = {
    CounterNumber: string,
    CounterAbove: string,
    Countercategory: string,


}
type AppCrd = {
    AppIcon: string,
    AppName: string,
}

const OnlineTreding = () => {
    function Appcard(props: AppCrd) {
        return (
            <>
                <li>
                    <span>
                        <img src={require(`../Assets/Icons/${props.AppIcon}.svg`)} alt="" />
                    </span>
                    <span>
                        {props.AppName}
                    </span>
                </li>
            </>
        )
    }
    function CounterCard(props: CounterCrd) {
        return (
            <>
                <li className="counter_card">
                    <span className="s-normal-color">
                        <span>{props.CounterNumber}</span>
                        {props.CounterAbove}
                    </span>

                    <div className="counter_category">
                        {props.Countercategory}
                    </div>
                </li>

            </>
        )
    }
    const CounterData = [
        {
            CounterNumber: "1",
            CounterAbove: "Million",
            Countercategory: "News Feeds Posted",
        },
        {
            CounterNumber: "10",
            CounterAbove: "Million",
            Countercategory: "Global Investors",
        },
        {
            CounterNumber: "500",
            CounterAbove: "+",
            Countercategory: "Coins",
        },
        {
            CounterNumber: "600",
            CounterAbove: "Billion",
            Countercategory: "Total Trade Volume..",
        },
        {
            CounterNumber: "20",
            CounterAbove: "+",
            Countercategory: "Global Communities",
        },
        {
            CounterNumber: "200",
            CounterAbove: "+",
            Countercategory: "Countries Covered",
        },
    ]
    const AppData = [
        {
            AppIcon: "google-play-icon",
            AppName: "Google Play",
        },
        {
            AppIcon: "android-apk-icon",
            AppName: "Android APK",
        },
        {
            AppIcon: "app-store",
            AppName: "App Store",
        },
        {
            AppIcon: "ios-app-icon",
            AppName: "iOS App",
        },
    ]
    return (
        <>
            <section className="sec_online_anytime sec-py s-primary-bg">
                <div className="container">
                    <ul className="counter">
                        <Swiper
                            slidesPerView={6}
                            spaceBetween={30}
                            breakpoints={{
                                1440: {
                                    slidesPerView: 6,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 4.5,
                                    spaceBetween: 30,
                                },

                                991: {
                                    slidesPerView: 4.5,
                                    spaceBetween: 30,
                                },

                                767: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 25,
                                },

                                280: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 20,
                                },
                            }}
                            className="mySwiper">
                            {CounterData.map(function (val, index: any) {
                                return (
                                    <SwiperSlide key={index}>
                                        <CounterCard
                                            CounterNumber={val.CounterNumber}
                                            CounterAbove={val.CounterAbove}
                                            Countercategory={val.Countercategory}
                                        />
                                    </SwiperSlide>
                                )
                            })
                            }
                        </Swiper>
                    </ul>
                    <div className="responsive_container">
                        <span className="boder_line"></span>
                        <h3 className="s-normal-color sec_heading_online">Online <span>Trading</span> Anytime, Anywhere</h3>
                        <div className="sec__img">
                            <img src={require("../Assets/Images/trading-anytime.png")} alt="" />
                            <span>
                                <img src={require("../Assets/Icons/bg-element.svg").default} alt="" />
                            </span>
                        </div>
                        <ul className="app_download_store">
                            {AppData.map(function (val, index) {
                                return (
                                    <Appcard key={index}
                                        AppIcon={val.AppIcon}
                                        AppName={val.AppName}
                                    />
                                )
                            })
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
export default OnlineTreding;

