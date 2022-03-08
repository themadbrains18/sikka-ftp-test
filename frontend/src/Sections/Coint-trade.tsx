import React, { useState } from "react";
import { Link } from "react-router-dom";
import CommonCoinData from "../Snippets/Update-trade-coin"

const tradeData = [
    {
        CoinIcon: "coin-icon",
        CoinName: "BTC",
        CoinShortName: "Bitcoin",
        Lastupdateprice: "$43795.4",
        Priceh_changes: "+0.66%",
        TradeIcon: "trade-icon",
        BuyCoin: "Buy",
        TradeCoin: "Trade",
    },
    {
        CoinIcon: "coin-icon",
        CoinName: "BTC",
        CoinShortName: "Bitcoin",
        Lastupdateprice: "$43795.4",
        Priceh_changes: "+0.66%",
        TradeIcon: "trade-icon",
        BuyCoin: "Buy",
        TradeCoin: "Trade",
    },
    {
        CoinIcon: "coin-icon",
        CoinName: "BTC",
        CoinShortName: "Bitcoin",
        Lastupdateprice: "$43795.4",
        Priceh_changes: "+0.66%",
        TradeIcon: "trade-icon",
        BuyCoin: "Buy",
        TradeCoin: "Trade",
    },
    {
        CoinIcon: "coin-icon",
        CoinName: "BTC",
        CoinShortName: "Bitcoin",
        Lastupdateprice: "$43795.4",
        Priceh_changes: "+0.66%",
        TradeIcon: "trade-icon",
        BuyCoin: "Buy",
        TradeCoin: "Trade",
    },
    {
        CoinIcon: "coin-icon",
        CoinName: "BTC",
        CoinShortName: "Bitcoin",
        Lastupdateprice: "$43795.4",
        Priceh_changes: "+0.66%",
        TradeIcon: "trade-icon",
        BuyCoin: "Buy",
        TradeCoin: "Trade",
    },
    {
        CoinIcon: "coin-icon",
        CoinName: "BTC",
        CoinShortName: "Bitcoin",
        Lastupdateprice: "$43795.4",
        Priceh_changes: "+0.66%",
        TradeIcon: "trade-icon",
        BuyCoin: "Buy",
        TradeCoin: "Trade",
    },
    {
        CoinIcon: "coin-icon",
        CoinName: "BTC",
        CoinShortName: "Bitcoin",
        Lastupdateprice: "$43795.4",
        Priceh_changes: "+0.66%",
        TradeIcon: "trade-icon",
        BuyCoin: "Buy",
        TradeCoin: "Trade",
    },
    {
        CoinIcon: "coin-icon",
        CoinName: "BTC",
        CoinShortName: "Bitcoin",
        Lastupdateprice: "$43795.4",
        Priceh_changes: "+0.66%",
        TradeIcon: "trade-icon",
        BuyCoin: "Buy",
        TradeCoin: "Trade",
    },
    {
        CoinIcon: "coin-icon",
        CoinName: "BTC",
        CoinShortName: "Bitcoin",
        Lastupdateprice: "$43795.4",
        Priceh_changes: "+0.66%",
        TradeIcon: "trade-icon",
        BuyCoin: "Buy",
        TradeCoin: "Trade",
    },
    {
        CoinIcon: "coin-icon",
        CoinName: "BTC",
        CoinShortName: "Bitcoin",
        Lastupdateprice: "$43795.4",
        Priceh_changes: "+0.66%",
        TradeIcon: "trade-icon",
        BuyCoin: "Buy",
        TradeCoin: "Trade",
    },
    {
        CoinIcon: "coin-icon",
        CoinName: "BTC",
        CoinShortName: "Bitcoin",
        Lastupdateprice: "$43795.4",
        Priceh_changes: "+0.66%",
        TradeIcon: "trade-icon",
        BuyCoin: "Buy",
        TradeCoin: "Trade",
    },
]

