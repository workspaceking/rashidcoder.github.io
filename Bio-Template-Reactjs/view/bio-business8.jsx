class BioBusiness8 extends React.Component {
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
                form: [
                    {
                        label: "FirstName",
                        type: "text",
                        placeholder: "",
                        className: "xyz"
                    },
                    {
                        label: "LastName",
                        type: "text",
                        placeholder: "",
                        className: "xyz"
                    },
                    {
                        label: "Phone No",
                        type: "text",
                        placeholder: "",
                        className: "xyz"
                    },
                    {
                        label: "Email",
                        type: "email",
                        placeholder: "",
                        className: "xyz"
                    }

                ]
            }

        }
    }

    render() {
        const { headerData, sidebarData, data } = this.state
        var tempform = []
        var key = 0
        data.form.forEach(item => {
            tempform.push(
                <div class="input-inside type-2">
                    <label for="">{item.label}</label>
                    <input type={item.type} placeholder={item.placeholder} class={item.class} />
                </div>
            )
        });


        return (
            <div>
                {/* header */}
                <Header headerData={headerData} />
                <main>
                    <div class="main-full">
                        {/* Sidebar */}
                        <SideBar data={sidebarData} />

                        <div class="mainContent-wrap">
                            <p class="pagi-nation">My account > my informations</p>
                            <div class="content-heading">
                                <h2>My informations</h2>
                            </div>

                            <div class="main-content">
                                <form action="#">
                                    {tempform}
                                    <div class="input-inside type-2">
                                        <label for="">PROFILE PICTURE</label>
                                        <div class="uploaded-photo">
                                            {/* <img src="assets/img/user-2.png" alt="" />
                                            <a href="#">Upload a new picture</a> */}
                                            <input type="file" className="fileupload" />
                                        </div>
                                    </div>
                                    <div class="submit-btn business-pge">
                                        <button class="round-btn" type="submit">SAVE</button>
                                    </div>
                                </form>
                            </div>
                        </div>



                    </div>
                </main>
            </div>
        )
    }
}

