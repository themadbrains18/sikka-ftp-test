import { Link } from "react-router-dom"
type CardProps = {
    marketSlidercondition: Boolean,
    Cardheading: string,
    Cardbodyheading: string,
    Crdprice: string,
    Crdtokam: string,
    cardfooterheading: string,
    ctabutton: string,
    image: string,
}
const CommonCard = (props: CardProps) => {
    return (
        <>
            {/* Common Card */}
            <div className="slider_card">
                <span className="cirle_element">
                </span>
                <div className="card_header">
                    <img src={require(`../Assets/Icons/${props.image}.svg`)} alt="" />
                    <h3 className="card_heading">
                        {props.Cardheading}
                    </h3>
                </div>
                {props.marketSlidercondition ?
                    <div className="card_body">
                        <div>
                            <h4 className="card_body_heading">
                                {props.Cardbodyheading}
                            </h4>
                            <h5 className="price">
                                {props.Crdprice}
                                <span>
                                    {props.Crdtokam}
                                </span>
                            </h5>
                        </div>
                        <div className="card_footer">
                            <h4 className="card_footer_heading">
                                {props.cardfooterheading}
                            </h4>
                            <Link to="/" className="cta_button">
                                {props.ctabutton}
                            </Link>
                        </div>
                    </div>
                    :

                    <div className="market_card_footer">
                        <div>
                            <h4 className="card_body_heading">
                                {props.Cardbodyheading}
                            </h4>
                            <h5 className="price">
                                {props.Crdprice}
                                <span>
                                    {props.Crdtokam}
                                </span>
                            </h5>
                        </div>
                        <div className="card_footer">
                            <Link to="/" className="cta_button">
                                {props.ctabutton}
                            </Link>
                        </div>
                    </div>


                }

            </div>
        </>
    )
}
export default CommonCard;