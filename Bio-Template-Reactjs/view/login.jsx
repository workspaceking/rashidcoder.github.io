class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                form: [
                    {
                        label: "Login",
                        type: "text",
                        placeholder: "FirstName",
                        className: "xyz"
                    },
                    {
                        label: "Password",
                        type: "text",
                        placeholder: "LastName",
                        className: "xyz"
                    },
                ]
            }

        }
    }

    render() {
        const { data } = this.state

        const style = {
            backgroundImage: "url(assets/img/login-bg.jpg)"
        }
        var tempform = []
        var key = 0
        data.form.forEach(item => {
            tempform.push(
                <div key={key++} className="input-inside type-2">
                    <label >{item.label}</label>
                    <input type={item.type} placeholder={item.placeholder} className={item.className} />
                </div>
            )
        });

        return (
            <div className="login-wrapper" style={style} >
                <div className="login-inner-wrap type-2">
                    <div className="logo-part type-2">
                        <a href="#"><img src="assets/img/login-logo.svg" alt="" /></a>
                        <p>Login</p>
                    </div>
                    <form action="#">
                        <div className="form-content">
                            {tempform}
                            {/* <TextBox label={"login"} type={"text"} />
                            <TextBox label={"password"} type={"password"} /> */}
                            <Button title={"Login"} />

                            <div className="forget-wrap">
                                <a href="#">Registration</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}


