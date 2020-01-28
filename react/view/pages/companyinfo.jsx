class CompanyInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            // headerdata
            headerData: {
                headerMenu: [
                    {
                        link: "/mycatalog",
                        text: "My Catalog"
                    },
                    {
                        link: "/profile",
                        text: "Profile"
                    },
                    {
                        link: "/companyinfo",
                        text: "Company Info"
                    },

                    {
                        link: "/addproduct",
                        text: "Add Product"
                    },

                    {
                        link: "#",
                        text: "Services"
                    },

                    {
                        link: "#",
                        text: "My Account"
                    }
                ],
                dropDownOptionArray: [
                    {
                        value: "fr",
                        text: "FR"
                    },
                    {
                        value: "fr",
                        text: "FR"
                    },
                    {
                        value: "fr",
                        text: "FR"
                    },
                ],
                Logo: {
                    path: "assets/img/site_logo.svg",
                    link: "#"
                }
            },
            // sidebar menu Data
            sidebarData: {
                sidebar: [
                    {
                        link: "#",
                        image: "assets/img/user.png",
                        text: "Hi Michael"
                    },
                    {
                        link: "#",
                        image: "assets/img/r7.png",
                        text: "Messages"
                    },
                    {
                        link: "/companyinfo",
                        image: "assets/img/ic-4.png",
                        text: "Company Info"
                    },
                    {
                        link: "/mycatalog",
                        image: "assets/img/ic-3.png",
                        text: "My Catalog"
                    },
                    {
                        link: "/profile",
                        image: "assets/img/ic-4.png",
                        text: "My infos"
                    },
                    {
                        link: "/addproduct",
                        image: "assets/img/ic-5.png",
                        text: "Add Product"
                    },
                    {
                        link: "/login",
                        image: "assets/img/ic-7.png",
                        text: "Disconnect me"
                    }
                ]
            },

            data: {
                action: "/companyinfo",
                method: "POST",
                form: [
                    {
                        fieldtype: "input",
                        col: "col",
                        
                        label: "COMPANY NAME",
                        type: "text",
                        placeholder: "",
                        className: "xyz"
                    },
                    {
                        fieldtype: "input",
                        col: "col",
                        label: "INCORPORATION NUMBER",
                        type: "text",
                        placeholder: "",
                        className: "xyz"

                    },
                    {
                        fieldtype: "input",
                        col: "col",
                        label: "COMPANY ADDRESS",
                        type: "text",
                        placeholder: "",
                        className: "xyz"
                    },
                    {
                        fieldtype: "input",
                        col: "col",
                        label: "TAX NUMBER",
                        type: "text",
                        placeholder: "",
                        className: "xyz"
                    },
                    {
                        fieldtype: "select",
                        col: "col",
                        label: "COMPANY SIZE",
                        className: "xyz",
                        option: [
                            {
                                value: '1',
                                text: "20-50 employees"
                            },
                            {
                                value: '2',
                                text: "20-50 employees"
                            }
                        ]
                    },
                    {
                        fieldtype: "input",
                        col: "col",
                        label: "Banner",
                        type: "file",
                        placeholder: "",
                        className: "xyz"
                    },
                    {
                        fieldtype: "select",
                        col: "col",
                        label: "CATEGORIE(S)",
                        className: "xyz",
                        option: [
                            {
                                value: '1',
                                text: "Add a category"
                            },
                            {
                                value: '2',
                                text: "Add a category"
                            },
                            {
                                value: '3',
                                text: "Add a category"
                            }
                        ]
                    },
                    {
                        fieldtype: "textarea",
                        col: "col",
                        label: "COMPANY PRESENTATION",
                        className: "xyz",
                        name: "companyPresentation",
                        cols: "30",
                        rows: 10
                    },

                    {
                        fieldtype: "select",
                        col: "col",
                        label: "Certification(s)",
                        className: "xyz",
                        option: [
                            {
                                value: '1',
                                text: "Add certification"
                            },
                            {
                                value: '2',
                                text: "Add certification"
                            },
                            {
                                value: '3',
                                text: "Add certification"
                            }
                        ]
                    },
                    {
                        fieldtype: "button",
                        col: "col",
                        type: "submit",
                        label: "Save",
                        className: "round-btn",
                    }

                ]
            }

        }
    }

    render() {
        const { headerData, sidebarData, data } = this.state

        return (
            <div>
                {/* header */}
                <Header headerData={headerData} />
                <main>
                    <div className="main-full">
                        {/* Sidebar */}
                        <SideBar data={sidebarData} />

                        <div className="mainContent-wrap">

                            <p className="pagi-nation">My account > my supplier informations</p>
                            <div className="content-heading">
                                <h2>My company informations</h2>
                            </div>

                            <div className="main-content">
                                {/* form */}

                                <FormDynamic data={data} />
                                

                            </div>
                        </div>



                    </div>
                </main>
            </div>
        )
    }
}







// <form action="/action_page.php" method="get">
//   <input list="browsers" name="browser">
//   <datalist id="browsers">
//     <option value="Internet Explorer">
//     <option value="Firefox">
//     <option value="Chrome">
//     <option value="Opera">
//     <option value="Safari">
//   </datalist>
//   <input type="submit">
// </form>






