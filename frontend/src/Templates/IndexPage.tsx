import "../Assets/Scss/template-scss/IndexPage.scss";
import Banner from "../Sections/Banner";
import DepositSlider from "../Sections/Deposit-withdrawal-Finance";
import CoinTrade from "../Sections/Coint-trade";
import SikkaService from "../Sections/Sikka-service";
import GetFirstCoin from "../Sections/Get-first-coin";
import OnlineTreding from "../Sections/Online-trading-anytime";
import Testimonial from "../Sections/Media-saying-testimonial";
import Faq from "../Sections/Faq";


const IndexPage = () => {
    return (
        <>
            {/*  Section Hero Banner */}
            <Banner />

            {/* Section Deposit-withdrawal-Finance */}
            <DepositSlider />

            {/* Section Deposit-withdrawal-Finance */}
            <CoinTrade />

            {/* Section Get-first-coin */}
            <GetFirstCoin />

            {/* Section Sikka-service */}
            <SikkaService />

            {/* Section Sikka-service */}
            <OnlineTreding />

            {/* Section Sikka-service */}
            <Testimonial />

            {/* Section Sikka-service */}
            <Faq />


        </>
    );
}
export default IndexPage;