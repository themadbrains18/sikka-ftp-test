import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type propsList = {
    formHeader: Boolean,
    headerHeight: any
}

const Header = (props: propsList) => {
    
    const [desktopHeader, setdesktopHeader] = useState(true);
    const [toggleNav, settoggleNav] = useState(true);

    let getheaderHeight = () => {
        let headerElemHeight: any = document.querySelector('.header');
        props.headerHeight(headerElemHeight.offsetHeight);    
        props.headerHeight(headerElemHeight.offsetHeight);    
        document.querySelector('#mainContent')?.setAttribute('style', `margin-top:${headerElemHeight.offsetHeight}px;`);
    }

    const CheckWidowWidth = () => {
        if (window.innerWidth <= 1024) {
            setdesktopHeader(false);
        } else {
            setdesktopHeader(true);
        }
    }

    const openMobileDropDown = (e: any) => {
        const activeMobileTab = document.querySelector(".mobile_navlist .mobile_sub_navlist_item .nav_btn.nav_drp_dwn.active");
        if (activeMobileTab) {
            activeMobileTab?.classList.remove("active");
            activeMobileTab?.nextElementSibling?.removeAttribute("style");
        }
        if (activeMobileTab === e.currentTarget) {
            e.currentTarget.classList.remove("active");
            e.currentTarget.nextElementSibling.removeAttribute("style");
        } else {
            e.currentTarget.classList.add("active");
            e.currentTarget.nextElementSibling.setAttribute("style", `height:${e.currentTarget.nextElementSibling.scrollHeight}px;`);
        }
    }

    useEffect(() => {
        window.addEventListener("load",()=>{
            CheckWidowWidth();
            getheaderHeight();
        });
        window.addEventListener("resize", () => {
            CheckWidowWidth();
            getheaderHeight();
        });
    });

    const login: Boolean = false;
    return (
        <>
            {props.formHeader ? 
                <>
                    {/* Form pages Header */}
                    <header className={`header desktop-header ${login ? "login" : 'notlogin'} `}>
                        <div className="container">
                            <nav className="header_nav">
                                {/* Header Left Side */}
                                <div className="header_nav-left">
                                    {/* Header Logo */}
                                    <Link to="/" className="header_logo">
                                        <img src={require('../Assets/Icons/logo.svg').default} alt="" />
                                    </Link>
                                </div>
                                {/* Header Right Side */}
                                <div className="header_nav-rigth">
                                    <ul className="header_navlist">

                                        <li className="header_navitem">
                                            <Link to="/login" className="nav_btn s-normal-color header-btn font-w-500">
                                                Log In
                                            </Link>
                                            <Link to="/signup" className="nav_btn s-normal-color header-btn font-w-500">
                                                Sign Up
                                            </Link>
                                        </li>

                                        <li className="header_navitem ">
                                                <div className="nav_icon line-height-0 header-collapse-btn header_navitem-hover">

                                                    <div className=" header-collapse-sbtn nav_drp_dwn-wrap">
                                                        <button className="line-height-0 nav_btn">
                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g opacity="0.7">
                                                                    <path d="M12 2C6.47916 2 2 6.4792 2 12C2 17.5208 6.47916 22 12 22C17.5208 22 22 17.5208 22 12C22 6.47916 17.5208 2 12 2ZM19.217 17.7053C18.3167 17.1836 17.3017 16.8012 16.2913 16.5353C16.5959 15.2649 16.7692 13.8598 16.796 12.4H21.1912C21.107 14.3309 20.4156 16.1902 19.217 17.7053ZM4.78308 17.7053C3.5844 16.1902 2.893 14.3309 2.80884 12.4H7.204C7.2308 13.8598 7.40412 15.2649 7.70868 16.5353C6.69084 16.8081 5.70192 17.1721 4.78308 17.7053ZM4.78304 6.29468C5.68012 6.81372 6.6864 7.19548 7.70868 7.46472C7.40408 8.73512 7.2308 10.1402 7.204 11.6H2.80884C2.893 9.66904 3.5844 7.80984 4.78304 6.29468ZM12.4 16.0048V12.4H15.9959C15.9694 13.8 15.8036 15.143 15.5132 16.3525C14.5628 16.1545 13.5056 16.0295 12.4 16.0048ZM8.48676 16.3525C8.19636 15.143 8.0306 13.8 8.00408 12.4H11.6V16.0048C10.5077 16.0292 9.45736 16.1506 8.48676 16.3525ZM11.6 7.99516V11.6H8.00408C8.0306 10.2 8.19636 8.857 8.48676 7.64752C9.46088 7.84928 10.499 7.9706 11.6 7.99516ZM12.4 11.6V7.99516C13.4754 7.97116 14.5204 7.85348 15.5132 7.64752C15.8037 8.857 15.9694 10.2 15.9959 11.6H12.4ZM12.4 7.19496V2.85068C13.2592 3.06516 14.0973 3.95956 14.7476 5.37844C14.9589 5.83932 15.145 6.34088 15.3052 6.87468C14.3476 7.06996 13.3652 7.17324 12.4 7.19496ZM11.6 2.85068V7.19496C10.6142 7.17276 9.6316 7.06588 8.69484 6.87468C8.85496 6.34088 9.04112 5.83932 9.25236 5.37844C9.90268 3.95952 10.7408 3.06512 11.6 2.85068ZM11.6 16.805V21.1493C10.7408 20.9348 9.90268 20.0404 9.25236 18.6216C9.04112 18.1607 8.85496 17.6591 8.69484 17.1253C9.63728 16.934 10.6092 16.8274 11.6 16.805ZM12.4 21.1493V16.805C13.437 16.8284 14.4012 16.9417 15.3052 17.1253C15.145 17.6592 14.9589 18.1607 14.7476 18.6216C14.0973 20.0405 13.2592 20.9348 12.4 21.1493ZM16.796 11.6C16.7692 10.1402 16.5959 8.73512 16.2913 7.46472C17.3036 7.19676 18.315 6.81784 19.217 6.29468C20.4156 7.80984 21.107 9.66904 21.1912 11.6H16.796ZM18.6826 5.67764C17.8773 6.12656 16.9878 6.4556 16.0853 6.69324C15.711 5.42764 15.1038 4.0208 14.1922 3.06512C15.8966 3.48296 17.4575 4.38284 18.6826 5.67764ZM9.80772 3.06512C8.89608 4.0208 8.289 5.42768 7.91464 6.69324C7.01664 6.45692 6.1288 6.12928 5.31732 5.67764C6.54252 4.38284 8.10332 3.48296 9.80772 3.06512ZM5.31736 18.3224C6.13432 17.8685 7.01768 17.5418 7.91468 17.3068C8.28904 18.5722 8.89612 19.9792 9.80776 20.9348C8.10328 20.517 6.54252 19.6172 5.31736 18.3224ZM14.1922 20.9349C15.1028 19.9804 15.7102 18.5748 16.0854 17.3068C16.9722 17.5395 17.8686 17.8692 18.6827 18.3224C17.4575 19.6172 15.8967 20.517 14.1922 20.9349Z" fill="white" />
                                                                </g>
                                                            </svg>
                                                        </button>
                                                        <div className="drp_dwn_nav_list-wrap currency_popup">
                                                            <h4 className="popup_heading z">Language/Region</h4>
                                                            <ul className="drp_dwn_nav_list">
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        currency_popup
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        currency_popup
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        currency_popup
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        currency_popup
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </header>
                </>
            :
                <>
                    {/* Other Header */}
                    {desktopHeader ?
                        <header className={`header desktop-header ${login ? "login" : 'notlogin'} `}>
                            <div className="container">
                                <nav className="header_nav">
                                    {/* Header Left Side */}
                                    <div className="header_nav-left">
                                        {/* Header Logo */}
                                        <Link to="/" className="header_logo">
                                            <img src={require('../Assets/Icons/logo.svg').default} alt="" />
                                        </Link>
                                        <ul className="header_navlist">
                                            <li className="header_navitem header_navitem-hover nav_drp_dwn-wrap">
                                                <button className="nav_btn nav_drp_dwn s-normal-color">
                                                    Buy Crypto
                                                    <svg className="nav_drp_dwn-svg" width={13} height={8} viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.5 1.5L6.5 6.5L1.5 1.5" stroke="#F7F8FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                                <div className="drp_dwn_nav_list-wrap">
                                                    <ul className="drp_dwn_nav_list">
                                                        <li>
                                                            <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                <span>Spot Orders</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                <span>Margin Orders</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <ul className="drp_dwn_nav_list">
                                                        <li>
                                                            <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                <span>Spot Orders</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                <span>Margin Orders</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="header_navitem header_navitem-hover nav_drp_dwn-wrap">
                                                <button className="nav_btn nav_drp_dwn s-normal-color">
                                                    Markets
                                                    <svg className="nav_drp_dwn-svg" width={13} height={8} viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.5 1.5L6.5 6.5L1.5 1.5" stroke="#F7F8FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                                <div className="drp_dwn_nav_list-wrap">
                                                    <ul className="drp_dwn_nav_list">
                                                        <li>
                                                            <Link to="/market" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                <span>Market</span>
                                                            </Link >
                                                        </li>
                                                        <li>
                                                            <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                <span>Margin Orders</span>
                                                            </Link >
                                                        </li>
                                                    </ul>
                                                    <ul className="drp_dwn_nav_list">
                                                        <li>
                                                            <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                <span>Spot Orders</span>
                                                            </Link >
                                                        </li>
                                                        <li>
                                                            <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                <span>Margin Orders</span>
                                                            </Link >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="header_navitem header_navitem-hover nav_drp_dwn-wrap">
                                                <button className="nav_btn nav_drp_dwn s-normal-color">
                                                    Trade
                                                    <svg className="nav_drp_dwn-svg" width={13} height={8} viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.5 1.5L6.5 6.5L1.5 1.5" stroke="#F7F8FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                                <div className="drp_dwn_nav_list-wrap">
                                                    <ul className="drp_dwn_nav_list">
                                                        <li>
                                                            <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                <span>Spot Orders</span>
                                                            </Link >
                                                        </li>
                                                        <li>
                                                            <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                <span>Margin Orders</span>
                                                            </Link >
                                                        </li>
                                                    </ul>
                                                    <ul className="drp_dwn_nav_list">
                                                        <li>
                                                            <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                <span>Spot Orders</span>
                                                            </Link >
                                                        </li>
                                                        <li>
                                                            <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                <span>Margin Orders</span>
                                                            </Link >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="header_navitem header_navitem-hover nav_drp_dwn-wrap">
                                                <button className="nav_btn nav_drp_dwn s-normal-color">
                                                    Derivatives
                                                    <svg className="nav_drp_dwn-svg" width={13} height={8} viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.5 1.5L6.5 6.5L1.5 1.5" stroke="#F7F8FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                                <div className="drp_dwn_nav_list-wrap">
                                                    <ul className="drp_dwn_nav_list">
                                                        <li>
                                                            <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                <span>Spot Orders</span>
                                                            </Link >
                                                        </li>
                                                        <li>
                                                            <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                <span>Margin Orders</span>
                                                            </Link >
                                                        </li>
                                                    </ul>
                                                    <ul className="drp_dwn_nav_list">
                                                        <li>
                                                            <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                <span>Spot Orders</span>
                                                            </Link >
                                                        </li>
                                                        <li>
                                                            <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                <span>Margin Orders</span>
                                                            </Link >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="header_navitem header_navitem-hover nav_drp_dwn-wrap">
                                                <button className="nav_btn nav_drp_dwn s-normal-color">
                                                    Earn
                                                    <svg className="nav_drp_dwn-svg" width={13} height={8} viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.5 1.5L6.5 6.5L1.5 1.5" stroke="#F7F8FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                                <div className="drp_dwn_nav_list-wrap">
                                                    <ul className="drp_dwn_nav_list">
                                                        <li>
                                                            <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                <span>Spot Orders</span>
                                                            </Link >
                                                        </li>
                                                        <li>
                                                            <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                <span>Margin Orders</span>
                                                            </Link >
                                                        </li>
                                                    </ul>
                                                    <ul className="drp_dwn_nav_list">
                                                        <li>
                                                            <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                <span>Spot Orders</span>
                                                            </Link >
                                                        </li>
                                                        <li>
                                                            <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                <span>Margin Orders</span>
                                                            </Link >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Header Right Side */}
                                    <div className="header_nav-rigth">
                                        <ul className="header_navlist">
                                            {login ?
                                                // if user login
                                                <>
                                                    <li className="header_navitem nav_drp_dwn-wrap">
                                                        <button className="nav_drp_dwn s-normal-color line-height-0 ">
                                                            <div className="nav_icon header_navitem-hover">
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g opacity="0.7">
                                                                        <path d="M20.4605 16.1514L18.7587 14.1291C18.7289 14.0932 18.7127 14.0495 18.7127 14.0046V8.29494C18.7326 6.69776 18.0722 5.15472 16.8678 3.98468C15.6634 2.81465 14.0072 2.10705 12.2415 2.00812C11.3202 1.96529 10.3989 2.09221 9.53365 2.38115C8.66843 2.67008 7.8774 3.11499 7.20873 3.68877C6.54007 4.26256 6.00775 4.95321 5.6442 5.71869C5.28065 6.48416 5.09348 7.30843 5.09407 8.1413V14.2163C5.09407 14.2613 5.07793 14.305 5.04808 14.3409L3.53949 16.1514C3.26959 16.419 3.09155 16.7515 3.02701 17.1087C2.96246 17.4659 3.01419 17.8323 3.17591 18.1634C3.33762 18.4946 3.60236 18.7762 3.93798 18.9741C4.27359 19.172 4.66563 19.2776 5.06648 19.2782H18.9197C19.3217 19.2801 19.7156 19.1762 20.0533 18.9792C20.391 18.7823 20.6579 18.5008 20.8213 18.1692C20.9847 17.8375 21.0376 17.4701 20.9735 17.1118C20.9095 16.7535 20.7312 16.4197 20.4605 16.1514ZM19.5406 17.6463C19.4886 17.758 19.4008 17.8532 19.2886 17.9198C19.1764 17.9864 19.0448 18.0212 18.9105 18.02H5.06648C4.93439 18.0178 4.80579 17.9814 4.69595 17.9151C4.58611 17.8489 4.49966 17.7555 4.44686 17.6462C4.39406 17.5368 4.37714 17.4161 4.39811 17.2984C4.41908 17.1806 4.47706 17.0708 4.56515 16.9819L4.61574 16.9279L6.16572 15.0842C6.36826 14.832 6.47623 14.5279 6.47388 14.2163V8.1413C6.47387 7.49753 6.61462 6.86009 6.88805 6.26552C7.16148 5.67096 7.56222 5.13098 8.06728 4.67653C8.57234 4.22209 9.17179 3.86212 9.83126 3.61728C10.4907 3.37243 11.1972 3.24752 11.9103 3.24971H12.1771C13.589 3.33367 14.9112 3.90401 15.8707 4.84292C16.8302 5.78183 17.3537 7.01759 17.3329 8.29494V14.0253C17.3329 14.343 17.4476 14.6521 17.6595 14.9057L19.3796 16.9487L19.4256 16.9943C19.5181 17.0826 19.5794 17.1937 19.6015 17.3136C19.6236 17.4334 19.6056 17.5565 19.5498 17.667L19.5406 17.6463Z" fill="white" />
                                                                        <path d="M14.7157 20.8896C14.3705 21.239 13.9475 21.5185 13.4743 21.7099C13.0011 21.9013 12.4884 22.0003 11.9699 22.0003C11.4514 22.0003 10.9387 21.9013 10.4655 21.7099C9.99228 21.5185 9.56923 21.239 9.22407 20.8896C9.11366 20.7654 9.06016 20.6077 9.07457 20.4489C9.08898 20.2902 9.1702 20.1425 9.30154 20.0361C9.43288 19.9298 9.60435 19.8729 9.7807 19.8772C9.95706 19.8815 10.1249 19.9466 10.2497 20.0591C10.4655 20.278 10.7301 20.4531 11.0261 20.5731C11.3222 20.693 11.6431 20.755 11.9676 20.755C12.2921 20.755 12.6129 20.693 12.909 20.5731C13.2051 20.4531 13.4697 20.278 13.6854 20.0591C13.8102 19.9466 13.9781 19.8815 14.1544 19.8772C14.3308 19.8729 14.5023 19.9298 14.6336 20.0361C14.7649 20.1425 14.8462 20.2902 14.8606 20.4489C14.875 20.6077 14.8215 20.7654 14.7111 20.8896H14.7157Z" fill="white" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </button>
                                                        <div className="drp_dwn_nav_list-wrap">
                                                            <ul className="drp_dwn_nav_list">
                                                                <li>
                                                                    <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                        <span>Spot Orders</span>
                                                                    </Link >
                                                                </li>
                                                                <li>
                                                                    <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                        <span>Margin Orders</span>
                                                                    </Link >
                                                                </li>
                                                            </ul>
                                                            <ul className="drp_dwn_nav_list">
                                                                <li>
                                                                    <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                        <span>Spot Orders</span>
                                                                    </Link >
                                                                </li>
                                                                <li>
                                                                    <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                        <span>Margin Orders</span>
                                                                    </Link >
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="header_navitem nav_drp_dwn-wrap">
                                                        <button className="nav_drp_dwn s-normal-color line-height-0">
                                                            <div className="nav_icon header_navitem-hover">
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g opacity="0.7">
                                                                        <path d="M16.3649 2H7.63512C6.67158 2.00165 5.74802 2.35315 5.06669 2.97753C4.38537 3.6019 4.0018 4.44825 4 5.33125V6.66875C4.01751 6.83416 4.1016 6.98766 4.23588 7.09936C4.37015 7.21105 4.545 7.27292 4.72634 7.27292C4.90769 7.27292 5.08253 7.21105 5.21681 7.09936C5.35109 6.98766 5.43517 6.83416 5.45269 6.66875V5.33125C5.45269 4.80082 5.68262 4.29211 6.09191 3.91704C6.50119 3.54196 7.05631 3.33125 7.63512 3.33125H16.3649C16.9437 3.33125 17.4988 3.54196 17.9081 3.91704C18.3174 4.29211 18.5473 4.80082 18.5473 5.33125V14.6688C18.5648 14.8342 18.6489 14.9877 18.7832 15.0994C18.9175 15.211 19.0923 15.2729 19.2737 15.2729C19.455 15.2729 19.6298 15.211 19.7641 15.0994C19.8984 14.9877 19.9825 14.8342 20 14.6688V5.33125C19.9982 4.44825 19.6146 3.6019 18.9333 2.97753C18.252 2.35315 17.3284 2.00165 16.3649 2V2Z" fill="white" />
                                                                        <path d="M19.2771 16.6682C19.0835 16.6682 18.8979 16.7387 18.7611 16.8641C18.6242 16.9895 18.5473 17.1596 18.5473 17.337V18.6682C18.5473 19.1987 18.3174 19.7074 17.9081 20.0825C17.4988 20.4575 16.9437 20.6682 16.3649 20.6682H7.63512C7.05631 20.6682 6.50119 20.4575 6.09191 20.0825C5.68262 19.7074 5.45269 19.1987 5.45269 18.6682V9.33074C5.43517 9.16533 5.35109 9.01182 5.21681 8.90013C5.08253 8.78844 4.90769 8.72656 4.72634 8.72656C4.545 8.72656 4.37015 8.78844 4.23588 8.90013C4.1016 9.01182 4.01751 9.16533 4 9.33074V18.6682C4.0018 19.5512 4.38537 20.3976 5.06669 21.022C5.74802 21.6463 6.67158 21.9978 7.63512 21.9995H16.3649C17.3284 21.9978 18.252 21.6463 18.9333 21.022C19.6146 20.3976 19.9982 19.5512 20 18.6682V17.3307C19.9982 17.1555 19.9215 16.988 19.7863 16.8641C19.6511 16.7402 19.4683 16.6699 19.2771 16.6682V16.6682Z" fill="white" />
                                                                        <path d="M7.64171 4.66797C7.46121 4.68402 7.2937 4.76107 7.17182 4.88413C7.04994 5.00718 6.98242 5.16741 6.98242 5.33359C6.98242 5.49978 7.04994 5.66001 7.17182 5.78306C7.2937 5.90611 7.46121 5.98317 7.64171 5.99922C7.8222 5.98317 7.98972 5.90611 8.1116 5.78306C8.23348 5.66001 8.301 5.49978 8.301 5.33359C8.301 5.16741 8.23348 5.00718 8.1116 4.88413C7.98972 4.76107 7.8222 4.68402 7.64171 4.66797Z" fill="white" />
                                                                        <path d="M7.27344 9H16.0032" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
                                                                        <path d="M7.27344 13H12.7295" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </button>
                                                        <div className="drp_dwn_nav_list-wrap">
                                                            <ul className="drp_dwn_nav_list">
                                                                <li>
                                                                    <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                        <span>Spot Orders</span>
                                                                    </Link >
                                                                </li>
                                                                <li>
                                                                    <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                        <span>Margin Orders</span>
                                                                    </Link >
                                                                </li>
                                                            </ul>
                                                            <ul className="drp_dwn_nav_list">
                                                                <li>
                                                                    <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                        <span>Spot Orders</span>
                                                                    </Link >
                                                                </li>
                                                                <li>
                                                                    <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                        <span>Margin Orders</span>
                                                                    </Link >
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="header_navitem nav_drp_dwn-wrap">
                                                        <button className="nav_drp_dwn s-normal-color line-height-0">
                                                            <div className="nav_icon header_navitem-hover">
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g opacity="0.7">
                                                                        <path d="M4 3.65H14C15.8502 3.65 17.35 5.14985 17.35 7V17C17.35 18.8502 15.8502 20.35 14 20.35H4C3.25442 20.35 2.65 19.7456 2.65 19V5C2.65 4.25442 3.25442 3.65 4 3.65Z" stroke="white" strokeWidth="1.3" />
                                                                        <path d="M13 9.65H19C20.2979 9.65 21.35 10.7021 21.35 12C21.35 13.2979 20.2979 14.35 19 14.35H13C12.2544 14.35 11.65 13.7456 11.65 13V11C11.65 10.2544 12.2544 9.65 13 9.65Z" stroke="white" strokeWidth="1.3" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </button>
                                                        <div className="drp_dwn_nav_list-wrap">
                                                            <ul className="drp_dwn_nav_list">
                                                                <li>
                                                                    <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                        <span>Spot Orders</span>
                                                                    </Link >
                                                                </li>
                                                                <li>
                                                                    <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                        <span>Margin Orders</span>
                                                                    </Link >
                                                                </li>
                                                            </ul>
                                                            <ul className="drp_dwn_nav_list">
                                                                <li>
                                                                    <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                        <span>Spot Orders</span>
                                                                    </Link >
                                                                </li>
                                                                <li>
                                                                    <Link to="/" className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        <img className="drp_dwn_nav_item-svg" src={require('../Assets/Icons/spot-order.svg').default} alt="" />
                                                                        <span>Margin Orders</span>
                                                                    </Link >
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </>
                                                :
                                                // if user Not login 
                                                <>
                                                    <li className="header_navitem">
                                                        <Link to="/login" className="nav_btn s-normal-color header-btn font-w-500">
                                                            Log In

                                                        </Link>
                                                        <Link to="/signup" className="nav_btn s-normal-color header-btn font-w-500">
                                                            Sign Up
                                                        </Link>
                                                    </li>
                                                </>
                                            }

                                            <li className="header_navitem ">
                                                <div className="nav_icon line-height-0 header-collapse-btn header_navitem-hover">

                                                    <div className=" header-collapse-sbtn nav_drp_dwn-wrap">
                                                        <button className="line-height-0 nav_btn">
                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g opacity="0.7">
                                                                    <path d="M12 2C6.47916 2 2 6.4792 2 12C2 17.5208 6.47916 22 12 22C17.5208 22 22 17.5208 22 12C22 6.47916 17.5208 2 12 2ZM19.217 17.7053C18.3167 17.1836 17.3017 16.8012 16.2913 16.5353C16.5959 15.2649 16.7692 13.8598 16.796 12.4H21.1912C21.107 14.3309 20.4156 16.1902 19.217 17.7053ZM4.78308 17.7053C3.5844 16.1902 2.893 14.3309 2.80884 12.4H7.204C7.2308 13.8598 7.40412 15.2649 7.70868 16.5353C6.69084 16.8081 5.70192 17.1721 4.78308 17.7053ZM4.78304 6.29468C5.68012 6.81372 6.6864 7.19548 7.70868 7.46472C7.40408 8.73512 7.2308 10.1402 7.204 11.6H2.80884C2.893 9.66904 3.5844 7.80984 4.78304 6.29468ZM12.4 16.0048V12.4H15.9959C15.9694 13.8 15.8036 15.143 15.5132 16.3525C14.5628 16.1545 13.5056 16.0295 12.4 16.0048ZM8.48676 16.3525C8.19636 15.143 8.0306 13.8 8.00408 12.4H11.6V16.0048C10.5077 16.0292 9.45736 16.1506 8.48676 16.3525ZM11.6 7.99516V11.6H8.00408C8.0306 10.2 8.19636 8.857 8.48676 7.64752C9.46088 7.84928 10.499 7.9706 11.6 7.99516ZM12.4 11.6V7.99516C13.4754 7.97116 14.5204 7.85348 15.5132 7.64752C15.8037 8.857 15.9694 10.2 15.9959 11.6H12.4ZM12.4 7.19496V2.85068C13.2592 3.06516 14.0973 3.95956 14.7476 5.37844C14.9589 5.83932 15.145 6.34088 15.3052 6.87468C14.3476 7.06996 13.3652 7.17324 12.4 7.19496ZM11.6 2.85068V7.19496C10.6142 7.17276 9.6316 7.06588 8.69484 6.87468C8.85496 6.34088 9.04112 5.83932 9.25236 5.37844C9.90268 3.95952 10.7408 3.06512 11.6 2.85068ZM11.6 16.805V21.1493C10.7408 20.9348 9.90268 20.0404 9.25236 18.6216C9.04112 18.1607 8.85496 17.6591 8.69484 17.1253C9.63728 16.934 10.6092 16.8274 11.6 16.805ZM12.4 21.1493V16.805C13.437 16.8284 14.4012 16.9417 15.3052 17.1253C15.145 17.6592 14.9589 18.1607 14.7476 18.6216C14.0973 20.0405 13.2592 20.9348 12.4 21.1493ZM16.796 11.6C16.7692 10.1402 16.5959 8.73512 16.2913 7.46472C17.3036 7.19676 18.315 6.81784 19.217 6.29468C20.4156 7.80984 21.107 9.66904 21.1912 11.6H16.796ZM18.6826 5.67764C17.8773 6.12656 16.9878 6.4556 16.0853 6.69324C15.711 5.42764 15.1038 4.0208 14.1922 3.06512C15.8966 3.48296 17.4575 4.38284 18.6826 5.67764ZM9.80772 3.06512C8.89608 4.0208 8.289 5.42768 7.91464 6.69324C7.01664 6.45692 6.1288 6.12928 5.31732 5.67764C6.54252 4.38284 8.10332 3.48296 9.80772 3.06512ZM5.31736 18.3224C6.13432 17.8685 7.01768 17.5418 7.91468 17.3068C8.28904 18.5722 8.89612 19.9792 9.80776 20.9348C8.10328 20.517 6.54252 19.6172 5.31736 18.3224ZM14.1922 20.9349C15.1028 19.9804 15.7102 18.5748 16.0854 17.3068C16.9722 17.5395 17.8686 17.8692 18.6827 18.3224C17.4575 19.6172 15.8967 20.517 14.1922 20.9349Z" fill="white" />
                                                                </g>
                                                            </svg>
                                                        </button>
                                                        <div className="drp_dwn_nav_list-wrap currency_popup">
                                                            <h4 className="popup_heading z">Language/Region</h4>
                                                            <ul className="drp_dwn_nav_list">
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        currency_popup
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        currency_popup
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        currency_popup
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        currency_popup
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <span className="header-vertical-line"></span>

                                                    <div className="header-collapse-sbtn nav_drp_dwn-wrap">
                                                        <button className="nav_btn  nav_drp_dwn s-normal-color font-w-500"  >
                                                            USD
                                                        </button>
                                                        <div className="drp_dwn_nav_list-wrap currency_popup">
                                                            <h4 className="popup_heading z">Currency</h4>
                                                            <ul className="drp_dwn_nav_list">
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        currency_popup
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        currency_popup
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        currency_popup
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        currency_popup
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="drp_dwn_nav_item s-normal-color nav_btn ">
                                                                        EUR-€
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </li>

                                            {login ?
                                                // if user login
                                                <li className="header_navitem">
                                                    <div className="line-height-0">
                                                        <button className="line-height-0 header-profile-img ">
                                                            <img src={require('../Assets/Images/porile-image.jpg')} alt="" />
                                                        </button>
                                                    </div>
                                                </li>
                                                :
                                                // if user Not login 
                                                <li className="header_navitem nav_drp_dwn-wrap">
                                                    <button className="nav_drp_dwn s-normal-color line-height-0">
                                                        <div className="nav_icon header_navitem-hover">
                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.0143 2C12.2833 2 12.5013 2.20248 12.5013 2.45226V16.9383L17.6222 12.1827C17.8124 12.0061 18.1208 12.0061 18.311 12.1827C18.5012 12.3593 18.5012 12.6457 18.311 12.8223L12.3587 18.3499C12.1685 18.5266 11.8601 18.5266 11.67 18.3499L5.71767 12.8223C5.52749 12.6457 5.52749 12.3593 5.71767 12.1827C5.90786 12.0061 6.21622 12.0061 6.4064 12.1827L11.5273 16.9383V2.45226C11.5273 2.20248 11.7454 2 12.0143 2ZM5.5 21.5477C5.5 21.298 5.71804 21.0955 5.98701 21.0955H18.013C18.282 21.0955 18.5 21.298 18.5 21.5477C18.5 21.7975 18.282 22 18.013 22H5.98701C5.71804 22 5.5 21.7975 5.5 21.5477Z" fill="white" />
                                                            </svg>
                                                        </div>
                                                    </button>
                                                    <div className="drp_dwn_nav_list-wrap download_app">
                                                        <ul className="drp_dwn_nav_list">
                                                            <li>
                                                                <span>Scan QR Code to Download App</span>
                                                            </li>
                                                            <li>
                                                                <img className="drp_dwn_nav_item-svg" src={require('../Assets/Images/qr-code.jpg')} alt="" />
                                                            </li>
                                                            {/* <li>
                                                            <a href="/" className="view_more_btn">
                                                                View More
                                                                <span><img src={require("../Assets/Icons/download-icon.svg").default} alt="" /></span>
                                                            </a>
                                                        </li> */}
                                                        </ul>
                                                    </div>
                                                </li>
                                            }
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </header>
                        :
                        // Mobile Header Start
                        <header className={`header mobile-header ${login ? "login" : 'notlogin'} `}>
                            <div className="container">
                                <nav className="header_nav">
                                    {/* Left Side Nav */}
                                    <div className="header_nav-left">
                                        {/* Toggle Icon */}
                                        {toggleNav ?

                                            <button className="header_toggle line-height-0" onClick={() => { settoggleNav(!toggleNav) }}>
                                                <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 4C0 1.79086 1.79086 0 4 0H36C38.2091 0 40 1.79086 40 4V36C40 38.2091 38.2091 40 36 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="white" fillOpacity="0.02" />
                                                    <circle cx="14.5" cy={9} r="2.25" stroke="white" strokeWidth="1.5" />
                                                    <circle cx="14.5" cy={19} r="3.25" stroke="white" strokeWidth="1.5" />
                                                    <circle cx="14.5" cy={30} r="3.25" stroke="white" strokeWidth="1.5" />
                                                    <circle cx="25.5" cy={20} r="2.25" stroke="white" strokeWidth="1.5" />
                                                    <circle cx="25.5" cy={30} r="3.25" stroke="white" strokeWidth="1.5" />
                                                    <path d="M4 1H36V-1H4V1ZM39 4V36H41V4H39ZM36 39H4V41H36V39ZM1 36V4H-1V36H1ZM4 39C2.34315 39 1 37.6569 1 36H-1C-1 38.7614 1.23858 41 4 41V39ZM39 36C39 37.6569 37.6569 39 36 39V41C38.7614 41 41 38.7614 41 36H39ZM36 1C37.6569 1 39 2.34315 39 4H41C41 1.23858 38.7614 -1 36 -1V1ZM4 -1C1.23858 -1 -1 1.23858 -1 4H1C1 2.34315 2.34315 1 4 1V-1Z" fill="#636F7D" fillOpacity="0.3" />
                                                </svg>
                                            </button>
                                            :
                                            <button className="header_toggle line-height-0" onClick={() => { settoggleNav(!toggleNav) }}>
                                                <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M30 10L10 30" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M10 10L30 30" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        }


                                    </div>
                                    {/* Right Side Nav */}
                                    <div className="header_nav-rigth">
                                        <ul className="header_navlist">
                                            {login ?
                                                <>
                                                    <li className="header_navitem">
                                                        <button className="nav_drp_dwn s-normal-color line-height-0 ">
                                                            <div className="nav_icon header_navitem-hover">
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g opacity="0.7">
                                                                        <path d="M20.4605 16.1514L18.7587 14.1291C18.7289 14.0932 18.7127 14.0495 18.7127 14.0046V8.29494C18.7326 6.69776 18.0722 5.15472 16.8678 3.98468C15.6634 2.81465 14.0072 2.10705 12.2415 2.00812C11.3202 1.96529 10.3989 2.09221 9.53365 2.38115C8.66843 2.67008 7.8774 3.11499 7.20873 3.68877C6.54007 4.26256 6.00775 4.95321 5.6442 5.71869C5.28065 6.48416 5.09348 7.30843 5.09407 8.1413V14.2163C5.09407 14.2613 5.07793 14.305 5.04808 14.3409L3.53949 16.1514C3.26959 16.419 3.09155 16.7515 3.02701 17.1087C2.96246 17.4659 3.01419 17.8323 3.17591 18.1634C3.33762 18.4946 3.60236 18.7762 3.93798 18.9741C4.27359 19.172 4.66563 19.2776 5.06648 19.2782H18.9197C19.3217 19.2801 19.7156 19.1762 20.0533 18.9792C20.391 18.7823 20.6579 18.5008 20.8213 18.1692C20.9847 17.8375 21.0376 17.4701 20.9735 17.1118C20.9095 16.7535 20.7312 16.4197 20.4605 16.1514ZM19.5406 17.6463C19.4886 17.758 19.4008 17.8532 19.2886 17.9198C19.1764 17.9864 19.0448 18.0212 18.9105 18.02H5.06648C4.93439 18.0178 4.80579 17.9814 4.69595 17.9151C4.58611 17.8489 4.49966 17.7555 4.44686 17.6462C4.39406 17.5368 4.37714 17.4161 4.39811 17.2984C4.41908 17.1806 4.47706 17.0708 4.56515 16.9819L4.61574 16.9279L6.16572 15.0842C6.36826 14.832 6.47623 14.5279 6.47388 14.2163V8.1413C6.47387 7.49753 6.61462 6.86009 6.88805 6.26552C7.16148 5.67096 7.56222 5.13098 8.06728 4.67653C8.57234 4.22209 9.17179 3.86212 9.83126 3.61728C10.4907 3.37243 11.1972 3.24752 11.9103 3.24971H12.1771C13.589 3.33367 14.9112 3.90401 15.8707 4.84292C16.8302 5.78183 17.3537 7.01759 17.3329 8.29494V14.0253C17.3329 14.343 17.4476 14.6521 17.6595 14.9057L19.3796 16.9487L19.4256 16.9943C19.5181 17.0826 19.5794 17.1937 19.6015 17.3136C19.6236 17.4334 19.6056 17.5565 19.5498 17.667L19.5406 17.6463Z" fill="white" />
                                                                        <path d="M14.7157 20.8896C14.3705 21.239 13.9475 21.5185 13.4743 21.7099C13.0011 21.9013 12.4884 22.0003 11.9699 22.0003C11.4514 22.0003 10.9387 21.9013 10.4655 21.7099C9.99228 21.5185 9.56923 21.239 9.22407 20.8896C9.11366 20.7654 9.06016 20.6077 9.07457 20.4489C9.08898 20.2902 9.1702 20.1425 9.30154 20.0361C9.43288 19.9298 9.60435 19.8729 9.7807 19.8772C9.95706 19.8815 10.1249 19.9466 10.2497 20.0591C10.4655 20.278 10.7301 20.4531 11.0261 20.5731C11.3222 20.693 11.6431 20.755 11.9676 20.755C12.2921 20.755 12.6129 20.693 12.909 20.5731C13.2051 20.4531 13.4697 20.278 13.6854 20.0591C13.8102 19.9466 13.9781 19.8815 14.1544 19.8772C14.3308 19.8729 14.5023 19.9298 14.6336 20.0361C14.7649 20.1425 14.8462 20.2902 14.8606 20.4489C14.875 20.6077 14.8215 20.7654 14.7111 20.8896H14.7157Z" fill="white" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </button>

                                                    </li>
                                                </>
                                                :
                                                <>
                                                    <li className="header_navitem">
                                                        <Link to="/login" className="nav_btn s-normal-color header-btn font-w-500">
                                                            Log In
                                                        </Link>
                                                    </li>
                                                </>
                                            }
                                            {toggleNav &&
                                                <li className="header_navitem">
                                                    <div className="nav_icon line-height-0  header_navitem-hover">
                                                        <button className="line-height-0 nav_btn">
                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g opacity="0.7">
                                                                    <path d="M12 2C6.47916 2 2 6.4792 2 12C2 17.5208 6.47916 22 12 22C17.5208 22 22 17.5208 22 12C22 6.47916 17.5208 2 12 2ZM19.217 17.7053C18.3167 17.1836 17.3017 16.8012 16.2913 16.5353C16.5959 15.2649 16.7692 13.8598 16.796 12.4H21.1912C21.107 14.3309 20.4156 16.1902 19.217 17.7053ZM4.78308 17.7053C3.5844 16.1902 2.893 14.3309 2.80884 12.4H7.204C7.2308 13.8598 7.40412 15.2649 7.70868 16.5353C6.69084 16.8081 5.70192 17.1721 4.78308 17.7053ZM4.78304 6.29468C5.68012 6.81372 6.6864 7.19548 7.70868 7.46472C7.40408 8.73512 7.2308 10.1402 7.204 11.6H2.80884C2.893 9.66904 3.5844 7.80984 4.78304 6.29468ZM12.4 16.0048V12.4H15.9959C15.9694 13.8 15.8036 15.143 15.5132 16.3525C14.5628 16.1545 13.5056 16.0295 12.4 16.0048ZM8.48676 16.3525C8.19636 15.143 8.0306 13.8 8.00408 12.4H11.6V16.0048C10.5077 16.0292 9.45736 16.1506 8.48676 16.3525ZM11.6 7.99516V11.6H8.00408C8.0306 10.2 8.19636 8.857 8.48676 7.64752C9.46088 7.84928 10.499 7.9706 11.6 7.99516ZM12.4 11.6V7.99516C13.4754 7.97116 14.5204 7.85348 15.5132 7.64752C15.8037 8.857 15.9694 10.2 15.9959 11.6H12.4ZM12.4 7.19496V2.85068C13.2592 3.06516 14.0973 3.95956 14.7476 5.37844C14.9589 5.83932 15.145 6.34088 15.3052 6.87468C14.3476 7.06996 13.3652 7.17324 12.4 7.19496ZM11.6 2.85068V7.19496C10.6142 7.17276 9.6316 7.06588 8.69484 6.87468C8.85496 6.34088 9.04112 5.83932 9.25236 5.37844C9.90268 3.95952 10.7408 3.06512 11.6 2.85068ZM11.6 16.805V21.1493C10.7408 20.9348 9.90268 20.0404 9.25236 18.6216C9.04112 18.1607 8.85496 17.6591 8.69484 17.1253C9.63728 16.934 10.6092 16.8274 11.6 16.805ZM12.4 21.1493V16.805C13.437 16.8284 14.4012 16.9417 15.3052 17.1253C15.145 17.6592 14.9589 18.1607 14.7476 18.6216C14.0973 20.0405 13.2592 20.9348 12.4 21.1493ZM16.796 11.6C16.7692 10.1402 16.5959 8.73512 16.2913 7.46472C17.3036 7.19676 18.315 6.81784 19.217 6.29468C20.4156 7.80984 21.107 9.66904 21.1912 11.6H16.796ZM18.6826 5.67764C17.8773 6.12656 16.9878 6.4556 16.0853 6.69324C15.711 5.42764 15.1038 4.0208 14.1922 3.06512C15.8966 3.48296 17.4575 4.38284 18.6826 5.67764ZM9.80772 3.06512C8.89608 4.0208 8.289 5.42768 7.91464 6.69324C7.01664 6.45692 6.1288 6.12928 5.31732 5.67764C6.54252 4.38284 8.10332 3.48296 9.80772 3.06512ZM5.31736 18.3224C6.13432 17.8685 7.01768 17.5418 7.91468 17.3068C8.28904 18.5722 8.89612 19.9792 9.80776 20.9348C8.10328 20.517 6.54252 19.6172 5.31736 18.3224ZM14.1922 20.9349C15.1028 19.9804 15.7102 18.5748 16.0854 17.3068C16.9722 17.5395 17.8686 17.8692 18.6827 18.3224C17.4575 19.6172 15.8967 20.517 14.1922 20.9349Z" fill="white" />
                                                                </g>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </li>
                                            }

                                            {/* Profile  */}
                                            {login &&
                                                <li className="header_navitem">
                                                    <div className="line-height-0">
                                                        <button className="line-height-0 header-profile-img ">
                                                            <img src={require('../Assets/Images/porile-image.jpg')} alt="" />
                                                        </button>
                                                    </div>
                                                </li>
                                            }
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            {/* Mobile Header Side bar */}
                            <aside className={`header_toggle_open ${toggleNav ? "" : "toggleOpen"} ${login ? "login" : 'notlogin'} `}>
                                <ul className="mobile_navlist">
                                    <li>
                                        <span className="mobile_sub_navlist-type">Crypto</span>
                                        <ul className="mobile_sub_navlist">
                                            <li className="mobile_sub_navlist_item">
                                                <button className="nav_btn nav_drp_dwn s-normal-color" onClick={(e) => { openMobileDropDown(e) }}>
                                                    <span>
                                                        Buy Crypto
                                                    </span>
                                                    <svg className="nav_drp_dwn-svg" width={13} height={8} viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.5 1.5L6.5 6.5L1.5 1.5" stroke="#F7F8FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                                <div className="mobile_navdropdown">
                                                    <ul className="nestedsub_navlist mobile_sub_navlist_item">
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo</Link >
                                                        </li>
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo1</Link >
                                                        </li>
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo2</Link >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="mobile_sub_navlist_item">
                                                <button className="nav_btn nav_drp_dwn s-normal-color" onClick={(e) => { openMobileDropDown(e) }}>
                                                    <span>
                                                        Markets
                                                    </span>
                                                    <svg className="nav_drp_dwn-svg" width={13} height={8} viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.5 1.5L6.5 6.5L1.5 1.5" stroke="#F7F8FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                                <div className="mobile_navdropdown">
                                                    <ul className="nestedsub_navlist mobile_sub_navlist_item">
                                                        <li className="">
                                                            <Link to="/market" className="nav_btn s-normal-color"> Market</Link >
                                                        </li>
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo1</Link >
                                                        </li>
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo2</Link >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="mobile_sub_navlist_item">
                                                <button className="nav_btn nav_drp_dwn s-normal-color" onClick={(e) => { openMobileDropDown(e) }}>
                                                    <span>
                                                        Trade
                                                    </span>
                                                    <svg className="nav_drp_dwn-svg" width={13} height={8} viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.5 1.5L6.5 6.5L1.5 1.5" stroke="#F7F8FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                                <div className="mobile_navdropdown">
                                                    <ul className="nestedsub_navlist mobile_sub_navlist_item">
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo</Link >
                                                        </li>
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo1</Link >
                                                        </li>
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo2</Link >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="mobile_sub_navlist_item">
                                                <button className="nav_btn nav_drp_dwn s-normal-color" onClick={(e) => { openMobileDropDown(e) }}>
                                                    <span>
                                                        Derivatives
                                                    </span>
                                                    <svg className="nav_drp_dwn-svg" width={13} height={8} viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.5 1.5L6.5 6.5L1.5 1.5" stroke="#F7F8FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                                <div className="mobile_navdropdown">
                                                    <ul className="nestedsub_navlist mobile_sub_navlist_item">
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo</Link >
                                                        </li>
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo1</Link >
                                                        </li>
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo2</Link >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="mobile_sub_navlist_item">
                                                <button className="nav_btn nav_drp_dwn s-normal-color" onClick={(e) => { openMobileDropDown(e) }}>
                                                    <span>
                                                        Earn
                                                    </span>
                                                    <svg className="nav_drp_dwn-svg" width={13} height={8} viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.5 1.5L6.5 6.5L1.5 1.5" stroke="#F7F8FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                                <div className="mobile_navdropdown">
                                                    <ul className="nestedsub_navlist mobile_sub_navlist_item">
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo</Link >
                                                        </li>
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo1</Link >
                                                        </li>
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo2</Link >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="mobile_sub_navlist-type">Crypto</span>
                                        <ul className="mobile_sub_navlist">
                                            <li className="mobile_sub_navlist_item">
                                                <button className="nav_btn nav_drp_dwn s-normal-color" onClick={(e) => { openMobileDropDown(e) }}>
                                                    <span>
                                                        Language
                                                    </span>
                                                    <svg className="nav_drp_dwn-svg" width={13} height={8} viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.5 1.5L6.5 6.5L1.5 1.5" stroke="#F7F8FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                                <div className="mobile_navdropdown">
                                                    <ul className="nestedsub_navlist mobile_sub_navlist_item">
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo</Link >
                                                        </li>
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo1</Link >
                                                        </li>
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo2</Link >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="mobile_sub_navlist_item">
                                                <button className="nav_btn nav_drp_dwn s-normal-color" onClick={(e) => { openMobileDropDown(e) }}>
                                                    <span>
                                                        Curancy | USDT
                                                    </span>
                                                    <svg className="nav_drp_dwn-svg" width={13} height={8} viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.5 1.5L6.5 6.5L1.5 1.5" stroke="#F7F8FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                                <div className="mobile_navdropdown">
                                                    <ul className="nestedsub_navlist mobile_sub_navlist_item">
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo</Link >
                                                        </li>
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo1</Link >
                                                        </li>
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo2</Link >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="mobile_sub_navlist_item">
                                                <button className="nav_btn nav_drp_dwn s-normal-color" onClick={(e) => { openMobileDropDown(e) }}>
                                                    <span>
                                                        Wallet
                                                    </span>
                                                    <svg className="nav_drp_dwn-svg" width={13} height={8} viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.5 1.5L6.5 6.5L1.5 1.5" stroke="#F7F8FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                                <div className="mobile_navdropdown">
                                                    <ul className="nestedsub_navlist mobile_sub_navlist_item">
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo</Link >
                                                        </li>
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo1</Link >
                                                        </li>
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo2</Link >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="mobile_sub_navlist_item">
                                                <button className="nav_btn nav_drp_dwn s-normal-color" onClick={(e) => { openMobileDropDown(e) }}>
                                                    <span>
                                                        Orders
                                                    </span>
                                                    <svg className="nav_drp_dwn-svg" width={13} height={8} viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.5 1.5L6.5 6.5L1.5 1.5" stroke="#F7F8FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                                <div className="mobile_navdropdown">
                                                    <ul className="nestedsub_navlist mobile_sub_navlist_item">
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo</Link >
                                                        </li>
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo1</Link >
                                                        </li>
                                                        <li className="">
                                                            <Link to="/" className="nav_btn s-normal-color"> Demo2</Link >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="mobile_navlist_bottom">
                                    <Link to="/" className="mobile_sub_navlist-type">Terms of Use</Link >
                                    <Link to="/" className="mobile_sub_navlist-type">Privacy Policy</Link >
                                </div>
                                <hr className="mobile_navlist_line" />
                            </aside>
                        </header>
                        // Mobile Header End
                    }
                </>
            }
        </>
    )
}

export default Header;