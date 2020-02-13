// var Router = ReactRouter.Router;
// var Route = ReactRouter.Route;
// var IndexRoute = ReactRouter.IndexRoute;
// var Link = ReactRouter.Link;
// var browserHistory = ReactRouter.browserHistory;


class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // headerData
            headerData: {
                headerMenu: [
                    {
                        link: "#",
                        text: "Accueil"
                    },
                    {
                        link: "#",
                        text: "   Fournisseur"
                    },
                    {
                        link: "#",
                        text: "Acheteur"
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
                        text: "M'identifier / m'inscrire"
                    },
                    {
                        link: "/login",
                        text: "Login"
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
            // heroData
            heroData: {
                backgroundImage: "url(assets/img/hero-bg.jpg)",
                text: "La 1ère plateforme de mise en relation entre fournisseurs, producteurs, acheteurs et revendeurs de produits BIO et écologoqies."
            },
            // formData
            data: {
                action: "/users",
                method: "POST",
                className:"research-wrap col-lg-12",
                form: [
                    {
                        fieldtype: "select",
                        col: "col-lg-6",
                        label: "Research Form ",
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
                    {isNewLine:true},
                    {
                        fieldtype: "input",
                        col: "col-lg-4",
                        label: "",
                        type: "text",
                        placeholder: "Lorem ipsem dolor",
                        className: "xyz"
                    },
                    {
                        fieldtype: "input",
                        col: "col-lg-4",
                        label: "",
                        type: "text",
                        placeholder: "lorem ipsem dolor",
                        className: "xyz"

                    },
                    
                    {
                        fieldtype: "button",
                        col: "col-lg-4",
                        type: "submit",
                        label: "Search",
                        className: "round-btn",
                    }

                ]
            },
            
            // cardData
            productData: [
                {
                    image: "assets/img/r3.png",
                    description: "Proposez ou recherchez des produits",
                    price: "bio parmi 12,000 références."
                },
                {
                    image: "assets/img/r4.png",
                    description: "Dialoguez avec vos ",
                    price: "futurs achetereurs ou fournisseurs"
                },
                {
                    image: "assets/img/r5.png",
                    description: "Commande d’échantillons, demandes",
                    price: "de grilles tarifaires "
                }, {
                    image: "assets/img/r6.png",
                    description: "Proposez ou recherchez des produits",
                    price: "bio parmi 12,000 références."
                },
            ],
            // brandData
            brandimages: [
                { path: "assets/img/b-1.png" },
                { path: "assets/img/b-2.png" },
                { path: "assets/img/b-3.png" },
                { path: "assets/img/b-1.png" },
            ],
            // testimonialData
            testimonialData: [
                {
                    image: "assets/img/c-1.png",
                    name: "Name",
                    companyname: "Compnay Name",
                    description: "I hate them, they are always trying to sell me healthy products while i’m drinking petrol. "
                },
                {
                    image: "assets/img/c-1.png",
                    name: "Name",
                    companyname: "Compnay Name",
                    description: "I hate them, they are always trying to sell me healthy products while i’m drinking petrol. "
                },
                {
                    image: "assets/img/c-1.png",
                    name: "Name",
                    companyname: "Compnay Name",
                    description: "I hate them, they are always trying to sell me healthy products while i’m drinking petrol. "
                }
            ],
            // galleryData
            galleryData: [
                {
                    image: "assets/img/g-1.jpg",
                    text: "Boissons"
                },
                {
                    image: "assets/img/g-2.jpg",
                    text: "Epicerie"
                },
                {
                    image: "assets/img/g-3.jpg",
                    text: "Boulangerie"
                },
                {
                    image: "assets/img/g-1.jpg",
                    text: "Boissons"
                },
                {
                    image: "assets/img/g-2.jpg",
                    text: "Epicerie"
                },
                {
                    image: "assets/img/g-3.jpg",
                    text: "Boulangerie"
                }

            ],
            // ProductInSliderData
            productSliderData: [
                {
                    image: "assets/img/products-1.jpg",
                    link: "#",
                    Linktext: "Légumes bio",
                    location: "Islamabad, Pakistan",
                    productname: "Producteur de bétraves",
                    discription: "Lorem ipsum lorem ipsum  ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum  ipsum ",
                    weight: "MOQ 100 KG",
                    price: "Prix unitaire/lot 1-2K€",
                    certificationdata:
                    {
                        heading: "Certifications",
                        description: "Label rouge Agriculture Biologique certifiée"
                    }

                },
                {
                    image: "assets/img/products-1.jpg",
                    link: "#",
                    Linktext: "Légumes bio",
                    location: "Islamabad, Pakistan",
                    productname: "Producteur de bétraves",
                    discription: "Lorem ipsum lorem ipsum  ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum  ipsum ",
                    weight: "MOQ 100 KG",
                    price: "Prix unitaire/lot 1-2K€",
                    certificationdata:
                    {
                        heading: "Certifications",
                        description: "Label rouge Agriculture Biologique certifiée"
                    }

                },
                {
                    image: "assets/img/products-1.jpg",
                    link: "#",
                    Linktext: "Légumes bio",
                    location: "Islamabad, Pakistan",
                    productname: "Producteur de bétraves",
                    discription: "Lorem ipsum lorem ipsum  ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum  ipsum ",
                    weight: "MOQ 100 KG",
                    price: "Prix unitaire/lot 1-2K€",
                    certificationdata:
                    {
                        heading: "Certifications",
                        description: "Label rouge Agriculture Biologique certifiée"
                    }

                },
                {
                    image: "assets/img/products-1.jpg",
                    link: "#",
                    Linktext: "Légumes bio",
                    location: "Islamabad, Pakistan",
                    productname: "Producteur de bétraves",
                    discription: "Lorem ipsum lorem ipsum  ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum  ipsum ",
                    weight: "MOQ 100 KG",
                    price: "Prix unitaire/lot 1-2K€",
                    certificationdata:
                    {
                        heading: "Certifications",
                        description: "Label rouge Agriculture Biologique certifiée"
                    }

                }

            ],
            // footerData
            footerMenu: [
                {
                    link: "#",
                    text: "Link 1"
                },
                {
                    link: "#",
                    text: "Link 2"
                },
                {
                    link: "#",
                    text: "Link 3"
                }
            ]

        }
    }
    render() {
        const { headerData, heroData, data, brandimages, productData, testimonialData, galleryData, productSliderData, footerMenu } = this.state
        // productdata looping
        var tempdata = []
        var key = 0;
        productData.forEach(item => {
            tempdata.push(
                <div className="element-item" key={key++}>
                    <span><img src={item.image} alt="" /></span>
                    <p>{item.description}<br /> {item.price}</p>
                </div>
            )
        });

        //brand looping
        const tempbrand = []
        key = 0;
        brandimages.forEach(item => {
            tempbrand.push(
                <div className="brand-item" key={key++}>
                    <img src={item.path} alt="" />
                </div>
            )
        });

        //footerMenu looping
        const tempfooter = []
        key = 0;
        footerMenu.forEach(item => {
            tempfooter.push(
                <li key={key++}><a href={item.link}>{item.text}</a></li>
            )
        });

        return (
            <div >
                {/* Header */}

                <Header headerData={headerData} />

                {/* body Area */}

                {/* Hero-tag */}
                <Hero heroData={heroData} />

                {/* Form-area  */}



                <div className="research-area">
                    <div className="container">
                      <FormDynamic data={data} />
                    </div>
                </div>


                {/* connect */}

                <div className="linked-area">
                    <Connect >
                        <Card className={"four-element-wrap"}>
                            {tempdata}
                        </Card>
                    </Connect>
                    <br />
                </div>

                {/* brand-area */}

                <div className="brand-area gray-bg">
                    <div className="container">
                        <div className="section-title">
                            <h2>Brands</h2>
                        </div>
                        <div className="brand-flex-wrap">
                            {tempbrand}
                        </div>
                    </div>
                </div>

                {/* testimonial area card */}

                <div className="client-area gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title client-title">
                                    <h2>Testimonial</h2>
                                </div>
                            </div>
                        </div>
                        <Testimonial data={testimonialData} />
                    </div>
                </div>


                {/* gallery-area   */}
                <div className="gallery-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title">
                                    <h2>Gallery</h2>
                                </div>
                            </div>
                        </div>
                        <Gallery data={galleryData} />
                    </div>
                </div>


                {/* product-area */}

                <div className="product-area gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title">
                                    <h2>Produits a la une</h2>
                                </div>
                            </div>
                        </div>
                        <Slider className="product-slider">
                            <Product data={productSliderData} />
                        </Slider>
                    </div>
                </div>

                {/* Brand-Area   */}

                <div className="brand-area">
                    <div className="container">
                        <div className="section-title">
                            <h2>Brands</h2>
                        </div>
                        <div className="brand-flex-wrap">
                            {tempbrand}
                        </div>
                    </div>
                </div>

                {/* Footer */}

                <footer className="footer-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-6 mb-30">
                                <div className="footer-widget">
                                    <a href="#" className="ft-logo"><img src="assets/img/ft-logo.png" alt="" /></a>
                                    <p>BEGAAK<br></br> IT SOLUTION <br></br>
                                        Islamabad,Pakistan</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-6 mb-30">
                                <div className="footer-widget">
                                    <ul className="ft-menu">
                                        {tempfooter}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6 mb-30">
                                <div className="footer-widget">
                                    <ul className="ft-menu">
                                        {tempfooter}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6 mb-30">
                                <div className="footer-widget">
                                    <ul className="ft-menu">
                                        {tempfooter}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>
            </div >
        )
    }
}






// heading
// login form ,registration from, business-bio  page
// summary:
// login form has two basic components button and textbox but i use only button as you told to loop the field 
// registration form get data from state and render the loop of fields
// business-bio:
// business-bio page is seprate page having its own html page which render business-bio 
// business-bio.jsx has its header which we use in our previous site just pass the array of data to header
// sidebar in business-bio is also a seprate component bcz it will further use in next ui's it gets the array of data and render the side bar throug looping
// EditDeleteCard is seprate component placed in flavor folder which get data from parnet and render the card 






