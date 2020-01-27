class Slider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
           
        }
    }

    componentDidMount() {
        // .product-slider > div 
        jQuery("."+this.props.className+" > div").slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<button type="button" className="slick-prev"><i className="fal fa-long-arrow-right"></i></button>',
            nextArrow: '<button type="button" className="slick-next"><i className="fal fa-long-arrow-left"></i></button>',
        
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        }); 
    }

    render() {

        return (
            <div {...this.props} >
                {this.props.children}
             </div>
        )
    }
}


// yahan extra div nh aa rhaa extra product main aa rhae hy main dkehta hn 