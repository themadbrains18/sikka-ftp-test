import React from "react";
import FaqBanner from "../Sections/Faq-banner";
import Faqhelp from "../Sections/Faq-help";
import "../Assets/Scss/template-scss/FaqPage.scss"
const FaqPage = () => {
    return (
        <>
            {/* Faq Banner Section */}
            <FaqBanner />

            {/* Faq Help Section */}
            <Faqhelp />
        </>
    )
}
export default FaqPage;