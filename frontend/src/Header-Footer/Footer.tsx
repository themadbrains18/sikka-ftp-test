import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="sec-py s-primary-bg">
            <div className="container">
                {/* footer Logo */}
                <Link to="/" className="footer_logo line-height-0">
                    <img src={require('../Assets/Icons/logo.svg').default} alt="" />
                </Link>
                {/* footer Head */}
                <div className="footer_head">
                    <div className="footer_head_content">
                        <h2 className="sec_heading s-normal-color">
                            Start Your Crypto Journey Now!
                        </h2>
                        <p className="sec_info s-normal-color">
                            With the KuCoin app and website, trading has never been easier.
                        </p>
                    </div>
                    <div className="txt-right">
                        <Link to="/" className="cta_button" >Sign Up Now</Link>
                    </div>
                </div>
                {/* footer navigation */}
                <nav className="footer_nav">
                    <ul className="footer_navlist">
                        {/* Footer Nav Item */}
                        <li className="footer_navitem">
                            <h3 className="footer_navitem_heading card_heading s-normal-color txt-ellipsis">
                                Legal
                            </h3>
                            <ul className="footer_sub_navlist">
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">Risk Disclosure Starting</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">AML&CFT</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">Special Treatment Disclosure</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">Plus Trading Area</Link>
                                </li>
                            </ul>
                        </li>
                        {/* Footer Nav Item */}
                        <li className="footer_navitem">
                            <h3 className="footer_navitem_heading card_heading s-normal-color txt-ellipsis">
                                Developer
                            </h3>
                            <ul className="footer_sub_navlist">
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">API Document</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">SDK</Link>
                                </li>
                            </ul>
                        </li>
                        {/* Footer Nav Item */}
                        <li className="footer_navitem">
                            <h3 className="footer_navitem_heading card_heading s-normal-color txt-ellipsis">
                                Service
                            </h3>
                            <ul className="footer_sub_navlist">
                                <li className="footer_sub_navitem">
                                    <Link to="/faq" className="footer_nav_link s-normal-color txt-ellipsis">FAQ</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">Open a Ticket</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">ID Verification</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">Fee</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">Blogs</Link>
                                </li>
                            </ul>
                        </li>
                        {/* Footer Nav Item */}
                        <li className="footer_navitem">
                            <h3 className="footer_navitem_heading card_heading s-normal-color txt-ellipsis">
                                Products
                            </h3>
                            <ul className="footer_sub_navlist">
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">Spot Trade</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">Margin Trade</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">Future Trade </Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">Lending</Link>
                                </li>
                            </ul>
                        </li>
                        {/* Footer Nav Item */}
                        <li className="footer_navitem">
                            <h3 className="footer_navitem_heading card_heading s-normal-color txt-ellipsis">
                                Business
                            </h3>
                            <ul className="footer_sub_navlist">
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">Token Listing</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">AML&CFT</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">Market Maker Incentive Program</Link>
                                </li>
                            </ul>
                        </li>
                        {/* Footer Nav Item */}
                        <li className="footer_navitem">
                            <h3 className="footer_navitem_heading card_heading s-normal-color txt-ellipsis">
                                Contact Us
                            </h3>
                            <ul className="footer_sub_navlist">
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">About Us</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">Join Us</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">Technical Support</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">Affiliate Program</Link>
                                </li>
                                <li className="footer_sub_navitem">
                                    <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">Beginner's Guide</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                {/* footer bottom */}
                <div className="footer_bottom">
                    <div className="footer_bottom_left">
                        <p className="sec_info s-normal-color opacity-0-7">
                            CopyRight © 2017 - 2021 KuCoin.com. All Rights Reserved.
                        </p>
                    </div>
                    <div className="footer_bottom_right">
                        <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">Terms of Use</Link>
                        <Link to="/" className="footer_nav_link s-normal-color txt-ellipsis">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;