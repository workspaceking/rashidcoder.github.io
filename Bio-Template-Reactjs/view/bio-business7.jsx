class BioBusiness7 extends React.Component {
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
            // sidebarData

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
            cardData: [
                {
                    image: "assets/img/thing-1.png",
                    link: "#",
                    linktext: "Légumes bio 1",
                    title: "Egg",
                    editlink: "#",
                    deletelink: "#"
                },
                {
                    image: "assets/img/thing-1.png",
                    link: "#",
                    linktext: "Légumes bio 2",
                    title: "Egg",
                    editlink: "#",
                    deletelink: "#"
                },
                {
                    image: "assets/img/thing-1.png",
                    link: "#",
                    linktext: "Légumes bio 3",
                    title: "Egg",
                    editlink: "#",
                    deletelink: "#"
                }
            ]
        }
    }
    render() {
        const { headerData, sidebarData, cardData } = this.state
        return (
            <div>
                <Header headerData={headerData} />
                <main>
                    <div className="main-full">
                        <SideBar data={sidebarData} />


                        <div className="mainContent-wrap style-2">
                            <p className="pagi-nation">My account > my catalog</p>
                            <div className="content-heading f-wrap">
                                <div className="heading-lf">
                                    <h2>My catalog</h2>
                                    <p>2 product(s)</p>
                                </div>
                                <a href="#" className="round-btn style-2">Add a product</a>
                            </div>
                            <div className="main-content full-w">
                                <div className="product-shw-g-wrap">
                                    <EditDeleteCard data={cardData} />
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        )
    }
}
