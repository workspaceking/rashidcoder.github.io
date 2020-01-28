class Registration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            data: {
                form: [
                    { isNewLine: true },
                    {
                        fieldtype: "input",
                        col: "col-lg-6",
                        label: "First Name",
                        type: "text",
                        placeholder: "",
                        className: "xyz"
                    },
                    {
                        fieldtype: "input",
                        col: "col-lg-6",
                        label: "Last Name",
                        type: "text",
                        placeholder: "",
                        className: "xyz"

                    },

                    {
                        fieldtype: "input",
                        col: "col-lg-6",
                        label: "Phone Number",
                        type: "text",
                        placeholder: "",
                        className: "xyz"

                    },

                    {
                        fieldtype: "input",
                        col: "col-lg-6",
                        label: "Email",
                        type: "email",
                        placeholder: "",
                        className: "xyz"

                    },
                    {
                        fieldtype: "button",
                        col: "col",
                        type: "submit",
                        label: "next",
                        className: "round-btn",
                    },

                ]
            },
            data2: {
                action: "/login",
                method: "POST",
                form: [
                    {
                        fieldtype: "input",
                        col: "col-lg-6",
                        label: "Password",
                        type: "password",
                        placeholder: "",
                        className: "xyz"

                    },
                    {
                        fieldtype: "input",
                        col: "col-lg-6",
                        label: "Company Name",
                        type: "text",
                        placeholder: "",
                        className: "xyz"

                    },
                    {
                        fieldtype: "input",
                        col: "col",
                        label: "Company Address",
                        className: "xyz",
                        name: "companyAddress",
                        type: "text",
                        placeholder: "",


                    },
                    {
                        fieldtype: "button",
                        col: "col",
                        type: "submit",
                        label: "next",
                        className: "round-btn ",
                        route:"/login"
                    }
                ]
            }




        }
    }

    render() {
        const { data, data2 } = this.state

        const backgroundImage = {
            backgroundImage: "url(assets/img/login-bg.jpg)"
        }

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

                                    <FormDynamic data={data} />

                                    <div className="forget-wrap">
                                        <Link className="defaultcolor" to={"/login"} >
                                            <li>For Login</li>
                                        </Link>
                                    </div>


                                </div>
                            </div>

                            <div className="tab-pane fade" id="tbTwo" role="tabpanel" aria-labelledby="tbTwo-tab">
                                <div className="tb-content-wrap">
                                    <FormDynamic data={data2} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}











// class Registration extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             data: {
//                 form: [
//                     {
//                         type: "text",
//                         placeholder: "FirstName",
//                         className: "xyz"
//                     },
//                     {
//                         type: "text",
//                         placeholder: "LastName",
//                         className: "xyz"
//                     },
//                     {
//                         type: "text",
//                         placeholder: "Phone Number",
//                         className: "xyz"
//                     },
//                     {
//                         type: "email",
//                         placeholder: "Email",
//                         className: "xyz"
//                     },
//                 ],
//                 form2: [
//                     {
//                         type: "password",
//                         placeholder: "Password",
//                         className: "xyz"
//                     },
//                     {
//                         type: "text",
//                         placeholder: "CompanyName",
//                         className: "xyz"
//                     },
//                     {
//                         type: "text",
//                         placeholder: "Company Address",
//                         className: "xyz"
//                     },
//                 ]
//             }
//         }
//     }

//     render() {
//         const { data } = this.state

//         var tempfrom = []
//         var key = 0
//         data.form.forEach(item => {
//             tempfrom.push(
//                 <div key={key++} className="input-inside">
//                     <input  type={item.type} placeholder={item.placeholder} className={item.className} />
//                 </div>
//             )
//         });
//         const backgroundImage = {
//             backgroundImage: "url(assets/img/login-bg.jpg)"
//         }


//         var tempfrom2 = []
//         key = 0
//         data.form2.forEach(item => {
//             tempfrom2.push(
//                 <div key={key++} className="input-inside">
//                     <input  type={item.type} placeholder={item.placeholder} className={item.className} />
//                 </div>
//             )
//         });
//         return (

//             <div className="login-wrapper" style={backgroundImage} >
//                 <div className="login-inner-wrap">
//                     <div className="logo-part">
//                         <a href="#"><img src="assets/img/login-logo.svg" alt="" /></a>
//                         <h5>REGISTRATION</h5>
//                     </div>
//                     <div className="tabContainer">
//                         <nav>
//                             <div className="nav nav-link-wrap" id="nav-tab" role="tablist">
//                                 <a className="nav-item nav-link active" id="tbOne-tab" data-toggle="tab" href="#tbOne" role="tab"
//                                     aria-controls="nav-home" aria-selected="true">STEP 1</a>
//                                 <a className="nav-item nav-link" id="tbTwo-tab" data-toggle="tab" href="#tbTwo" role="tab"
//                                     aria-controls="nav-profile" aria-selected="false">STEP 2</a>
//                             </div>
//                         </nav>
//                         <div className="tab-content" id="nav-tabContent">
//                             <div className="tab-pane fade show active" id="tbOne" role="tabpanel" aria-labelledby="tbOne-tab">
//                                 <div className="tb-content-wrap">
//                                     <form action="#">
//                                         <div className="form-content">
//                                             {tempfrom}
//                                             <div className="submit-btn">
//                                                 <button className="round-btn submit-btn" type="submit">NEXT</button>
//                                             </div>
//                                         </div>
//                                     </form>s
//                                 </div>
//                             </div>
//                             <div className="tab-pane fade" id="tbTwo" role="tabpanel" aria-labelledby="tbTwo-tab">
//                                 <div className="tb-content-wrap">
//                                     <form action="#">
//                                         <div className="form-content">
//                                             {tempfrom2}
//                                             <div className="input-inside">
//                                                 <label className="checkBox">
//                                                     I accept to receive communications by email from ibpbio.
//                                                 <input type="checkbox" />
//                                                     <span className="checkmark"></span>
//                                                 </label>
//                                             </div>
//                                             <div className="submit-btn">
//                                                 <button className="round-btn submit-btn" type="submit">NEXT</button>
//                                             </div>
//                                         </div>

//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         )
//     }
// }   





// data for single form 
//             data: {
//                 form: [
//                     {
//                         type: "text",
//                         placeholder: "FirstName",
//                         className: "xyz"
//                     },
//                     {
//                         type: "text",
//                         placeholder: "LastName",
//                         className: "xyz"
//                     },
//                     {
//                         type: "text",
//                         placeholder: "Phone Number",
//                         className: "xyz"
//                     },
//                     {
//                         type: "email",
//                         placeholder: "Email",
//                         className: "xyz"
//                     },
//                 ],
//                 form2: [
//                     {
//                         type: "password",
//                         placeholder: "Password",
//                         className: "xyz"
//                     },
//                     {
//                         type: "text",
//                         placeholder: "CompanyName",
//                         className: "xyz"
//                     },
//                     {
//                         type: "text",
//                         placeholder: "Company Address",
//                         className: "xyz"
//                     },
//                 ]
//             }