class Connect extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const Researchstyle = {
            backgroundImage: "url(assets/img/r2.png)"
        }

        return (
            <div className="container">
                <div className="linked-wrapper" style={Researchstyle} >
                    <div className="section-title">
                        <h2>Connectez-vous au monde du bio</h2>
                    </div>
                    <div className="twin-g-wrap">
                        <img src="assets/img/r1.png" alt="" className="round-picc" />
                        <ConnectCard
                            text={"FOURNISSEURS"}
                            link={"Découvrir"}
                            route={"#"}
                        />
                        <ConnectCard
                            text={"ACHETEURS"}
                            link={"Découvrir"}
                            route={"#"}
                        />
                    </div>
                    {/* {this.props.children}      ye wala linked wraper k andr aa rha tha is liye */}
                </div>
                {this.props.children}

            </div>

        )
    }
}

const ConnectCard = (props) => {
    return (
        <div className="cmmon-wrap">
            <p>{props.text}</p>
            <a href={props.route}>{props.link}</a>
        </div>
    )
}






// splite the whole app in components all the major components are in main component folder and basic components are in flavor folder the whole app is run through the index.jsx which is rendered by index.html