import { Link } from "react-router-dom";

type TradeData = {
    CoinIcon: string,
    CoinName: string,
    CoinShortName: string,
    Lastupdateprice: string,
    Priceh_changes: string,
    TradeIcon: string,
    BuyCoin: string,
    TradeCoin: string,
    ClickEvent: any,
    key: any
}

const CommonCoinData = (props: TradeData) => {
    return (
        <>
            {/* Common Card */}
            <li onClick={props.ClickEvent}>
                <ul>
                    <li >
                        <Link to="/" className="coin" >
                            <img className="coin_icon" src={require(`../Assets/Icons/${props.CoinIcon}.svg`)} alt="" />
                            <div>
                                <div className="coin_name">
                                    <span className="t-primary-color">{props.CoinShortName}</span>
                                    <span className="t-normal-color">{props.CoinName}</span>
                                </div>
                                <p className="m_price t-primary-color" >
                                    {props.Lastupdateprice}
                                </p>
                            </div>

                        </Link>
                    </li>
                    <li className="last_price">
                        <Link to="/" className="t-primary-color" >
                            {props.Lastupdateprice}
                        </Link>
                    </li>
                    <li className="h_changes">
                        <Link to="/" className="f-normal-color" >
                            {props.Priceh_changes}
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img className="coin_icon" src={require(`../Assets/Icons/${props.TradeIcon}.svg`)} alt="" />
                        </Link>
                    </li>
                    <li className="buy__trade__button">
                        <Link to="/" className="trade_btn" >{props.BuyCoin}</Link>
                        <Link to="/" className="trade_btn" >{props.TradeCoin}</Link>
                    </li>
                </ul>
            </li>

        </>
    )
}
export default CommonCoinData;