
type CreateAccStep = {
    StepNumber: string,
    stepHeading: string,
    stepInfo: string,
}
const GetFirstCoind = () => {
    function CreateAccStep(props: CreateAccStep) {
        return (
            <>
                <div className="create_accc_step">
                    <div className="step_number s-normal-color">
                        {props.StepNumber}
                    </div>
                    <div className="step_info ">
                        <h3 className="s-normal-color">
                            {props.stepHeading}
                        </h3>
                        <span className="s-normal-color">
                            {props.stepInfo}
                        </span>
                    </div>
                </div>
            </>
        )
    }
    const StepData = [
        {
            StepNumber: "1",
            stepHeading: "Create Sikkaa Account",
            stepInfo: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        },
        {
            StepNumber: "2",
            stepHeading: "Buy coins with a credit ca..",
            stepInfo: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        },
        {
            StepNumber: "3",
            stepHeading: "Low-Cost Trading",
            stepInfo: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        }
    ]
    return (
        <>
            <section className="sec_get_first_Coin sec-py s-primary-bg">
                <div className="container">
                    <div className="sec_content">
                        <div className="sec_text">
                            <h2 className="sec_heading s-normal-color">
                                Get Your First Coin in Minutes
                            </h2>
                            <p className="sec_info s-normal-color">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                            <a className="cta_button" href="/">Get Started</a>
                        </div>
                        <div className="sec_text">
                            {StepData.map(function (val: any, index: any) {
                                return (
                                    <div key={index}>
                                        <CreateAccStep

                                            StepNumber={val.StepNumber}
                                            stepHeading={val.stepHeading}
                                            stepInfo={val.stepInfo}
                                        />
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default GetFirstCoind;