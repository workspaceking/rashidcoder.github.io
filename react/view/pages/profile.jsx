class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // headerdata
            headerData: {
                headerMenu: [
                    {
                        link: "#",
                        text: "Accueil"
                    },
                    {
                        link: "#",
                        text: "Suppier"
                    },
                    {
                        link: "#",
                        text: "Buyer"
                    },

                    {
                        link: "#",
                        text: "FAQ"
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
                        link: "#",
                        image: "assets/img/ic-2.png",
                        text: "My supplier infos"
                    },
                    {
                        link: "#",
                        image: "assets/img/ic-3.png",
                        text: "My catalog"
                    },
                    {
                        link: "#",
                        image: "assets/img/ic-4.png",
                        text: "My infos"
                    },
                    {
                        link: "#",
                        image: "assets/img/ic-5.png",
                        text: "Membership"
                    },
                    {
                        link: "#",
                        image: "assets/img/ic-6.png",
                        text: "Invoices"
                    },
                    {
                        link: "#",
                        image: "assets/img/ic-7.png",
                        text: "Disconnect me"
                    }
                ]
            },
            //formData
            data: {
                action: "/users",
                method: "POST",
                form: [
                    {
                        fieldtype: "input",
                        col: "col",
                        label: "First NAME",
                        type: "text",
                        placeholder: "",
                        className: "xyz"
                    },
                    {
                        fieldtype: "input",
                        col: "col",
                        label: "Last Name",
                        type: "text",
                        placeholder: "",
                        className: "xyz"

                    },
                    {
                        fieldtype: "input",
                        col: "col",
                        label: "Phone Number",
                        type: "text",
                        placeholder: "",
                        className: "xyz"
                    },
                    {
                        fieldtype: "input",
                        col: "col",
                        label: "Email",
                        type: "email",
                        placeholder: "",
                        className: "xyz"
                    },
                    {
                        fieldtype: "input",
                        col: "col",
                        label: "Profile Picture",
                        type: "file",
                        placeholder: "",
                        className: "xyz"
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
                            <p className="pagi-nation">My account > my informations</p>
                            <div className="content-heading">
                                <h2>My informations</h2>
                            </div>

                            <div className="main-content">
                                <FormDynamic data={data} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

