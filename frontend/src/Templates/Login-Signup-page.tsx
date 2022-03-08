
import '../Assets/Scss/template-scss/login-signup-page.scss'
import { Link } from "react-router-dom";
import {useState } from 'react';

type formTypes = {
    formType: "signup" | "login" | "forgot-password" | "login-qr",
    getheaderHeightlet : any
}



const LoginSignup = (props: formTypes) => {
    const [showPassword, setShowPassword] = useState(false);
    console.log("login page header: "+ props.getheaderHeightlet)
    
    
    return (
        <>
            <section className="account_form" style={{minHeight:`calc(100vh - ${props.getheaderHeightlet}px)`}}>
                <div className="container">
                    <div className="account_form_inner sec-py">
                        <div className="account_form_head txt-center">
                            <div className="web_logo line-height-0">
                                <img src={require('../Assets/Icons/logo.svg').default} alt="" />
                            </div>
                            <h1 className="form_web_name">
                                Sikkaa
                            </h1>
                            {props.formType === "signup" ?
                                // signup Page
                                <p className="account_form_head_txt">
                                    Already have an account?
                                    &nbsp;
                                    <Link to="/login" className="account_form_head_link">
                                        Log in
                                    </Link>
                                </p>
                                :
                                // Login Page
                                <p className="account_form_head_txt">
                                    Haven’t registered?
                                    &nbsp;
                                    <Link to="/signup" className="account_form_head_link">
                                        Sign up now
                                    </Link>
                                </p>
                            }
                        </div>
                        <div className="account_form_content">
                            {/* signup Page  */}
                            {props.formType === "signup" &&
                                <form id="signupForm">
                                    <div className="form_group_wrap">
                                        <div className="form_group form_group-flex">
                                            <input type="text" className='form_control' placeholder='Phone Or Email..' />
                                            <button className='optSendbtn' type='button'>Send Code</button>

                                        </div>
                                        <div className="form_group txt-right forgot_password-mobile">
                                            <button type='button' className='forgot_password  f-cta-color'>Cannot receive SMS?</button>
                                        </div>
                                        <div className="form_group">
                                            <input type="text" className='form_control' placeholder='Phone Or Email Verification Code' />
                                        </div>
                                        <div className="form_group form_group-password">
                                            <input type={showPassword ? "text" : "password"} className='form_control' placeholder='Set Login password' />
                                            <button type="button" className='passwod_btn' onClick={() => { setShowPassword(!showPassword) }}>
                                                {showPassword ?
                                                    <img src={require(`../Assets/Icons/password-show.svg`).default} alt="" />
                                                    :
                                                    <img src={require(`../Assets/Icons/password-hide.svg`).default} alt="" />
                                                }
                                            </button>
                                        </div>
                                        <div className="form_group">
                                            <input type="text" className='form_control' placeholder='Referral Code (Optional)' />
                                        </div>
                                        <div className="form_group-checkbox">
                                            <div className='form_control-checkbox-wrap'>
                                                <input type="checkbox" id="termCondition" className='form_control-checkbox' />
                                                <label className='check_active' htmlFor="termCondition"><img src={require('../Assets/Icons/checkbox.svg').default} alt="" /></label>
                                            </div>
                                            <label htmlFor="termCondition">I have read and agree to the Terms of Use</label>
                                        </div>
                                        <div className="form_group txt-right forgot_password-dektop">
                                            <button type='button' className='forgot_password  f-cta-color'>Cannot receive SMS?</button>
                                        </div>
                                    </div>
                                    <div className="form_group_btn_wrap">
                                        <button type='submit' className='form_cta_button'>
                                            Sign Up
                                        </button>
                                    </div>
                                </form>
                            }
                            {/* Login Page */}
                            {props.formType === "login" &&
                                <form id="loginForm">
                                    <div className="form_group_wrap">

                                        <div className="form_group">
                                            <input type="text" className='form_control' placeholder='Phone Or Email Verification Code' />
                                        </div>
                                        <div className="form_group form_group-password">
                                            <input type={showPassword ? "text" : "password"} className='form_control' placeholder='Set Login password' />
                                            <button type="button" className='passwod_btn' onClick={() => { setShowPassword(!showPassword) }}>
                                                {showPassword ?
                                                    <img src={require(`../Assets/Icons/password-show.svg`).default} alt="" />
                                                    :
                                                    <img src={require(`../Assets/Icons/password-hide.svg`).default} alt="" />
                                                }
                                            </button>
                                        </div>

                                        <div className="form_group ">
                                            <Link to='/login-qr' className='forgot_password  f-cta-color t-normal-color'>
                                                Log In With <span className='f-cta-color font-w-600'>QR Code</span>
                                            </Link>
                                        </div>

                                        <div className="form_group txt-right forgot_password-dektop">
                                            <Link to='/forgot-password' className='forgot_password t-normal-color'>Forgot Password?</Link>
                                        </div>
                                    </div>
                                    <div className="form_group_btn_wrap">
                                        <button type='submit' className='form_cta_button'>
                                            Log In
                                        </button>
                                    </div>
                                </form>
                            }
                            {/* forgot-password */}
                            {props.formType === "forgot-password" &&
                                <form id="forgotpassword">P
                                    <div className="form_group_wrap">

                                        <div className="form_group form_group-flex">
                                            <input type="text" className='form_control' placeholder='Phone Or Email..' />
                                            <button className='optSendbtn' type='button'>Send Code</button>

                                        </div>
                                        <div className="form_group">
                                            <input type="text" className='form_control' placeholder='Phone Or Email Verification Code' />
                                        </div>

                                        <div className="form_group ">
                                        </div>

                                        <div className="form_group txt-right forgot_password-dektop">
                                            <button type='button' className='forgot_password f-cta-color'>Cannot receive SMS?</button>
                                        </div>
                                    </div>
                                    <div className="form_group_btn_wrap">
                                        <button type='submit' className='form_cta_button'>
                                            Set New Password
                                        </button>
                                    </div>
                                </form>
                            }
                            {/* login-qr */}
                            {props.formType === "login-qr" &&
                                <form id="loginQr" className='txt-center'>
                                    <div className='qr_wrap'>
                                        <div className='qr_img'>
                                            <img src={require('../Assets/Images/qr-code.jpg')} alt="" />
                                        </div>
                                        <div className='qr-border'>
                                            <span className='qr-bdr qr-bdr-top-left'></span>
                                            <span className='qr-bdr qr-bdr-top-right'></span>
                                            <span className='qr-bdr qr-bdr-left-center'></span>
                                            <span className='qr-bdr qr-bdr-right-center'></span>
                                            <span className='qr-bdr qr-bdr-bottom-right'></span>
                                            <span className='qr-bdr qr-bdr-bottom-left'></span>
                                        </div>
                                    </div>
                                    <p className='qr_info'>Open Sikkaa App and scan the QR code to log in</p>
                                    <div className="form_group_btn_wrap qr">
                                        <button type='submit' className='f-cta-color font-w-600 code_refresh'>
                                            Refresh Code
                                        </button>
                                    </div>
                                </form>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}
export default LoginSignup;