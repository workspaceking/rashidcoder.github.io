class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            data: {
                action: "/profile",
                method: "POST",
                form: [
                    {
                        fieldtype: "input",
                        col: "col",
                        label: "Login",
                        type: "text",
                        placeholder: "",
                        className: "xyz"
                    },
                    {
                        fieldtype: "input",
                        col: "col",
                        label: "Password",
                        type: "password",
                        placeholder: "",
                        className: "xyz"

                    },
                    {
                        fieldtype: "button",
                        col: "col-lg-6",
                        type: "submit",
                        label: "Save",
                        className: "round-btn",
                        route: "/profile"
                    }

                ]
            }

        }
    }

    render() {
        const { data } = this.state

        const style = {
            wrapper: {
                backgroundImage: "url(assets/img/login-bg.jpg)"
            }
        }


        return (
            <div className="login-wrapper" style={style.wrapper} >
                <div className="login-inner-wrap type-2">
                    <div className="logo-part type-2">
                        <a href="#"><img src="assets/img/login-logo.svg" alt="" /></a>
                        <p>Login</p>
                    </div>
                    <div >
                        <div className="form-content">
                            <FormDynamic data={data} />
                            <div className="forget-wrap">
                                <Link className="defaultcolor" to={"/index"} >
                                    <li>Back</li>
                                </Link>
                                
                                <Link className="defaultcolor" to={"/registration"} >
                                    <li>For Registration</li>
                                </Link>

                            </div>

                        </div>



                    </div>
                </div>
            </div>

        )
    }
}
