/* Hero Section Banner Css Code */
// import "../Assets/Scss/section-scss/banner.scss";
import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <section className="sec_hero_banner s-primary-bg" >
            <div className="sec_content">
                <div className="sec_text_wrap">
                    <div className="sec_text">
                        <h2 className="sec_banner_heading s-normal-color">
                            Buy & <span className="banner_trade">trade</span> With
                            <span>trust</span> Brands
                        </h2>
                        <p className="sec__banner__info s-normal-color">
                            <span>Sikka</span> makes trading easy, fast & reliable. With 24/7 support, staking and bank-grade security & insurance.
                        </p>
                        <div className="banner_btn">
                            <Link to="/" className="cta_button t-primary-bg">
                                Get Started now
                            </Link>
                            <Link to="/" className="banner_download_btn s-normal-color">
                                Download On
                                <span><img src={require('../Assets/Icons/banner-download-icon.svg').default} alt="" /></span>
                                <span><img src={require("../Assets/Icons/banner-download-icon2.svg").default} alt="" /></span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="sec_img line-height-0">
                    <img src={require('../Assets/Images/hero-banner-img.png')} alt="" />
                </div>
                <div>
                    <Link to="/" className="cta_button cta_button-m f-primary-bg txt-center">Get Started now</Link>
                </div>
            </div>
        </section >
    )
}
export default Banner;
