const FaqBanner = () => {
    return (
        <>
            <section className="faq_banner sec-py">
                <div className="container">
                    <div className="sec_content">
                        <h2 className="sec_heading s-normal-color">
                            Frequently
                            Asked  Questions
                        </h2>
                        <div className="sec_input">
                            <form className="sec_input_form">
                                <div className="input">
                                    <label htmlFor="search">
                                        <img src={require("../Assets/Icons/search-icon.svg").default} alt="" />
                                    </label>
                                    <input id="search" type="text" placeholder="Search query…" />
                                </div>
                            </form>
                            <p className="sec_info">
                                Purus consequat sit lacus, blandit lectus. Eu adipiscing mollis quis quisque lorem.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
export default FaqBanner;
