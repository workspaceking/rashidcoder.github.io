class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dropDownOptions: this.props.data.formDropDownOption
        }
    }
    render() {
        const tempDropDownOption = []
        var key = 0
        this.state.dropDownOptions.forEach(item => {
            tempDropDownOption.push(
                <option key={key++} value={item.value}>{item.text}</option>
            )
        });
        return (
            <div className="research-area">
                <div className="container">
                    <form action="Post">
                        <div className="research-wrap">
                            <div className="forget-wrap research-sec">
                                <a href="#" className="text-uppercase">RECHERCHER UN PRODUIT OU UN FOURNISSEUR</a>
                                <a href="#">Recherche approfondie</a>
                            </div>
                            
                            <div className="research-g-wrap">
                                <div className="research-item">
                                    <div className="input-inside">
                                        <input type="text" placeholder="Que recherchez-vous ? " />
                                    </div>
                                </div>
                                <div className="research-item">
                                    <div className="input-inside">
                                        <input type="text" placeholder="Que recherchez-vous ? " />
                                    </div>
                                </div>
                                <div className="research-item">
                                    <div className="input-inside">
                                        <select name="" id="">
                                            {tempDropDownOption}
                                        </select>
                                    </div>
                                </div>
                                <div className="research-item">
                                    <div className="submit-btn">
                                        <button className="round-btn" type="submit">Rechercher</button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


