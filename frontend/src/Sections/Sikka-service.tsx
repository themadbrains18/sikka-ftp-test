type Servicecard = {
    Crdimg: string,
    CrdHeading: string,
    CrdInfo: string,
    CrdBtn: string,
    CrdBtnImg: string,
}
const SikkaService = () => {
    function ServiceCard(props: Servicecard) {
        return (<>
            <div className="card">
                <img src={require(`../Assets/Icons/${props.Crdimg}.svg`)} alt="" />
                <h3 className="card_heading t-primary-color">
                    {props.CrdHeading}
                </h3>
                <p className="card_info t-normal-color">
                    {props.CrdInfo}
                </p>
                <a className="f-primary-color" href="/">
                    {props.CrdBtn}
                    <img src={require(`../Assets/Icons/${props.CrdBtnImg}.svg`)} alt="" />
                </a>
            </div>
        </>)
    }
    const CardData = [
        {
            Crdimg: "service-card-icon1",
            CrdHeading: "24/7 Customer Service",
            CrdInfo: "Contact Sikkaa customer support with your questions at any time.",
            CrdBtn: "Get in Touch",
            CrdBtnImg: "service-card-arrow",
        },
        {
            Crdimg: "service-card-icon2",
            CrdHeading: "Community",
            CrdInfo: "The Sikkaa Global Community covers 205 countries and 19 languages.",
            CrdBtn: "Explore Community",
            CrdBtnImg: "service-card-arrow",
        },
        {
            Crdimg: "service-card-icon3",
            CrdHeading: "Sikkaa News",
            CrdInfo: "Keeping you up to date with the latest news in crypto.",
            CrdBtn: "Visit the News",
            CrdBtnImg: "service-card-arrow",
        },
    ]
    return (
        <>
            <section className="sec_sikka__service sec-py s-secondary-bg">
                <div className="container">
                    <h2 className="sec_heading">
                        Sikkaa by Your Side
                    </h2>
                    <div className="service__card">
                        {CardData.map(function (value, index) {
                            return (
                                <ServiceCard
                                    key={index}
                                    Crdimg={value.Crdimg}
                                    CrdHeading={value.CrdHeading}
                                    CrdInfo={value.CrdInfo}
                                    CrdBtn={value.CrdBtn}
                                    CrdBtnImg={value.CrdBtnImg}
                                />
                            )
                        })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}
export default SikkaService;