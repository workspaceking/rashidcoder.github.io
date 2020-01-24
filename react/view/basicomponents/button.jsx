class Button extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (

            <div className="submit-btn">
                <button className="round-btn submit-btn" type="submit">{this.props.title}</button>
            </div>
        )
    }
}


