const MarketTrade = () => {
    return (
        <>
            <section className="sec_market_trade">
                <div className="container">
                    <div className="sec_content">
                        <div className="btn_content">
                            <div className="trade_tabs_btn">
                                <button className="trade_btn active">
                                    Spot
                                </button>
                                <button className="trade_btn">
                                    Futures
                                </button>
                                <button className="trade_btn">
                                    New Listings
                                </button>
                            </div>
                            <ul className="filter_btn">
                                <li className="btn pin_to_chrome">
                                    <img src={require("../Assets/Icons/pin-icon.svg").default} alt="" />
                                    <span className="pin_chrome">Pin to Chrome</span>
                                </li>
                                <li className="btn btn_alarm">
                                    <button>
                                        <img src={require("../Assets/Icons/alarm-icon.svg").default} alt="" />
                                    </button>

                                </li>
                                <li className="btn btn_filter">
                                    <button>
                                        <img src={require("../Assets/Icons/filter-icon.svg").default} alt="" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="main_tabs_content">
                            <div className="content">
                                <ul className="token_btn">
                                    <li>
                                        <button className="token_btn">
                                            Favorites
                                        </button>
                                    </li>
                                    <li>
                                        <button className="token_btn">
                                            USD
                                        </button>
                                    </li>
                                    <li>
                                        <button className="token_btn">
                                            BTC
                                        </button>
                                    </li>
                                    <li>
                                        <button className="token_btn">
                                            KCS
                                        </button>
                                    </li>
                                    <li>
                                        <button className="token_btn">
                                            ALTS
                                        </button>
                                    </li>
                                    <li>
                                        <button className="token_btn">
                                            DeFi
                                        </button>
                                    </li>
                                    <li>
                                        <button className="token_btn">
                                            NFT
                                        </button>
                                    </li>
                                    <li>
                                        <button className="token_btn">
                                            Metaverse
                                        </button>
                                    </li>
                                    <li>
                                        <button className="token_btn">
                                            Polkadot
                                        </button>
                                    </li>
                                    <li>
                                        <button className="token_btn">
                                            Polkadot
                                        </button>
                                    </li>
                                    <li>
                                        <button className="token_btn">
                                            Spot Index
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MarketTrade;