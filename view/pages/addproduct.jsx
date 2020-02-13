class AddProduct extends React.Component {
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
                action: "/users",
                method: "POST",
                form: [
                    {
                        fieldtype: "input",
                        col: "col-lg-6 ",
                        label: "PRODUCT TITLE",
                        type: "text",
                        placeholder: "",
                        className: "xyz"
                    },
                    {isNewLine:true},
                    {
                        fieldtype: "textarea",
                        col: "col-lg-6",
                        label: "PRODUCT DESCRIPTION",
                        className: "xyz",
                        name: "productdescription",
                        placeholder:"Enter Description",
                        cols: "30",
                        rows: 10
                    },
                    {
                        fieldtype: "textarea",
                        col: "col-lg-6",
                        label: "IGREDIENTS",
                        className: "xyz",
                        name: "ingredients",
                        placeholder:"Enter Ingredients",
                        cols: "30",
                        rows: 10
                    },
                    {
                        fieldtype: "textarea",
                        col: "col-lg-6",
                        label: "PRESERVATION",
                        className: "xyz",
                        name: "preservation",
                        placeholder:"Enter Preservation",
                        cols: "30",
                        rows: 10
                    },
                    {
                        fieldtype: "textarea",
                        col: "col-lg-6",
                        label: "PACKAGING",
                        className: "xyz",
                        name: "packaging",
                        placeholder:"Enter packing",
                        cols: "30",
                        rows: 10
                    },
                    {
                        fieldtype: "select",
                        col: "col-lg-6",
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
                        fieldtype: "select",
                        col: "col-lg-6",
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
                        fieldtype: "input",
                        col: "col-lg-6",
                        label: "upload imgae",
                        type: "file",
                        placeholder: "",
                        className: "xyz"
                    },
                    {isNewLine:true},
                    {
                        fieldtype: "button",
                        col: "col-lg-3",
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

                            <p className="pagi-nation">My account > my catalog > add a product</p>
                            <div className="write-lan col-3 offset-lg-9">
                                <a href="#" className="active">French</a>
                                <a href="#">English</a>
                                <a href="#">Spanish</a>
                            </div>
                            <div className="content-heading">
                                <h2>Add a product</h2>
                            </div>

                            <div className="main-content full">
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






