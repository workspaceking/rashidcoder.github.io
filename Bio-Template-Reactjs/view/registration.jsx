class Registration extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                form: [
                    {
                        type: "text",
                        placeholder: "FirstName",
                        className: "xyz"
                    },
                    {
                        type: "text",
                        placeholder: "LastName",
                        className: "xyz"
                    },
                    {
                        type: "text",
                        placeholder: "Phone Number",
                        className: "xyz"
                    },
                    {
                        type: "email",
                        placeholder: "Email",
                        className: "xyz"
                    },
                ],
                form2: [
                    {
                        type: "password",
                        placeholder: "Password",
                        className: "xyz"
                    },
                    {
                        type: "text",
                        placeholder: "CompanyName",
                        className: "xyz"
                    },
                    {
                        type: "text",
                        placeholder: "Company Address",
                        className: "xyz"
                    },
                ]
            }
        }
    }

    render() {
        const { data } = this.state

        var tempfrom = []
        var key = 0
        data.form.forEach(item => {
            tempfrom.push(
                <div key={key++} className="input-inside">
                    <input  type={item.type} placeholder={item.placeholder} className={item.className} />
                </div>
            )
        });
        const backgroundImage = {
            backgroundImage: "url(assets/img/login-bg.jpg)"
        }


        var tempfrom2 = []
        key = 0
        data.form2.forEach(item => {
            tempfrom2.push(
                <div key={key++} className="input-inside">
                    <input  type={item.type} placeholder={item.placeholder} className={item.className} />
                </div>
            )
        });
        return (

            <div className="login-wrapper" style={backgroundImage} >
                <div className="login-inner-wrap">
                    <div className="logo-part">
                        <a href="#"><img src="assets/img/login-logo.svg" alt="" /></a>
                        <h5>REGISTRATION</h5>
                    </div>
                    <div className="tabContainer">
                        <nav>
                            <div className="nav nav-link-wrap" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="tbOne-tab" data-toggle="tab" href="#tbOne" role="tab"
                                    aria-controls="nav-home" aria-selected="true">STEP 1</a>
                                <a className="nav-item nav-link" id="tbTwo-tab" data-toggle="tab" href="#tbTwo" role="tab"
                                    aria-controls="nav-profile" aria-selected="false">STEP 2</a>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="tbOne" role="tabpanel" aria-labelledby="tbOne-tab">
                                <div className="tb-content-wrap">
                                    <form action="#">
                                        <div className="form-content">
                                            {tempfrom}
                                            <div className="submit-btn">
                                                <button className="round-btn submit-btn" type="submit">NEXT</button>
                                            </div>
                                        </div>
                                    </form>s
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tbTwo" role="tabpanel" aria-labelledby="tbTwo-tab">
                                <div className="tb-content-wrap">
                                    <form action="#">
                                        <div className="form-content">
                                            {tempfrom2}
                                            <div className="input-inside">
                                                <label className="checkBox">
                                                    I accept to receive communications by email from ibpbio.
                                                <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="submit-btn">
                                                <button className="round-btn submit-btn" type="submit">NEXT</button>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}   
