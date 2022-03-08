import { useEffect } from "react";
import { Link } from "react-router-dom";
// type FaqTxt = {
//     FaqQues: string,
//     FaqAns: string,
//     id: any,
//     key: any,

// }

const FaqData = [
    {
        FaqQues: "What is Bitcoin?",
        FaqAns: "Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.",
    },
    {
        FaqQues: "What is Bitcoin?",
        FaqAns: "Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.",
    },
    {
        FaqQues: "Can I start trading with just $1?",
        FaqAns: "Bitcoin is a decentralized digital currency, meaning that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.",
    },
    {
        FaqQues: "Is there an exchange limit between fiat and crypto?",
        FaqAns: "Bitcoin is a decentralized digital currency, meaniWng that it lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-to-peer network without the need for intermediaries.",
    }
]
const Faq = () => {
    useEffect(() => {
        window.addEventListener("load", () => {
            let faqItem: any = document.querySelector(".sec_faq_content .faq_ques");
            faqItem.classList.add("active");
            faqItem.nextElementSibling.setAttribute("style", `height:${faqItem.nextElementSibling.scrollHeight}px`);
        })
    }, []);
    function Faqclicked(e: any) {
        let favActive: any = document.querySelector(".sec_faq_content .faq_ques.active");
        if (favActive) {
            favActive.classList.remove("active");
            favActive.nextElementSibling.removeAttribute("style");
        }
        e.currentTarget.classList.add("active");
        e.currentTarget.nextElementSibling.setAttribute("style", `height:${e.currentTarget.nextElementSibling.scrollHeight}px`);

    }
    return (
        <>
            <section className="sec_faq s-secondary-bg sec-py">
                <div className="container">
                    <div className="sec_content">
                        <div className="sec_text">
                            <h2 className="sec_heading">
                                Frequently Ask Questions
                            </h2>
                            <div className="sec_button">
                                <Link to="/" className=" t-normal-color">View More<span><svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L1 11.5" stroke="#636F7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></Link>
                            </div>
                        </div>
                        <div className="sec_faq_content">
                            <ul>
                                {FaqData.map((val: any, index: any) => {
                                    return (
                                        <li key={index} >
                                            <div className={`faq_ques t-normal-color`} onClick={(e: any) => { Faqclicked(e) }} >
                                                <h3>
                                                    {val.FaqQues}
                                                </h3>
                                                <span>
                                                    <svg width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#636F7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="faq_ans ">
                                                <p>
                                                    {val.FaqAns}
                                                </p>
                                            </div>
                                        </li>
                                    )
                                })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Faq;