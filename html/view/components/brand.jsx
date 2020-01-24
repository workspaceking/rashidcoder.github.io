class Brand extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            class: this.props.class,
            brandimages: [
                { path: "assets/img/b-1.png" },
                { path: "assets/img/b-2.png" },
                { path: "assets/img/b-3.png" },
                { path: "assets/img/b-1.png" },
            ]
        }
    }

    render() {
        const BrandCard = () => {
            const tempbrand = []
            var key = 0;
            this.state.brandimages.forEach(item => {
                tempbrand.push(
                    <div className="brand-item" key={key++}>
                        <img src={item.path} alt="" />
                    </div>
                )
            });
            return (

                tempbrand
            )
        }

        return (


            <div className="brand-flex-wrap">
                {this.props.children}
                <BrandCard />
            </div>

        )
    }
}