const CoinTrade = () => {
    const [tab, setTab] = useState("Trending");
    const [taasfab, setTabtaasfab] = useState("Trending Coins");
    const [Dropdown, setDropdown] = useState(false);
    const OpenDropdown = () => {
        setDropdown(!Dropdown)
    }
    const [buybtntrade, setbuybtntrade] = useState(false);
    var Btntoggle = () => {
        setbuybtntrade(!buybtntrade)
    }

    return (
        <>
            <section className="sec_coin_trade_data sec-py s-secondary-bg">
                <div className="container">
                    <div className="tabs_button">
                        <div className="d_tabs_btn_dropdown">
                            <button className={`tab_btn ${tab === "Trending" ? 'active' : ""}`} onClick={() => { setTab("Trending") }} >
                                Trending Coins
                            </button>
                            <button className={`tab_btn ${tab === "Coins" ? 'active' : ""}`} onClick={() => { setTab("Coins") }} >
                                New Coins
                            </button>
                            <button className={`tab_btn ${tab === "Gainers" ? 'active' : ""}`} onClick={() => { setTab("Gainers") }} >
                                Top Gainers
                            </button>
                        </div>
                        <div className="m_tabs_btn_dropdown">
                            <button className="tab_btn " onClick={OpenDropdown} >
                                {taasfab}
                                <span><img src={require("../Assets/Icons/arrow-icon-dropwdown.svg").default} alt="" /> </span>
                            </button>
                            {Dropdown && (
                                <>
                                    <div>
                                        <button className={`tab_btn ${tab === "Trending" ? 'active' : ""}`} onClick={() => { setTab("Trending"); setTabtaasfab("Trending Coins"); OpenDropdown(); }}  >
                                            Trending Coins
                                        </button>
                                        <button className={`tab_btn ${tab === "Coins" ? 'active' : ""}`} onClick={() => { setTab("Coins"); setTabtaasfab("New Coins"); OpenDropdown(); }} >
                                            New Coins
                                        </button>
                                        <button className={`tab_btn ${tab === "Gainers" ? 'active' : ""}`} onClick={() => { setTab("Gainers"); setTabtaasfab("Top Gainers"); OpenDropdown(); }} >
                                            Top Gainers
                                        </button>
                                    </div>
                                    <span onClick={OpenDropdown} className="dropdown_bg_layer">
                                    </span>
                                </>
                            )}

                        </div>
                        <div className="view_more_btn">
                            <Link to="/" className="t-normal-color">View More<span><svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L1 11.5" stroke="#636F7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></Link>
                        </div>
                    </div>
                    <span className="tabs__bottom_line" >
                    </span>
                    <div className="content_heading">
                        <ul>
                            <li className="t-normal-color">
                                Coin
                            </li>
                            <li className="t-normal-color">
                                Last Price
                            </li>
                            <li className="t-normal-color">
                                24H Change
                            </li>
                            <li className="t-normal-color">
                                Markets
                            </li>
                            <li className="t-normal-color">
                                Trade
                            </li>
                        </ul>
                    </div>
                    {/* Tabs */}
                    {
                        (tab === "Trending") &&
                        <div className="update_trending_coin_tabs">
                            <div className="tabs_content active">
                                <div className="content_inner_data">
                                    <ul className="coins_price">
                                        {tradeData.map(function (val: any, index: any) {
                                            return (
                                                <CommonCoinData
                                                    key={index}
                                                    ClickEvent={Btntoggle}
                                                    CoinIcon={val.CoinIcon}
                                                    CoinName={val.CoinName}
                                                    CoinShortName={val.CoinShortName}
                                                    Lastupdateprice={val.Lastupdateprice}
                                                    Priceh_changes={val.Priceh_changes}
                                                    TradeIcon={val.TradeIcon}
                                                    BuyCoin={val.BuyCoin}
                                                    TradeCoin={val.TradeCoin}
                                                />
                                            )
                                        })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                    {(tab === "Coins") &&
                        <div className="update_trending_coin_tabs">
                            <div className="tabs_content active">
                                <div className="content_inner_data">
                                    <ul className="coins_price">
                                        {tradeData.map(function (val, index) {
                                            return (
                                                <>
                                                    <CommonCoinData
                                                        key={index}
                                                        ClickEvent={Btntoggle}
                                                        CoinIcon={val.CoinIcon}
                                                        CoinName={val.CoinName}
                                                        CoinShortName={val.CoinShortName}
                                                        Lastupdateprice={val.Lastupdateprice}
                                                        Priceh_changes={val.Priceh_changes}
                                                        TradeIcon={val.TradeIcon}
                                                        BuyCoin={val.BuyCoin}
                                                        TradeCoin={val.TradeCoin}
                                                    />
                                                </>
                                            )
                                        })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                    {(tab === "Gainers") &&
                        <div className="update_trending_coin_tabs">
                            <div className="tabs_content active">
                                <div className="content_inner_data">
                                    <ul className="coins_price">
                                        {tradeData.map(function (val, index) {
                                            return (
                                                <>
                                                    <CommonCoinData
                                                        key={index}
                                                        ClickEvent={Btntoggle}
                                                        CoinIcon={val.CoinIcon}
                                                        CoinName={val.CoinName}
                                                        CoinShortName={val.CoinShortName}
                                                        Lastupdateprice={val.Lastupdateprice}
                                                        Priceh_changes={val.Priceh_changes}
                                                        TradeIcon={val.TradeIcon}
                                                        BuyCoin={val.BuyCoin}
                                                        TradeCoin={val.TradeCoin}
                                                    />
                                                </>
                                            )
                                        })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                    {buybtntrade && (<div className="buy_sell_btn s-primary-bg">
                        <button className="t-primary-color f-primary-bg">
                            Buy
                        </button>
                        <button className="t-primary-color f-primary-bg">
                            Trade
                        </button>
                    </div>
                    )}
                    <div className="btn_bg_layer" onClick={Btntoggle}>

                    </div>
                </div>
            </section>
        </>
    );
}


export default CoinTrade;