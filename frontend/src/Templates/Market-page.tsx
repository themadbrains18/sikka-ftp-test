import React from "react";
import "../Assets/Scss/template-scss/market-page.scss"
import MarketSlider from "../Sections/Market-slider";
import MarketTrade from "../Sections/Market-trade";
const MarketPage = () => {
    return (
        <>
            {/* Market Slider Section */}
            <MarketSlider />

            {/* Market Trade Section */}
            < MarketTrade />
        </>
    )
}
export default MarketPage;