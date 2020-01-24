class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
            data: {
                action: "/users",
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
                    }

                ]
            }

        }
    }

    render() {
        const { data } = this.state

        const style = {
            backgroundImage: "url(assets/img/login-bg.jpg)"
        }
        

        return (
            <div className="login-wrapper" style={style} >
                <div className="login-inner-wrap type-2">
                    <div className="logo-part type-2">
                        <a href="#"><img src="assets/img/login-logo.svg" alt="" /></a>
                        <p>Login</p>
                    </div>
                    <div action="#">
                        <div className="form-content">
                        <FormDynamic data={data} />
                            <div className="forget-wrap">
                                <a href="#">Registration</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
