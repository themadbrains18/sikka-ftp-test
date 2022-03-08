import { useEffect, useState } from "react";
const Faqhelp = () => {
    const [Dropdown, SetDropdown] = useState(false)
    const FaqDropdown = () => {
        SetDropdown(!Dropdown)
    }
    useEffect(() => {
        window.addEventListener("load", () => {
            let faqItem: any = document.querySelector(".faq_content .faq_ques");
            faqItem.classList.add("active");
            faqItem.nextElementSibling.setAttribute("style", `height:${faqItem.nextElementSibling.scrollHeight}px`);
        })
    }, []);
    function Faqclicked(e: any) {
        let favActive: any = document.querySelector(".faq_content .faq_ques.active");
        if (favActive) {
            favActive.classList.remove("active");
            favActive.nextElementSibling.removeAttribute("style");
        }
        e.currentTarget.classList.add("active");
        e.currentTarget.nextElementSibling.setAttribute("style", `height:${e.currentTarget.nextElementSibling.scrollHeight}px`);

    }
    const FaqData = [
        {
            FaqQues: "What is Bitcoin?",
            FaqAnsHeading: "What is Bitcoin?",
            FaqAnsinfo: "Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            linkInfo: "Bitcoin is a decentralized digital currency.Com",
            linkBtn: "copy-icon",
            FaqAnssecondInfo: "Consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.Contrary to popular belief, Lorem Ipsum is not simply random text. ",
            FaqAnsfooterInfo: "Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator.",
        },
        {
            FaqQues: "Sikkaa Affiliate Program",
            FaqAnsHeading: "What is Bitcoin?",
            FaqAnsinfo: "Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            linkInfo: "Bitcoin is a decentralized digital currency.Com",
            linkBtn: "copy-icon",
            FaqAnssecondInfo: "Consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.Contrary to popular belief, Lorem Ipsum is not simply random text. ",
            FaqAnsfooterInfo: "Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator.",
        },
        {
            FaqQues: "The Beta of New Referral Program",
            FaqAnsHeading: "What is Bitcoin?",
            FaqAnsinfo: "Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            linkInfo: "Bitcoin is a decentralized digital currency.Com",
            linkBtn: "copy-icon",
            FaqAnssecondInfo: "Consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.Contrary to popular belief, Lorem Ipsum is not simply random text. ",
            FaqAnsfooterInfo: "Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator.",
        },
        {
            FaqQues: "Account Functions",
            FaqAnsHeading: "What is Bitcoin?",
            FaqAnsinfo: "Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            linkInfo: "Bitcoin is a decentralized digital currency.Com",
            linkBtn: "copy-icon",
            FaqAnssecondInfo: "Consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.Contrary to popular belief, Lorem Ipsum is not simply random text. ",
            FaqAnsfooterInfo: "Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator.",
        },
        {
            FaqQues: "List/Delist Tokens & ST Rules",
            FaqAnsHeading: "What is Bitcoin?",
            FaqAnsinfo: "Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            linkInfo: "Bitcoin is a decentralized digital currency.Com",
            linkBtn: "copy-icon",
            FaqAnssecondInfo: "Consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.Contrary to popular belief, Lorem Ipsum is not simply random text. ",
            FaqAnsfooterInfo: "Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator.",
        },
        {
            FaqQues: "API",
            FaqAnsHeading: "What is Bitcoin?",
            FaqAnsinfo: "Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            linkInfo: "Bitcoin is a decentralized digital currency.Com",
            linkBtn: "copy-icon",
            FaqAnssecondInfo: "Consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.Contrary to popular belief, Lorem Ipsum is not simply random text. ",
            FaqAnsfooterInfo: "Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator.",
        },
        {
            FaqQues: "Answer Bot Guidance Article",
            FaqAnsHeading: "What is Bitcoin?",
            FaqAnsinfo: "Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            linkInfo: "Bitcoin is a decentralized digital currency.Com",
            linkBtn: "copy-icon",
            FaqAnssecondInfo: "Consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.Contrary to popular belief, Lorem Ipsum is not simply random text. ",
            FaqAnsfooterInfo: "Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator.",
        },
        {
            FaqQues: "Security",
            FaqAnsHeading: "What is Bitcoin?",
            FaqAnsinfo: "Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            linkInfo: "Bitcoin is a decentralized digital currency.Com",
            linkBtn: "copy-icon",
            FaqAnssecondInfo: "Consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.Contrary to popular belief, Lorem Ipsum is not simply random text. ",
            FaqAnsfooterInfo: "Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator.",
        },
        {
            FaqQues: "Can I start trading with just $1?",
            FaqAnsHeading: "What is Bitcoin?",
            FaqAnsinfo: "Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            linkInfo: "Bitcoin is a decentralized digital currency.Com",
            linkBtn: "copy-icon",
            FaqAnssecondInfo: "Consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.Contrary to popular belief, Lorem Ipsum is not simply random text. ",
            FaqAnsfooterInfo: "Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator.",
        },
    ]
    const CopyTxt = (val: any) => {
        var textField = document.createElement('textarea')
        textField.innerText = val;
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy');
        textField.remove();
    }
    return (
        <>
            <section className="sec_faq__help sec-py">
                <div className="container">
                    <div className="faq_header">
                        <div className="faq_btn">
                            <button className="faq s-normal-color" onClick={FaqDropdown}>
                                FAQ.
                                <span className="arow_icon">
                                    <img src={require("../Assets/Icons/arrow-icon-dropwdown.svg").default} alt="" />
                                </span>
                            </button>
                            <a className=" d_help_center help_center t-normal-color" href="/" onClick={FaqDropdown}>
                                Sikkaa Help Center
                            </a>
                            {Dropdown && (
                                <>
                                    <div className="dropdown_item">
                                        <button className="faq s-normal-color" onClick={FaqDropdown}>
                                            FAQ.
                                        </button>
                                        <a className="m_help_center help_center t-normal-color" href="/" onClick={FaqDropdown}>
                                            Sikkaa Help Center
                                        </a>
                                    </div>
                                    <div className="bg_layer" onClick={FaqDropdown}>
                                    </div>
                                </>

                            )}
                        </div>
                        <div className="faq_language">
                            <a className="submit_request f-cta-color" href="/">
                                Submit a Request
                            </a>
                        </div>
                    </div>
                    <div className="faq_content">
                        <ul>
                            <li>
                                <h3 className="faq_heading t-primary-color">FAQ.</h3>
                            </li>
                            {FaqData.map((val: any, index: any) => {
                                return (
                                    <li key={index} >
                                        <div className={`faq_ques t-normal-color`} onClick={(e: any) => { Faqclicked(e) }} >
                                            <h3>
                                                {val.FaqQues}
                                            </h3>
                                            <span>
                                                <svg width={12} height={3} viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1.5H6H11" stroke="#F9B403" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="faq_ans">
                                            <h3 className="faq_ans_heading">
                                                {val.FaqAnsHeading}
                                            </h3>
                                            <p className="Faqans_info">
                                                {val.FaqAnsinfo}
                                            </p>
                                            <div className="faq_ans_link">
                                                <span>
                                                    {val.linkInfo}
                                                </span>
                                                <button onClick={() => CopyTxt(val.linkInfo)}>
                                                    <img src={require(`../Assets/Icons/${val.linkBtn}.svg`)} alt="" />
                                                </button>
                                            </div>
                                            <p className="Faqans_info">
                                                {val.FaqAnssecondInfo}
                                            </p>
                                            <p className="faq_ans_footer_info">
                                                {val.FaqAnsfooterInfo}
                                            </p>
                                        </div>
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Faqhelp;